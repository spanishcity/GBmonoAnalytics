/*
    product search page controller
*/
(function (module) {
    // inject the controller params
    ctrl.$inject = ['$routeParams',
                    'pluginService',
                    'userDataFactory',
                    'tagDataFactory',
                    '$location'];

    // create controller
    module.controller('accountSearchController', ctrl);

    // controller body
    function ctrl($routeParams, pluginService, userDataFactory, tagDataFactory, $location) {
        var vm = this;
        init();

        vm.addAccount = function (path) {
            $location.path(path);
        }

        function init() {
            // data return is null as the init search model is empty
            // data will be retreived based on the new search criteria when search button is clicked
            bindAccountGrid();

            // init multiple selection with empty data
           // bindTagSelection();
        }

        // retreive product data and binding it into kendo grid
        function bindAccountGrid() {
            // init kendo ui grid with product data
            vm.mainGridOptions = {
                dataSource: {
                    transport: {
                        read: function (e) {
                            userDataFactory.getAll()
                                .success(function (data) {
                                    for (var i = 0; i < data.length; i++) {
                                        if (data[i].roles.length == 0) {
                                            data[i]._role = "";
                                        } else {
                                            data[i]._role = (data[i].roles[0].roleId == "1") ? "GBmono" : "品牌商"
                                        }
                                    }
                                    // kendo grid callback
                                    e.success(data);

                                });
                        }
                    }
                },
                sortable: true,
                height: 580,
                filterable: false,
                columns: [
                    {
                        field: "userName", title: "userName",
                    },
                    { field: "email", title: "E-mail" },
                    { field: "_role", title: "role" },
                    { field: "company", title: "company" },
                    { field: "status", title: "status" },
                    {
                        template: '<a class="btn btn-xs btn-success" ng-click=""><i class="ace-icon fa fa-tags bigger-120"></i></a>&nbsp;&nbsp;' +
                                  '<a class="btn btn-xs btn-info" ng-href="\\#/account/edit/#=id#"><i class="ace-icon fa fa-pencil bigger-120"></i></a>&nbsp;&nbsp;' +
                                  '<button class="btn btn-xs btn-danger" ng-click=""><i class="ace-icon fa fa-trash-o bigger-120"></i></button>',
                        width: 150
                    }
                ]
            };
        }

    }
})(angular.module('gbmono'));


/*
    product search page controller
*/
(function (module) {
    // inject the controller params
    ctrl.$inject = ['pluginService',
                    'userDataFactory',];

    // create controller
    module.controller('accountAddController', ctrl);

    // controller body
    function ctrl(pluginService, userDataFactory) {
        var vm = this;

        vm.account = {}
        vm.role = 0;
        vm.roles = [
            {
                roleId: 1,
                roleName: "GBmono"
            },
            {
                roleId: 2,
                roleName: "品牌商"
            }
        ]

        vm.roleGBmono = false;
        vm.roleCate = false;
        //update new account
        vm.update = function () {

        }

        vm.roleChange = function () {
            if (vm.role == 1) {
                vm.roleGBmono = true;
                vm.roleCate = false;
            }
            if (vm.role == 2) {
                vm.roleGBmono = false;
                vm.roleCate = true;
            }
        }

        vm.update = function () {

        }

        init();

        function init() {
        }
    }
})(angular.module('gbmono'));


(function (module) {
    // inject the controller params
    ctrl.$inject = ['$routeParams',
                    'pluginService',
                    'userDataFactory', ];

    // create controller
    module.controller('accountEditController', ctrl);

    // controller body
    function ctrl($routeParams,pluginService, userDataFactory) {
        var vm = this;

        
        vm.accountId = $routeParams.accountId ? parseInt($routeParams.accountId) : 0;

 

        vm.account = {}
        vm.role = 1;
        vm.roles = [
            {
                roleId: 1,
                roleName: "GBmono"
            },
            {
                roleId: 2,
                roleName: "品牌商"
            }
        ]

        vm.roleGBmono = true;
        vm.roleCate = false;
        //update new account
        vm.update = function () {

        }



        vm.roleChange = function () {
            if (vm.role == 1) {
                vm.roleGBmono = true;
                vm.roleCate = false;
            }
            if (vm.role == 2) {
                vm.roleGBmono = false;
                vm.roleCate = true;
            }
        }

        vm.update = function () {

        }

        init();

        function init() {
            vm.account.email = "123456@163.com";
            vm.account.userName = "12138";
            vm.account.password = "13546";
        }
    }
    
})(angular.module('gbmono'));

