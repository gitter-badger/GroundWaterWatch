﻿//http://lgorithms.blogspot.com/2013/07/angularui-router-as-infrastructure-of.html
//http://www.funnyant.com/angularjs-ui-router/

declare var configuration: any;
module WiMapper {
    //'use strict';

    class config {
        static $inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$logProvider'];
        constructor(private $stateProvider: ng.ui.IStateProvider, private $urlRouterProvider: ng.ui.IUrlRouterProvider, private $locationProvider: ng.ILocationProvider, private $logProvider: ng.ILogProvider) {
            this.$stateProvider
                .state("main", {
                url: '/?rcode&workspaceID',
                template:'<ui-view/>',
                views: {
                    'map': {
                        templateUrl: "Views/mapview.html",
                        controller: "WiMapper.Controllers.MapController"
                    },
                    'sidebar': {
                        templateUrl: "Views/sidebarview.html",
                        controller: "WiMapper.Controllers.SidebarController"

                    },
                    'navbar': {
                        templateUrl: "Views/navigationview.html",
                        controller: "WiMapper.Controllers.NavbarController"
                    }
                }
            })//end main state 
          
            this.$urlRouterProvider.otherwise('/');     
            
            this.$locationProvider.html5Mode(true);   
            
            //turns of angular-leaflet console spam
            this.$logProvider.debugEnabled(false);                        
        }//end constructor
    }//end class

    angular.module('WiMapper',[
        'ui.router', 'ui.bootstrap','ui.checkbox',
        'mobile-angular-ui',
        'angulartics', 'angulartics.google.analytics',
        'toaster', 'ngAnimate', 'ngFileUpload',
        'leaflet-directive',
        'WiMapper.Services',
        'WiMapper.Controllers',
        'WiM.Services', 'WiM.Event', 'wim_angular'
        ])
        .config(config);
}//end module 