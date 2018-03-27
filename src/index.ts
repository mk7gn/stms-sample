import './polyfills'
import './vendors'

import './index.less'

import * as angular from 'angular'

import { moduleName as appModule } from './app/app.module'

const bootstrapModuleName = angular.module('root', [
    appModule
]).name
