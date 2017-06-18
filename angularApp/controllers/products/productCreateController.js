/*
    product create page controller
*/
(function (module) {
    // inject the controller params
    ctrl.$inject = ['$location',
                    'categoryDataFactory',
                    'productDataFactory',
                    'brandDataFactory',
                    'pluginService',
                    'validator'];

    // create controller
    module.controller('productCreateController', ctrl);

    // controller body
    function ctrl($location,
                  categoryDataFactory,
                  productDataFactory,
                  brandDataFactory,
                  pluginService,
                  validator) {
        var vm = this;
        // top level categories
        vm.topCates = [];
        vm.selectedTopCateId = 0;

        // second level categories
        vm.secondCates = [];
        vm.selectedSecondCateId = 0;

        // third level categories
        vm.thirdCates = [];
        
        // brands collection
        vm.brands = [];

        //// country collection
        //vm.countries = [];

        // new product model
        vm.newProduct = {};

        init();

        /* event handlers from view */
        vm.topCateChanged = function () {
            // reload second cates and third cates
            getSecondCates(vm.selectedTopCateId);
        };

        vm.secondCateChanged = function () {
            // reload third cates
            getThirdCates(vm.selectedSecondCateId);
        };

        vm.create = function () {

            $location.path('/products/create/2750/extra');
            return;
            // validation
            if (!validator.isValidProduct(vm.newProduct)) {
                pluginService.notify('数据格式错误', 'error')
                return;
            }

            // create product
            productDataFactory.create(vm.newProduct)
                .success(function (data) {
                    // redirect into extra info page
                    $location.path('/products/create/' + data + '/extra');
                })
                .error(function (error) {
                    pluginService.notify(error, 'error');
                })

        };

        function init() {
            // get top categories and auto load second, third level categories
            getTopCategories();

            // get brands
            getBrands();
        }

        function getTopCategories() {
            categoryDataFactory.getTopCategories()
                .success(function (data) {
                    vm.topCates = data;
                    // default selection 
                    vm.selectedTopCateId = vm.topCates.length > 0 ? vm.topCates[0].categoryId : 0;
                    // auto load second level categories
                    getSecondCates(vm.selectedTopCateId)
                });
        }

        function getSecondCates(topCateId) {
            categoryDataFactory.getByParent(topCateId)
                .success(function (data) {
                    vm.secondCates = data;
                    // default selected id
                    vm.selectedSecondCateId = vm.secondCates.length > 0 ? vm.secondCates[0].categoryId : 0;
                    // auto load third level categories
                    getThirdCates(vm.selectedSecondCateId);
                });
        }

        function getThirdCates(secondCateId) {
            categoryDataFactory.getByParent(secondCateId)
                .success(function (data) {
                    vm.thirdCates = data;
                    // default selected id
                    vm.newProduct.categoryId = vm.thirdCates.length > 0 ? vm.thirdCates[0].categoryId : 0;
                });
        }

        function getBrands() {
            brandDataFactory.getAll()
                .success(function (data) {
                    vm.brands = data;
                    // default selection
                    vm.newProduct.brandId = vm.brands.length > 0 ? vm.brands[0].brandId : 0;
                });
        }

        //function getCountries() {
        //    countryDataFactory.getAll()
        //        .success(function (data) {
        //            vm.countries = data;
        //            // default seleciton
        //            vm.newProduct.countryId = vm.countries.length > 0 ? vm.countries[0].countryId : 0;
        //        });
        //}

        function createProduct(product) {
            productDataFactory.create(product)
                .success(function (data) {
                    pluginService.notify('产品添加成功', 'success');
                })
                .error(function (error) {
                    pluginService.notify(error, 'error')
                });
        }
    }
})(angular.module('gbmono'));


/*
   product extra info create controller
*/
(function (module) {
    // inject the controller params
    ctrl.$inject = ['$routeParams', 'productImageDataFactory', 'pluginService'];

    // create controller
    module.controller('productExtraInfoCreateController', ctrl);

    // controller body
    function ctrl($routeParams, productImageDataFactory, pluginService) {
        var vm = this;
        // retreive product id from routeparams
        var productId = $routeParams.id ? parseInt($routeParams.id) : 0;
        
        // image upload target url
        vm.fileUploadUrl = gbmono.api_site_prefix.product_image_api_url + '/Upload/' + productId;
        // image url root
        vm.imgUrl = gbmono.img_path;

        // product images
        vm.images = [];
        // image type
        vm.selectedImgTypeId = "1";

        // event handlers
        // image type changed
        vm.imgTypeChanged = function () {
            $("#files").data("kendoUpload").options.async.saveUrl = gbmono.api_site_prefix.product_image_api_url + '/Upload/' + productId + "/" + vm.selectedImgTypeId;
        };

        // check file extension. only jpg, png allowed
        vm.onSelect = function (e) {
            $.each(e.files, function (index, value) {
                if (value.extension.toLowerCase() !== '.jpg' && value.extension.toLowerCase() !== '.png') {
                    e.preventDefault();
                    alert("Only .jpg / .png allowed.");
                }
            });
        };

        // on success 
        vm.onSuccess = function () {
            // upload image succeed
            // then display the image in view
            getImages(productId);
        };

        // page init
        init();

        function init() {
            // load saved product images
            getImages(productId);
        }

        function getImages(productId) {
            productImageDataFactory.getByProduct(productId)
                .success(function (data) {
                    vm.images = data;
                });
        }
    }
})(angular.module('gbmono'));

