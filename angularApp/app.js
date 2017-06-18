// factory class that handles CURD calls to the REST service
// factories are singletons by default so the object returned by the factory can be re-used over and over by different controllers in the application. 
// While AngularJS services can also be used to perform this type of functionality, a service returns an instance of itself (it’s also a singleton) and uses the “this” keyword as a result. 
// Factories on the other hand are free to create their own objects inside of the factory function and return them. 

/* sample data factory */
// create root level app module
// it seems it changes since the version 1.2.3
// it has to reference the angular-route.js file and define the controllers parameter
// define angularJs module
(function () {
    // inject the parameters
    config.$inject = ['$routeProvider', '$httpProvider'];


    // config
    // ng-route, ng-animate, kendo-ui modules
    angular.module('gbmono', ['ngRoute', 'ngAnimate', 'LocalStorageModule', 'kendo.directives']).config(config);

    // module config
    // config route & http
    function config($routeProvider, $httpProvider) {
        // inject authentication interceptor
        // bearer token authentication
        // $httpProvider
        $httpProvider.interceptors.push('authInterceptor');

        // configure routes
        $routeProvider
                .when('/dashboard', { // home page
                    templateUrl: gbmono.app_view_path + '/dashboard/dashboard.html',
                    controller: 'dashboardController',
                    controllerAs: 'vm',
                    caseInsensitiveMatch: true
                })
                .when('/newDashboard', { // home page
                    templateUrl: gbmono.app_view_path + '/dashboard/newDashboard.html',
                    controller: 'newDashboardController',
                    controllerAs: 'vm',
                    caseInsensitiveMatch: true
                })
                .when('/products', { // 默认商品搜索页
                    templateUrl: gbmono.app_view_path + '/products/search.html',
                    controller: 'productSearchController',
                    controllerAs: 'vm',
                    caseInsensitiveMatch: true
                })
                .when('/categories/:id/products', { // 分类商品页
                    templateUrl: gbmono.app_view_path + '/products/browse.html',
                    controller: 'productBrowseController',
                    controllerAs: 'vm',
                    caseInsensitiveMatch: true
                })
                .when('/products/create', { // 商品创建页
                    templateUrl: gbmono.app_view_path + '/products/createProduct.html',
                    controller: 'productCreateController',
                    controllerAs: 'vm',
                    caseInsensitiveMatch: true
                })
                .when('/products/create/:id/extra', { // 商品图片创建页
                    templateUrl: gbmono.app_view_path + '/products/createProductExtra.html',
                    controller: 'productExtraInfoCreateController',
                    controllerAs: 'vm',
                    caseInsensitiveMatch: true
                })
                .when('/products/edit/:id', { // 商品编辑页
                    templateUrl: gbmono.app_view_path + '/products/edit.html',
                    controller: 'productEditController',
                    controllerAs: 'vm',
                    caseInsensitiveMatch: true
                })
                .when('/tags', { // 标签
                    templateUrl: gbmono.app_view_path + '/tags/list.html',
                    controller: 'tagListController',
                    controllerAs: 'vm',
                    caseInsensitiveMatch: true
                })
                .when('/brands', { // 品牌(商)
                    templateUrl: gbmono.app_view_path + '/brands/list.html',
                    controller: 'brandListController',
                    controllerAs: 'vm',
                    caseInsensitiveMatch: true
                })
                .when('/categories', { // top category
                    templateUrl: gbmono.app_view_path + '/categories/top.html',
                    controller: 'topCategoryController',
                    controllerAs: 'vm',
                    caseInsensitiveMatch: true
                })
                .when('/categories/:parentId/second', { // second category
                    templateUrl: gbmono.app_view_path + '/categories/second.html',
                    controller: 'secondCategoryController',
                    controllerAs: 'vm',
                    caseInsensitiveMatch: true
                })
                .when('/categories/:parentId/third', { // third category
                    templateUrl: gbmono.app_view_path + '/categories/third.html',
                    controller: 'thirdCategoryController',
                    controllerAs: 'vm',
                    caseInsensitiveMatch: true
                })
                .when('/retailers', { // retailer list page
                    templateUrl: gbmono.app_view_path + '/retailers/list.html',
                    controller: 'retailerListController',
                    caseInsensitiveMatch: true
                })
                .when('/retailershops', { // retailer shop list page
                    templateUrl: gbmono.app_view_path + '/retailers/shop.html',
                    controller: 'retailerShopListController',
                    controllerAs: 'vm',
                    caseInsensitiveMatch: true
                })
                .when('/retailershops/edit/:retailerShopId', { // retailer shop list page
                    templateUrl: gbmono.app_view_path + '/retailers/shopEdit.html',
                    controller: 'retailerShopEditController',
                    caseInsensitiveMatch: true
                })
                .when('/articles', { // article list page
                    templateUrl: gbmono.app_view_path + '/articles/list.html',
                    controller: 'articleListController',
                    controllerAs: 'vm',
                    caseInsensitiveMatch: true
                })
                .when('/articles/edit/:articleId', { // article edit page
                    templateUrl: gbmono.app_view_path + '/articles/edit.html',
                    controller: 'articleEditController',
                    controllerAs: 'vm',
                    caseInsensitiveMatch: true
                })
                .when('/accounts', { // account list
                    templateUrl: gbmono.app_view_path + '/admin/accounts.html',
                    controller: 'accountSearchController',
                    controllerAs: 'vm',
                    caseInsensitiveMatch: true
                })
                 .when('/account/add', { // add account
                     templateUrl: gbmono.app_view_path + '/admin/accountAdd.html',
                     controller: 'accountAddController',
                     controllerAs: 'vm',
                     caseInsensitiveMatch: true
                 })
                 .when('/account/edit/:accountId', { // add account
                     templateUrl: gbmono.app_view_path + '/admin/edit.html',
                     controller: 'accountEditController',
                     controllerAs: 'vm',
                     caseInsensitiveMatch: true
                 })
                .when('/productGroup', { // search productGroup
                    templateUrl: gbmono.app_view_path + '/productGroup/search.html',
                    controller: 'productGroupSearchController',
                    controllerAs: 'vm',
                    caseInsensitiveMatch: true
                })
                .when('/productGroup/edit/:productGroupId', { // edit productGroup
                    templateUrl: gbmono.app_view_path + '/productGroup/edit.html',
                    controller: 'productGroupEditController',
                    controllerAs: 'vm',
                    caseInsensitiveMatch: true
                })
                .when('/productGroup/create', { // create productGroup
                    templateUrl: gbmono.app_view_path + '/productGroup/createProductGroup.html',
                    controller: 'productGroupCreateController',
                    controllerAs: 'vm',
                    caseInsensitiveMatch: true
                })
                .when('/report/vip', { // create productGroup
                    templateUrl: gbmono.app_view_path + '/report/people/vip.html',
                    controller: 'vipController',
                    controllerAs: 'vm',
                    caseInsensitiveMatch: true
                })
                .when('/report/category', { // create productGroup
                    templateUrl: gbmono.app_view_path + '/report/category/categories.html',
                    controller: 'categoriesController',
                    controllerAs: 'vm',
                    caseInsensitiveMatch: true
                })
                .when('/report/categoryOverview', { // create productGroup
                    templateUrl: gbmono.app_view_path + '/report/category/categoryOverview.html',
                    controller: 'categoryOverviewController',
                    controllerAs: 'vm',
                    caseInsensitiveMatch: true
                })
                 .when('/report/categoryProduct', { // create productGroup
                     templateUrl: gbmono.app_view_path + '/report/category/categoryProduct.html',
                     controller: 'categoryProductController',
                     controllerAs: 'vm',
                     caseInsensitiveMatch: true
                 })
                .when('/report/categoryPeople', { // create productGroup
                    templateUrl: gbmono.app_view_path + '/report/category/categoryPeople.html',
                    controller: 'categoryPeopleController',
                    controllerAs: 'vm',
                    caseInsensitiveMatch: true
                })
                .when('/report/singleCategory', { // create productGroup
                    templateUrl: gbmono.app_view_path + '/report/category/singleCategory.html',
                    controller: 'singleCategoryController',
                    controllerAs: 'vm',
                    caseInsensitiveMatch: true
                })
                .when('/report/singleProduct', { // create productGroup
                    templateUrl: gbmono.app_view_path + '/report/product/singleProduct.html',
                    controller: 'singleProductController',
                    controllerAs: 'vm',
                    caseInsensitiveMatch: true
                })
                .otherwise({
                    templateUrl: gbmono.app_view_path + '/dashboard/newDashboard.html',
                    controller: 'newDashboardController',
                    controllerAs: 'vm',
                    caseInsensitiveMatch: true
                });
    }


})();

