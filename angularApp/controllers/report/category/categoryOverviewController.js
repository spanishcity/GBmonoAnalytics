
/*
    product search page controller
*/
(function (module) {
    // inject the controller params
    ctrl.$inject = ['$scope','categoryDataFactory'];

    // create controller
    module.controller('categoryOverviewController', ctrl);

    // controller body
    function ctrl($scope,categoryDataFactory) {
        var vm = this;

        vm.topCategory = "美容";

        vm.secCategory = "彩妆";

        vm.thirdCategory = "底妆";

        //筛选过滤的 html
        vm.categoryFilterDataSource = [
            {
                title: "品类选择",
                body: "<a href=''>美容</a>&nbsp;—&nbsp;<a href=''>基础护理</a>&nbsp;—&nbsp;<a href=''>按摩·冷（霜·膏）</a>"

                //body: "<kendo-button class='k-primary' ng-click='' style='border-color:#fff!important;background:#FAFAFA;color:#70b3fb!important'> 美容</kendo-button>&nbsp;&nbsp;<kendo-button class='k-primary' ng-click='' style='border-color:#fff!important;background:#FAFAFA;color:#70b3fb!important'> 搜索</kendo-button>"
            },
        ]

        init();

        function init() {

            //筛选
            categoryFilterGrid();

            categoryGrid();
        }

        // retreive product data and binding it into kendo grid
        function categoryGrid() {
            // init kendo ui grid with product data
            vm.mainGridOptions = {
                dataSource: {
                    transport: {
                        read: function (e) {
                            var data = [{
                                thirdCatregory: "退烧止痛药",
                                secondCategory: "精神神经用药",
                                activePopulation: 2000,
                                attentionIndex: 52,
                                linkGrowth : "1.2%"
                            }, {
                                thirdCatregory: "退烧止痛药",
                                secondCategory: "精神神经用药",
                                activePopulation: 2000,
                                attentionIndex: 52,
                                linkGrowth: "1.2%"
                            },{
                                thirdCatregory: "退烧止痛药",
                                secondCategory: "精神神经用药",
                            activePopulation: 2000,
                            attentionIndex: 52,
                            linkGrowth : "1.2%"
                            }]
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
                        field: "thirdCatregory", title: "三级品类",width: 250
                    },
                    { field: "secondCategory", title: "二级品类", width: 250 },
                    {
                        field: "activePopulation", title: "活跃人数",width: 200
                    },
                    {
                        field: "attentionIndex", title: "关注度指标", width: 200
                    },
                    {
                        field: "linkGrowth", title: "环比增幅", width: 200
                    },
                ]
            };
        }
        function categoryFilterGrid() {
            // init kendo ui grid with product data
            vm.categoryFilterGridOptions = {
                dataSource: {
                    transport: {
                        read: function (e) {
                            e.success(vm.categoryFilterDataSource);
                        }

                    }
                },
                sortable: true,
                height: 77,
                filterable: false,
                columns: [
                    {
                        field: "title",
                        title: "高级筛选",
                        //template : '<a class="btn btn-xs btn-success" ng-click="getTags(dataItem.productId)"><i class="ace-icon fa fa-tags bigger-120"></i></a>&nbsp;&nbsp;',
                        width: 150
                    },
                    {
                        field: "body",
                        title: "筛选结果",
                        template: '<span>#= body#</span>',
                        width: 250
                    },
                ]
            };
        }
    }
})(angular.module('gbmono'));
