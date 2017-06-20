(function (module) {
    // inject the controller params
    ctrl.$inject = ['pluginService', 'productDataFactory'];

    // create controller
    module.controller('newDashboardController', ctrl);

    // controller body

    function ctrl(pluginService, productDataFactory) {
        var vm = this;

        
        var areaList = [
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
        vm.products = [];
        vm.chartdata = []
        vm.productCountItems = [];
        vm.category = [];
        vm.categoryCount = [];
        vm.newCategoryJson = [];
        vm.mapData = areaList;
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
            getData();
            initArea();
            catory();
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
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                //legend: {
                //    data: ['2012年']
                //},
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    name: '浏览数量',
                    type: 'value',
                    boundaryGap: [0, 0.01],
                    axisLabel: { //调整x轴的lable  
                        textStyle: {
                            fontSize: 12 // 让字体变大
                        }
                    }
                },
                yAxis: {
                    name: '品类',
                    type: 'category',
                    data: vm.category,
                    axisLabel: { //调整y轴的lable  
                        textStyle: {
                            fontSize: 12 // 让字体变大
                        }
                    }
                },
                series: [
                    {
                        name: '浏览数量',
                        type: 'bar',
                        barWidth: 10,
                        data: vm.categoryCount,
                    }
                ],
                itemStyle: {
                    normal: {
                        color: '#249CFA',
                    }
                },
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

        function initArea() {
            var myChart = echarts.init(document.getElementById('chartArea'));
            function randomData() {
                return Math.round(Math.random() * 45000);
            }

            option = {
                title: {
                    text: '会员地域分布图',
                    subtext: '单位：人',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                },
                //legend: {
                //    orient: 'vertical',
                //    left: 'left',
                //    data: ['2016年']
                //},
                visualMap: {
                    min: 0,
                    max: 45000,
                    left: 'left',
                    top: 'bottom',
                    text: ['高', '低'],           // 文本，默认为数值文本
                    color: ['#70b3fb', '#efefef'],
                    calculable: true
                },
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    left: 'right',
                    top: 'center',
                    feature: {
                        dataView: { readOnly: false },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                series: [
                    {
                        //name: '2016年',
                        type: 'map',
                        mapType: 'china',
                        roam: false,
                        label: {
                            normal: {
                                show: true
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        data: [
                            { name: '北京', value: randomData() },
                            { name: '天津', value: randomData() },
                            { name: '上海', value: randomData() },
                            { name: '重庆', value: randomData() },
                            { name: '河北', value: randomData() },
                            { name: '河南', value: randomData() },
                            { name: '云南', value: randomData() },
                            { name: '辽宁', value: randomData() },
                            { name: '黑龙江', value: randomData() },
                            { name: '湖南', value: randomData() },
                            { name: '安徽', value: randomData() },
                            { name: '山东', value: randomData() },
                            { name: '新疆', value: randomData() },
                            { name: '江苏', value: randomData() },
                            { name: '浙江', value: randomData() },
                            { name: '江西', value: randomData() },
                            { name: '湖北', value: randomData() },
                            { name: '广西', value: randomData() },
                            { name: '甘肃', value: randomData() },
                            { name: '山西', value: randomData() },
                            { name: '内蒙古', value: randomData() },
                            { name: '陕西', value: randomData() },
                            { name: '吉林', value: randomData() },
                            { name: '福建', value: randomData() },
                            { name: '贵州', value: randomData() },
                            { name: '广东', value: randomData() },
                            { name: '青海', value: randomData() },
                            { name: '西藏', value: randomData() },
                            { name: '四川', value: randomData() },
                            { name: '宁夏', value: randomData() },
                            { name: '海南', value: randomData() },
                            { name: '台湾', value: randomData() },
                            { name: '香港', value: randomData() },
                            { name: '澳门', value: randomData() }
                        ]
                    },


                ]
            };
            myChart.setOption(option);
            window.onresize = myChart.resize;
        }
        
        function catory() {
            var myChart = echarts.init(document.getElementById('chartCatery'));    
            option = {
                title: {
                    text: "",
                },
                tooltip: {},
                series: [{
                    type: 'wordCloud',
                    gridSize: 20,
                    sizeRange: [12, 50],
                    rotationRange: [0, 0],
                    shape: 'circle',
                    textStyle: {
                        normal: {
                            color: function () {
                                return 'rgb(' + [
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160)
                                ].join(',') + ')';
                            }
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    data: [{
                        name: '化妆水',
                        value: 10000,
                        textStyle: {
                            normal: {
                                color: 'black'
                            },
                            emphasis: {
                                color: 'red'
                            }
                        }
                    }, {
                        name: '美容液',
                        value: 6181
                    }, {
                        name: '厨房·餐具洗涤类',
                        value: 4386
                    }, {
                        name: '婴儿食品·奶粉',
                        value: 4055
                    }, {
                        name: '其他基础化妆品',
                        value: 2467
                    }, {
                        name: '糖果·饮料·果冻',
                        value: 2244
                    }, {
                        name: '面膜霜·面膜',
                        value: 1898
                    }, {
                        name: '养老用品·用具',
                        value: 1484
                    }, {
                        name: '防虫剂·除湿·干燥剂',
                        value: 1112
                    }, {
                        name: '减肥·美容',
                        value: 965
                    }, {
                        name: '浴室·卫生间用品',
                        value: 847
                    }, {
                        name: '女性用药',
                        value: 582
                    }, {
                        name: '公共卫生用药',
                        value: 555
                    }, {
                        name: '汉方药·中草药',
                        value: 550
                    }, {
                        name: '洗涤·晾干用品',
                        value: 462
                    }, {
                        name: '加工食品',
                        value: 366
                    }, {
                        name: '酒类',
                        value: 360
                    }, {
                        name: '其他家庭用品',
                        value: 282
                    }, {
                        name: '园艺用品',
                        value: 273
                    }, {
                        name: '其他食品',
                        value: 265
                    }]
                }]
            };
            myChart.setOption(option);
            window.onresize = myChart.resize;
        }
     
    }

})(angular.module('gbmono'));