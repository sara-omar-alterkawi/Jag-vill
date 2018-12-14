var app = angular.module('RosApp');

app.factory('getAktivities', ['$http', function ($http) {
    var activity = {
        // All functionality here
        inputactivity: function (adress) {
            var adress = adress;
            //https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=anlaggningar0&q=Benarpsv%C3%A4gen&facet=adress
            var url = 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=anlaggningar0&q=' + adress + '&facet=adress';
            return $http.get(url)
                .then(function (data) {
                    return data.data;
                })
        }
    };
    return activity;
}]);

app.factory('getLibraries', ['$http', function ($http) {
    var library = {
        // All functionality here
        inputlibrary: function (adress) {
            var adress = adress;
            //https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=bibliotek&q=Johan+Ban%C3%A9rs+gata+66&facet=namn
            var url = 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=bibliotek&q=' + adress + '&facet=namn';
            return $http.get(url)
                .then(function (data) {
                    return data.data;
                })
        }
    };
    return library;
}]);

app.factory('getMuseums', ['$http', function ($http) {
    var museum = {
        // All functionality here
        inputmuseum: function (adress) {
            var adress = adress;
            //https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=museer-och-upplevelser&q=Kungsgatan+11
            var url = 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=museer-och-upplevelser&q=' + adress;
            return $http.get(url)
                .then(function (data) {
                    return data.data;
                })
        }
    };
    return museum;
}]);

app.factory('getSchools', ['$http', function ($http) {
    var school = {
        // All functionality here
        inputschool: function (adress) {
            var adress = adress;
            //https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=skolor_ny&q=Svanhalsgatan+27&rows=50&facet=gatuadress
            var url = "https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=skolor_ny&q=" + adress + "&rows=200&facet=gatuadress";
            return $http.get(url)
                .then(function (data) {
                    return data.data;
                })
        }
    };
    return school;
}]);
