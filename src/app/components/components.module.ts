import * as angular from 'angular'
import {SignInComponent} from './signIn/signIn.component'
import {SignOutComponent} from './signOut/signOut.component'

export const moduleName =
    angular.module('components', [])
        .component('signIn', new SignInComponent())
        .component('signOut', new SignOutComponent())
        .name
