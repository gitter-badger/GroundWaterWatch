//------------------------------------------------------------------------------
//----- Point ------------------------------------------------------------------
//------------------------------------------------------------------------------
//-------1---------2---------3---------4---------5---------6---------7---------8
//       01234567890123456789012345678901234567890123456789012345678901234567890
//-------+---------+---------+---------+---------+---------+---------+---------+
// copyright:   2014 WiM - USGS
//    authors:  Jeremy K. Newson USGS Wisconsin Internet Mapping
//             
// 
//   purpose:  
//          
//discussion:
//
//Comments
//08.20.2014 jkn - Created
//Imports"
// Interface
var WiMapper;
(function (WiMapper) {
    var Models;
    (function (Models) {
        var StudyArea = (function () {
            //public Scenarios: Array<WiM.Models.IScenario>;
            function StudyArea(region, point) {
                this.RegionID = region;
                this.Pourpoint = point;
            }
            return StudyArea;
        })();
        Models.StudyArea = StudyArea; //end class
    })(Models = WiMapper.Models || (WiMapper.Models = {}));
})(WiMapper || (WiMapper = {})); //end module 
//# sourceMappingURL=StudyArea.js.map