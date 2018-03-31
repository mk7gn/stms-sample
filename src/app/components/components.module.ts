import * as angular from 'angular'
import {SignInComponent} from './signIn/signIn.component'
import {SignOutComponent} from './signOut/signOut.component'
import {NavbarComponent} from './navbar/navbar.component'
import {UserInfoComponent} from './userInfo/userInfo.component'

export const moduleName =
    angular.module('components', [])
        .component('signIn', new SignInComponent())
        .component('signOut', new SignOutComponent())
        .component('navbar', new NavbarComponent())
        .component('userInfo', new UserInfoComponent())
        .name
