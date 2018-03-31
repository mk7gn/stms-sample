import * as angular from 'angular'
import { coreConfig } from './core.config'

export const moduleName =
    angular.module('core', [
        'ui.router',
        'LocalStorageModule',
        'ngDragDrop'
    ])
        .config(coreConfig)
        .name
