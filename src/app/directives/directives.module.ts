import * as angular from 'angular'
import { Position } from './ngPosition.directive'

export const moduleName =
    angular.module('directives', [])
        .directive('ngPosition', Position.instance())
        .name
