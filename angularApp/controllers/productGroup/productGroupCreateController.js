/*
    product edit page controller
*/
(function (module) {
    // inject the controller params
    ctrl.$inject = ['productGroupDataFactory',
                    'productDataFactory',
                    'productImageDataFactory',
                    'pluginService',];

    // create controller
    module.controller('productGroupCreateController', ctrl);

    // controller body
    function ctrl(productGroupDataFactory,
                  productDataFactory,
                  productImageDataFactory,
                  pluginService) {
        var vm = this;

        vm.imgUrl = gbmono.img_path;
        vm.productGroup = [];

        //product List
        vm.products = [];

        //临时储存添加的产品信息
        vm.addProduct;

        vm.search = {
        };

        //open win
        vm.openWinAdd = function () {
            vm.winAdd.open();
        }

        vm.isProduct = function () {
            if (vm.addProduct){
                return true;
            }
            return false;
        }

        //create product
        vm.submitProduct = function () {
            if (checkProduct()) {
                confirm("该产品组已存在此产品");
                return;
            }
            var htmlProduct = {
                product: {
                    images: [
                        {
                            fileName: ""
                        }
                    ]
                }
            };
            htmlProduct.product.productId = vm.addProduct.productId;
            htmlProduct.product.primaryName = vm.addProduct.primaryName;
            htmlProduct.product.images[0].fileName = vm.addProduct.imgUrl;
            vm.productGroup.push(htmlProduct);
            vm.winAdd.close();
        }

        //delete product
        vm.delete = function (id, obj) {
            for (var i = 0; i < vm.productGroup.length; i++) {
                if (vm.productGroup[i].product.productId == id) {
                    vm.productGroup.splice(i, 1);
                    i--;
                }
            }
        }

        vm.search.type = "1";
        // post search model
        vm.searchModel = {};

        //search product
        vm.searchProduct = function () {
            vm.searchModel = {
                barCode: vm.search.type == 1 ? vm.search.value : "",
                fullProductCode: vm.search.type == 2 ? vm.search.value : ""
            };
            if (vm.searchModel.barCode == "" && vm.searchModel.fullProductCode == "") {
                return;
            }
            getProduct();
        }


        // page init
        init();

        function init() {
            //get productGroup
            //getProductGroup(productGroupId);
        }


        //get create product 
        function getProduct() {
            productDataFactory.search(vm.searchModel)
                            .success(function (data) {
                                vm.addProduct = data[0];
                            });
        }

        //check product is repeat
        function checkProduct() {
            var addProductId = vm.addProduct.productId;
            for (var i = 0; i < vm.productGroup.length; i++) {
                if (vm.productGroup[i].product.productId == addProductId) {
                    return true;
                }
            }
            return false;
        }
    }
})(angular.module('gbmono'));