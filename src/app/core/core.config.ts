export const coreConfig = ($locationProvider: ng.ILocationProvider,
                           $urlRouterProvider: ng.ui.IUrlRouterProvider,
                           localStorageServiceProvider: any) => {
    'ngInject'
    $locationProvider.hashPrefix('')

    $urlRouterProvider.otherwise('/auth')

    localStorageServiceProvider.setNotify(true, true)
}
