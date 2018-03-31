import {UserService} from '../../api/user/user.service'

export class UserInfoController {
    public user: any
    public positions: any
    constructor (
        private userService: UserService
    ) {
        'ngInclude'
        this.positions = []
    }
    $onInit() {
        console.log(this.user)
    }

    public onDrop (data: any, event: any) {
        let ds = data
        let dfsdffsd = event
        debugger
    }
}
