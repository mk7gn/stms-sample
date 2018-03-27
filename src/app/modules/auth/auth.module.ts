import * as angular from 'angular'
import {authRoute} from './auth.routes'
import {AuthComponent} from './auth.component'

export const moduleName =
    angular.module('auth', [])
        .component('authComponent', new AuthComponent())
        .config(authRoute)
        .name
