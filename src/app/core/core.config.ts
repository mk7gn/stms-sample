export const coreConfig = ($locationProvider: angular.ILocationProvider,
                           $urlRouterProvider: angular.ui.IUrlRouterProvider) => {
    'ngInject'
    $locationProvider.hashPrefix('')

    $urlRouterProvider.otherwise('/auth')
}
