import {UserService} from '../../api/user/user.service'

export class WelcomeController {
    public user: any
    constructor (
        private userService: UserService
    ) {
        'ngInclude'
    }
}
