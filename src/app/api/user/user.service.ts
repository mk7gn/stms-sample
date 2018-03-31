import {IUserRequestData, IUserResponse} from '../../models/user.model'

export class UserService {
    constructor (
        private $http: ng.IHttpService,
        private localStorageService: ng.local.storage.ILocalStorageService
    ) {
        'ngInject'
    }

    public signIn(user: IUserRequestData): ng.IPromise<any> {
        return this.$http.post(`path/signIn`, user)
            .then(res => console.log(res))
            .catch(err => this.localStorageService.set('user', user))
    }

    public signOut(): ng.IPromise<any> {
        return this.$http.get(`path/signOut`)
            .then(res => console.log(res))
            .catch(err => this.localStorageService.remove('user'))
    }

    public isAuthenticated () {
        const user: boolean = this.localStorageService.get('user')
        return !!user
    }

    public getUser(): ng.IPromise<any> {
        return this.$http.get(`path/user`)
            .then(res => console.log(res))
            .catch(err => this.localStorageService.get('user'))
    }

    public getPositionList(): ng.IPromise<any> {
        return this.$http.get(`path/position-list`)
            .then(res => console.log(res))
            .catch(err => this.localStorageService.get('positionList'))
    }

    public updatePositionList(position: any): any {
        return this.$http.post(`path/position-list`, position)
        .then(res => console.log(res))
        .catch(err => {
            const positionList = this.localStorageService.get('positionList') || []
            this.localStorageService.set('positionList', {
                ...positionList,
                position
            })
        })
    }
}
