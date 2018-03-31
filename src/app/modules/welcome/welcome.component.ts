import {WelcomeController} from './welcome.controller'

export class WelcomeComponent implements ng.IComponentOptions {
    public controller: ng.IControllerConstructor
    public templateUrl: string
    public controllerAs: string
    public bindings: any

    constructor() {
        this.controller = WelcomeController
        this.controllerAs = 'vm'
        this.templateUrl = require('./welcome.html')
        this.bindings = {
            user: '<',
            positionList: '<'
        }
    }
}
