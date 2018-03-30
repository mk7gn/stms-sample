import {UserService} from '../../api/user/user.service'

export class WelcomeController {
    public user: any
    constructor (
        private $state: ng.ui.IStateService,
        private userService: UserService
    ) {
        'ngInclude'
    }

    $onInit() {
        this.getUser()
    }
    public signOut () {
        this.userService.
        signOut()
            .then(response => this.$state.go('auth'))
            .catch(err => console.log(err))
    }

    private getUser () {
        return this.userService.getUser()
            .then(response => this.user = response)
            .catch(err => console.log(err))
    }
}
