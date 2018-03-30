import {UserService} from '../../api/user/user.service'
import {IUserRequestData} from '../../models/user.model'

export class SignInController {
    public user: IUserRequestData
    constructor (
        private $state: ng.ui.IStateService,
        private userService: UserService
    ) {
        'ngInject'
    }
    public signIn () {
        this.userService.signIn(this.user)
            .then(response => this.$state.go('welcome'))
            .catch(err => console.log(err))
    }
}
