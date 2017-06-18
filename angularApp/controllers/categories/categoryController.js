/*
    top category list controller
*/
(function (module) {
    // inject the controller params
    ctrl.$inject = ['pluginService',
                    'categoryDataFactory'];

    // create controller
    module.controller('topCategoryController', ctrl);

    // controller body
    function ctrl(pluginService, categoryDataFactory) {
        var vm = this;
        // edit category
        vm.editCategory = {};

        // page init
        init();

        // event hadlers
        vm.showEdit = function (dataItem) {
            vm.editCategory.categoryId = dataItem.categoryId;
            vm.editCategory.parentId = dataItem.parentId;
            vm.editCategory.categoryCode = dataItem.categoryCode;
            vm.editCategory.name = dataItem.name;
            // show window
            vm.winEdit.open();
        };
        
        // update event handelr
        vm.update = function () {
            updateCategory(vm.editCategory);
        };

        function init() {
            bindCategoryGrid();
        }

        // retreive brand data and binding it into kendo grid
        function bindCategoryGrid() {
            // init kendo ui grid with brand data
            vm.mainGridOptions = {
                dataSource: {
                    transport: {
                        read: function (e) {
                            categoryDataFactory.getTopCategories()
                                .success(function (data) {
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
                    { field: "categoryCode", title: "代码", width: 120 },
                    {
                        field: "name", title: "名称",
                        template: '<i class="ace-icon fa fa-caret-right blue"></i> <a class="grey" ng-href="\\#/categories/#=categoryId#/second">#= name #</a>',
                    },
                    {
                        template: '<button class="btn btn-xs btn-info" ng-click="vm.showEdit(dataItem)"><i class="ace-icon fa fa-edit bigger-120"></i></button>&nbsp;&nbsp;' +
                                  '<button class="btn btn-xs btn-danger" ng-click=""><i class="ace-icon fa fa-trash-o bigger-120"></i></button>', width: 150
                    }
                ]
            };
        }

        // update category
        function updateCategory(category) {
            categoryDataFactory.update(category)
                .success(function (data) {
                    // reload data
                    vm.grid.dataSource.read();
                    // close window
                    vm.winEdit.close();
                })
                .error(function (error) {
                    pluginService.notify(error, 'error')
                });
        }
    }
})(angular.module('gbmono'));

/*
    second category list controller
*/
(function (module) {
    // inject the controller params
    ctrl.$inject = ['$routeParams',
                    'pluginService',
                    'categoryDataFactory'];

    // create controller
    module.controller('secondCategoryController', ctrl);

    // controller body
    function ctrl($routeParams, pluginService, categoryDataFactory) {
        var vm = this;
        // retreive parent id from route
        var parentId = $routeParams.parentId ? parseInt($routeParams.parentId) : 0;
        // parent category
        vm.parentCategory = {};
        // top categories
        vm.topCategories = [];
        // edit category
        vm.editCategory = {};

        // page init
        init();

        // event hadlers
        vm.showEdit = function (dataItem) {
            vm.editCategory.categoryId = dataItem.categoryId;
            vm.editCategory.parentId = dataItem.parentId;
            vm.editCategory.categoryCode = dataItem.categoryCode;
            vm.editCategory.name = dataItem.name;
            // show window
            vm.winEdit.open();
        };

        // update event handelr
        vm.update = function () {
            updateCategory(vm.editCategory);
        };

        function init() {
            // get parent category
            getCategory(parentId);

            // get second categories
            bindCategoryGrid();

            // get top categories in the edit form
            getTopCategories();
        }

        // retreive brand data and binding it into kendo grid
        function bindCategoryGrid() {
            // init kendo ui grid with brand data
            vm.mainGridOptions = {
                dataSource: {
                    transport: {
                        read: function (e) {
                            categoryDataFactory.getByParent(parentId)
                                .success(function (data) {
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
                    { field: "categoryCode", title: "代码", width: 120 },
                    {
                        field: "name", title: "名称",
                        template: '<i class="ace-icon fa fa-caret-right blue"></i> <a class="grey" ng-href="\\#/categories/#=categoryId#/third">#= name #</a>',
                    },
                    {
                        template: '<button class="btn btn-xs btn-info" ng-click="vm.showEdit(dataItem)"><i class="ace-icon fa fa-edit bigger-120"></i></button>&nbsp;&nbsp;' +
                                  '<button class="btn btn-xs btn-danger" ng-click=""><i class="ace-icon fa fa-trash-o bigger-120"></i></button>', width: 150
                    }
                ]
            };
        }

        // get parent category
        function getCategory(parentId) {
            categoryDataFactory.getById(parentId)
                .success(function (data) {
                    vm.parentCategory = data;
                });
        }

        // get top categories
        function getTopCategories() {
            categoryDataFactory.getTopCategories()
                .success(function (data) {
                    vm.topCategories = data;
                });
        }

        // update category
        function updateCategory(category) {
            categoryDataFactory.update(category)
                .success(function (data) {
                    // reload data
                    vm.grid.dataSource.read();
                    // close window
                    vm.winEdit.close();
                })
                .error(function (error) {
                    pluginService.notify(error, 'error')
                });
        }
    }
})(angular.module('gbmono'));

/*
    third category list controller
*/
(function (module) {
    // inject the controller params
    ctrl.$inject = ['$routeParams',
                    'categoryDataFactory'];

    // create controller
    module.controller('thirdCategoryController', ctrl);

    // controller body
    function ctrl($routeParams, categoryDataFactory) {
        var vm = this;
        // retreive parent id from route
        var parentId = $routeParams.parentId ? parseInt($routeParams.parentId) : 0;
        // parent category
        vm.parentCategory = {};
        // top categories
        vm.topCategories = [];
        vm.selectedTopCateId = 0;
        // second
        vm.secondCategories = [];

        // edit category
        vm.editCategory = {};

        // page init
        init();

        // event hadlers
        vm.showEdit = function (dataItem) {
            vm.editCategory.categoryId = dataItem.categoryId;
            vm.editCategory.parentId = dataItem.parentId;
            vm.editCategory.categoryCode = dataItem.categoryCode;
            vm.editCategory.name = dataItem.name;
            // show window
            vm.winEdit.open();
        };

        // top cate selection changed
        vm.topCateChanged = function () {
            getSecondCategories(vm.selectedTopCateId);
        };

        // update event handelr
        vm.update = function () {
            updateCategory(vm.editCategory);
        };

        function init() {
            // get parent category
            getCategory(parentId);

            // get second categories
            bindCategoryGrid();
        }

        // retreive brand data and binding it into kendo grid
        function bindCategoryGrid() {
            // init kendo ui grid with brand data
            vm.mainGridOptions = {
                dataSource: {
                    transport: {
                        read: function (e) {
                            categoryDataFactory.getByParent(parentId)
                                .success(function (data) {
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
                    { field: "categoryCode", title: "代码", width: 120 },
                    {
                        field: "name", title: "名称",
                        template: '<i class="ace-icon fa fa-caret-right blue"></i> <a class="grey" ng-href="\\#/categories/#=categoryId#/products">#= name #</a>',
                    },
                    {
                        template: '<button class="btn btn-xs btn-info" ng-click="vm.showEdit(dataItem)"><i class="ace-icon fa fa-edit bigger-120"></i></button>&nbsp;&nbsp;' +
                                  '<button class="btn btn-xs btn-danger" ng-click=""><i class="ace-icon fa fa-trash-o bigger-120"></i></button>', width: 150
                    }
                ]
            };
        }

        // get parent category
        function getCategory(parentId) {
            categoryDataFactory.getById(parentId)
                .success(function (data) {
                    vm.parentCategory = data;
                    // load second category list by top cate id
                    getSecondCategories(vm.parentCategory.parentId);
                    // load all top categories
                    getTopCategories(vm.parentCategory.parentId);
                });
        }

        // get top categories
        function getTopCategories(selectedId) {
            categoryDataFactory.getTopCategories()
                .success(function (data) {
                    vm.topCategories = data;
                    // select top cate id
                    vm.selectedTopCateId = selectedId
                });
        }
        
        // get second categories
        function getSecondCategories(topCateId) {
            categoryDataFactory.getByParent(topCateId)
                .success(function (data) {
                    vm.secondCategories = data;
                })
        }

        // update category
        function updateCategory(category) {
            categoryDataFactory.update(category)
                .success(function (data) {
                    // reload data
                    vm.grid.dataSource.read();
                    // close window
                    vm.winEdit.close();
                })
                .error(function (error) {
                    pluginService.notify(error, 'error')
                });
        }
    }
})(angular.module('gbmono'));