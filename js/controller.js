var app = angular.module('RosApp');

app.controller('FirstController', ['$scope', '$firebaseAuth', function ($scope, $firebaseAuth) {
    //console.log($firebaseAuth());
    $firebaseAuth().$onAuthStateChanged(function (user) {
        console.log(user);
        if (user) {
            $scope.user = user;
        } else {
            $scope.user = null;
        }
    });
}]);

app.controller('SignUpController', ['$scope', '$firebaseAuth', '$location', function ($scope, $firebaseAuth, $location) {
    $scope.signUp = function (user) {
        $firebaseAuth().$createUserWithEmailAndPassword(user.email, user.password)
            //console.log($firebaseAuth());
            .then(function (fireUser) {
                if (fireUser) {
                    var theUser = firebase.auth().currentUser;
                    theUser.updateProfile({
                        displayName: user.username
                    }).then(function () {
                        //if Update success
                    }).catch(function () {
                        //if an error happened
                    });
                    firebase.database().ref('users/' + fireUser.uid).set({
                        username: user.username
                    });
                    $location.path('/');
                }
            }).catch(function (error) {
                //console.log(error);
                $scope.error = error.message;
            })
    }
}]);

app.controller('LoginController', ['$scope', '$firebaseAuth', '$location', function ($scope, $firebaseAuth, $location) {
    $scope.login = function (user) {
        $firebaseAuth().$signInWithEmailAndPassword(user.email, user.password)
            //console.log(user);
            .then(function (user) {
                $location.path('/');
            })
            .catch(function (error) {
                //console.log(error);
                $scope.error = error.message;
            });
    }
  
}]);

app.controller('AuthCtrl', ['$scope', '$location', '$firebaseAuth', function ($scope, $location, $firebaseAuth) {
    $firebaseAuth().$onAuthStateChanged(function (user) {
        console.log(user);
        if (user) {
            $scope.user = user;
        } else {
            $scope.user = null;
        }
    });
    $scope.signOut = function () {
        $firebaseAuth().$signOut();
        $location.path('/');
    }
}]);

/**********************************/
app.controller('SchoolController', ['$scope', '$location', function ($scope, $location) {
    $scope.school = function (adress) {
        console.log(adress);
        if (adress === undefined) {
            swal("You must enter Adress or school type! ");
            return false;
        };
        $location.path('/school-results/' + adress);
    }
}]);

app.controller('SchoolResultsController', ['$scope', '$routeParams', 'getSchools', function ($scope, $routeParams, getSchools) {
    var adress = $routeParams.adress;
    getSchools.inputschool(adress)
        .then(function (response) {
            $scope.schools = response.records;
            $scope.schools.length;
        });
}]);

app.controller('LibraryController', ['$scope', '$location', function ($scope, $location) {
    $scope.library = function (adress) {
        console.log(adress);
        if (adress === undefined) {
            swal("You must select Library name! ");
            return false;
        };
        $location.path('/library-results/' + adress);
    }
}]);

app.controller('LibraryResultsController', ['$scope', '$routeParams', 'getLibraries', function ($scope, $routeParams, getLibraries) {
    var adress = $routeParams.adress;
    getLibraries.inputlibrary(adress)
        .then(function (response) {
            $scope.libraries = response.records;
            $scope.libraries.length;
        });
}]);

app.controller('ActivityController', ['$scope', '$location', function ($scope, $location) {
    $scope.activity = function (adress) {
        console.log(adress);
        if (adress === undefined) {
            swal("You must enter Adress or Category! ");
            return false;
        };
        $location.path('/activity-results/' + adress);
    }
}]);

app.controller('ActivityResultsController', ['$scope', '$routeParams', 'getAktivities', function ($scope, $routeParams, getAktivities) {
    var adress = $routeParams.adress;
    getAktivities.inputactivity(adress)
        .then(function (response) {
            $scope.aktivities = response.records;
            $scope.aktivities.length;
        });
}]);

app.controller('MuseumController', ['$scope', '$location', function ($scope, $location) {
    $scope.museum = function (adress) {
        console.log(adress);
        if (adress === undefined) {
            swal("You must enter Adress or museum name! ");
            return false;
        };
        $location.path('/museum-results/' + adress);
    }
}]);

app.controller('MuseumResultsController', ['$scope', '$routeParams', 'getMuseums', function ($scope, $routeParams, getMuseums) {
    var adress = $routeParams.adress;
    getMuseums.inputmuseum(adress)
        .then(function (response) {
            $scope.museums = response.records;
            $scope.museums.length;
        });
}]);
