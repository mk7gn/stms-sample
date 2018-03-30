import {WelcomeController} from './welcome.controller'

export class WelcomeComponent implements ng.IComponentOptions {
    public controller: ng.IControllerConstructor
    public templateUrl: string
    public controllerAs: string

    constructor() {
        this.controller = WelcomeController
        this.controllerAs = 'vm'
        this.templateUrl = require('./welcome.html')
    }
}
