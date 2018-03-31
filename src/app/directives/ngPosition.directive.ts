export class Position implements ng.IDirective {
    /* tslint:disable:member-ordering */
    static instance(): ng.IDirectiveFactory {
        let directive: ng.IDirectiveFactory = (
            $document: ng.IDocumentService,
            $window: ng.IWindowService
        ) => new Position($document, $window)
        directive.$inject = ['$document', '$window']
        return directive
    }

    constructor(private $document: ng.IDocumentService, private $window: ng.IWindowService) {
        'ngInject'
    }

    /* tslint:disable:no-string-literal */
    public restrict: string = 'A'
    public scope: any = {
        coordinates: '<',
    }
    public link: ng.IDirectiveLinkFn = (scope: any, elem: ng.IAugmentedJQuery, attrs: any): void => {
        const self: Position = this
        debugger

        let startX: number = 0
        let startY: number = 0

        // set initial position
        let x: number = scope.startX
        let y: number = scope.startY

        elem.css({
            position: 'absolute',
            cursor: 'pointer',
            top: y + 'px',
            left: x + 'px'
        })
    }
}
