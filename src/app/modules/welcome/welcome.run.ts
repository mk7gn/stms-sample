import {UserService} from '../../api/user/user.service'

export default function welcomeRun(
    $transitions: any,
    $state: ng.ui.IStateService,
    userService: UserService
): void {
    'ngInject'

    $transitions.onBefore({
        to: 'welcome'
    }, (transition: any) => {
        if (!userService.isAuthenticated()) {
            return transition.router.stateService.target('auth')
        }
    })
}
