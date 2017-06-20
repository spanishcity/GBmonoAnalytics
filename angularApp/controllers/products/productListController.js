/*
    product browse by category page controller
*/
(function (module) {
    // inject the controller params
    ctrl.$inject = ['$routeParams',
                    'pluginService',
                    'categoryDataFactory',
                    'productDataFactory',
                    'tagDataFactory'];

    // create controller
    module.controller('productBrowseController', ctrl);

    // controller body
    function ctrl($routeParams,
                  pluginService,
                  categoryDataFactory,
                  productDataFactory,
                  tagDataFactory) {
        var vm = this;

        // current category model
        vm.category = {};

        // kendo ui grid binding options
        vm.mainGridOptions = {};

        // kendo multiple selection options
        vm.selectOptions = {};
        // selected product tag ids
        vm.selectedTagIds = [];
        // selected product id
        vm.selectedProductId = 0;
        // retreive category from route
        vm.categoryId = $routeParams.id ? parseInt($routeParams.id) : 0;

        // page init
        init();

        // reload data
        vm.reload = function () {
            // parent grid
            vm.grid.dataSource.read();
        };

        // get tags
        vm.getTags = function (productId) {           
            // set the product id
            vm.selectedProductId = productId;

            // load product tags
            getProductTags(productId);

            // open tags window
            vm.winTag.open();            
        };

        // save tags
        vm.saveTags = function () {
            var model = {
                productId: vm.selectedProductId,
                tagIds: vm.selectedTagIds
            };

            // save tags
            productDataFactory.saveTags(model)
                .success(function () {
                    // close window
                    vm.winTag.close();
                })
                .error(function (error) {       
                    pluginService.notify(error, 'error')
                });
            // console.log(model);
        };

        function init() {
            getCategory(vm.categoryId);

            // bind data
            bindProductGrid();

            // init multiple selection with empty data
            bindTagSelection();
        }

        // retreive product data and binding it into kendo grid
        function bindProductGrid() {
            // init kendo ui grid with location data
            vm.mainGridOptions = {
                dataSource: {
                    transport: {
                        read: function (e) {
                            productDataFactory.getByCategory(vm.categoryId)
                                .success(function (data) {
                                    // kendo grid callback
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
                        display: "产品总计: {2}"
                    }
                },
                sortable: true,
                height: 620,
                scrollable: {
                    virtual: true
                },
                filterable: false,
                columns: [                    
                    {
                        field: "primaryName", title: "名称",
                        template: "<div class='product-grid-img'" +
                                        "style='background-image: url(#:gbmono.img_path + '/' + data.imgUrl#);'></div>" +
                                    "<div class='product-grid-name'><a ng-href='\\#/products/edit/#=productId#'>#: primaryName #</a></div>"
                    },
                    { field: "secondaryName", title: "名称2" },
                    { field: "brandName", title: "品牌 (制造商)" },
                    { field: "productCode", title: "产品代码", width: 80 },
                    { field: "barCode", title: "条形码", width: 150 },
                    {
                        field: "price", title: "价格", width: 100,
                        template: "#= '￥' + kendo.toString(kendo.toString(price), 'n0') #"
                    },
                    {
                        field: "activationDate", title: "上架日期", width: 100,
                        template: "#= kendo.toString(kendo.parseDate(activationDate), 'yyyy-MM-dd') #"
                    },
                    {
                        field: "expiryDate", title: "结束日期", width: 100,
                        template: "#= expiryDate == null ? '' : kendo.toString(kendo.parseDate(expiryDate), 'yyyy-MM-dd') #"
                    },
                    {
                        template: '<a class="btn btn-xs btn-success" ng-click="getTags(dataItem.productId)"><i class="ace-icon fa fa-tags bigger-120"></i></a>&nbsp;&nbsp;' +
                                  '<a class="btn btn-xs btn-info" ng-href="\\#/products/edit/#=productId#"><i class="ace-icon fa fa-pencil bigger-120"></i></a>&nbsp;&nbsp;' +
                                  '<button class="btn btn-xs btn-danger" ng-click=""><i class="ace-icon fa fa-trash-o bigger-120"></i></button>', width: 150
                    }
                ]
            };
        }

        function getCategory(id) {
            categoryDataFactory.getById(id)
                .success(function (data) {
                    vm.category = data; 
                });
        }

        function bindTagSelection() {
            vm.selectOptions = {
                placeholder: "Select tags...",
                dataTextField: "name",
                dataValueField: "tagId",
                valuePrimitive: true,
                autoBind: false,
                dataSource: {
                    transport: {
                        read: function (e) {
                            tagDataFactory.getByType(1) // retreive product tags
                                .success(function (data) {
                                    // kendo selection callback
                                    e.success(data);
                                });
                        }
                    }
                }
            };
        }

        function getProductTags(productId) {
            // reset the selected  tag ids
            vm.selectedTagIds = [];

            // load product tag 
            productDataFactory.getTags(productId)
                .success(function (data) {
                    // retreive the tag id
                    for (var i = 0; i < data.length; i++) {
                        vm.selectedTagIds.push(data[i].tagId);
                    }
                });
        }
    }
})(angular.module('gbmono'));

/*
    product search page controller
*/
(function (module) {
    // inject the controller params
    ctrl.$inject = ['$scope','$routeParams',
                    'pluginService',
                    'productDataFactory',
                    'tagDataFactory'];

    // create controller
    module.controller('productSearchController', ctrl);

    // controller body
    function ctrl($scope,$routeParams, pluginService, productDataFactory, tagDataFactory) {
        var vm = this;

        vm.search = {};
        // default search by barcode
        vm.search.type = "1";
        // post search model
        vm.searchModel = {};

        // kendo multiple selection options
        vm.selectOptions = {};
        // selected product tag ids
        vm.selectedTagIds = [];
        // selected product id
        vm.selectedProductId = 0;

        // page init
        init();

        // reload data
        vm.reload = function () {
            vm.searchModel = {
                barCode: vm.search.type == 1 ? vm.search.value : "",
                fullProductCode: vm.search.type == 2 ? vm.search.value : ""
            };
            console.log($scope.grid);
            console.log($scope.grid.dataSource)
            // parent grid
            $scope.grid.dataSource.read();
        }

        // get tags
        vm.getTags = function (productId) {
            // set the product id
            vm.selectedProductId = productId;

            // load product tags
            getProductTags(productId);

            // open tags window
            vm.winTag.open();
        };

        // save tags
        vm.saveTags = function () {
            var model = {
                productId: vm.selectedProductId,
                tagIds: vm.selectedTagIds
            };

            // save tags
            productDataFactory.saveTags(model)
                .success(function () {
                    // close window
                    vm.winTag.close();
                })
                .error(function (error) {
                    pluginService.notify(error, 'error')
                });
        };

        function init() {
            // data return is null as the init search model is empty
            // data will be retreived based on the new search criteria when search button is clicked
            bindProductGrid();

            // init multiple selection with empty data
            bindTagSelection();
        }

        // retreive product data and binding it into kendo grid
        function bindProductGrid() {
            // init kendo ui grid with product data
            vm.mainGridOptions = {
                dataSource: {
                    transport: {
                        read: function (e) {
                            productDataFactory.search(vm.searchModel)
                                .success(function (data) {
                                    console.log(data)
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
                        field: "primaryName", title: "名称", width: 150,
                        template:"<div class='product-grid-name'><a ng-href='\\#/products/edit/#=productId#'>#: primaryName #</a></div>"
                    },
                    { field: "brand", title: "品牌 (制造商)", width: 100, template: "<div>#: data.brand.displayName #</div>" },
                    { field: "category", title: "品类", width: 80, template: "<div>#: data.category.name #</div>" },
                    { field: "barCode", title: "条形码", width: 150 },
                    {
                        field: "price", title: "价格", width: 100,
                        template: "#= '￥' + kendo.toString(kendo.toString(price), 'n0') #"
                    },
                    //{
                    //    field: "createdDate", title: "创建日期", width: 100,
                    //    template: "#= kendo.toString(kendo.parseDate(createdDateTime), 'yyyy-MM-dd') #"
                    //},
                    //{
                    //    field: "activationDate", title: "上架日期", width: 100,
                    //    template: "#= kendo.toString(kendo.parseDate(activationDate), 'yyyy-MM-dd') #"
                    //},
                    //{
                    //    field: "expiryDate", title: "结束日期", width: 100,
                    //    template: "#= expiryDate == null ? '' : kendo.toString(kendo.parseDate(expiryDate), 'yyyy-MM-dd') #"
                    //},
                    //{
                    //    template: '<a class="btn btn-xs btn-success" ng-click="getTags(dataItem.productId)"><i class="ace-icon fa fa-tags bigger-120"></i></a>&nbsp;&nbsp;' +
                    //              '<a class="btn btn-xs btn-info" ng-href="\\#/products/edit/#=productId#"><i class="ace-icon fa fa-pencil bigger-120"></i></a>&nbsp;&nbsp;' +
                    //              '<button class="btn btn-xs btn-danger" ng-click=""><i class="ace-icon fa fa-trash-o bigger-120"></i></button>',
                    //    width: 150
                    //}
                ]
            };
        }

        function bindTagSelection() {
            vm.selectOptions = {
                placeholder: "Select tags...",
                dataTextField: "name",
                dataValueField: "tagId",
                valuePrimitive: true,
                autoBind: false,
                dataSource: {
                    transport: {
                        read: function (e) {
                            tagDataFactory.getAll()
                                .success(function (data) {
                                    // kendo selection callback
                                    e.success(data);
                                });
                        }
                    }
                }
            };
        }

        function getProductTags(productId) {
            // reset the selected  tag ids
            vm.selectedTagIds = [];

            // load product tag 
            productDataFactory.getTags(productId)
                .success(function (data) {
                    // retreive the tag id
                    for (var i = 0; i < data.length; i++) {
                        vm.selectedTagIds.push(data[i].tagId);
                    }
                });
        }
    }
})(angular.module('gbmono'));
