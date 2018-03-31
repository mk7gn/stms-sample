export class NavbarComponent implements ng.IComponentOptions {
    public controllerAs: string
    public templateUrl: string

    constructor() {
        this.controllerAs = 'vm'
        this.templateUrl = require('./navbar.html')
    }
}
