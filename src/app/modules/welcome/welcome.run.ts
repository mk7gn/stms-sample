export default function welcomeRun(
    $transitions: any,
    $state: any,
    $trace: any
): void {
    'ngInject'

    $trace.enable('TRANSITION') // вмикає логування переходів по стейту в консолі
    $transitions.onBefore({
        to: 'welcome'
    }, () => {
        if (1 < 0) {
            return $state.target('auth', {})
        }
        return true
    })
}
