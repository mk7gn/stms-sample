export const coreConfig = ($locationProvider: angular.ILocationProvider,
                           $urlRouterProvider: angular.ui.IUrlRouterProvider,
                           localStorageServiceProvider: any) => {
    'ngInject'
    $locationProvider.hashPrefix('')

    $urlRouterProvider.otherwise('/auth')

    localStorageServiceProvider.setNotify(true, true)
}
