(function (module) {
    // inject the controller params
    ctrl.$inject = ['$scope'];

    // create controller
    module.controller('portfolioAnalysisController', ctrl);

    // controller body

    function ctrl($scope) {
        var vm = this;

        vm.mapData = [
                { name: "上海", value: 29780 },
                { name: "珠海", value: 2186 },
                { name: "三亚", value: 1135 },
                { name: "惠州", value: 1973 },
                { name: "海口", value: 2568 },
                { name: "合肥", value: 4039 },
                { name: "南京", value: 6959 },
                { name: "杭州", value: 5632 },
                { name: "苏州", value: 6707 },
                { name: "无锡", value: 3393 },
                { name: "昆山", value: 1894 },
                { name: "广州", value: 15769 },
                { name: "深圳", value: 8259 },
                { name: "佛山", value: 5741 },
                { name: "东莞", value: 3030 },
                { name: "福州", value: 4542 },
                { name: "厦门", value: 3329 },
                { name: "南宁", value: 3157 },
                { name: "郑州", value: 6690 },
                { name: "武汉", value: 8678 },
                { name: "长沙", value: 5303 },
                { name: "南昌", value: 3025 },
                { name: "北京", value: 20259 },
                { name: "长春", value: 3016 },
                { name: "大连", value: 3202 },
                { name: "沈阳", value: 4540 },
                { name: "哈尔滨", value: 3141 },
                { name: "天津", value: 8626 },
                { name: "济南", value: 4361 },
                { name: "青岛", value: 6667 },
                { name: "太原", value: 4080 },
                { name: "石家庄", value: 6137 },
                { name: "西安", value: 6991 },
                { name: "成都", value: 13873 },
                { name: "重庆", value: 13283 },
                { name: "昆明", value: 4633 },
        ];
        vm.geoCoordMap = {
            "上海": [121.48, 31.22],
            "珠海": [113.52, 22.3],
            "三亚": [109.31, 18.14],
            "惠州": [114.4, 23.09],
            "海口": [110.35, 20.02],
            "合肥": [117.27, 31.86],
            "南京": [118.78, 32.04],
            "杭州": [120.19, 30.26],
            "苏州": [120.62, 31.32],
            "无锡": [120.29, 31.59],
            "昆山": [120.95, 31.39],
            "广州": [113.23, 23.16],
            "深圳": [114.07, 22.62],
            "佛山": [113.11, 23.05],
            "东莞": [113.75, 23.04],
            "福州": [119.3, 26.08],
            "厦门": [118.1, 24.46],
            "南宁": [108.33, 22.84],
            "郑州": [113.65, 34.76],
            "武汉": [114.31, 30.52],
            "长沙": [113, 28.21],
            "南昌": [115.89, 28.68],
            "北京": [116.46, 39.92],
            "长春": [125.35, 43.88],
            "大连": [121.62, 38.92],
            "沈阳": [123.38, 41.8],
            "哈尔滨": [126.63, 45.75],
            "天津": [117.2, 39.13],
            "济南": [117, 36.65],
            "青岛": [120.33, 36.07],
            "太原": [112.53, 37.87],
            "石家庄": [114.48, 38.03],
            "西安": [108.95, 34.27],
            "成都": [104.06, 30.67],
            "重庆": [106.54, 29.59],
            "昆明": [102.73, 25.04],
        };
        init();
        vm.date = [
           "--选择时间--",
           "2017/01",
           "2017/02",
           "2017/03",
           "2017/04",
           "2017/05"
        ];
        vm.dateTime = "--选择时间--";

        vm.ageItem = ['全部','18岁以下', '18-28岁', '28-38岁', '38-48岁', '48-58岁', '58岁以上'];

        vm.sexItem = ['全部','男','女']

        vm.areaItem = ["--请选择地区--",
                            "北京",
                            "天津",
                            "上海",
                            "重庆",
                            "河北",
                            "河南",
                            "云南",
                            "辽宁",
                            "黑龙江",
                            "湖南",
                            "安徽",
                            "山东",
                            "新疆",
                            "江苏",
                            "浙江",
                            "江西",
                            "湖北",
                            "广西",
                            "甘肃",
                            "山西",
                            "内蒙古",
                            "陕西",
                            "吉林",
                            "福建",
                            "贵州",
                            "广东",
                            "青海",
                            "西藏",
                            "四川",
                            "宁夏",
                            "海南",
                            "台湾",
                            "香港",
                            "澳门"];

        vm.area = "--请选择地区--";

        vm.categoryShow = true;

        vm.brandShow = false;

        vm.productShow = false;

        vm.gbmonoTab;

        vm.tabGridShow = function (type) {
            switch (type) {
                case 1:
                    vm.categoryShow = true;
                    vm.brandShow = false;
                    vm.productShow = false;
                    categoryGrid();
                    break;
                case 2:
                    vm.categoryShow = false;
                    vm.brandShow = true;
                    vm.productShow = false;
                    brandGrid();
                    break;
                case 3:
                    vm.categoryShow = false;
                    vm.brandShow = false;
                    vm.productShow = true;
                    productGrid();
                    break;
            }
        }

        vm.sexChange = function () {
            console.log("111")
            vm.sexColor = "gbmono_choose_click"
        }

        vm.resert = function () {
            resertOption();
        }

        vm.sex = 1;

        vm.sexChange = function (type) {
            switch (type) {
                case 1:
                    vm.sex = 1;
                    break;
                case 2:
                    vm.sex = 2;
                    break;
                case 3:
                    vm.sex = 3;
                    break;
            }
        }

        vm.showDetailColum = false;

        vm.toggleDetailColum = function () {
            vm.showDetailColum = !vm.showDetailColum;
        }

        function init() {
            //initCatery();
            categoryGrid();
        }

        //重新加载echarts
        function resertOption() {
            console.log(111)
        }

        //品类
        function categoryGrid() {
            $scope.fnCategory = {
                toggleCategoryDetailColum: function () {
                    $scope.showCategoryDetailColum = !$scope.showCategoryDetailColum;
                }
            }
            // init kendo ui grid with product data
            $scope.tableCategoryData = [{
                ranking: 1,
                thirdCategory: "淡香水",
                secCategory: "香水",
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
                thirdCategory: "烫发剂",
                secCategory: "美发",
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
                thirdCategory: "古龙水",
                secCategory: "香水",
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
            //vm.mainGridOptions = {
            //    dataSource: {
            //        transport: {
            //            read: function (e) {
            //                var data = [{
            //                    ranking: 3,
            //                    thirdCategory: "淡香水",
            //                    secCategory: "香水",
            //                    activePopulation: parseInt(Math.random() * 5000 + 1),
            //                    activeIncrease: (Math.random() > 0.5),
            //                    scanTimes: parseInt(Math.random() * 99 + 1),
            //                    scanTimesIncrease: (Math.random() > 0.5),
            //                    searchTimes: parseInt(Math.random() * 99 + 1),
            //                    searchTimesIncrease: (Math.random() > 0.5),
            //                    collectTimes: parseInt(Math.random() * 99 + 1),
            //                    collectTimesIncrease: (Math.random() > 0.5),
            //                    attentionIndex: parseInt(Math.random() * 5 + 1),
            //                    attentionIndexIncrease: (Math.random() > 0.5),
            //                    linkGrowth: (Math.random() * 5).toFixed(2) + "%",
            //                    linkGrowthIncrease: (Math.random() > 0.5)
            //                }, {
            //                    ranking: 3,
            //                    thirdCategory: "烫发剂",
            //                    secCategory: "美发",
            //                    activePopulation: parseInt(Math.random() * 5000 + 1),
            //                    activeIncrease: (Math.random() > 0.5),
            //                    scanTimes: parseInt(Math.random() * 99 + 1),
            //                    scanTimesIncrease: (Math.random() > 0.5),
            //                    searchTimes: parseInt(Math.random() * 99 + 1),
            //                    searchTimesIncrease: (Math.random() > 0.5),
            //                    collectTimes: parseInt(Math.random() * 99 + 1),
            //                    collectTimesIncrease: (Math.random() > 0.5),
            //                    attentionIndex: parseInt(Math.random() * 5 + 1),
            //                    attentionIndexIncrease: (Math.random() > 0.5),
            //                    linkGrowth: (Math.random() * 5).toFixed(2) + "%",
            //                    linkGrowthIncrease: (Math.random() > 0.5)
            //                }, {
            //                    ranking: 3,
            //                    thirdCategory: "古龙水",
            //                    secCategory: "香水",
            //                    activePopulation: parseInt(Math.random() * 5000 + 1),
            //                    activeIncrease: (Math.random() > 0.5),
            //                    scanTimes: parseInt(Math.random() * 99 + 1),
            //                    scanTimesIncrease: (Math.random() > 0.5),
            //                    searchTimes: parseInt(Math.random() * 99 + 1),
            //                    searchTimesIncrease: (Math.random() > 0.5),
            //                    collectTimes: parseInt(Math.random() * 99 + 1),
            //                    collectTimesIncrease: (Math.random() > 0.5),
            //                    attentionIndex: parseInt(Math.random() * 5 + 1),
            //                    attentionIndexIncrease: (Math.random() > 0.5),
            //                    linkGrowth: (Math.random() * 5).toFixed(2) + "%",
            //                    linkGrowthIncrease: (Math.random() > 0.5)
            //                }]
            //                e.success(data);
            //            }
            //        }
            //    },
            //    sortable: true,
            //    height: '510',
            //    filterable: false,
            //    columns: [
            //        {
            //            field: "ranking", title: "排行", width: 100,
            //        },
            //        {
            //            field: "thirdCategory", title: "三级品类", width: 250
            //        },
            //        {
            //            field: "secCategory", title: "二级品类", width: 250
            //        },
            //        {
            //            field: "attentionIndex", title: "<a class='k-link' href='javascript://'>集匠关注度指标<span class='questionMark'></span></a>", width: 200,
            //            headerAttributes: {
            //                title: "集匠关注度指标 = (扫码次数 * 0.5 + 搜索次数 * 0.4 + 收藏次数 * 0.6) * 0.85&#13;点击查看详情",
            //                "ng-click": "vm.toggleDetailColum();",
            //            },
            //            template: "<span class='ng-binding'>#=data.attentionIndex#</span>"
            //                       + "<span ng-class='{true: \"growthUp\", false: \"growthDown\"}[#=data.attentionIndexIncrease#]'></span>"
            //        },
            //        {
            //            field: "scanTimes", title: "<a class='k-link' href='javascript://'>扫码次数</a>",
            //            width: vm.showDetailColum?200:0,
            //            template: "<span class='ng-binding'>#: data.scanTimes#</span>"
            //                       + "<span ng-class='{true: \"growthUp\", false: \"growthDown\"}[#=data.scanTimesIncrease#]'></span>"
            //        },
            //        {
            //            field: "searchTimes", title: "搜索次数",
            //            width: 200,
            //            headerAttributes: {
            //                "ng-show": "vm.showDetailColum",
            //            },
            //            template: "<span class='ng-binding'>#=data.searchTimes#</span>"
            //                       + "<span ng-class='{true: \"growthUp\", false: \"growthDown\"}[#=data.searchTimesIncrease#]'></span>"
            //        },
            //        {
            //            field: "collectTimes", title: "收藏次数",
            //            width: 200,
            //            headerAttributes: {
            //                "ng-show": "vm.showDetailColum",
            //            },
            //            template: "<span class='ng-binding'>#=data.collectTimes#</span>"
            //                       + "<span ng-class='{true: \"growthUp\", false: \"growthDown\"}[#=data.collectTimesIncrease#]'></span>"
            //        },
            //        {
            //            field: "activePopulation", title: "活跃人数",
            //            width: 200
            //        }, 
            //        {
            //            field: "linkGrowth", title: "环比增幅", width: 200
            //        }
            //    ]
            //};
        }

        //品牌
        function brandGrid() {
            $scope.fnBrand = {
                toggleBrandDetailColum: function () {
                    $scope.showBrandDetailColum = !$scope.showBrandDetailColum;
                }
            }

            // init kendo ui grid with product data
            $scope.tableBrandData = [{
                ranking: 1,
                brand: "ATSUGI",
                brandSeries: "RELISH",
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
                brand: "AJINOMOTO",
                brandSeries: "aminoVITAL",
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
                brand: "EARTH制药",
                brandSeries: "sARATECT",
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
                ranking: 4,
                brand: "EARTH制药",
                brandSeries: "sUKKI-RI",
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
        }
        

        //产品
        function productGrid() {
            $scope.fnProduct = {
                toggleProductDetailColum: function () {
                    $scope.showProductDetailColum = !$scope.showProductDetailColum;
                }
            }

            // init kendo ui grid with product data
            $scope.tableProductData = [{
                ranking: 1,
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
                ranking: 4,
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
        }
    }

})(angular.module('gbmono'));