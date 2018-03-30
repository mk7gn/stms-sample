export const welcomeRoute = ($stateProvider: ng.ui.IStateProvider) => {
    'ngInject'
    $stateProvider
        .state('welcome', {
            url: '/welcome',
            component: 'welcomeComponent'
        })
}
