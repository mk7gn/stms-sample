import * as $ from 'jquery'
import * as _ from 'lodash'
import {UserService} from '../../api/user/user.service'
import {IUser, IPosition} from '../../models/main.model'

export class UserInfoController {
    public user: IUser
    private positions: IPosition
    constructor (
        private userService: UserService
    ) {
        'ngInclude'
    }
    $onInit(): void {
        const {username} = this.user
        this.getUserPositions(username)
    }

    public onDrop (data: any, event: any): void {
        const id: (keyof IPosition) = data.target.id
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

    private getUserPositions(name: string): void {
        this.userService.getPositions(name)
            .then(res => {
                this.positions = res
                if (this.positions.username) {this.setItemPositions(this.positions)}
            })
            .catch(err => console.log(err))
    }

    private updateUserPositions (data: any): void {
        this.userService.updatePositions(data)
        this.positions = data
    }

    private setItemPositions(pos: any): void {
        _.forOwn(pos, (value, key) => {
            let elem: any = $(`#${key}`)
            elem.css ({
                position: 'absolute',
                top: value.y + 'px',
                left: value.x + 'px'
            })
        })
    }
}
