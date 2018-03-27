export const welcomeRoute = ($stateProvider: angular.ui.IStateProvider) => {
    'ngInject'
    $stateProvider
        .state('welcome', {
            url: '/welcome',
            component: 'welcomeComponent'
        })
}
