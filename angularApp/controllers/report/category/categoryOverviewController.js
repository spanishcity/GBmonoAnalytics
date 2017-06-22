
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
            categoryGridFilter();
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
      

        function categoryGridFilter() {
            $scope.categroys = [];
            $scope.fn = {
                toggleDetailColum: function () {
                    $scope.showDetailColum = !$scope.showDetailColum;
                },
                showTree: function () {
                    var hideTree = function (text) {
                        var isExit = false;
                        for (var i in $scope.categroys) {
                            if (text == $scope.categroys[i]) {
                                isExit = true;
                            }
                        }
                        if (!isExit) {
                            $scope.categroys = [];
                            $scope.categroys.push(text);
                        }

                        $scope.showTree = false;
                        $scope.$apply();
                    }
                    var offset = $('#treeTrigger').offset(), location = $('.main-content').offset(), width = $('#treeTrigger').width(),
                        padding = parseInt($('#treeTrigger').css('paddingLeft')) + parseInt($('#treeTrigger').css('paddingRight'));
                    $('#popTree').css({
                        'top': (offset.top - location.top) + 'px',
                        'left': (offset.left - location.left + width + padding) + 'px'
                    });
                    $scope.showTree = true;

                    $('#popTree').find('a').unbind('click').bind('click', function () {
                        var ul = $(this).closest('li').find('ul').eq(0);
                        if (ul.length) {
                            ul.toggle();
                            $(this).siblings('span').toggleClass('k-minus k-plus');
                        } else {
                            hideTree($(this).text());
                            //vm.reload($(this).attr("data-id"));
                        }
                        return false;
                    });
                },
                //removeCategory: function (txt) {
                //    for (var i in $scope.categroys) {
                //        if (txt == $scope.categroys[i]) {
                //            $scope.categroys.splice(i, 1);
                //            break;
                //        }
                //    }
                //}
            }
        }
    }
})(angular.module('gbmono'));
