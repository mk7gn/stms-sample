import {UserService} from '../../api/user/user.service'
import {IUser, ISignInData} from '../../models/main.model'

export class SignInController {
    public user: ISignInData
    constructor (
        private $state: ng.ui.IStateService,
        private userService: UserService
    ) {
        'ngInject'
    }
    public signIn (): void {
        this.userService.signIn(this.user)
            .then(response => this.$state.go('welcome'))
            .catch(err => console.log(err))
    }
}
