
/*
    product search page controller
*/
(function (module) {
    // inject the controller params
    ctrl.$inject = ['$scope', 'productDataFactory', '$routeParams'];

    // create controller
    module.controller('categoryProductController', ctrl);

    // controller body
    function ctrl($scope, productDataFactory, $routeParams) {
        var vm = this;

        vm.categoryName = "";
        vm.categoryId = $routeParams.id ? parseInt($routeParams.id) : 0;
        vm.categoryName = $routeParams.name ? $routeParams.name : "";

        var addjson = {
             
        }
        init();

        

        function init() {
            categoryGrid();
            writeCategory();
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
          
        }


        $scope.fn = {
            toggleDetailColum: function () {
                $scope.showDetailColum = !$scope.showDetailColum;
            },
            showTree: function () {
                var hideTree = function (text) {
                    var isExit = false;
                    if (text == vm.categoryName) {
                        isExit = true;
                    }
                    if (!isExit) {
                        vm.categoryName = text;
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
                        reload($(this).attr("data-id"));
                    }
                    return false;
                });
            }
        }

        function writeCategory() {
            console.log(vm.categoryId);
            reload(vm.categoryId);
            //var categoryGrid = new categoryGrid();

            //$scope.$apply();
        }

        function reload(categoryId) {
            console.log(categoryId)
            productDataFactory.getByCategory(categoryId)
                .success(function (data) {
                    console.log(data)

                    for (var i = 0; i < data.length; i++) {
                        data[i].activePopulation= parseInt(Math.random() * 45000 + 1);
                        //data[i].activeIncrease= (Math.random() > 0.5);
                        data[i].scanTimes= parseInt(Math.random() * 19900 + 1);
                        data[i].scanTimesIncrease= (Math.random() > 0.5);
                        data[i].searchTimes= parseInt(Math.random() * 9900 + 1);
                        data[i].searchTimesIncrease= (Math.random() > 0.5);
                        data[i].collectTimes= parseInt(Math.random() * 4990 + 1);
                        data[i].collectTimesIncrease= (Math.random() > 0.5);
                        data[i].attentionIndex= 5;
                        data[i].attentionIndexIncrease = (Math.random() > 0.5);
                        data[i].linkGrowth = (Math.random() * 5).toFixed(2) + "%";
                        data[i].linkGrowthIncrease = (Math.random() > 0.5);
                    }
                    vm.productsTable = data;
                });
        }
    }
})(angular.module('gbmono'));
