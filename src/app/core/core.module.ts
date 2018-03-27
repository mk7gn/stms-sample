import * as angular from 'angular'

import { coreConfig } from './core.config'

export const moduleName =
    angular.module('application.core', [
        'ui.router'
    ])
        .config(coreConfig)
        .name
