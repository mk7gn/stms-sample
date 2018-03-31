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

    public getPositions(username: string): ng.IPromise<any> {
        return this.$http.get(`path/positions`)
            .then(res => console.log(res))
            .catch(err => {
                const defaultPositions = {
                    image: {
                        x: 0,
                        y: 0
                    },
                    name: {
                        x: 0,
                        y: 0
                    }
                }
                const list: any = this.localStorageService.get('positionList')
                return list && list[username] ? list[username] : defaultPositions
            })
    }

    public updatePositions(data: any): any {
        return this.$http.post(`path/position-list`, data)
        .then(res => console.log(res))
        .catch(err => {
            debugger
            const positionList: any = this.localStorageService.get('positionList') || {}
            positionList[data.username] = data
            this.localStorageService.set('positionList', {...positionList})
        })
    }
}
