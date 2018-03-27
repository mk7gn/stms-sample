import './polyfills'
import './vendor'

import './index.scss'

import * as angular from 'angular'

import { moduleName as appModule } from './app/app.module'

const bootstrapModuleName = angular.module('root', [
    appModule
]).name
