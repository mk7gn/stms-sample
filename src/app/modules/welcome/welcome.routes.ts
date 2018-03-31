import {UserService} from '../../api/user/user.service'
import {IUser} from '../../models/main.model'
export const welcomeRoute = ($stateProvider: ng.ui.IStateProvider) => {
    'ngInject'
    $stateProvider
        .state('welcome', {
            url: '/welcome',
            component: 'welcomeComponent',
            resolve : {
                user: (userService: UserService): ng.IPromise<void | IUser> => userService.getUser()
            }
        })
}
