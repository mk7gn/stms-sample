import {UserService} from '../../api/user/user.service'

export default function welcomeRun(
    $transitions: any,
    $state: any,
    $trace: any,
    userService: UserService
): void {
    'ngInject'

    $trace.enable('TRANSITION') // вмикає логування переходів по стейту в консолі
    $transitions.onBefore({
        to: 'welcome'
    }, (transition: any) => {
        if (!userService.isAuthenticated()) {
            return transition.router.stateService.target('auth')
        }
    })
}
