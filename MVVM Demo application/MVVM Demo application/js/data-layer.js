/// <reference path="//Microsoft.WinJS.1.0/js/base.js" />
(function () {

    var bench = {
        //Id: "",
        Name: "",
        UsersCount: 3,
        Latitude: 4.0,
        Longitude: 5.0,
        StartTime: "",
        EndTime: ""
    }

    var benchArray = [
        {
            Name: "",
            UsersCount: 3,
            Latitude: 4.0,
            Longitude: 5.0,
            StartTime: "",
            EndTime: ""
        }
    ]

    function getAllBenches() {
    }

    WinJS.Namespace.define("Data", {
        getAllBenches: getAllBenches
    })
})();