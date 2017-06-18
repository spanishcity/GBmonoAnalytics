(function (module) {
    // inject the controller params
    ctrl.$inject = ['$filter'];

    // create controller
    module.controller('singleProductController', ctrl);

    // controller body

    function ctrl($filter) {
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

        vm.reload = function () { 
        }

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
            {
                title: "GBmono关注度",
                body: "<a class='gbmonoFilter-click' href=''>关注度指标</a>&nbsp;&nbsp;<a class='gbmonoFilter' href=''>扫码次数</a>&nbsp;&nbsp;<a class='gbmonoFilter' href=''>收藏次数</a>&nbsp;&nbsp;<a class='gbmonoFilter' href=''>搜索次数</a>&nbsp;&nbsp;<a class='gbmonoFilter' href=''>分享次数</a>"
            },
            {
                title: "日期选择",
                body: "<div class='categoryTop-line col-md-1'><a href='' ng-click=''>最近 30 天</a></div><div class='categoryTop-line col-md-1'><a href='' ng-click=''>最近2个月</a></div><div class='categoryTop-line col-md-1'><a href='' ng-click=''>最近3个月</a></div><div class='categoryTop-line col-md-1'><a href='' ng-click=''>最近6个月</a></div><div class='col-md-2 col-xs-12 categoryTop-line'><select style='padding-top:0;padding-bottom:0' id='nnn' class='col-md-12 col-xs-12 ' ng-options='date for date in vm.date' ng-model='vm.dateTime' ng-change='vm.dateChange()'></select></div>"
            }
        ]
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
            initSingle();
            initSex();
            //initChinaChart();
            initAge();
            initArea();
            //initCatery();
            //词云echarts3已经没有，echarts2中有词云，使用的是echarts3。
            // catory();
        }

        function initSingle() {
            var myChart = echarts.init(document.getElementById('singleCategory'));
            option = {
                color: ['#249CFA', '#CECECE'],
                tooltip: {
                    trigger: 'axis',
                    textStyle: {
                        fontSize: 15,
                        color: "#fff",
                    }
                },
                legend: {
                    orient: 'horizontal',
                    right: "4%",
                    itemGap: 20,
                    //itemWidth:16,
                    //itemHeight:12,
                    data: ['粉底', '彩妆', ],
                    textStyle: {
                        color: 'black',
                    }
                },

                grid: {
                    show: true,
                    left: 60,
                    top: 34,
                    right: 44,
                    bottom: 42,
                    borderWidth: 1,
                    borderColor: 'rgba(170,172,178,0.33)',
                    backgroundColor: '#fff',
                },
                calculable: true,
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    //在（type: 'category'）中设置data有效
                    data: ['2016/01/01', '2016/01/08', '2016/01/15', '2016/01/22', '2016/01/29',
                        '2016/02/05', '2016/02/12', '2016/02/19', '2016/02/26'
                    ],


                }],
                yAxis: [{
                    type: 'value',
                    min: 0,
                    max: 100,
                    splitLine: {
                        //show:false
                        lineStyle: {
                            color: 'rgba(36, 156, 250)',
                            width: 1,
                            type: 'solid'
                        }

                    },

                }],
                series: [{
                    name: '粉底',
                    type: 'line',
                    smooth: true, //是否平滑曲线显示
                    symbol: 'none',
                    lineStyle: { //线条样式 
                        normal: {
                            width: 1,
                        }
                    },
                    areaStyle: { //区域填充样式
                        normal: {
                            //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(234, 244, 255,1.0)'
                            }, ], false),

                            shadowColor: 'rgba(0, 0, 0, 0.1)', //阴影颜色
                            shadowBlur: 0 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                        }
                    },
                    data: [20.00, 1.22, 31.21, 5.40, 0.60, 26.30, 11.50, 24.42, 12.92]
                },
                {
                    name: '彩妆',
                    type: 'line',
                    smooth: true,
                    symbol: 'none',
                    lineStyle: {
                        normal: {
                            width: 1
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(250, 250, 250, 0.9)'
                            }, ], false),
                            //shadowColor: 'rgba(0,0, 0, 0.1)',
                            shadowBlur: 0
                        }
                    },
                    data: [11.30, 8.12, 11, 34, 23.61, 4.13, 13.30, 13.01, 5.94, 12.30]
                },
                ] //series结束
            }; // option结束
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
                        data: [23438, 30000, 31000, 68807, 13141, 15264]
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