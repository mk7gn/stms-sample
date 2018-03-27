export const coreConfig = ($locationProvider: angular.ILocationProvider) => {
    'ngInject'
    $locationProvider.hashPrefix('')
};
