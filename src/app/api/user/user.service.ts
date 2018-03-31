import {IUser, ISignInData, IPosition} from '../../models/main.model'
import {defaultPosition} from '../../mock/positions.mock'

export class UserService {
    constructor (
        private $http: ng.IHttpService,
        private localStorageService: ng.local.storage.ILocalStorageService
    ) {
        'ngInject'
    }

    public signIn(user: ISignInData): ng.IPromise<any> {
        return this.$http.post(`path/signIn`, user)
            .then(res => console.log(res))
            .catch(err => {
                let data: IUser = {
                    username: user.username,
                    image: '/images/userImage.png'
                }
                this.localStorageService.set('user', data)
            })
    }

    public signOut(): ng.IPromise<any> {
        return this.$http.get(`path/signOut`)
            .then(res => console.log(res))
            .catch(err => this.localStorageService.remove('user'))
    }

    public isAuthenticated (): boolean {
        const user: boolean = this.localStorageService.get('user')
        return !!user
    }

    public getUser(): ng.IPromise<void | IUser> {
        return this.$http.get(`path/user`)
            .then(res => console.log(res))
            .catch(err => this.localStorageService.get('user'))
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
        return this.$http.post(`path/position-list`, data)
        .then(res => console.log(res))
        .catch(err => {
            const positionList: any = this.localStorageService.get('positionList') || {}
            positionList[data.username] = data
            this.localStorageService.set('positionList', {...positionList})
        })
    }
}
