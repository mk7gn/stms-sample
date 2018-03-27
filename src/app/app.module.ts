import * as angular from 'angular'

import {moduleName as coreModule} from './core/core.module'
import {moduleName as modulesModule} from './modules/modules.module'
import {moduleName as componentsModule} from './components/components.module'
import {moduleName as apiModule} from './api/api.module'
import {moduleName as servicesModule} from './services/services.module'

export const moduleName =
    angular.module('application', [
        coreModule,
        modulesModule,
        componentsModule,
        apiModule,
        servicesModule
    ]).name;
