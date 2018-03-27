export const authRoute = ($stateProvider: angular.ui.IStateProvider) => {
    'ngInject'
    $stateProvider
        .state('auth', {
            url: '/auth',
            component: 'authComponent'
        })
}
