(function (module) {
    // inject the controller params
    ctrl.$inject = ['pluginService', 'productDataFactory'];

    // create controller
    module.controller('newDashboardController', ctrl);

    // controller body

    function ctrl(pluginService, productDataFactory) {
        var vm = this;

        //
        vm.products = [];
        vm.chartdata = []
        vm.productCountItems = [];
        vm.category = [];
        vm.categoryCount = [];
        vm.newCategoryJson = [];
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



        function init() {
            //getProducts();
            //getByCategory(1000, 0, 10);
            //initTopChart();
            getData();
            initChinaChart();


        }


        function initChinaChart() {

            var myChart = echarts.init(document.getElementById('chartChina'));
            //var option = {
            //    title: {
            //        text: 'ECharts 入门示例'
            //    },
            //    tooltip: {},
            //    legend: {
            //        data: ['销量']
            //    },
            //    xAxis: {
            //        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            //    },
            //    yAxis: {},
            //    series: [{
            //        name: '销量',
            //        type: 'bar',
            //        data: [5, 20, 36, 10, 10, 20]
            //    }]
            //};

            //option = {
            //    tooltip: {
            //        trigger: 'item',
            //        formatter: '{b}'
            //    },
            //    series: [
            //        {
            //            name: '中国',
            //            type: 'map',
            //            mapType: 'china',
            //            selectedMode: 'multiple',
            //            label: {
            //                normal: {
            //                    show: true
            //                },
            //                emphasis: {
            //                    show: true
            //                }
            //            },
            //            data: [
            //                { name: '广东', selected: true }
            //            ]
            //        }
            //    ]
            //};

            function randomData() {
                return Math.round(Math.random() * 1000);
            }

            //option = {
            //    title: {
            //        text: '药妆关注人群分布',
            //        //subtext: '纯属虚构',
            //        left: 'center'
            //    },
            //    tooltip: {
            //        trigger: 'item'
            //    },
            //    //legend: {
            //    //    orient: 'vertical',
            //    //    left: 'left',
            //    //    data: ['iphone3', 'iphone4', 'iphone5']
            //    //},
            //    visualMap: {
            //        min: 0,
            //        max: 2500,
            //        left: 'left',
            //        top: 'bottom',
            //        text: ['高', '低'],           // 文本，默认为数值文本
            //        calculable: true
            //    },
            //    toolbox: {
            //        show: true,
            //        orient: 'vertical',
            //        left: 'right',
            //        top: 'center',
            //        feature: {
            //            dataView: { readOnly: false },
            //            restore: {},
            //            saveAsImage: {}
            //        }
            //    },
            //    series: [
            //        {
            //            //name: 'iphone3',
            //            type: 'map',
            //            mapType: 'china',
            //            roam: false,
            //            label: {
            //                normal: {
            //                    show: true
            //                },
            //                emphasis: {
            //                    show: true
            //                }
            //            },
            //            data: [
            //                { name: '北京', value: randomData() },
            //                { name: '天津', value: randomData() },
            //                { name: '上海', value: randomData() },
            //                { name: '重庆', value: randomData() },
            //                { name: '河北', value: randomData() },
            //                { name: '河南', value: randomData() },
            //                { name: '云南', value: randomData() },
            //                { name: '辽宁', value: randomData() },
            //                { name: '黑龙江', value: randomData() },
            //                { name: '湖南', value: randomData() },
            //                { name: '安徽', value: randomData() },
            //                { name: '山东', value: randomData() },
            //                { name: '新疆', value: randomData() },
            //                { name: '江苏', value: randomData() },
            //                { name: '浙江', value: randomData() },
            //                { name: '江西', value: randomData() },
            //                { name: '湖北', value: randomData() },
            //                { name: '广西', value: randomData() },
            //                { name: '甘肃', value: randomData() },
            //                { name: '山西', value: randomData() },
            //                { name: '内蒙古', value: randomData() },
            //                { name: '陕西', value: randomData() },
            //                { name: '吉林', value: randomData() },
            //                { name: '福建', value: randomData() },
            //                { name: '贵州', value: randomData() },
            //                { name: '广东', value: randomData() },
            //                { name: '青海', value: randomData() },
            //                { name: '西藏', value: randomData() },
            //                { name: '四川', value: randomData() },
            //                { name: '宁夏', value: randomData() },
            //                { name: '海南', value: randomData() },
            //                { name: '台湾', value: randomData() },
            //                { name: '香港', value: randomData() },
            //                { name: '澳门', value: randomData() }
            //            ]
            //        }

            //    ]
            //};






            var convertData = function () {
                var res = [];
                for (var i = 0; i < vm.mapData.length; i++) {
                    var geoCoord = vm.geoCoordMap[vm.mapData[i].name];
                    if (geoCoord) {
                        res.push({
                            name: vm.mapData[i].name,
                            value: geoCoord.concat(vm.mapData[i].value)
                        });
                    }
                }
                return res;
            };

            var convertedData = [
                convertData(vm.mapData),
                convertData(vm.mapData.sort(function (a, b) {
                    return b.value - a.value;
                }).slice(0, 6))
            ];
            vm.mapData.sort(function (a, b) {
                return a.value - b.value;
            })

            var selectedItems = [];
            var categoryData = [];
            var barData = [];
            //   var maxBar = 30;
            var sum = 0;
            var count = vm.mapData.length;
            for (var i = 0; i < vm.mapData.length; i++) {
                categoryData.push(vm.mapData[i].name);
                barData.push(vm.mapData[i].value);
                sum += vm.mapData[i].value;
            }
            option = {
                //backgroundColor: '#404a59',
                backgroundColor: 'grey',
                animation: true,
                animationDuration: 1000,
                animationEasing: 'cubicInOut',
                animationDurationUpdate: 1000,
                animationEasingUpdate: 'cubicInOut',
                title: [{
                    text: '集匠历史访问人数分布',
                    left: 'center',
                    textStyle: {
                        color: '#fff'
                    }
                }, {
                    id: 'statistic',
                    text: count ? '平均: ' + parseInt((sum / count).toFixed(4)) : '',
                    right: 120,
                    top: 40,
                    width: 100,
                    textStyle: {
                        color: '#fff',
                        fontSize: 16
                    }
                }],
                toolbox: {
                    iconStyle: {
                        normal: {
                            borderColor: '#fff'
                        },
                        emphasis: {
                            borderColor: '#b1e4ff'
                        }
                    },
                    feature: {
                        dataZoom: {},
                        brush: {
                            type: ['rect', 'polygon', 'clear']
                        },
                        saveAsImage: {
                            show: true
                        }
                    }
                },
                brush: {
                    outOfBrush: {
                        color: '#abc'
                    },
                    brushStyle: {
                        borderWidth: 2,
                        color: 'rgba(0,0,0,0.2)',
                        borderColor: 'rgba(0,0,0,0.5)',
                    },
                    seriesIndex: [0, 1],
                    throttleType: 'debounce',
                    throttleDelay: 300,
                    geoIndex: 0
                },
                geo: {
                    map: 'china',
                    left: '10',
                    right: '35%',
                    center: [117.98561551896913, 31.205000490896193],
                    zoom: 0.7,
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor: '#323c48',
                            borderColor: '#111'
                        },
                        emphasis: {
                            areaColor: '#2a333d'
                        }
                    }
                },
                tooltip: {
                    trigger: 'item'
                },
                grid: {
                    right: 40,
                    top: 100,
                    bottom: 40,
                    width: '30%'
                },
                xAxis: {
                    type: 'value',
                    scale: true,
                    position: 'top',
                    boundaryGap: false,
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        margin: 2,
                        textStyle: {
                            color: '#aaa'
                        }
                    },
                },
                yAxis: {
                    type: 'category',
                    //  name: 'TOP 20',
                    nameGap: 16,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#ddd'
                        }
                    },
                    axisTick: {
                        show: false,
                        lineStyle: {
                            color: '#ddd'
                        }
                    },
                    axisLabel: {
                        interval: 0,
                        textStyle: {
                            color: '#ddd'
                        }
                    },
                    data: categoryData
                },
                series: [{
                    // name: 'pm2.5',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertedData[0],
                    symbolSize: function (val) {
                        return Math.max(val[2] / 300, 8);
                    },
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#FF8C00',
                            position: 'right',
                            show: true
                        }
                    }
                }, {
                    //  name: 'Top 5',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: convertedData[0],
                    symbolSize: function (val) {
                        return Math.max(val[2] / 500, 8);
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#f4e925',
                            shadowBlur: 50,
                            shadowColor: '#EE0000'
                        }
                    },
                    zlevel: 1
                }, {
                    id: 'bar',
                    zlevel: 2,
                    type: 'bar',
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            color: '#ddb926'
                        }
                    },

                    data: vm.mapData
                }]
            };



            function renderBrushed(params) {
                var mainSeries = params.batch[0].selected[0];

                var selectedItems = [];
                var categoryData = [];
                var barData = [];
                var maxBar = 30;
                var sum = 0;
                var count = 0;

                for (var i = 0; i < mainSeries.dataIndex.length; i++) {
                    var rawIndex = mainSeries.dataIndex[i];
                    var dataItem = convertedData[0][rawIndex];
                    var pmValue = dataItem.value[2];

                    sum += pmValue;
                    count++;

                    selectedItems.push(dataItem);
                }

                selectedItems.sort(function (a, b) {
                    //   return b.value[2] - a.value[2];
                    return a.value - b.value;
                });

                for (var i = 0; i < Math.min(selectedItems.length, maxBar) ; i++) {
                    categoryData.push(selectedItems[i].name);
                    barData.push(selectedItems[i].value[2]);
                }

                this.setOption({
                    yAxis: {
                        data: categoryData
                    },
                    xAxis: {
                        axisLabel: {
                            show: !!count
                        }
                    },
                    title: {
                        id: 'statistic',
                        text: count ? '平均: ' + (sum / count).toFixed(4) : ''
                    },
                    series: {
                        id: 'bar',
                        //        sort:'descending',
                        data: barData
                    }
                });
            }

            myChart.setOption(option);
            window.onresize = myChart.resize;


        }

        //热搜品类

        function getData() {


            pluginService.showDataLoading('#widget_product_count');
            // call service
            productDataFactory.getCountByCategory()
                .success(function (data) {
                    vm.productCountItems = data;
                    for (var i = 0; i < data.length; i++) {
                        vm.newCategoryJson.push({
                            value: data[i].productCount,
                            name: data[i].category
                        })
                        vm.category.push(data[i].category);
                        vm.categoryCount.push(data[i].productCount);
                    }
                    initTopChart()
                    // close data loading
                    pluginService.closeDataLoading('#widget_product_count');
                });
        }

        function initTopChart() {

            var hotcategoryChart = echarts.init(document.getElementById('charthotCategory'));
            //    var hotbrandChart = echarts.init(document.getElementById('charthotBrand'));
            var productCategoryChart = echarts.init(document.getElementById('chartProductCategory'));

            hotcategoryOption = {

                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        name: '品类',
                        type: 'category',
                        data: vm.category,
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLabel: {
                            interval: 0,
                            textStyle: {
                                fontSize: 6// 让字体变大
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '浏览数量',
                        type: 'bar',
                        barWidth: '60%',
                        data: vm.categoryCount,
                        axisLabel: {
                            textStyle: {
                                fontSize: 12 // 让字体变大
                            }
                        }
                    }
                ]
            };

            hotcategoryChart.setOption(hotcategoryOption);
            window.onresize = hotcategoryChart.resize;

            productCategoryOption = option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data: vm.category,
                    textStyle: {
                fontSize: 10 // 让字体变大
            }
                },
                series: [
                    {
                        name: '产品构成',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: vm.newCategoryJson
                    }
                ]
            };


            productCategoryChart.setOption(productCategoryOption);
            window.onresize = productCategoryChart.resize;

        }


        function getProducts() {
            productDataFactory.getNewProducts(0, 10)
                .success(function (data) {
                    vm.products = data;
                })
                .error(function (error) {

                });

        }


        function getByCategory(categoryId, pageIndex, pageSize) {
            productDataFactory.getByCategory(categoryId, pageIndex, pageSize)
                .success(function (data) {
                    vm.products = data;
                })
                .error(function (error) {

                });

        }
    }

})(angular.module('gbmono'));