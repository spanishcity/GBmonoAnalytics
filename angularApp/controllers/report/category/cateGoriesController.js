(function (module) {
    // inject the controller params
    ctrl.$inject = [];

    // create controller
    module.controller('categoriesController', ctrl);

    // controller body

    function ctrl() {
        var vm = this;
        //select date
        vm.date = [];

        vm.dateTime = "--选择时间--";
        //select category
        vm.categories = [];

        vm.categoryType = "全部";


        vm.date = [
            "--选择时间--",
            "2017/01",
            "2017/02",
            "2017/03",
            "2017/04",
            "2017/05"
        ]

        vm.categories = [
            "全部",
            "健康食品",
            "食品",
            "卫生用品·老年用品",
            "美容",
            "其他日用品"
        ]

        vm.dataTopCategoryGrid;
        vm.dataTopCategory = [{
            name: '医药品·医药部外品',
            type: 'line',
            symbol: 'none',
            lineStyle: {
                normal: {
                    width: 1,
                }
            },
            data: [45, 30, 38, 37, 42, 38, 37, 38, 38, 32, 30, 31, 40, 30, 32, 36, 38, 34, 39, 35, 31, 45, 48, 42, 46, 47, 41, 35, 38, 31, 37, 46, 49, 42, 45, 46, 32, 35, 38, 37, 37, 34, 35, ]
        }, {
            name: '卫生用品·老年用品',
            type: 'line',
            symbol: 'none',
            lineStyle: {
                normal: {
                    width: 1,
                }
            },
            data: [55, 40, 45, 48, 46, 57, 51, 52, 59, 55, 54, 57, 56, 46, 48, 42, 45, 54, 45, 45, 45, 45, 48, 49, 46, 48, 47, 42, 41, 54, 58, 54, 54, 50, 50, 51, 52, 49, 48, 48, 49, 52, 51, ]
        }, {
            name: '健康食品',
            type: 'line',
            symbol: 'none',
            lineStyle: {
                normal: {
                    width: 1,
                }
            },
            data: [85, 86, 95, 94, 85, 82, 85, 92, 95, 99, 94, 81, 85, 85, 79, 81, 82, 85, 85, 86, 95, 92, 91, 91, 90, 89, 87, 95, 92, 91, 84, 86, 89, 80, 79, 75, 84, 82, 83, 81, 92, 90, 91, ]
        }, {
            name: '美容',
            type: 'line',
            symbol: 'none',
            lineStyle: {
                normal: {
                    width: 1,
                }
            },
            data: [75, 79, 84, 83, 82, 83, 85, 80, 79, 85, 72, 71, 68, 75, 74, 83, 75, 78, 77, 81, 82, 85, 73, 75, 84, 90, 92, 75, 74, 75, 75, 78, 74, 75, 76, 71, 82, 84, 75, 78, 75, 76, 84, ]
        }, {
            name: '婴儿用品',
            type: 'line',
            symbol: 'none',
            lineStyle: {
                normal: {
                    width: 1,
                }
            },
            data: [35, 40, 30, 36, 34, 28, 26, 31, 35, 39, 35, 35, 34, 34, 40, 44, 41, 42, 41, 36, 30, 32, 29, 28, 28, 35, 34, 32, 33, 31, 35, 36, 32, 31, 32, 34, 37, 33, 33, 32, 35, 32, 30, ]
        }, {
            name: '日用杂货',
            type: 'line',
            symbol: 'none',
            lineStyle: {
                normal: {
                    width: 1,
                }
            },
            data: [45, 50, 51, 52, 53, 56, 56, 55, 54, 51, 52, 50, 51, 55, 56, 58, 55, 45, 48, 49, 49, 49, 48, 47, 55, 51, 54, 54, 52, 53, 60, 53, 52, 51, 58, 55, 55, 56, 56, 54, 50, 49, 49, ]
        }, {
            name: '家庭用品',
            type: 'line',
            symbol: 'none',
            lineStyle: {
                normal: {
                    width: 1,
                }
            },
            data: [35, 29, 25, 30, 35, 34, 32, 31, 32, 36, 32, 32, 31, 35, 32, 36, 32, 32, 31, 29, 28, 21, 24, 40, 21, 25, 26, 29, 28, 24, 21, 21, 21, 21, 22, 23, 26, 26, 26, 26, 23, 25, 24, ]
        }, {
            name: '宠物用品',
            type: 'line',
            symbol: 'none',
            lineStyle: {
                normal: {
                    width: 1,
                }
            },
            data: [15, 25, 16, 19, 18, 15, 12, 14, 15, 16, 15, 12, 15, 18, 15, 10, 16, 19, 18, 15, 19, 16, 20, 21, 25, 18, 16, 13, 15, 14, 19, 20, 25, 18, 15, 19, 14, 17, 15, 16, 25, 24, 22, ]
        }, {
            name: '其他日用品',
            type: 'line',
            symbol: 'none',
            lineStyle: {
                normal: {
                    width: 1,
                }
            },
            data: [90, 80, 82, 86, 86, 85, 84, 87, 85, 86, 84, 85, 89, 85, 82, 81, 75, 78, 79, 78, 75, 74, 74, 75, 78, 73, 86, 84, 84, 82, 85, 86, 89, 85, 84, 85, 81, 86, 89, 85, 75, 78, 79, ]
        }, {
            name: '食品',
            type: 'line',
            symbol: 'none',
            lineStyle: {
                normal: {
                    width: 1,
                }
            },
            data: [75, 68, 69, 68, 67, 68, 72, 74, 75, 73, 76, 72, 70, 71, 75, 71, 72, 73, 75, 76, 75, 76, 76, 74, 71, 72, 75, 76, 74, 80, 72, 79, 81, 82, 84, 72, 75, 73, 76, 81, 78, 79, 80, ]
        }]

        vm.dataCategory = [
                            {
                                "categoryName": "彩妆",
                                "scan": "180",
                                "browse": "500",
                                "collection": "350",
                                "share": "300",
                                "hot": "92"
                            }, {
                                "categoryName": "减肥·美容",
                                "scan": "170",
                                "browse": "600",
                                "collection": "320",
                                "share": "280",
                                "hot": "86"
                            }, {
                                "categoryName": "加工食品",
                                "scan": "200",
                                "browse": "520",
                                "collection": "310",
                                "share": "240",
                                "hot": "85"
                            }, {
                                "categoryName": "身体护理",
                                "scan": "168",
                                "browse": "510",
                                "collection": "295",
                                "share": "235",
                                "hot": "80"
                            }, {
                                "categoryName": "香水",
                                "scan": "195",
                                "browse": "480",
                                "collection": "280",
                                "share": "230",
                                "hot": "78"
                            }, {
                                "categoryName": "消化器官用药 ",
                                "scan": "210",
                                "browse": "450",
                                "collection": "270",
                                "share": "220",
                                "hot": "77"
                            }, {
                                "categoryName": "其他化妆品",
                                "scan": "150",
                                "browse": "460",
                                "collection": "250",
                                "share": "200",
                                "hot": "75"
                            },
                     ]
        init();
        vm.categoryChange = function () {
            changeDataTopCategory();
        }


        function init() {
            //getProducts();
            vm.dataTopCategoryGrid = vm.dataTopCategory;
            initCategory();
            bindCategory();
        }

        function initCategory() {
            var myChart = echarts.init(document.getElementById('chartCategroy'));
            option = {
                title: {
                    text: ''
                },
                tooltip: {
                    trigger: 'axis'
                },
                color: ["#FF0000", "#00BFFF", "#FF00FF", "#1ce322", "#000000", '#EE7942', '#BE7352', '#5180A9', '#A54C8E', '#B2BA8E'],
                legend: {
                    data: ['医药品·医药部外品', '卫生用品·老年用品', '健康食品', '美容', '婴儿用品', '日用杂货', '家庭用品', '宠物用品', '其他日用品', '食品']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['2017/1/24', '2017/1/25', '2017/1/26', '2017/2/3', '2017/2/6', '2017/2/7', '2017/2/8', '2017/2/9', '2017/2/10', '2017/2/13', '2017/2/14', '2017/2/15', '2017/2/16', '2017/2/17', '2017/2/20', '2017/2/21', '2017/2/22', '2017/2/23', '2017/2/24', '2017/2/27', '2017/2/28', '2017/3/1', '2017/3/2', '2017/3/3', '2017/3/6', '2017/3/7', '2017/3/8', '2017/3/9', '2017/3/10', '2017/3/13', '2017/3/14', '2017/3/15', '2017/3/16', '2017/3/17', '2017/3/20', '2017/3/21', '2017/3/22', '2017/3/23', '2017/3/24', '2017/3/27', '2017/3/28', '2017/3/29', '2017/3/30', ]
                },
                yAxis: [{
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} '
                    },
                    min: 0,
                    max: 100
                }],
                dataZoom: [{
                    type: 'inside',
                    start: 50,
                    end: 100
                }, {
                    show: true,
                    type: 'slider',
                    y: '90%',
                    start: 50,
                    end: 100
                }],
                series: vm.dataTopCategoryGrid
            };
            myChart.setOption(option);
            window.onresize = myChart.resize;
        }

        function bindCategory() {
            vm.mainGridOptions = {
                dataSource: {
                    transport: {
                        read: function (e) {
                            
                                    e.success(vm.dataCategory);
                        }
                    }
                },
                sortable: true,
                height: 500,
                filterable: false,
                columns: [
                    {
                        field: "categoryName", title: "品类",width:200
                    },
                    { field: "scan", title: "扫一扫次数" , width: 80},
                    { field: "browse", title: "浏览次数", width: 80 },
                    { field: "collection", title: "收藏次数", width: 80 },
                    {
                        field: "share", title: "分享次数", width: 80,
                    },
                    {
                        field: "hot", title: "热度", width: 80,
                    }
                ]
            };
        }

        function changeDataTopCategory() {
            var j = 0;
            for (var i = 0; i < vm.dataTopCategory.length; i++) {
                if (vm.dataTopCategory[i].name == vm.categoryType) {
                    vm.dataTopCategoryGrid = vm.dataTopCategory[i];
                    j = 1;
                }
            }
            if (j == 0) {
                vm.dataTopCategoryGrid = vm.dataTopCategory;
            }
            initCategory();
        }
    }

})(angular.module('gbmono'));