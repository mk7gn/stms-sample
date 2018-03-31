import {UserInfoController} from './userInfo.controller'

export class UserInfoComponent implements ng.IComponentOptions {
    public controller: ng.IControllerConstructor
    public controllerAs: string
    public templateUrl: string
    public bindings: any

    constructor() {
        this.controller = UserInfoController
        this.controllerAs = 'vm'
        this.templateUrl = require('./userInfo.html')
        this.bindings = {
            user: '<'
        }
    }
}
