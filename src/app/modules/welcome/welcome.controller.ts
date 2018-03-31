import {UserService} from '../../api/user/user.service'

export class WelcomeController {
    public user: any
    public userPositions: any
    private positionList: any
    constructor (
        private userService: UserService
    ) {
        'ngInclude'
    }

    $onInit() {
        this.userPositions = this.getUserPositions(this.user, this.positionList)
        debugger
    }

    private getUserPositions(user: any, list: any): any {
        const {username} = user
        console.log(username)
        console.log(list)
        return {
            x : 123,
            y: 321
        }
    }
}
