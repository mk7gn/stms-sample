import {SignInController} from './signIn.controller'
import './signIn.less'

export class SignInComponent implements ng.IComponentOptions {
    public controller: ng.IControllerConstructor
    public controllerAs: string
    public templateUrl: string

    constructor() {
        this.controller = SignInController
        this.controllerAs = 'vm'
        this.templateUrl = require('./signIn.html')
    }
}
