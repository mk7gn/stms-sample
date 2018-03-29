import {SignOutController} from './signOut.controller'

export class SignOutComponent implements ng.IComponentOptions {
    public controller: angular.IControllerConstructor
    public controllerAs: string
    public templateUrl: string

    constructor() {
        this.controller = SignOutController
        this.controllerAs = 'vm'
        this.templateUrl = require('./signOut.html')
    }
}
