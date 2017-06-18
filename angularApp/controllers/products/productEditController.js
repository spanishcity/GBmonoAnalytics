/*
    product edit page controller
*/
(function (module) {
    // inject the controller params
    ctrl.$inject = ['$filter',
                    '$routeParams',
                    'categoryDataFactory',
                    'productDataFactory',
                    'productImageDataFactory',
                    'productTagDataFactory',
                    'brandDataFactory',
                    'brandCollectionDataFactory',
                    'pluginService',
                    'validator',
                    'utilService'];

    // create controller
    module.controller('productEditController', ctrl);

    // controller body
    function ctrl($filter,
                  $routeParams,
                  categoryDataFactory,
                  productDataFactory,
                  productImageDataFactory,
                  productTagDataFactory,
                  brandDataFactory,
                  brandCollectionDataFactory,
                  pluginService,
                  validator,
                  utilService) {
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

        // country collection
        vm.countries = [];

        // edit product model
        vm.editProduct = {};

        // brandcollection collection
        vm.brandcollections = [];

        // image url root
        vm.imgUrl = gbmono.img_path;
        // product images
        vm.images = [];
        // image type
        vm.selectedImgTypeId = "1";
        // editing image
        vm.editImage = {};
        // img types
        vm.imgTypes = [{ name: '商品图片', value: 1 }, { name: '介绍图片', value: 2 }, { name: "使用说明图片", value: 3 }, { name: "追加文案图片", value: 4 }];

        // tags
        vm.tags = [];

        // retreive product id from routeparams
        var productId = $routeParams.id ? parseInt($routeParams.id) : 0;

        init();

        /* event handlers from view */
        // top cate changed
        vm.topCateChanged = function () {
            // reload second cates and third cates
            getSecondCates(vm.selectedTopCateId);
        };

        // second cate changed
        vm.secondCateChanged = function () {
            // reload third cates
            getThirdCates(vm.selectedSecondCateId);
        };

        // update the saveUrl when img type is changed
        vm.imgTypeChanged = function () {
            $("#files").data("kendoUpload").options.async.saveUrl = gbmono.api_site_prefix.product_image_api_url + '/Upload/' + productId + "/" + vm.selectedImgTypeId;
        };

        // file upload on select, check file extension. only jpg, png allowed
        vm.onSelect = function (e) {
            $.each(e.files, function (index, value) {
                if (value.extension.toLowerCase() !== '.jpg' && value.extension.toLowerCase() !== '.png') {
                    e.preventDefault();
                    alert("Only .jpg / .png allowed.");
                }
            });
        };

        // attach authorization token before uploading file
        vm.onUpload = function (e) {
            // get httl request obj
            var xhr = e.XMLHttpRequest;

            // get token from local storage
            var token = utilService.getToken();

            // attach token 
            if (xhr) {
                xhr.addEventListener("readystatechange", function (e) {
                    if (xhr.readyState == 1 /* OPENED */) {
                        xhr.setRequestHeader("Authorization", "Bearer " + token);
                    }
                });
            }
        };

        // file upload on success 
        vm.onSuccess = function () {
            // upload image succeed
            // then display the image in view
            getImages(vm.editProduct.productId);
        };

        // update product 
        vm.update = function () {
            update(vm.editProduct);
        };

        // open edit product image window
        vm.openEditImgWin = function (image) {
            vm.editImage = image;
            // open kendo window
            vm.winEdit.open();

        };

        // update product img info
        vm.updateImg = function () {
            updateImageInfo(vm.editImage);
        };

        // remove product image
        vm.delete = function (id) {
            removeImage(id);
        };

        // helper: convert img type id into text
        vm.showTypeName = function (typeId) {
            if (typeId === 1) {
                return '商品图片';
            }
            else if (typeId === 2) {
                return '介绍图片';
            }
            else if (typeId === 3) {
                return '使用说明图片';
            }
            else {
                return '追加文案图片';
            }
        }

        // changed brand
        vm.brandChanged = function() {
            getBrandCollections(vm.editProduct.brandId);
        }

        // page init
        init();

        function init() {
            // image upload target url
            vm.fileUploadUrl = gbmono.api_site_prefix.product_image_api_url + '/Upload/' + productId + "/" + vm.selectedImgTypeId;

            // get product
            getProduct(productId);

            // get product images
            getImages(productId);


            // get product images
            //getTags(productId);
        }

        function getProduct(id) {
            productDataFactory.getById(id)
                .success(function (data) {
                    console.log(data)
                    vm.editProduct = data;
                    // format the activation date json into date format
                    vm.editProduct.activationDate = $filter('date')(vm.editProduct.activationDate, 'yyyy-MM-dd')

                    // select category by product category
                    // get top categories and auto load second, third level categories
                    getTopCategories();

                    // get brands
                    getBrands();

                    // generate barcode image
                    generateBarcodeImage(vm.editProduct.barCode);

                    // get brand collections
                    getBrandCollections(data.brandId);
                });
        }

        function getBrandCollections(id) {
            brandCollectionDataFactory.getByBrandId(id)
                .success(function (data) {
                    vm.brandcollections = data;
                });;
        }

        function getImages(id) {
            productImageDataFactory.getByProduct(id)
                .success(function (data) {
                    console.log(data)
                    vm.images = data;
                });
        }

        function getTags(id) {
            productTagDataFactory.getByProductId(id)
              .success(function (data) {
                  vm.tags = data;
              });
        }

        function getTopCategories() {
            categoryDataFactory.getTopCategories()
                .success(function (data) {
                    vm.topCates = data;
                    // default selection 
                    vm.selectedTopCateId = vm.editProduct.category.parentCategory.parentId;
                    // auto load second level categories
                    getSecondCates(vm.selectedTopCateId)
                });
        }

        function getSecondCates(topCateId) {
            categoryDataFactory.getByParent(topCateId)
                .success(function (data) {
                    vm.secondCates = data;
                    // default selected id
                    vm.selectedSecondCateId = vm.editProduct.category.parentId;
                    // auto load third level categories
                    getThirdCates(vm.selectedSecondCateId);
                });
        }

        function getThirdCates(secondCateId) {
            categoryDataFactory.getByParent(secondCateId)
                .success(function (data) {
                    vm.thirdCates = data;

                });
        }

        function getBrands() {
            brandDataFactory.getAll()
                .success(function (data) {
                    vm.brands = data;
                });
        }

        function update(product) {
            productDataFactory.update(product)
                .success(function () {
                    pluginService.notify('产品更新成功', 'success');
                })
                .error(function (error) {
                    pluginService.notify(error, 'error')
                });
        }

        function updateImageInfo(image) {
            productImageDataFactory.update(image)
                .success(function () {
                    // reload images
                    getImages(vm.editProduct.productId);

                    // close window
                    vm.winEdit.close();
                })
                .error(function (error) {
                    pluginService.notify(error, 'error')
                });
        }

        function removeImage(id) {
            // warning text
            var r = confirm(gbmono.notification.delText);
            if (r) {
                productImageDataFactory.remove(id)
                    .success(function () {
                        // reload images
                        getImages(vm.editProduct.productId);
                    })
                    .error(function (error) {
                        pluginService.notify(error, 'error')
                    });
            }
        }

        function generateBarcodeImage(barcode) {
            pluginService.generateBarcodeImage('#barcodeImg', barcode, 'ean13');
        }
    }
})(angular.module('gbmono'));