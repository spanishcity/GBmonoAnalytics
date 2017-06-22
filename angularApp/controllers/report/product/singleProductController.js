(function (module) {
    // inject the controller params
    ctrl.$inject = ['$scope','$filter', 'productDataFactory'];

    // create controller
    module.controller('singleProductController', ctrl);

    // controller body

    function ctrl($scope, $filter, productDataFactory) {
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
        var buildUser = function () {
            return [{
                userId: '用户' + parseInt(Math.random() * 9999 + 1),
                userSex: (Math.random() > 0.5 ? '男' : '女'),
                userAge: 25,
                userArea: areaList[parseInt(Math.random() * 36)].name,
                userActive: parseInt(Math.random() * 100 + 1),
                userCategory: "化妆水",
            }, {
                userId: '用户' + parseInt(Math.random() * 9999 + 1),
                userSex: parseInt(Math.random() * 50 + 1),
                userAge: 33,
                userArea: areaList[parseInt(Math.random() * 36)].name,
                userActive: parseInt(Math.random() * 100 + 1),
                userCategory: "美容液",
            }, {
                userId: '用户' + parseInt(Math.random() * 9999 + 1),
                userSex: (Math.random() > 0.5 ? '男' : '女'),
                userAge: 45,
                userArea: areaList[parseInt(Math.random() * 36)].name,
                userActive: parseInt(Math.random() * 100 + 1),
                userCategory: "厨房·餐具洗涤类",
            }, {
                userId: '用户' + parseInt(Math.random() * 9999 + 1),
                userSex: (Math.random() > 0.5 ? '男' : '女'),
                userAge: 31,
                userArea: areaList[parseInt(Math.random() * 36)].name,
                userActive: parseInt(Math.random() * 100 + 1),
                userCategory: "婴儿食品·奶粉",
            }, {
                userId: '用户' + parseInt(Math.random() * 9999 + 1),
                userSex: (Math.random() > 0.5 ? '男' : '女'),
                userAge: 37,
                userArea: areaList[parseInt(Math.random() * 36)].name,
                userActive: parseInt(Math.random() * 100 + 1),
                userCategory: "糖果·饮料·果冻",
            }, {
                userId: '用户' + parseInt(Math.random() * 999 + 1),
                userSex: (Math.random() > 0.5 ? '男' : '女'),
                userAge: 28,
                userArea: areaList[parseInt(Math.random() * 36)].name,
                userActive: parseInt(Math.random() * 100 + 1),
                userCategory: "面膜霜·面膜",
            }, {
                userId: '用户' + parseInt(Math.random() * 999 + 1),
                userSex: (Math.random() > 0.5 ? '男' : '女'),
                userAge: 32,
                userArea: areaList[parseInt(Math.random() * 36)].name,
                userActive: parseInt(Math.random() * 100 + 1),
                userCategory: "养老用品·用具",
            }, {
                userId: '用户' + parseInt(Math.random() * 999 + 1),
                userSex: (Math.random() > 0.5 ? '男' : '女'),
                userAge: 38,
                userArea: areaList[parseInt(Math.random() * 36)].name,
                userActive: parseInt(Math.random() * 100 + 1),
                userCategory: "防虫剂·除湿·干燥剂",
            }, {
                userId: '用户' + parseInt(Math.random() * 999 + 1),
                userSex: (Math.random() > 0.5 ? '男' : '女'),
                userAge: 36,
                userArea: areaList[parseInt(Math.random() * 36)].name,
                userActive: parseInt(Math.random() * 100 + 1),
                userCategory: "减肥·美容",
            }, {
                userId: '用户' + parseInt(Math.random() * 999 + 1),
                userSex: (Math.random() > 0.5 ? '男' : '女'),
                userAge: 34,
                userArea: areaList[parseInt(Math.random() * 36)].name,
                userActive: parseInt(Math.random() * 100 + 1),
                userCategory: "浴室·卫生间用品",
            }, {
                userId: '用户' + parseInt(Math.random() * 999 + 1),
                userSex: (Math.random() > 0.5 ? '男' : '女'),
                userAge: 32,
                userArea: areaList[parseInt(Math.random() * 36)].name,
                userActive: parseInt(Math.random() * 100 + 1),
                userCategory: "女性用药",
            }, {
                userId: '用户' + parseInt(Math.random() * 999 + 1),
                userSex: (Math.random() > 0.5 ? '男' : '女'),
                userAge: 39,
                userArea: areaList[parseInt(Math.random() * 36)].name,
                userActive: parseInt(Math.random() * 100 + 1),
                userCategory: "公共卫生用药",
            }
            ];
        }

        $scope.graphView = true;
        $scope.userTable = buildUser();


        $scope.fn = {
            reBuildData: function () {
                $scope.userTable = buildUser();
                init();
            }
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


        //条形码搜索内容
        vm.search = {
            value:""
        };
        vm.productName = "";
        vm.search.value ="";
        // reload data
        vm.reload = function () {
            vm.searchModel = {
                barCode: vm.search.value,
                fullProductCode: ""
            };
            if (vm.searchModel.barCode != "")
                productDataFactory.search(vm.searchModel)
                                    .success(function (data) {
                                        console.log(data)
                                        if (data.length == 0) {
                                            alert("条形码不存在！");
                                        }
                                        // kendo grid callback
                                        vm.productName = data[0].primaryName;
                                        vm.secCategory = data[0].category.parentCategory.name;
                                        vm.thirdCategory = data[0].category.name;
                                        init();
                                    });
            // parent grid

        }

       
        vm.dateTime = "--选择时间--";

        vm.date = [
           "--选择时间--",
           "2017/01",
           "2017/02",
           "2017/03",
           "2017/04",
           "2017/05"
        ]

        init();



        function init() {

            //getProducts();
            //getByCategory(1000, 0, 10);
            //initTopChart();
            setTimeout(function () {
                initSingle();
                initSex();
                initAge();
                initArea();
            })
            //initCatery();
            //词云echarts3已经没有，echarts2中有词云，使用的是echarts3。
            // catory();
        }

        function initSingle() {
            var myChart = echarts.init(document.getElementById('singleCategory'));
            option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { type: 'cross' }
                },
                toolbox: {
                    feature: {
                        dataView: { show: true, readOnly: false },
                        magicType: { show: true, type: ['line', 'bar'] },
                        restore: { show: true },
                        saveAsImage: { show: true }
                    }
                },
                legend: {
                    data: ['单品', '三级品类', '关注人数']
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['2017/01/01', '2017/01/08', '2017/01/15', '2017/01/22', '2017/01/29',
                                    '2017/02/05', '2017/02/12', '2017/02/19', '2017/02/26', '2017/03/06', '2017/03/13', '2017/03/20'
                        ]
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: 'GBmono关注度',
                        min: 0,
                        max: 5,
                        interval: 1,
                        axisLabel: {
                            formatter: '{value}'
                        }
                    },
                    {
                        type: 'value',
                        name: '人数',
                        min: 0,
                        max: 20,
                        interval: 2,
                        axisLabel: {
                            formatter: '{value} w'
                        }
                    }
                ],
                series: [
                    {
                        name: '单品',
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: '#249CFA',
                            }
                        },
                        data: [1, 2, 3, 4, 4, 3, 4, 5, 4, 5, 4, 4]
                    },
                    {
                        name: '三级品类',
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: '#AAACB2',
                            }
                        },
                        data: [1, 2, 3, 2, 1, 3, 2, 1, 3, 3, 2, 1]
                    },
                    {
                        name: '关注人数',
                        type: 'line',
                        smooth: true,
                        symbol: 'none',
                        yAxisIndex: 1,
                        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 12, 14.4, 12.0, 9.5, 12.0, 6.2]
                    }
                ]
            };
            myChart.setOption(option);
            window.onresize = myChart.resize;
        }

        function initSex() {
            var myChart = echarts.init(document.getElementById('chartSex'));
            option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'right',
                    data: ['男', '女'],
                    formatter: function (name) {
                        var oa = option.series[0].data;
                        var num = oa[0].value + oa[1].value;
                        for (var i = 0; i < option.series[0].data.length; i++) {
                            if (name == oa[i].name) {
                                return name + '     ' + oa[i].value + '     ' + (oa[i].value / num * 100).toFixed(2) + '%';
                            }
                        }
                    }
                },
                series: [{
                    name: '用户属性',
                    type: 'pie',
                    radius: '55%',
                    center: ['40%', '50%'],
                    data: [{
                        value: 310,
                        name: '男'
                    }, {
                        value: 434,
                        name: '女'
                    }],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                //	                            position:'inside',
                                formatter: '{b} : {c} ({d}%)'
                            }
                        },
                        labelLine: {
                            show: true
                        }
                    }
                }],
                color: ['#249CFA', '#F46767']
            };
            myChart.setOption(option);
            window.onresize = myChart.resize;
        }

        function initAge() {
            var myChart = echarts.init(document.getElementById('chartAge'));
            option = {
                title: {
                    text: '年龄分布',
                    //subtext: '数据来自网络'
                },
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
                    type: 'value',
                    boundaryGap: [0, 0.01],
                    axisLabel: { //调整x轴的lable  
                        textStyle: {
                            fontSize: 12 // 让字体变大
                        }
                    }
                },
                yAxis: {
                    type: 'category',
                    data: ['18岁以下', '18-28岁', '28-38岁', '38-48岁', '48-58岁', '58岁以上'],
                    axisLabel: { //调整y轴的lable  
                        textStyle: {
                            fontSize: 12 // 让字体变大
                        }
                    }
                },
                series: [
                    {
                        name: '2012年',
                        type: 'bar',
                        barWidth: 10,
                        data: [parseInt(Math.random() * 100 + 1800),
                            parseInt(Math.random() * 300 + 15000),
                            parseInt(Math.random() * 500 + 25000),
                            parseInt(Math.random() * 300 + 18000),
                            parseInt(Math.random() * 200 + 4000),
                            parseInt(Math.random() * 100 + 2000)]
                    }
                ],
                itemStyle: {
                    normal: {
                        color: '#249CFA',
                    }
                },
            };


            myChart.setOption(option);
            window.onresize = myChart.resize;
        }

        function initArea() {
            var myChart = echarts.init(document.getElementById('chartArea'));
            function randomData() {
                return Math.round(Math.random() * 1000);
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
                            { name: '北京', value: 21300 },
                            { name: '天津', value: 5816 },
                            { name: '上海', value: 28408 },
                            { name: '重庆', value: 7890 },
                            { name: '河北', value: 7120 },
                            { name: '河南', value: 12406 },
                            { name: '云南', value: 6870 },
                            { name: '辽宁', value: 9845 },
                            { name: '黑龙江', value: 5222 },
                            { name: '湖南', value: 12658 },
                            { name: '安徽', value: 10783 },
                            { name: '山东', value: 16253 },
                            { name: '新疆', value: 3536 },
                            { name: '江苏', value: 31939 },
                            { name: '浙江', value: 33156 },
                            { name: '江西', value: 8684 },
                            { name: '湖北', value: 14803 },
                            { name: '广西', value: 7531 },
                            { name: '甘肃', value: 2880 },
                            { name: '山西', value: 5444 },
                            { name: '内蒙古', value: 3775 },
                            { name: '陕西', value: 7435 },
                            { name: '吉林', value: 4019 },
                            { name: '福建', value: 14269 },
                            { name: '贵州', value: 5106 },
                            { name: '广东', value: 41800 },
                            { name: '青海', value: 600 },
                            { name: '西藏', value: 365 },
                            { name: '四川', value: 16160 },
                            { name: '宁夏', value: 1027 },
                            { name: '海南', value: 2149 },
                            { name: '台湾', value: randomData() },
                            { name: '香港', value: randomData() },
                            { name: '澳门', value: 7 }
                        ]
                    },


                ]
            };
            myChart.setOption(option);
            window.onresize = myChart.resize;

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
                height: 174,
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
                        width: 350
                    },
                ]
            };
        }

    }

})(angular.module('gbmono'));