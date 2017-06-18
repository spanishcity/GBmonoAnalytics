﻿/*
    article list controller
*/
(function (module) {
    // inject the controller params
    ctrl.$inject = ['$scope',
                    '$filter',
                    '$location',
                    'pluginService',
                    'articleDataFactory'];

    // create controller
    module.controller('articleListController', ctrl);

    // controller body
    function ctrl($scope,
                  $filter,
                  $location,
                  pluginService,
                  articleDataFactory) {

        var vm = this;

        // new article
        vm.newArticle = { articleTypeId : 1}; // default  selection
        // article types
        vm.articleTypes = [{ name: "行业", value: 1 },
                               { name: "店铺", value: 2 },
                               { name: "产品", value: 3 },
                               { name: "其他", value: 4 } ]
        // filter
        vm.filter = {
            from: $filter('date')(new Date().setDate(new Date().getDate() - 7), 'yyyy-MM-dd'),
            to: $filter('date')(new Date(), 'yyyy-MM-dd'),
            type: 1
        };

        // page init
        init();

        // reload data
        vm.reload = function () {
            $scope.grid.dataSource.read();
        };

        // open create window
        vm.openCreateWin = function () {
            vm.winCreate.open();
        };

        // create new article
        vm.create = function () {
            createArticle(vm.newArticle);
        };

        // delete article
        vm.delete = function (id) {
            var r = confirm('Are you sure to delete? ');
            if (r) {
                deleteArticle(id);
            }
        };

        function init() {
            bindArticleGrid();
        }

        // retreive brand data and binding it into kendo grid
        function bindArticleGrid() {
            // init kendo ui grid with brand data
            vm.mainGridOptions = {
                dataSource: {
                    transport: {
                        read: function (e) {
                            articleDataFactory.getByDate(vm.filter.from, vm.filter.to, vm.filter.type)
                                .success(function (data) {
                                    // call back
                                    e.success(data);
                                });
                        }
                    }
                },
                pageable: {
                    numeric: false,
                    previousNext: false,
                    messages: {
                        display: "总计: {2}"
                    }
                },
                sortable: true,
                height: 650,
                filterable: false,
                columns: [
                    { field: "title", title: "标题" },
                    {
                        field: "createdDate", title: "创建日期", width: 100,
                        template: "#= kendo.toString(kendo.parseDate(createdDate), 'yyyy-MM-dd') #"
                    },
                    { field: "createdBy", title: "创建用户", width: 150 },
                    {
                        field: "modifiedDate", title: "修改日期", width: 100,
                        template: "#= kendo.toString(kendo.parseDate(modifiedDate), 'yyyy-MM-dd') #"
                    },
                    { field: "modifiedBy", title: "修改用户", width: 150 },
                    {
                        template: '<a class="btn btn-xs btn-info" ng-href="\\#/articles/edit/#=articleId#" target="_blank"><i class="ace-icon fa fa-pencil bigger-120"></i></a>&nbsp;&nbsp;' +
                                  '<button class="btn btn-xs btn-danger" ng-click="delete(dataItem.articleId)"><i class="ace-icon fa fa-trash-o bigger-120"></i></button>', width: 100
                    }
                ]
            };
        }

        // create new article with title only
        function createArticle(article) {
            articleDataFactory.create(article)
                .success(function (data) {
                    // redirect into edit page
                    $location.path('/articles/edit/' + data);
                })
                .error(function (error) {
                    pluginService.notify('error', error);
                });
        }

        // delete article
        function deleteArticle(id) {
            articleDataFactory.del(id)
                .success(function () {
                    // reload data
                    vm.grid.dataSource.read();
                })
                .error(function (error) {
                    pluginService.notify(error, 'error')
                });
        }
    }
})(angular.module('gbmono'));

