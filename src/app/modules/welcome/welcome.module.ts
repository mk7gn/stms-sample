import * as angular from 'angular'
import {welcomeRoute} from './welcome.routes'
import {WelcomeComponent} from './welcome.component'

export const moduleName =
    angular.module('welcome', [])
        .component('welcomeComponent', new WelcomeComponent())
        .config(welcomeRoute)
        .name
