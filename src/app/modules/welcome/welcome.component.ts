import './welcome.less'

export class WelcomeComponent implements ng.IComponentOptions {
    public templateUrl: string
    public controllerAs: string
    public bindings: any

    constructor() {
        this.controllerAs = 'vm'
        this.templateUrl = require('./welcome.html')
        this.bindings = {
            user: '<'
        }
    }
}
