import {IUserRequestData} from '../../models/user.model'

export class UserService {
    constructor (
        private $http: ng.IHttpService,
        private localStorageService: any
    ) {
        'ngInject'
    }

    public SignIn(user: IUserRequestData): ng.IPromise<any> {
        return this.$http.post(`path/signIn`, user)
            .then(res => console.log(res))
            .catch(err => this.localStorageService.set('user', user))
    }

    public SignOut(): ng.IPromise<any> {
        return this.$http.get(`path/signOut`)
            .then(res => console.log(res))
            .catch(err => this.localStorageService.remove('user'))
    }
}
