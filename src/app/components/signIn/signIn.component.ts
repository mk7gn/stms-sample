import {SignInController} from './signIn.controller'

export class SignInComponent implements ng.IComponentOptions {
    public controller: angular.IControllerConstructor
    public controllerAs: string
    public templateUrl: string

    constructor() {
        this.controller = SignInController
        this.controllerAs = 'vm'
        this.templateUrl = require('./signIn.html')
    }
}
