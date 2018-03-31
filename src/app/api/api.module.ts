import * as angular from 'angular'
import {UserService} from './user/user.service'
import {AuthService} from './auth/auth.service'

export const moduleName =
    angular.module('api', [])
        .service('userService', UserService)
        .service('authService', AuthService)
        .name
