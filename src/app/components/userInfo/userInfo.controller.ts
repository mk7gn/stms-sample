import * as $ from 'jquery'
import {UserService} from '../../api/user/user.service'
import * as _ from 'lodash'

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
            .then(res => {
                this.positions = res
                this.setItemPositions(this.positions)
                debugger
            })
            .catch(err => console.log(err))
    }

    private updateUserPositions (data: any) {
        return this.userService.updatePositions(data)
    }

    private setItemPositions(pos: any) {
        _.forOwn(pos, (value, key) => {
            let elem: any = $(`#${key}`)
            elem.css ({
                position: 'absolute',
                cursor: 'pointer',
                top: value.y + 'px',
                left: value.x + 'px'
            })
        })
    }
}
