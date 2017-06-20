
/*
    product search page controller
*/
(function (module) {
    // inject the controller params
    ctrl.$inject = ['$scope', 'categoryDataFactory'];

    // create controller
    module.controller('categoryProductController', ctrl);

    // controller body
    function ctrl($scope, categoryDataFactory) {
        var vm = this;

        init();

        function init() {
            categoryFilterGrid();
            categoryGrid();
        }

        vm.searchType = [{
                        name: "--选择--",
                        value: 0
                    },
                   {
                       name: "GBmono关注度",
                       value: 1
                   },
                   {
                       name: "关注度指标",
                       value: 2
                   },
                   {
                       name: "扫码次数",
                       value: 3
                   },
                   {
                       name: "收藏次数",
                       value: 4
                   },
                   {
                       name: "搜索次数",
                       value: 5
                   }, {
                       name: "分享次数",
                       value: 6
                   }]
        vm.searchTypeValue = 0;


        vm.categoryWinOpen = function(){
            vm.categoryWin.open();
        }

        vm.topCategory = "美容";

        vm.secCategory = "彩妆";

        vm.thirdCategory = "底妆";

        //筛选过滤的 html
        vm.categoryFilterDataSource = [
            {
                title: "品类选择",
                //body: "<a href=''>美容</a>&nbsp;&nbsp;<a href=''>基础护理</a>&nbsp;&nbsp;<a href=''>按摩·冷（霜·膏）</a>&nbsp;&nbsp;<kendo-button class='k-primary' ng-click='' style='border-color:#fff!important;background:#FAFAFA;color:#70b3fb!important'> 搜索</kendo-button>"

                body: "<a href=''>美容</a>&nbsp;—&nbsp;<a href=''>基础护理</a>&nbsp;—&nbsp;<a href=''>按摩·冷（霜·膏）</a>"
            }
        ]

        // retreive product data and binding it into kendo grid
        function categoryGrid(){
            $scope.fn = {
                toggleDetailColum: function(){
                    $scope.showDetailColum = !$scope.showDetailColum;
                }
            }
            $scope.categroys = ['医药品', '卫生用品', '婴儿用品', '日用杂货', '家庭用品', '宠物用品'];

            // init kendo ui grid with product data
            $scope.tableData = [{
                ranking:1,
                productName: "花王1",
                productImg: "Product/4901301335647/4901301335647.jpg",
                activePopulation: parseInt(Math.random() * 5000 + 1),
                activeIncrease: (Math.random() > 0.5),
                scanTimes: parseInt(Math.random() * 99 + 1),
                scanTimesIncrease: (Math.random() > 0.5),
                searchTimes: parseInt(Math.random() * 99 + 1),
                searchTimesIncrease: (Math.random() > 0.5),
                collectTimes: parseInt(Math.random() * 99 + 1),
                collectTimesIncrease: (Math.random() > 0.5),
                attentionIndex: parseInt(Math.random() * 5 + 1),
                attentionIndexIncrease: (Math.random() > 0.5),
                linkGrowth: (Math.random() * 5).toFixed(2) + "%",
                linkGrowthIncrease: (Math.random() > 0.5)
            }, {
                ranking: 2,
                productName: "花王2",
                productImg: "Product/4901301334084/4901301334084.jpg",
                activePopulation: parseInt(Math.random() * 5000 + 1),
                activeIncrease: (Math.random() > 0.5),
                scanTimes: parseInt(Math.random() * 99 + 1),
                scanTimesIncrease: (Math.random() > 0.5),
                searchTimes: parseInt(Math.random() * 99 + 1),
                searchTimesIncrease: (Math.random() > 0.5),
                collectTimes: parseInt(Math.random() * 99 + 1),
                collectTimesIncrease: (Math.random() > 0.5),
                attentionIndex: parseInt(Math.random() * 5 + 1),
                attentionIndexIncrease: (Math.random() > 0.5),
                linkGrowth: (Math.random() * 5).toFixed(2) + "%",
                linkGrowthIncrease: (Math.random() > 0.5)
            }, {
                ranking: 3,
                productName: "花王3",
                productImg: "Product/4901301334060/4901301334060.jpg",
                activePopulation: parseInt(Math.random() * 5000 + 1),
                activeIncrease: (Math.random() > 0.5),
                scanTimes: parseInt(Math.random() * 99 + 1),
                scanTimesIncrease: (Math.random() > 0.5),
                searchTimes: parseInt(Math.random() * 99 + 1),
                searchTimesIncrease: (Math.random() > 0.5),
                collectTimes: parseInt(Math.random() * 99 + 1),
                collectTimesIncrease: (Math.random() > 0.5),
                attentionIndex: parseInt(Math.random() * 5 + 1),
                attentionIndexIncrease: (Math.random() > 0.5),
                linkGrowth: (Math.random() * 5).toFixed(2) + "%",
                linkGrowthIncrease: (Math.random() > 0.5)
            }, {
                ranking:4,
                productName: "花王1",
                productImg: "Product/4901301335647/4901301335647.jpg",
                activePopulation: parseInt(Math.random() * 5000 + 1),
                activeIncrease: (Math.random() > 0.5),
                scanTimes: parseInt(Math.random() * 99 + 1),
                scanTimesIncrease: (Math.random() > 0.5),
                searchTimes: parseInt(Math.random() * 99 + 1),
                searchTimesIncrease: (Math.random() > 0.5),
                collectTimes: parseInt(Math.random() * 99 + 1),
                collectTimesIncrease: (Math.random() > 0.5),
                attentionIndex: parseInt(Math.random() * 5 + 1),
                attentionIndexIncrease: (Math.random() > 0.5),
                linkGrowth: (Math.random() * 5).toFixed(2) + "%",
                linkGrowthIncrease: (Math.random() > 0.5)
            }];
            /*vm.mainGridOptions = {
                dataSource: {
                    transport: {
                        read: function (e) {
                            var data = [{
                                ranking:1,
                                productName: "花王1",
                                productImg: "Product/4901301335647/4901301335647.jpg",
                                activePopulation: 2000,
                                attentionIndex: 52,
                                linkGrowth: "1.2%"
                            }, {
                                ranking: 2,
                                productName: "花王2",
                                productImg: "Product/4901301334084/4901301334084.jpg",
                                activePopulation: 2000,
                                attentionIndex: 52,
                                linkGrowth: "1.2%"
                            }, {
                                ranking: 3,
                                productName: "花王3",
                                productImg: "Product/4901301334060/4901301334060.jpg",
                                activePopulation: 2000,
                                attentionIndex: 52,
                                linkGrowth: "1.2%"
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
                // height: '510',
                filterable: false,
                columns: [
                    {
                        field: "ranking", title: "排行", width: 250
                    },
                    { field: "productName", title: "产品", width: 250 },
                    {
                        field: "productImg", title: "图片",
                        template:  "<div class='product-grid-img'" +
                                       "style='background-image: url(#:gbmono.img_path + '/' +  data.productImg#);'></div>",
                        width: 200
                    },
                    {
                        field: "activePopulation", title: "活跃人数", width: 200
                    },
                    {
                        field: "attentionIndex", title: "关注度指标", width: 200
                    },
                    {
                        field: "linkGrowth", title: "环比增幅", width: 200
                    }
                ]
            };*/
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
                        field:"title",
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
