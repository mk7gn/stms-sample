import * as angular from 'angular'
import {UserService} from './user/user.service'

export const moduleName =
    angular.module('api', [])
        .service('userService', UserService)
        .name
