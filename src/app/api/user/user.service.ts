import {IUser, IPosition} from '../../models/main.model'
import {defaultPosition} from '../../mock/positions.mock'

export class UserService {
    constructor (
        private $http: ng.IHttpService,
        private localStorageService: ng.local.storage.ILocalStorageService
    ) {
        'ngInject'
    }
    public getUser(): ng.IPromise<void | IUser> {
        return this.$http.get(`path/user`)
            .then(res => console.log(res))
            .catch(err => {
               const username: string = this.localStorageService.get('user')
               return {
                   username,
                   image: 'src/images/user.png'
               }
            })
    }

    public getPositions(username: string): ng.IPromise<IPosition> {
        return this.$http.get(`path/positions`)
            .then(res => console.log(res))
            .catch(err => {
                const list: any = this.localStorageService.get('positionList')
                return list && list[username] ? list[username] : defaultPosition
            })
    }

    public updatePositions(data: IPosition): ng.IPromise<any> {
        return this.$http.post(`path/positions`, data)
        .then(res => console.log(res))
        .catch(err => {
            const positionList: any = this.localStorageService.get('positionList') || {}
            positionList[data.username] = data
            this.localStorageService.set('positionList', {...positionList})
        })
    }
}
