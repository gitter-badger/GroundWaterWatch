﻿//------------------------------------------------------------------------------
//----- DefaultModalController -------------------------------------------------
//------------------------------------------------------------------------------

//-------1---------2---------3---------4---------5---------6---------7---------8
//       01234567890123456789012345678901234567890123456789012345678901234567890
//-------+---------+---------+---------+---------+---------+---------+---------+

// copyright:   2016 WiM - USGS

//    authors:  Jeremy K. Newson USGS Wisconsin Internet Mapping
//             
// 
//   purpose:  Example of Modal Controller
//          
//discussion:


//Comments
//05.11.2016 jkn - Created

//Import

module WiMapper.Controllers {
    'use string';
    interface IDefaultModalControllerScope extends ng.IScope {
        vm: IDefaultModalController;
    }
    interface IModal {
        Close():void
    }    
    interface IDefaultModalController extends IModal {
    }
    class DefaultModalController implements IDefaultModalController {
        //Properties
        //-+-+-+-+-+-+-+-+-+-+-+-
        private modalInstance: ng.ui.bootstrap.IModalServiceInstance;


        //Constructor
        //-+-+-+-+-+-+-+-+-+-+-+-
        static $inject = ['$scope','$modalInstance'];
        constructor($scope: IDefaultModalControllerScope, modal:ng.ui.bootstrap.IModalServiceInstance) {
            $scope.vm = this;
            this.modalInstance = modal;
            this.init();  
        }  
        
        //Methods  
        //-+-+-+-+-+-+-+-+-+-+-+-

        public Close(): void {
            this.modalInstance.dismiss('cancel')
        }
        
        //Helper Methods
        //-+-+-+-+-+-+-+-+-+-+-+-
        private init(): void {
            //place anything that needs to be initialized here
        }
      
    }//end  class

    angular.module('WiMapper.Controllers')
        .controller('WiMapper.Controllers.DefaultModalController', DefaultModalController);
}//end module 