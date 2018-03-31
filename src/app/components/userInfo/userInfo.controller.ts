import {UserService} from '../../api/user/user.service'

export class UserInfoController {
    public user: any
    public position: any
    constructor (
        private userService: UserService
    ) {
        'ngInclude'
    }
    $onInit() {
        console.log(this.user)
        console.log(this.position)
    }

    public onDrop (data: any, event: any) {
        let ds = data
        let dfsdffsd = event
        debugger
    }
}
