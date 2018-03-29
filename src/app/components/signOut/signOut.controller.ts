import {UserService} from '../../api/user/user.service'

export class SignOutController {
    constructor (
        private $state: angular.ui.IStateService,
        private userService: UserService
    ) {}
    public signOut () {
        this.userService.SignOut()
            .then(response => this.$state.go('auth'))
            .catch(err => console.log(err))
    }
}