/*
    article edit controller
*/
(function (module) {
    // inject the controller params
    ctrl.$inject = ['$routeParams',
                    'utilService',
                    'pluginService',
                    'articleDataFactory',
                    'tagDataFactory'];

    // create controller
    module.controller('articleEditController', ctrl);

    // controller body
    function ctrl($routeParams,
                  utilService,
                  pluginService,
                  articleDataFactory,
                  tagDataFactory) {

        var vm = this;

        // retreive id from url
        var articleId = $routeParams.articleId ? parseInt($routeParams.articleId) : 0;

        // edit model
        vm.editArticle = {};

        // kendo multiple selection options
        vm.selectOptions = {};

        // selected product tag ids
        vm.selectedTagIds = [];

        // retreive token from local storage
        var token = utilService.getToken();

        // page init
        init();

        // event handlers
        vm.update = function () {
            // read content from kendo editor
            var content = $('#content').val();

            // convert into html
            var html = $('#content').html(content).text();
            
            // update html content
            vm.editArticle.content = html;
            
            // update
            save(vm.editArticle);
        };

        function init() {
            // kendo multi-selection
            bindTagSelection();

            // load article
            getArticleById(articleId);
        }

        // init kendo editor
        function initKendoEditor() {
            $("#content").kendoEditor(
                {
                    tools: [
                        "bold",
                        "italic",
                        "underline",
                        "strikethrough",
                        "justifyLeft",
                        "justifyCenter",
                        "justifyRight",
                        "justifyFull",
                        "insertUnorderedList",
                        "insertOrderedList",
                        "indent",
                        "outdent",
                        "createLink",
                        "unlink",
                        "insertImage",
                        "createTable",
                        "addRowAbove",
                        "addRowBelow",
                        "addColumnLeft",
                        "addColumnRight",
                        "deleteRow",
                        "deleteColumn",
                        "viewHtml",
                        "formatting",
                        "cleanFormatting",
                        //"fontName",
                        //"fontSize",
                        "print"
                    ],
                    imageBrowser: {
                        messages: {
                            dropFilesHere: "Drop files here"
                        },
                        transport: {
                            //destroy: {
                            //    url: gbmono.api_site_prefix.article_api_url + "/DeleteImage",
                            //    type: "POST"
                            //},
                            read: { // image list browse
                                url: function () {                     
                                    return gbmono.api_site_prefix.article_api_url + "/BrowseImages/" + articleId;
                                },
                                headers: { Authorization: 'Bearer ' + token } // bear token
                            },
                            thumbnailUrl: function (path, name) { // each single thubnail
                                return gbmono.img_article_path + articleId + '/' + 'thumbnails' + '/' + name;
                            },                            
                            uploadUrl: gbmono.api_site_prefix.article_api_url + "/Upload/" + articleId, // upload image action
                            imageUrl: gbmono.img_article_path +  articleId + '/{0}'  // selected image url                           
                        }
                    },
                    execute: function (e) {
                        // attach bearer token into request when uploading image
                        if (e.name == "insertimage") {
                            setTimeout(function () {
                                var imagebrowser = $("[data-role=imagebrowser]").data("kendoImageBrowser");
                                imagebrowser.upload.bind("upload", function (e) {
                                    var xhr = e.XMLHttpRequest;
                                    if (xhr) {
                                        xhr.addEventListener("readystatechange", function (e) {
                                            if (xhr.readyState === 1 /* OPENED */) {
                                                xhr.setRequestHeader("Authorization", "Bearer " + token);
                                            }
                                        });
                                    }
                                });
                            }, 0);
                        }
                    }
                }
            );

            var editor = $("#content").data("kendoEditor");

            // set value for kendo editor with page content
            editor.value(vm.editArticle.content);
        }

        // bind article tags into multi-selection
        function bindTagSelection() {
            vm.selectOptions = {
                placeholder: "Select tags...",
                dataTextField: "name",
                dataValueField: "tagId",
                valuePrimitive: true,
                autoBind: false,
                dataSource: {
                    transport: {
                        read: function (e) {
                            tagDataFactory.getByType(2) // retreive product tags
                                .success(function (data) {
                                    // kendo selection callback
                                    e.success(data);
                                });
                        }
                    }
                }
            };
        }

        // get article by id
        function getArticleById(id) {
            articleDataFactory.getById(id)
                .success(function (data) {
                    // retreive the  data
                    vm.editArticle = data;

                    console.log(vm.editArticle.title)
                    // init kendo ui editor
                    // retreive html content 
                    initKendoEditor();
                });
        }

        // save article
        function save(model) {
            articleDataFactory.update(model)
                .success(function () {
                    pluginService.notify('更新成功', 'success');
                })
                .error(function (error) {
                    pluginService.notify(error, 'error')
                });
        }
    }
})(angular.module('gbmono'));