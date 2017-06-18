/*
    tag list controller
*/
(function (module) {
    // inject the controller params
    ctrl.$inject = ['pluginService',
                    'tagDataFactory'];

    // create controller
    module.controller('tagListController', ctrl);

    // controller body
    function ctrl(pluginService, tagDataFactory) {
        var vm = this

        // new tag
        vm.newTag = {};
        // edit tag
        vm.editTag = {};

        // kendo ui grid binding options
        vm.mainGridOptions = {};
        // page init
        init();

        // event hadlers
        // show create tag window
        vm.showCreate = function () {
            // reset newtag
            vm.newTag = {};

            // open window
            vm.winCreate.open();
        };

        // create new tag
        vm.create = function () {
            createTag(vm.newTag);
        };

        // show edit tag window
        vm.showEdit = function (dataItem) {
            vm.editTag.tagId = dataItem.tagId;
            vm.editTag.name = dataItem.name;

            // open window
            vm.winEdit.open();
        };

        // update tag
        vm.update = function () {
            updateTag(vm.editTag);
        };

        // delete tag
        vm.delete = function (id) {
            var r = confirm('Are you sure to delete? ');
            if (r) {
                deleteTag(id);
            }
        };

        function init() {
            // load all tags
            bindTagGrid();
        }

        // retreive brand data and binding it into kendo grid
        function bindTagGrid() {
            // init kendo ui grid with brand data
            vm.mainGridOptions = {
                dataSource: {
                    transport: {
                        read: function (e) {
                            tagDataFactory.getAll()
                                .success(function (data) {
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
                    { field: "name", title: "名称", width: 120 },
                    {
                        template: '<button class="btn btn-xs btn-info" ng-click="vm.showEdit(dataItem)"><i class="ace-icon fa fa-edit bigger-120"></i></button>&nbsp;&nbsp;' +
                                  '<button class="btn btn-xs btn-danger" ng-click="vm.delete(dataItem.tagId)"><i class="ace-icon fa fa-trash-o bigger-120"></i></button>', width: 150
                    }
                ]
            };
        }

        // create tag
        function createTag(tag) {
            tagDataFactory.create(tag)
                .success(function (data) {
                    // reload data
                    vm.grid.dataSource.read();
                    // close window
                    vm.winCreate.close();
                })
                .error(function (error) {
                    pluginService.notify(error, 'error')
                });
        }

        // update tag
        function updateTag(tag) {
            tagDataFactory.update(tag)
                .success(function (data) {
                    // reload data
                    vm.grid.dataSource.read();
                    // close window
                    vm.winEdit.close();
                })
                .error(function (error) {
                    pluginService.notify(error, 'error')
                });
        }

        // delete tag
        function deleteTag(id) {
            tagDataFactory.del(id)
                .success(function () {
                    // reload data
                    vm.grid.dataSource.read();
                    // close window
                    vm.winEdit.close();
                })
                .error(function (error) {
                    pluginService.notify(error, 'error')
                });
        }
    }
})(angular.module('gbmono'));