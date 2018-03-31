import {UserService} from '../../api/user/user.service'

export class SignOutController {
    constructor (
        private $state: ng.ui.IStateService,
        private userService: UserService
    ) {}
    public signOut (): void {
        this.userService.
        signOut()
            .then(response => this.$state.go('auth'))
            .catch(err => console.log(err))
    }
}
