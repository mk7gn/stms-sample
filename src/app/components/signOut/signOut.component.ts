import './signOut.less'
import {SignOutController} from './signOut.controller'

export class SignOutComponent implements ng.IComponentOptions {
    public controller: ng.IControllerConstructor
    public controllerAs: string
    public templateUrl: string

    constructor() {
        this.controller = SignOutController
        this.controllerAs = 'vm'
        this.templateUrl = require('./signOut.html')
    }
}
