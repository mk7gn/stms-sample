export class AuthComponent implements ng.IComponentOptions {
    public templateUrl: string
    public controllerAs: string

    constructor() {
        this.controllerAs = 'vm'
        this.templateUrl = require('./auth.html')
    }
}
