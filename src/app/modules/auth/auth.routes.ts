export const authRoute = ($stateProvider: ng.ui.IStateProvider) => {
    'ngInject'
    $stateProvider
        .state('auth', {
            url: '/auth',
            component: 'authComponent'
        })
}
