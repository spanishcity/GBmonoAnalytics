(function (module) {
    // inject the controller params
    ctrl.$inject = ['$scope'];

    // create controller
    module.controller('vipController', ctrl);

    // controller body
    function ctrl($scope){
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
        var buildUser = function(){
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
        
        $scope.filterDates = ['全部', '最近30天', '最近2个月', '最近3个月', '最近6个月'];
        $scope.graphView = true;
        $scope.userTable = buildUser();

        $scope.fn = {
            reBuildData: function(){
                $scope.userTable = buildUser();
                init();
            }
        }

        var vm = this;
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

        vm.resert = function () {
            resertOption();
        }

        function init(){
            initSex();
            initAge();
            initArea();
            catory();
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
                        value: parseInt(Math.random() * 500 + 500),
                        name: '男'
                    }, {
                        value: parseInt(Math.random() * 500 + 500),
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
                        name: new Date().getFullYear() + '年',
                        type: 'bar',
                        barWidth: 10,
                        data: [
                            parseInt(Math.random() * 100 + 5000), 
                            parseInt(Math.random() * 300 + 25000), 
                            parseInt(Math.random() * 500 + 50000), 
                            parseInt(Math.random() * 300 + 35000),
                            parseInt(Math.random() * 200 + 12000), 
                            parseInt(Math.random() * 100 + 8000)
                        ]
                    }
                ],
                 itemStyle:{  
                     normal:{  
                         color: '#249CFA',
                       }  
                }, 
            };


            myChart.setOption(option);
            window.onresize = myChart.resize;
        }

        function initArea(){
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

        function initCatery() {

            var myChart = echarts.init(document.getElementById('chartCatery'));
            option = {
                //backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
                //    offset: 0,
                //    color: '#f7f8fa'
                //}, {
                //    offset: 1,
                //    color: '#cdd0d5'
                //}]),
                title: {
                    text: "品类排名",
                    //subtext: "ZBH",
                    top: "top",
                    left: "center"
                },
                tooltip: {},
                legend: [{
                    formatter: function (name) {
                        return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
                    },
                    tooltip: {
                        show: true
                    },
                    selectedMode: 'false',
                    bottom: 20,
                    data: ['医药品·医药部外品', '美容', '日用杂货', '健康食品', '婴儿用品']
                }],
                toolbox: {
                    show: true,
                    feature: {
                        dataView: {
                            show: true,
                            readOnly: true
                        },
                        restore: {
                            show: true
                        },
                        saveAsImage: {
                            show: true
                        }
                    }
                },
                animationDuration: 3000,
                animationEasingUpdate: 'quinticInOut',
                series: [{
                    name: '品类排名',
                    type: 'graph',
                    layout: 'force',

                    force: {
                        repulsion: 300
                    },
                    data: [{
                        "name": "品类排名",
                        // "x": 0,
                        // y: 0,
                        "symbolSize": 10,
                        "draggable": "true",
                        "value": 27

                    }, {
                        "name": "医药品·医药部外品",
                        "value": 200,
                        "symbolSize": 50,
                        "category": "医药品·医药部外品",
                        "draggable": "true"
                    }, {
                        "name": "精神神经用药",
                        "symbolSize": 40,
                        "category": "医药品·医药部外品",
                        "draggable": "true",
                        "value": 100
                    }, {
                        "name": "呼吸器官用药",
                        "symbolSize": 35,
                        "category": "医药品·医药部外品",
                        "draggable": "true",
                        "value": 60
                    }, {
                        "name": "循环器官用药",
                        "symbolSize": 30,
                        "category": "医药品·医药部外品",
                        "draggable": "true",
                        "value": 40
                    }, {
                        "name": "美容",
                        "value": 190,
                        "symbolSize": 45,
                        "category": "美容",
                        "draggable": "true"
                    }, {
                        "name": "基础护理",
                        "symbolSize": 40,
                        "category": "美容",
                        "draggable": "true",
                        "value": 100
                    }, {
                        "name": "彩妆",
                        "symbolSize": 35,
                        "category": "美容",
                        "draggable": "true",
                        "value": 90
                    }, {
                        "name": "日用杂货",
                        "value": 180,
                        "symbolSize": 40,
                        "category": "日用杂货",
                        "draggable": "true"
                    }, {
                        "name": "口腔卫生用品",
                        "symbolSize": 40,
                        "category": "日用杂货",
                        "draggable": "true",
                        "value": 100
                    }, {
                        "name": "肥皂·沐浴类",
                        "symbolSize": 35,
                        "category": "日用杂货",
                        "draggable": "true",
                        "value": 80
                    }, {
                        "name": "健康食品",
                        "value": 170,
                        "symbolSize": 35,
                        "category": "健康食品",
                        "draggable": "true"
                    }, {
                        "name": "减肥·美容",
                        "symbolSize": 40,
                        "category": "健康食品",
                        "draggable": "true",
                        "value": 90
                    }, {
                        "name": "维生素·矿物质·氨基酸·蛋白质",
                        "symbolSize": 35,
                        "category": "健康食品",
                        "draggable": "true",
                        "value": 80
                    }, {
                        "name": "婴儿用品",
                        "value": 160,
                        "symbolSize": 30,
                        "category": "婴儿用品",
                        "draggable": "true"
                    }, {
                        "name": "婴儿用纸尿裤",
                        "symbolSize": 40,
                        "category": "婴儿用品",
                        "draggable": "true",
                        "value": 160
                    }],
                    links: [{
                        "source": "品类排名",
                        "target": "医药品·医药部外品"
                    }, {
                        "source": "医药品·医药部外品",
                        "target": "精神神经用药"
                    }, {
                        "source": "医药品·医药部外品",
                        "target": "呼吸器官用药"
                    }, {
                        "source": "医药品·医药部外品",
                        "target": "循环器官用药"
                    }, {
                        "source": "品类排名",
                        "target": "美容"
                    }, {
                        "source": "美容",
                        "target": "基础护理"
                    }, {
                        "source": "美容",
                        "target": "彩妆"
                    }, {
                        "source": "品类排名",
                        "target": "日用杂货"
                    }, {
                        "source": "日用杂货",
                        "target": "口腔卫生用品"
                    }, {
                        "source": "日用杂货",
                        "target": "肥皂·沐浴类"
                    }, {
                        "source": "品类排名",
                        "target": "健康食品"
                    }, {
                        "source": "健康食品",
                        "target": "减肥·美容"
                    }, {
                        "source": "健康食品",
                        "target": "维生素·矿物质·氨基酸·蛋白质"
                    }, {
                        "source": "品类排名",
                        "target": "婴儿用品"
                    }, {
                        "source": "婴儿用纸尿裤",
                        "target": "婴儿用品"
                    }],
                    categories: [{
                        'name': '医药品·医药部外品'
                    }, {
                        'name': '美容'
                    }, {
                        'name': '日用杂货'
                    }, {
                        'name': '健康食品'
                    }, {
                        'name': '婴儿用品'
                    }],
                    focusNodeAdjacency: true,
                    roam: true,
                    label: {
                        normal: {

                            show: true,
                            position: 'top',

                        }
                    },
                    lineStyle: {
                        normal: {
                            color: 'source',
                            curveness: 0,
                            type: "solid"
                        }
                    }
                }]
            };
            myChart.setOption(option);
            window.onresize = myChart.resize;
        }

        function createRandomItemStyle(){ 
            return {
                normal: {
                    color: 'rgb(' + [
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160)
                    ].join(',') + ')'
                }
            };
        }
        //词云  品类排行
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
            myChart.on('click', function(res){
                var mappingUrl = {
                    '化妆水': 'http://www.baidu.com'
                }
                window.location.href = mappingUrl[res.name];
            });
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
                            interval: 0
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
                        data: vm.categoryCount
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
                    data: vm.category
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

        //重新加载echarts
        function resertOption() {
            console.log(111)
        }
    }

})(angular.module('gbmono'));