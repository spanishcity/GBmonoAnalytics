/*
    retailer shop list controller
*/
(function (module) {
    // inject the controller params
    ctrl.$inject = ['$scope',
                    '$routeParams',
                    'pluginService',
                    'retailerDataFactory',
                    'retailerShopDataFactory',
                    'locationDataFactory'];

    // create controller
    module.controller('retailerShopListController', ctrl);

    // controller body
    function ctrl($scope,$routeParams, pluginService, retailerDataFactory, retailerShopDataFactory, locationDataFactory) {
        // page init
        init();

        var vm = this;

        // retailers
        vm.retailers = [];
        // states
        vm.states = [];
        // cities
        vm.cities = [];
        // retail shops
        vm.shops = [];
        // edit shop
        vm.editShop = {};
        // search model
        vm.searchModel = {
            retailerId: -1,
            cityId: -1
        };
        vm.editShopStateId = null;

        // update event handelr

        function init() {
            console.log("init")
            // get retailers
            getRetailers();

            // get states, for stage 1, jp only
            //getStates(1);

            //bindShopsGrid();
        }

        // load cities by state
        vm.stateChanged = function () {
            if (vm.searchModel.stateId && vm.searchModel.stateId != '') {
                getCities(vm.searchModel.stateId);
            }
        };

        // load cities by state for edit
        vm.stateChangedForEdit = function () {
            getCitiesForEdit(vm.editShopStateId);
        };

        // get shops
        vm.search = function () {
            $scope.grid.dataSource.read();
        };

        // event hadlers
        vm.showEdit = function (dataItem) {
            vm.editShop = dataItem;

            vm.editShopStateId = dataItem.city.state.stateId;
            getCitiesForEdit(vm.editShopStateId);

            // show window
            vm.winEdit.open();
        };

        vm.update = function (dataItem) {
            updateShop(vm.editShop);
            // show window
            vm.winEdit.open();
        };

        // update shop
        function updateShop(shop) {
            retailerShopDataFactory.update(shop)
               .success(function (data) {
                   // reload data
                   vm.grid.dataSource.read();
                   // close window
                   vm.winEdit.close();
               })
               .error(function (error) {
                   pluginService.notify(error, 'error');
               });
        }

        // load retailers
        function getRetailers() {
            retailerDataFactory.getAll()
                .success(function (data) {
                    vm.retailers = data;
                    getStates(1);
                });
        }

        // load states
        function getStates(countryId) {
            locationDataFactory.getStates(countryId)
                .success(function (data) {
                    vm.states = data;
                    bindShopsGrid();
                });
        }

        // load cities
        function getCities(stateId) {
            locationDataFactory.getCities(stateId)
                .success(function (data) {
                    vm.cities = data;
                });
        }

        // load cities for edit
        function getCitiesForEdit(stateId) {
            if (stateId) {
                locationDataFactory.getCities(stateId)
                    .success(function(data) {
                        vm.citiesForEdit = data;
                    });
            } else {
                vm.citiesForEdit = [];
            }
        }


        function bindShopsGrid() {
            vm.mainGridOptions = {
                dataSource: {
                    transport: {
                        read: function (e) {
                            retailerShopDataFactory.getbyRetailerCity(vm.searchModel.retailerId, vm.searchModel.cityId)
                                .success(function (data) {
                                    console.log(data)
                                    e.success(data);
                                });
                        }
                    }
                },
                pageable: {
                    numeric: false,
                    previousNext: false,
                    messages: {
                        display: "总计: {2}"
                    }
                },
                sortable: true,
                height: 650,
                filterable: false,
                columns: [
                    {
                        field: "name", title: "名称", width: 220,
                        template: '<i class="ace-icon fa fa-caret-right blue"></i> <a class="grey" ng-href="\\#/retailershops/edit/#=retailShopId#">#= name #</a>',
                    },
                    {
                        field: "displayName", title: "显示名", width: 220,
                    },
                    {
                        field: "address", title: "地址", width: 220
                    },
                    {
                        field: "phone", title: "电话", width: 120
                    },
                    {
                        field: "taxFree", title: "免税", width: 80,
                        template: "<input type='checkbox' disabled='true' ng-model='dataItem.taxFree' />",
                    },
                    {
                        field: "unionpay", title: "银联", width: 80,
                        template: "<input type='checkbox' disabled='true' ng-model='dataItem.unionpay'/>",
                    },
                    {
                        field: "enabled", title: "激活", width: 80,
                        template: "<input type='checkbox' disabled='true' ng-model='dataItem.enabled' />",
                    },
                     {
                         template: '<button class="btn btn-xs btn-info" ng-click="vm.showEdit(dataItem)"><i class="ace-icon fa fa-edit bigger-120"></i></button>&nbsp;&nbsp;' +
                                   '<button class="btn btn-xs btn-danger" ng-click=""><i class="ace-icon fa fa-trash-o bigger-120"></i></button>', width: 150
                     }


                ]
            };
        }

    }
})(angular.module('gbmono'));