import {UserService} from '../../api/user/user.service'

export class UserInfoController {
    public user: any
    private positions: any
    constructor (
        private userService: UserService
    ) {
        'ngInclude'
    }
    $onInit() {
        const {username} = this.user
        this.getUserPositions(username)
    }

    public onDrop (data: any, event: any) {
        const {id} = data.target
        const {top, left} = event.position
        const {username} = this.user
        this.positions[id] = {
            x: left,
            y: top
        }
        this.updateUserPositions({
            username,
            ...this.positions
        })
    }

    private getUserPositions(name: string) {
        return this.userService.getPositions(name)
            .then(res => this.positions = res)
            .catch(err => console.log(err))
    }

    private updateUserPositions (data: any) {
        return this.userService.updatePositions(data)
    }
}
