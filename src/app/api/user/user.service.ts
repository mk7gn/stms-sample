import {IUserRequestData} from '../../models/user.model'

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

    public getUser() {
        return this.$http.get(`path/user`)
            .then(res => console.log(res))
            .catch(err => this.localStorageService.get('user'))
    }
}
