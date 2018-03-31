import {AuthService} from '../../api/auth/auth.service'

export default function welcomeRun(
    $transitions: any,
    $state: ng.ui.IStateService,
    authService: AuthService
): void {
    'ngInject'

    $transitions.onBefore({
        to: 'welcome'
    }, (transition: any) => {
        if (!authService.isAuthenticated()) {
            return transition.router.stateService.target('auth')
        }
    })
}
