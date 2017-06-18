
/*
    product search page controller
*/
(function (module) {
    // inject the controller params
    ctrl.$inject = ['$scope', '$routeParams',
                    'pluginService',
                    'productDataFactory',
                    'tagDataFactory',
                    '$location'];

    // create controller
    module.controller('productGroupSearchController', ctrl);

    // controller body
    function ctrl($scope, $routeParams, pluginService, productDataFactory, tagDataFactory, $location) {
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

        vm.linkCreateProductGroup = function (path) {
            $location.path(path);
        }

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
                            var data = [{
                                id: 19,
                                name : "乳木果是什么",
                                description : "赤道正中的西非、中非地區有一條分佈著天然乳木果樹的“乳木果帶”，這裏生長著優質的乳木果樹。據說乳木果樹要20年才會開花，從開花到第一次結果還要20年。其果實形如杏仁，而只有果實中種子的小小核仁才含有乳木果油。\r\n乳木果油含有與人體皮膚同樣的“硬脂酸”因此親膚性好，還富含防止肌膚乾燥的“油酸”及維他命A、B、C、D、E、F、K等美肌元素。在非洲當地，只有婦女才可以觸摸乳木果，因此從收穫到提取都由女性完成。非洲女性雖然生活在充滿強烈紫外線和極其乾燥的空氣的惡劣環境中，但仍然能保持肌膚水潤，據說都是拜乳木果油的神奇功效所賜。\r\n原汁原味地傳遞乳木果油的神奇力量，這就是“Mama Butter”系列。\r\n",
                                imgUrl: "http://112.74.62.31/images/Product/4902468232213/4902468232213.jpg"
                            }]
                            if (data[0].description.length > 50) {
                                data[0].description = data[0].description.substring(0, 50) + "……";
                            }
                            e.success(data)
                        //    productDataFactory.search(vm.searchModel)
                        //        .success(function (data) {
                        //            console.log(data)
                        //            // kendo grid callback
                        //            e.success(data);
                        //        });
                        }
                    }
                },
                sortable: true,
                height: 580,
                filterable: false,
                columns: [
                    {
                        field: "name", title: "名称",
                        template: "<div class='product-grid-img'" +
                                        "style='background-image: url(#: data.imgUrl#);'></div>" +
                                    "<div class='product-grid-name'><a ng-href='\\#/productGroup/edit/#=id#'>#: name #</a></div>",
                        width:150
                    },
                    { field: "description", title: "描述", width: 300 },
                    {
                        field: "imgUrl", title: "二维码图片",
                        template: "<div class='productGroup-grid-code  '" +
                                       "style='background-image: url(#: data.imgUrl#);'></div>",
                        width: 250
                    },
                    {
                        template: '<a class="btn btn-xs btn-success" ng-click=""><i class="ace-icon fa fa-tags bigger-120"></i></a>&nbsp;&nbsp;' +
                                  '<a class="btn btn-xs btn-info" ng-href="\\#/productGroup/edit/#=id#"><i class="ace-icon fa fa-pencil bigger-120"></i></a>&nbsp;&nbsp;' +
                                  '<button class="btn btn-xs btn-danger" ng-click=""><i class="ace-icon fa fa-trash-o bigger-120"></i></button>',
                        width: 150
                    }
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
