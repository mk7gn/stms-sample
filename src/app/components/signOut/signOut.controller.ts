import {AuthService} from '../../api/auth/auth.service'

export class SignOutController {
    constructor (
        private $state: ng.ui.IStateService,
        private authService: AuthService
    ) {}
    public signOut (): void {
        this.authService.
        signOut()
            .then(response => this.$state.go('auth'))
            .catch(err => console.log(err))
    }
}
