import * as angular from 'angular'

import {moduleName as AuthModule} from './auth/auth.module'
import {moduleName as WelcomeModule} from './welcome/welcome.module'

export const moduleName =
    angular.module('modules', [
        AuthModule,
        WelcomeModule
    ]).name
