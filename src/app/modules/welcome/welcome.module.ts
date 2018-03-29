import * as angular from 'angular'
import {welcomeRoute} from './welcome.routes'
import {WelcomeComponent} from './welcome.component'
import welcomeRun from './welcome.run'

export const moduleName =
    angular.module('welcome', [])
        .run(welcomeRun)
        .config(welcomeRoute)
        .component('welcomeComponent', new WelcomeComponent())
        .name
