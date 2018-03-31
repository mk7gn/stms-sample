import {UserService} from '../../api/user/user.service'

export class WelcomeController {
    public user: any
    public positions: any
    constructor (
        private $state: ng.ui.IStateService,
        private userService: UserService
    ) {
        'ngInclude'
        this.positions = []
    }


    $onInit() {
        this.getUser()
    }

    public onDrop (data: any, event: any) {
        let ds = data
        let dfsdffsd = event
        console.log(this.positions)
        debugger
    }

    private getUser () {
        return this.userService.getUser()
            .then(response => this.user = response)
            .catch(err => console.log(err))
    }
}
