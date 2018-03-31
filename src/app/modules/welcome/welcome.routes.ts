import {UserService} from '../../api/user/user.service'
import {IUserResponse} from '../../models/user.model'
export const welcomeRoute = ($stateProvider: ng.ui.IStateProvider) => {
    'ngInject'
    $stateProvider
        .state('welcome', {
            url: '/welcome',
            component: 'welcomeComponent',
            resolve : {
                user: (userService: UserService): ng.IPromise<IUserResponse> => userService.getUser(),
                positionList: (userService: UserService): any => userService.getPositionList()
            }
        })
}
