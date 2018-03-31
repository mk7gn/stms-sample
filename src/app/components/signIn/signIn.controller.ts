import {ISignInData} from '../../models/main.model'
import {AuthService} from '../../api/auth/auth.service'

export class SignInController {
    public user: ISignInData
    constructor (
        private $state: ng.ui.IStateService,
        private authService: AuthService
    ) {
        'ngInject'
    }
    public signIn (): void {
        this.authService.signIn(this.user)
            .then(response => this.$state.go('welcome'))
            .catch(err => console.log(err))
    }
}
