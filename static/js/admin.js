let admin = {},
    adminConsole = {},
    admintab = new Map(),
    adminMain = {},
    webUser = {},
    adminUser = {},
    roleManage = {},
    profit = {},
    customer = {},
    product = {},
    articleList = {},
    managerclass = {},
    messagecenter = {},
    worksystem = {};

admintab.set("home/console.html", '');

admin.userTollge = function() {
    $('.layuiadmin-tabs-select').mouseenter(function() {
        $('.tabicon').addClass("layui-nav-mored");
        $('.dlshow').show();
    });

    $('.layuiadmin-tabs-select').mouseleave(function() {
        $('.tabicon').removeClass("layui-nav-mored");
        $('.dlshow').hide();
    });
}

admin.tabtollge = function(ele) {
    let layuifref = $(ele).attr('layuihref');
    let layuitext = $(ele).attr('layuitext');
    layui.use('element', function() {
        var element = layui.element;
        if (admintab.has(layuifref)) {
            element.tabChange('layui-layout-tabs', layuifref);
        } else {
            admintab.set(layuifref, '<div class="layuiadmin-tabsbody-item" lay-attr="' + layuifref + '"> <iframe src = "' + layuifref + '" frameborder = "0" class = "layuiadmin-iframe"></iframe></div>');
            element.tabAdd('layui-layout-tabs', {
                title: '<span onclick="admin.tabmenu(this)">' + layuitext + '</span><i class="layui-icon layui-icon-close layui-unselect layui-tab-close" onclick="admin.closeTab(this)"></i>',
                content: '',
                id: layuifref
            });
            $("#app-body").append(admintab.get(layuifref));
        }
        $("#LAY_app_tabsheader li").removeClass("layui-this");
        $("#LAY_app_tabsheader li[lay-id='" + layuifref + "']").addClass('layui-this');
        admin.bodyTollge(layuifref);
        admin.leftMenuTollge(layuifref);
    });
}


admin.tabmenu = function(ele) {
    let layuifref;
    layuifref = $(ele).parent("li").attr('lay-id');
    if (!layuifref) {
        layuifref = $(ele).attr('lay-id');
    }
    admin.bodyTollge(layuifref);
    admin.leftMenuTollge(layuifref);
}

admin.closeTab = function(ele) {
    let layuifref = $(ele).parent("li").attr('lay-id');
    layui.use('element', function() {
        var element = layui.element;
        admintab.delete(layuifref);
        element.tabDelete('layui-layout-tabs', layuifref);
        let prevEle = $("#app-body .layuiadmin-tabsbody-item[lay-attr='" + layuifref + "']").prev(".layuiadmin-tabsbody-item");
        let prveLayuihref = prevEle.attr('lay-attr');
        $("#LAY_app_tabsheader li[lay-id='" + layuifref + "']").prev("li").addClass('layui-this');
        $("#app-body .layuiadmin-tabsbody-item[lay-attr='" + layuifref + "']").remove();
        prevEle.removeClass("layui-hide").addClass('layui-show');
        admin.leftMenuTollge(prveLayuihref);
    })
}

admin.bodyTollge = function(layuifref) {
    $("#app-body .layuiadmin-tabsbody-item").removeClass("layui-show").addClass('layui-hide');
    $("#app-body .layuiadmin-tabsbody-item[lay-attr='" + layuifref + "']").removeClass("layui-hide").addClass('layui-show');
}

admin.leftMenuTollge = function(layuifref) {
    $(".layui-side-scroll .layui-nav-child dd").removeClass("layui-this");
    $(".layui-side-scroll .layui-nav-child dd a[layuihref='" + layuifref + "']").parent().addClass("layui-this");
}


adminConsole.carousel = function() {
    layui.use(['carousel', 'element'], function() {
        let carousel = layui.carousel,
            element = layui.element;
        //建造实例
        carousel.render({
            elem: '#tools',
            width: '100%',
            height: '185px',
            arrow: 'none',
            indicator: 'outside',
            autoplay: false,
            trigger: 'mouseover'
        });
        carousel.render({
            elem: '#datashow',
            width: '100%',
            height: '185px',
            arrow: 'none',
            indicator: 'outside',
            autoplay: false,
            trigger: 'mouseover'
        });

        carousel.render({
            elem: '#datadesc',
            width: '100%',
            height: '300px',
            arrow: 'none',
            indicator: 'outside',
            autoplay: false,
            trigger: 'mouseover'
        });
    });
}

adminConsole.crateTable = function(item, cols, data, page = false, height = 312) {
    layui.use(['table'], function() {
        let table = layui.table;
        table.render({
            elem: item,
            skin: 'line',
            even: true,
            height: height,
            page: page,
            cols: [cols],
            data: data
        });
    });
}
adminConsole.processTbale = function() {
    let item = '#homepage-console',
        cols = [
            { type: 'checkbox', width: 50, sort: false, fixed: 'left' },
            { field: 'task', title: '任务', sort: false },
            { field: 'time', title: '所需时间' },
            { field: 'status', title: '状态', sort: false }
        ],
        data = [
            { task: '开会', time: '一小时', status: '已完成' },
            { task: '项目开发', time: '两小时', status: '进行中' },
            { task: '陪吃饭', time: '一小时', status: '未完成' },
            { task: '修改小bug', time: '一小时', status: '未完成' },
            { task: '修改小bug', time: '一小时', status: '未完成' },
            { task: '修改小bug', time: '一小时', status: '未完成' }
        ];
    adminConsole.crateTable(item, cols, data);
}

adminConsole.topSeachTable = function() {
    let item = '#hot-topSearch',
        cols = [
            { type: 'numbers', width: 50, sort: false, fixed: 'left' },
            { field: 'desc', title: '关键词', width: 350, sort: false, align: "center", style: "color:#01AAED" },
            { field: 'count', title: '搜索次数', sort: true, align: "center" },
            { field: 'usercount', title: '用户数', sort: true, align: "center" }
        ],
        data = [
            { desc: 'php教程php教程php教程', count: 123, usercount: 334 },
            { desc: 'Python教程Python教程Python教程', count: 222, usercount: 444 },
            { desc: 'java教程java教程java教程', count: 222, usercount: 222 },
            { desc: 'c++教程c++教程c++教程', count: 444, usercount: 341 },
            { desc: 'golang教程golang教程golang教程', count: 234, usercount: 555 },
            { desc: 'nodejs教程nodejs教程nodejs教程', count: 123, usercount: 334 },
            { desc: 'vue教程vue教程vue教程', count: 123, usercount: 334 },
            { desc: 'vue教程vue教程vue教程', count: 123, usercount: 334 },
            { desc: 'vue教程vue教程vue教程', count: 123, usercount: 334 },
            { desc: 'php教程php教程php教程', count: 123, usercount: 334 },
            { desc: 'Python教程Python教程Python教程', count: 222, usercount: 444 },
            { desc: 'java教程java教程java教程', count: 222, usercount: 222 },
            { desc: 'c++教程c++教程c++教程', count: 444, usercount: 341 },
            { desc: 'golang教程golang教程golang教程', count: 234, usercount: 555 },
            { desc: 'nodejs教程nodejs教程nodejs教程', count: 123, usercount: 334 },
            { desc: 'vue教程vue教程vue教程', count: 123, usercount: 334 },
            { desc: 'vue教程vue教程vue教程', count: 123, usercount: 334 },
            { desc: 'vue教程vue教程vue教程', count: 123, usercount: 334 },
            { desc: 'php教程php教程php教程', count: 123, usercount: 334 },
            { desc: 'Python教程Python教程Python教程', count: 222, usercount: 444 },
            { desc: 'java教程java教程java教程', count: 222, usercount: 222 },
            { desc: 'c++教程c++教程c++教程', count: 444, usercount: 341 },
            { desc: 'golang教程golang教程golang教程', count: 234, usercount: 555 },
            { desc: 'nodejs教程nodejs教程nodejs教程', count: 123, usercount: 334 },
            { desc: 'vue教程vue教程vue教程', count: 123, usercount: 334 },
            { desc: 'vue教程vue教程vue教程', count: 123, usercount: 334 },
            { desc: 'vue教程vue教程vue教程', count: 123, usercount: 334 },
            { desc: 'php教程php教程php教程', count: 123, usercount: 334 },
            { desc: 'Python教程Python教程Python教程', count: 222, usercount: 444 },
            { desc: 'java教程java教程java教程', count: 222, usercount: 222 },
            { desc: 'c++教程c++教程c++教程', count: 444, usercount: 341 },
            { desc: 'golang教程golang教程golang教程', count: 234, usercount: 555 },
            { desc: 'nodejs教程nodejs教程nodejs教程', count: 123, usercount: 334 },
            { desc: 'vue教程vue教程vue教程', count: 123, usercount: 334 },
            { desc: 'vue教程vue教程vue教程', count: 123, usercount: 334 },
            { desc: 'vue教程vue教程vue教程', count: 123, usercount: 334 },
        ];
    adminConsole.crateTable(item, cols, data, true, 500);
}

adminConsole.hotposts = function() {
    let item = '#hot-posts',
        cols = [
            { type: 'numbers', width: 50, sort: false, fixed: 'left' },
            { field: 'title', title: '标题', width: 250, sort: false, align: "center", style: "color:#01AAED" },
            { field: 'poster', title: '发帖者', sort: false, align: "center" },
            { field: 'class', title: '类别', sort: false, align: "center" },
            { field: 'dotcount', title: '点击率', sort: false, align: "center" }
        ],
        data = [
            { title: 'php教程php教程php教程', poster: 'admin', class: 'php', dotcount: 2233 },
            { title: 'Python教程Python教程Python教程', poster: 'test', class: 'python', dotcount: 1122 },
            { title: 'java教程java教程java教程', poster: 'test', class: 'java', dotcount: 1122 },
            { title: 'c++教程c++教程c++教程', poster: 'test', class: 'c++', dotcount: 1122 },
            { title: 'golang教程golang教程golang教程', poster: 'test', class: 'golang', dotcount: 1122 },
            { title: 'nodejs教程nodejs教程nodejs教程', poster: 'test', class: 'nodejs', dotcount: 1122 },
            { title: 'vue教程vue教程vue教程', poster: 'test', class: 'vue', dotcount: 1122 },
            { title: 'vue教程vue教程vue教程', poster: 'test', class: 'vue', dotcount: 1122 },
            { title: 'vue教程vue教程vue教程', poster: 'test', class: 'vue', dotcount: 1122 },
            { title: 'php教程php教程php教程', poster: 'test', class: 'vue', dotcount: 1122 },
            { title: 'php教程php教程php教程', poster: 'admin', class: 'php', dotcount: 2233 },
            { title: 'Python教程Python教程Python教程', poster: 'test', class: 'python', dotcount: 1122 },
            { title: 'java教程java教程java教程', poster: 'test', class: 'java', dotcount: 1122 },
            { title: 'c++教程c++教程c++教程', poster: 'test', class: 'c++', dotcount: 1122 },
            { title: 'golang教程golang教程golang教程', poster: 'test', class: 'golang', dotcount: 1122 },
            { title: 'nodejs教程nodejs教程nodejs教程', poster: 'test', class: 'nodejs', dotcount: 1122 },
            { title: 'vue教程vue教程vue教程', poster: 'test', class: 'vue', dotcount: 1122 },
            { title: 'vue教程vue教程vue教程', poster: 'test', class: 'vue', dotcount: 1122 },
            { title: 'vue教程vue教程vue教程', poster: 'test', class: 'vue', dotcount: 1122 },
            { title: 'php教程php教程php教程', poster: 'test', class: 'vue', dotcount: 1122 },
            { title: 'php教程php教程php教程', poster: 'admin', class: 'php', dotcount: 2233 },
            { title: 'Python教程Python教程Python教程', poster: 'test', class: 'python', dotcount: 1122 },
            { title: 'java教程java教程java教程', poster: 'test', class: 'java', dotcount: 1122 },
            { title: 'c++教程c++教程c++教程', poster: 'test', class: 'c++', dotcount: 1122 },
            { title: 'golang教程golang教程golang教程', poster: 'test', class: 'golang', dotcount: 1122 },
            { title: 'nodejs教程nodejs教程nodejs教程', poster: 'test', class: 'nodejs', dotcount: 1122 },
            { title: 'vue教程vue教程vue教程', poster: 'test', class: 'vue', dotcount: 1122 },
            { title: 'vue教程vue教程vue教程', poster: 'test', class: 'vue', dotcount: 1122 },
            { title: 'vue教程vue教程vue教程', poster: 'test', class: 'vue', dotcount: 1122 },
            { title: 'php教程php教程php教程', poster: 'test', class: 'vue', dotcount: 1122 },
            { title: 'php教程php教程php教程', poster: 'admin', class: 'php', dotcount: 2233 },
            { title: 'Python教程Python教程Python教程', poster: 'test', class: 'python', dotcount: 1122 },
            { title: 'java教程java教程java教程', poster: 'test', class: 'java', dotcount: 1122 },
            { title: 'c++教程c++教程c++教程', poster: 'test', class: 'c++', dotcount: 1122 },
            { title: 'golang教程golang教程golang教程', poster: 'test', class: 'golang', dotcount: 1122 },
            { title: 'nodejs教程nodejs教程nodejs教程', poster: 'test', class: 'nodejs', dotcount: 1122 },
            { title: 'vue教程vue教程vue教程', poster: 'test', class: 'vue', dotcount: 1122 },
            { title: 'vue教程vue教程vue教程', poster: 'test', class: 'vue', dotcount: 1122 },
            { title: 'vue教程vue教程vue教程', poster: 'test', class: 'vue', dotcount: 1122 },
            { title: 'php教程php教程php教程', poster: 'test', class: 'vue', dotcount: 1122 },
            { title: 'php教程php教程php教程', poster: 'admin', class: 'php', dotcount: 2233 },
            { title: 'Python教程Python教程Python教程', poster: 'test', class: 'python', dotcount: 1122 },
            { title: 'java教程java教程java教程', poster: 'test', class: 'java', dotcount: 1122 },
            { title: 'c++教程c++教程c++教程', poster: 'test', class: 'c++', dotcount: 1122 },
            { title: 'golang教程golang教程golang教程', poster: 'test', class: 'golang', dotcount: 1122 },
            { title: 'nodejs教程nodejs教程nodejs教程', poster: 'test', class: 'nodejs', dotcount: 1122 },
            { title: 'vue教程vue教程vue教程', poster: 'test', class: 'vue', dotcount: 1122 },
            { title: 'vue教程vue教程vue教程', poster: 'test', class: 'vue', dotcount: 1122 },
            { title: 'vue教程vue教程vue教程', poster: 'test', class: 'vue', dotcount: 1122 },
            { title: 'php教程php教程php教程', poster: 'test', class: 'vue', dotcount: 1122 },
            { title: 'php教程php教程php教程', poster: 'admin', class: 'php', dotcount: 2233 },
            { title: 'Python教程Python教程Python教程', poster: 'test', class: 'python', dotcount: 1122 },
            { title: 'java教程java教程java教程', poster: 'test', class: 'java', dotcount: 1122 },
            { title: 'c++教程c++教程c++教程', poster: 'test', class: 'c++', dotcount: 1122 },
            { title: 'golang教程golang教程golang教程', poster: 'test', class: 'golang', dotcount: 1122 },
            { title: 'nodejs教程nodejs教程nodejs教程', poster: 'test', class: 'nodejs', dotcount: 1122 },
            { title: 'vue教程vue教程vue教程', poster: 'test', class: 'vue', dotcount: 1122 },
            { title: 'vue教程vue教程vue教程', poster: 'test', class: 'vue', dotcount: 1122 },
            { title: 'vue教程vue教程vue教程', poster: 'test', class: 'vue', dotcount: 1122 },
            { title: 'php教程php教程php教程', poster: 'test', class: 'vue', dotcount: 1122 },
        ];
    adminConsole.crateTable(item, cols, data, true, 500);
}

adminMain.showReply = function() {
    $('.layuiadmin-card-status li').mouseenter(function() {
        $(this).children("a").show();
    });
    $('.layuiadmin-card-status li').mouseleave(function() {
        $(this).children("a").hide();
    });
}
webUser.crateTable = function() {
    layui.use(['table'], function() {
        let table = layui.table;
        let dropdown = layui.dropdown;
        table.render({
            elem: "#webuserTable",
            skin: 'row',
            even: true,
            height: 515,
            page: true,
            toolbar: 'default',
            cols: [
                [
                    { type: 'checkbox', fixed: 'left' },
                    { field: 'id', title: 'ID', sort: true },
                    { field: 'username', title: '用户名', sort: true },
                    { field: 'phone', title: '手机号', sort: false },
                    { field: 'email', title: '邮箱', sort: false },
                    { field: 'sex', title: '性别', sort: false },
                    { field: 'ip', title: 'IP', sort: false },
                    { field: 'addtime', title: '注册时间', sort: true },
                    //绑定列工具条
                    { fixed: 'right', title: '操作', width: 150, align: 'center', toolbar: '#barDemo' }
                    //自定义模板
                    //{ field: 'action', title: '操作', sort: false, templet: '#titleTpl'},
                ]
            ],
            data: [
                { id: 1001, username: 'user-0', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1002, username: 'user-1', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1003, username: 'user-2', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1004, username: 'user-3', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1005, username: 'user-4', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1006, username: 'user-0', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1007, username: 'user-1', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1008, username: 'user-2', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1009, username: 'user-3', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1010, username: 'user-4', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1001, username: 'user-0', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1002, username: 'user-1', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1003, username: 'user-2', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1004, username: 'user-3', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1005, username: 'user-4', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1006, username: 'user-0', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1007, username: 'user-1', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1008, username: 'user-2', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1009, username: 'user-3', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1010, username: 'user-4', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1001, username: 'user-0', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1002, username: 'user-1', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1003, username: 'user-2', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1004, username: 'user-3', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1005, username: 'user-4', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1006, username: 'user-0', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1007, username: 'user-1', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1008, username: 'user-2', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1009, username: 'user-3', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1010, username: 'user-4', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1001, username: 'user-0', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1002, username: 'user-1', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1003, username: 'user-2', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1004, username: 'user-3', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1005, username: 'user-4', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1006, username: 'user-0', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1007, username: 'user-1', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1008, username: 'user-2', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1009, username: 'user-3', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1010, username: 'user-4', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1001, username: 'user-0', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1002, username: 'user-1', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1003, username: 'user-2', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1004, username: 'user-3', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1005, username: 'user-4', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1006, username: 'user-0', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1007, username: 'user-1', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1008, username: 'user-2', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1009, username: 'user-3', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1010, username: 'user-4', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1001, username: 'user-0', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1002, username: 'user-1', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1003, username: 'user-2', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1004, username: 'user-3', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1005, username: 'user-4', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1006, username: 'user-0', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1007, username: 'user-1', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1008, username: 'user-2', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1009, username: 'user-3', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1010, username: 'user-4', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1001, username: 'user-0', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1002, username: 'user-1', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1003, username: 'user-2', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1004, username: 'user-3', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1005, username: 'user-4', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1006, username: 'user-0', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1007, username: 'user-1', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1008, username: 'user-2', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1009, username: 'user-3', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1010, username: 'user-4', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1001, username: 'user-0', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1002, username: 'user-1', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1003, username: 'user-2', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1004, username: 'user-3', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1005, username: 'user-4', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1006, username: 'user-0', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1007, username: 'user-1', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1008, username: 'user-2', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1009, username: 'user-3', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1010, username: 'user-4', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1001, username: 'user-0', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1002, username: 'user-1', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1003, username: 'user-2', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1004, username: 'user-3', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1005, username: 'user-4', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1006, username: 'user-0', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1007, username: 'user-1', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1008, username: 'user-2', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1009, username: 'user-3', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1010, username: 'user-4', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1001, username: 'user-0', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1002, username: 'user-1', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1003, username: 'user-2', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1004, username: 'user-3', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1005, username: 'user-4', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1006, username: 'user-0', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1007, username: 'user-1', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1008, username: 'user-2', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1009, username: 'user-3', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1010, username: 'user-4', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1001, username: 'user-0', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1002, username: 'user-1', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1003, username: 'user-2', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1004, username: 'user-3', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1005, username: 'user-4', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1006, username: 'user-0', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1007, username: 'user-1', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1008, username: 'user-2', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1009, username: 'user-3', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1010, username: 'user-4', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1001, username: 'user-0', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1002, username: 'user-1', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1003, username: 'user-2', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1004, username: 'user-3', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1005, username: 'user-4', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1006, username: 'user-0', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1007, username: 'user-1', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
                { id: 1008, username: 'user-2', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1009, username: 'user-3', phone: '123456789', email: '1111@qq.com', sex: '男', ip: 111111, addtime: 123456 },
                { id: 1010, username: 'user-4', phone: '123456789', email: '1111@qq.com', sex: '女', ip: 111111, addtime: 123456 },
            ]
        });
        table.on('toolbar(webuserTable)', function(obj) {
            var checkStatus = table.checkStatus(obj.config.id),
                data = checkStatus.data; //获取选中的数据

            switch (obj.event) {
                case 'add':
                    layer.msg('添加');
                    break;
                case 'update':
                    if (data.length === 0) {
                        layer.msg('请选择一行');
                    } else if (data.length > 1) {
                        layer.msg('只能同时编辑一个');
                    } else {
                        layer.alert('编辑 [id]：' + checkStatus.data[0].id);
                    }
                    break;
                case 'delete':
                    if (data.length === 0) {
                        layer.msg('请选择一行');
                    } else {
                        layer.msg('删除');
                    }
                    break;
            };
        });

        //监听行工具事件
        table.on('tool(webuserTable)', function(obj) { //注：tool 是工具条事件名，test 是 table 原始容器的属性 lay-filter="对应的值"
            var data = obj.data //获得当前行数据
                ,
                layEvent = obj.event; //获得 lay-event 对应的值
            if (layEvent === 'detail') {
                layer.msg('查看操作');
            } else if (layEvent === 'more') {
                //下拉菜单
                dropdown.render({
                    elem: this, //触发事件的 DOM 对象,
                    show: true, //外部事件触发即显示,
                    data: [{
                        title: '编辑',
                        id: 'edit'
                    }, {
                        title: '删除',
                        id: 'del'
                    }],
                    click: function(menudata) {
                        if (menudata.id === 'del') {
                            layer.confirm('真的删除行么', function(index) {
                                obj.del(); //删除对应行（tr）的DOM结构
                                layer.close(index);
                                //向服务端发送删除指令
                            });
                        } else if (menudata.id === 'edit') {
                            layer.msg('编辑操作，当前行 ID:' + data.id);
                        }
                    },
                    align: 'right', //右对齐弹出（v2.6.8 新增） ,
                    style: 'box-shadow: 1px 1px 10px rgb(0 0 0 / 12%);' //设置额外样式
                })
            } else if (layEvent === 'edit') {
                layer.msg('查看操作');
            } else if (layEvent === 'del') {
                layer.msg('删除');
            }
        });
    });
}

adminUser.crateTable = function() {
    layui.use(['table'], function() {
        let table = layui.table;
        let dropdown = layui.dropdown;
        table.render({
            elem: "#AdminuserTable",
            skin: 'row',
            even: true,
            height: 515,
            page: true,
            toolbar: 'default',
            cols: [
                [
                    { type: 'checkbox', fixed: 'left' },
                    { field: 'id', title: 'ID', sort: true, width: 80 },
                    { field: 'username', title: '用户名', sort: true, width: 100 },
                    { field: 'phone', title: '手机号', sort: false, width: 120 },
                    { field: 'email', title: '邮箱', sort: false, width: 120 },
                    { field: 'role', title: '角色', sort: false, width: 120 },
                    { field: 'addtime', title: '注册时间', sort: true, width: 120 },
                    { field: 'status', title: '审核状态', sort: true, width: 100, templet: '#statusTpl' },
                    //绑定列工具条
                    //{ fixed: 'right', title: '操作', width: 150, align: 'center', toolbar: '#barDemo' }
                    //自定义模板
                    { field: 'action', title: '操作', sort: false, templet: '#adminTpl' },
                ]
            ],
            data: [
                { id: 1001, username: 'user-0', phone: '123456789', email: '1111@qq.com', role: '超级管理员', addtime: 123456, status: 1 },
                { id: 1002, username: 'user-1', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 1 },
                { id: 1003, username: 'user-2', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1004, username: 'user-3', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1005, username: 'user-4', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1006, username: 'user-0', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1007, username: 'user-1', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1001, username: 'user-0', phone: '123456789', email: '1111@qq.com', role: '超级管理员', addtime: 123456, status: 1 },
                { id: 1002, username: 'user-1', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 1 },
                { id: 1003, username: 'user-2', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1004, username: 'user-3', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1005, username: 'user-4', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1006, username: 'user-0', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1007, username: 'user-1', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1001, username: 'user-0', phone: '123456789', email: '1111@qq.com', role: '超级管理员', addtime: 123456, status: 1 },
                { id: 1002, username: 'user-1', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 1 },
                { id: 1003, username: 'user-2', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1004, username: 'user-3', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1005, username: 'user-4', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1006, username: 'user-0', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1007, username: 'user-1', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1001, username: 'user-0', phone: '123456789', email: '1111@qq.com', role: '超级管理员', addtime: 123456, status: 1 },
                { id: 1002, username: 'user-1', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 1 },
                { id: 1003, username: 'user-2', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1004, username: 'user-3', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1005, username: 'user-4', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1006, username: 'user-0', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1007, username: 'user-1', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1001, username: 'user-0', phone: '123456789', email: '1111@qq.com', role: '超级管理员', addtime: 123456, status: 1 },
                { id: 1002, username: 'user-1', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 1 },
                { id: 1003, username: 'user-2', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1004, username: 'user-3', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1005, username: 'user-4', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1006, username: 'user-0', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1007, username: 'user-1', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1001, username: 'user-0', phone: '123456789', email: '1111@qq.com', role: '超级管理员', addtime: 123456, status: 1 },
                { id: 1002, username: 'user-1', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 1 },
                { id: 1003, username: 'user-2', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1004, username: 'user-3', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1005, username: 'user-4', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1006, username: 'user-0', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1007, username: 'user-1', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1001, username: 'user-0', phone: '123456789', email: '1111@qq.com', role: '超级管理员', addtime: 123456, status: 1 },
                { id: 1002, username: 'user-1', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 1 },
                { id: 1003, username: 'user-2', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1004, username: 'user-3', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1005, username: 'user-4', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1006, username: 'user-0', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1007, username: 'user-1', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1001, username: 'user-0', phone: '123456789', email: '1111@qq.com', role: '超级管理员', addtime: 123456, status: 1 },
                { id: 1002, username: 'user-1', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 1 },
                { id: 1003, username: 'user-2', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1004, username: 'user-3', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1005, username: 'user-4', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1006, username: 'user-0', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1007, username: 'user-1', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1001, username: 'user-0', phone: '123456789', email: '1111@qq.com', role: '超级管理员', addtime: 123456, status: 1 },
                { id: 1002, username: 'user-1', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 1 },
                { id: 1003, username: 'user-2', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1004, username: 'user-3', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1005, username: 'user-4', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1006, username: 'user-0', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1007, username: 'user-1', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1001, username: 'user-0', phone: '123456789', email: '1111@qq.com', role: '超级管理员', addtime: 123456, status: 1 },
                { id: 1002, username: 'user-1', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 1 },
                { id: 1003, username: 'user-2', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1004, username: 'user-3', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1005, username: 'user-4', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1006, username: 'user-0', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1007, username: 'user-1', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1001, username: 'user-0', phone: '123456789', email: '1111@qq.com', role: '超级管理员', addtime: 123456, status: 1 },
                { id: 1002, username: 'user-1', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 1 },
                { id: 1003, username: 'user-2', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1004, username: 'user-3', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1005, username: 'user-4', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1006, username: 'user-0', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1007, username: 'user-1', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1001, username: 'user-0', phone: '123456789', email: '1111@qq.com', role: '超级管理员', addtime: 123456, status: 1 },
                { id: 1002, username: 'user-1', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 1 },
                { id: 1003, username: 'user-2', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1004, username: 'user-3', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1005, username: 'user-4', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1006, username: 'user-0', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1007, username: 'user-1', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1001, username: 'user-0', phone: '123456789', email: '1111@qq.com', role: '超级管理员', addtime: 123456, status: 1 },
                { id: 1002, username: 'user-1', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 1 },
                { id: 1003, username: 'user-2', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1004, username: 'user-3', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1005, username: 'user-4', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1006, username: 'user-0', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1007, username: 'user-1', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1001, username: 'user-0', phone: '123456789', email: '1111@qq.com', role: '超级管理员', addtime: 123456, status: 1 },
                { id: 1002, username: 'user-1', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 1 },
                { id: 1003, username: 'user-2', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1004, username: 'user-3', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1005, username: 'user-4', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1006, username: 'user-0', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1007, username: 'user-1', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1001, username: 'user-0', phone: '123456789', email: '1111@qq.com', role: '超级管理员', addtime: 123456, status: 1 },
                { id: 1002, username: 'user-1', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 1 },
                { id: 1003, username: 'user-2', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1004, username: 'user-3', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1005, username: 'user-4', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1006, username: 'user-0', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 },
                { id: 1007, username: 'user-1', phone: '123456789', email: '1111@qq.com', role: '管理员', addtime: 123456, status: 0 }
            ]
        });
        table.on('toolbar(adminuserTable)', function(obj) {
            var checkStatus = table.checkStatus(obj.config.id),
                data = checkStatus.data; //获取选中的数据

            switch (obj.event) {
                case 'add':
                    layer.msg('添加');
                    break;
                case 'update':
                    if (data.length === 0) {
                        layer.msg('请选择一行');
                    } else if (data.length > 1) {
                        layer.msg('只能同时编辑一个');
                    } else {
                        layer.alert('编辑 [id]：' + checkStatus.data[0].id);
                    }
                    break;
                case 'delete':
                    if (data.length === 0) {
                        layer.msg('请选择一行');
                    } else {
                        layer.msg('删除');
                    }
                    break;
            };
        });

        //监听行工具事件
        table.on('tool(adminuserTable)', function(obj) { //注：tool 是工具条事件名，test 是 table 原始容器的属性 lay-filter="对应的值"
            var data = obj.data //获得当前行数据
                ,
                layEvent = obj.event; //获得 lay-event 对应的值
            if (layEvent === 'detail') {
                layer.msg('查看操作');
            } else if (layEvent === 'more') {
                //下拉菜单
                dropdown.render({
                    elem: this, //触发事件的 DOM 对象,
                    show: true, //外部事件触发即显示,
                    data: [{
                        title: '编辑',
                        id: 'edit'
                    }, {
                        title: '删除',
                        id: 'del'
                    }],
                    click: function(menudata) {
                        if (menudata.id === 'del') {
                            layer.confirm('真的删除行么', function(index) {
                                obj.del(); //删除对应行（tr）的DOM结构
                                layer.close(index);
                                //向服务端发送删除指令
                            });
                        } else if (menudata.id === 'edit') {
                            layer.msg('编辑操作，当前行 ID:' + data.id);
                        }
                    },
                    align: 'right', //右对齐弹出（v2.6.8 新增） ,
                    style: 'box-shadow: 1px 1px 10px rgb(0 0 0 / 12%);' //设置额外样式
                })
            } else if (layEvent === 'edit') {
                layer.msg('查看操作');
            } else if (layEvent === 'del') {
                layer.msg('删除');
            }
        });
    });
}

roleManage.roleTable = function() {
    layui.use(['table'], function() {
        let table = layui.table;
        let dropdown = layui.dropdown;
        table.render({
            elem: "#roleTable",
            skin: 'row',
            even: true,
            height: 350,
            page: false,
            toolbar: 'default',
            cols: [
                [
                    { type: 'checkbox', fixed: 'left' },
                    { field: 'rolename', title: '角色名', sort: false, width: 120 },
                    { field: 'notify', title: '拥有权限', sort: false },
                    { field: 'desc', title: '具体描述', sort: false },
                    //绑定列工具条
                    //{ fixed: 'right', title: '操作', width: 150, align: 'center', toolbar: '#barDemo' }
                    //自定义模板
                    { field: 'action', title: '操作', sort: false, templet: '#roleTpl' },
                ]
            ],
            data: [
                { rolename: '超级管理员', notify: '管理所有的管理员', desc: '拥有至高无上的权利' },
                { rolename: '管理员', notify: '所有列表的管理', desc: '事情很多，权力很大' },
                { rolename: '文章撰写员', notify: '负责文章的编写', desc: '文采第一的人才集合' },
                { rolename: '超级管理员', notify: '管理所有的管理员', desc: '拥有至高无上的权利' },
                { rolename: '管理员', notify: '所有列表的管理', desc: '事情很多，权力很大' },
                { rolename: '文章撰写员', notify: '负责文章的编写', desc: '文采第一的人才集合' }
            ]
        });
        table.on('toolbar(roleTable)', function(obj) {
            var checkStatus = table.checkStatus(obj.config.id),
                data = checkStatus.data; //获取选中的数据

            switch (obj.event) {
                case 'add':
                    layer.msg('添加');
                    break;
                case 'update':
                    if (data.length === 0) {
                        layer.msg('请选择一行');
                    } else if (data.length > 1) {
                        layer.msg('只能同时编辑一个');
                    } else {
                        layer.alert('编辑 [id]：' + checkStatus.data[0].id);
                    }
                    break;
                case 'delete':
                    if (data.length === 0) {
                        layer.msg('请选择一行');
                    } else {
                        layer.msg('删除');
                    }
                    break;
            };
        });

        //监听行工具事件
        table.on('tool(roleTable)', function(obj) { //注：tool 是工具条事件名，test 是 table 原始容器的属性 lay-filter="对应的值"
            var data = obj.data //获得当前行数据
                ,
                layEvent = obj.event; //获得 lay-event 对应的值
            if (layEvent === 'detail') {
                layer.msg('查看操作');
            } else if (layEvent === 'more') {
                //下拉菜单
                dropdown.render({
                    elem: this, //触发事件的 DOM 对象,
                    show: true, //外部事件触发即显示,
                    data: [{
                        title: '编辑',
                        id: 'edit'
                    }, {
                        title: '删除',
                        id: 'del'
                    }],
                    click: function(menudata) {
                        if (menudata.id === 'del') {
                            layer.confirm('真的删除行么', function(index) {
                                obj.del(); //删除对应行（tr）的DOM结构
                                layer.close(index);
                                //向服务端发送删除指令
                            });
                        } else if (menudata.id === 'edit') {
                            layer.msg('编辑操作，当前行 ID:' + data.id);
                        }
                    },
                    align: 'right', //右对齐弹出（v2.6.8 新增） ,
                    style: 'box-shadow: 1px 1px 10px rgb(0 0 0 / 12%);' //设置额外样式
                })
            } else if (layEvent === 'edit') {
                layer.msg('查看操作');
            } else if (layEvent === 'del') {
                layer.msg('删除');
            }
        });
    });
}

profit.upload = function() {
    layui.use('upload', function() {
        var upload = layui.upload;

        //执行实例
        var uploadInst = upload.render({
            elem: '#uploadimg' //绑定元素
                ,
            url: '/upload/' //上传接口
                ,
            done: function(res) {
                //上传完毕回调
            },
            error: function() {
                //请求异常回调
            }
        });
    });
}

profit.showImage = function() {
    layui.use('layer', function() {
        var layer = layui.layer;
        let imageurl = $('#image').val();
        console.log(imageurl);
        layer.open({
            type: 1,
            title: false,
            move: 'img',
            offset: ['70px', '240px'],
            content: '<img src="' + imageurl + '">' //这里content是一个普通的String
        });
    });
}

customer.createPager = function() {
    layui.use('laypage', function() {
        var laypage = layui.laypage;

        //执行一个laypage实例
        laypage.render({
            elem: 'customer',
            count: 50
        });
    });
}

product.createPager = function() {
    layui.use('laypage', function() {
        var laypage = layui.laypage;

        //执行一个laypage实例
        laypage.render({
            elem: 'product',
            count: 50
        });
    });
}
articleList.crateTable = function() {
    layui.use(['table'], function() {
        let table = layui.table;
        let dropdown = layui.dropdown;
        table.render({
            elem: "#articleListTable",
            skin: 'row',
            even: true,
            height: 470,
            page: true,
            id: 'articletable',
            cols: [
                [
                    { type: 'checkbox', fixed: 'left' },
                    { field: 'id', title: '文章ID', sort: true, width: 120 },
                    { field: 'tag', title: '文章标签', sort: false, width: 100 },
                    { field: 'title', title: '文章标题', sort: false, width: 140 },
                    { field: 'author', title: '作者', sort: false, width: 120 },
                    { field: 'addtime', title: '上传时间', sort: true, width: 140 },
                    { field: 'status', title: '发布状态', sort: true, width: 120, templet: '#articlestatus' },
                    //绑定列工具条
                    //{ fixed: 'right', title: '操作', width: 150, align: 'center', toolbar: '#barDemo' }
                    //自定义模板
                    { field: 'action', title: '操作', sort: false, templet: '#articleTpl' },
                ]
            ],
            data: [
                { id: 1001, tag: '美食', title: '舌尖上的中国', author: '作者1', addtime: 20210102, status: 1 },
                { id: 1002, tag: '美食', title: '传承文化的面食', author: '作者1', addtime: 20210102, status: 0 },
                { id: 1003, tag: '历史', title: '河西走廊', author: '作者1', addtime: 20210102, status: 0 },
                { id: 1004, tag: '文化', title: '敦煌舞曲', author: '作者1', addtime: 20210102, status: 0 },
                { id: 1005, tag: '经济', title: '改革开放三十年经济分析', author: '作者1', addtime: 20210102, status: 0 },
                { id: 1001, tag: '美食', title: '舌尖上的中国', author: '作者1', addtime: 20210102, status: 1 },
                { id: 1002, tag: '美食', title: '传承文化的面食', author: '作者1', addtime: 20210102, status: 0 },
                { id: 1003, tag: '历史', title: '河西走廊', author: '作者1', addtime: 20210102, status: 0 },
                { id: 1004, tag: '文化', title: '敦煌舞曲', author: '作者1', addtime: 20210102, status: 0 },
                { id: 1005, tag: '经济', title: '改革开放三十年经济分析', author: '作者1', addtime: 20210102, status: 0 },
                { id: 1001, tag: '美食', title: '舌尖上的中国', author: '作者1', addtime: 20210102, status: 1 },
                { id: 1002, tag: '美食', title: '传承文化的面食', author: '作者1', addtime: 20210102, status: 0 },
                { id: 1003, tag: '历史', title: '河西走廊', author: '作者1', addtime: 20210102, status: 0 },
                { id: 1004, tag: '文化', title: '敦煌舞曲', author: '作者1', addtime: 20210102, status: 0 },
                { id: 1005, tag: '经济', title: '改革开放三十年经济分析', author: '作者1', addtime: 20210102, status: 0 },
                { id: 1001, tag: '美食', title: '舌尖上的中国', author: '作者1', addtime: 20210102, status: 1 },
                { id: 1002, tag: '美食', title: '传承文化的面食', author: '作者1', addtime: 20210102, status: 0 },
                { id: 1003, tag: '历史', title: '河西走廊', author: '作者1', addtime: 20210102, status: 0 },
                { id: 1004, tag: '文化', title: '敦煌舞曲', author: '作者1', addtime: 20210102, status: 0 },
                { id: 1005, tag: '经济', title: '改革开放三十年经济分析', author: '作者1', addtime: 20210102, status: 0 },
                { id: 1001, tag: '美食', title: '舌尖上的中国', author: '作者1', addtime: 20210102, status: 1 },
                { id: 1002, tag: '美食', title: '传承文化的面食', author: '作者1', addtime: 20210102, status: 0 },
                { id: 1003, tag: '历史', title: '河西走廊', author: '作者1', addtime: 20210102, status: 0 },
                { id: 1004, tag: '文化', title: '敦煌舞曲', author: '作者1', addtime: 20210102, status: 0 },
                { id: 1005, tag: '经济', title: '改革开放三十年经济分析', author: '作者1', addtime: 20210102, status: 0 },
                { id: 1001, tag: '美食', title: '舌尖上的中国', author: '作者1', addtime: 20210102, status: 1 },
                { id: 1002, tag: '美食', title: '传承文化的面食', author: '作者1', addtime: 20210102, status: 0 },
                { id: 1003, tag: '历史', title: '河西走廊', author: '作者1', addtime: 20210102, status: 0 },
                { id: 1004, tag: '文化', title: '敦煌舞曲', author: '作者1', addtime: 20210102, status: 0 },
                { id: 1005, tag: '经济', title: '改革开放三十年经济分析', author: '作者1', addtime: 20210102, status: 0 },
                { id: 1001, tag: '美食', title: '舌尖上的中国', author: '作者1', addtime: 20210102, status: 1 },
                { id: 1002, tag: '美食', title: '传承文化的面食', author: '作者1', addtime: 20210102, status: 0 },
                { id: 1003, tag: '历史', title: '河西走廊', author: '作者1', addtime: 20210102, status: 0 },
                { id: 1004, tag: '文化', title: '敦煌舞曲', author: '作者1', addtime: 20210102, status: 0 },
                { id: 1005, tag: '经济', title: '改革开放三十年经济分析', author: '作者1', addtime: 20210102, status: 0 },
                { id: 1001, tag: '美食', title: '舌尖上的中国', author: '作者1', addtime: 20210102, status: 1 },
                { id: 1002, tag: '美食', title: '传承文化的面食', author: '作者1', addtime: 20210102, status: 0 },
                { id: 1003, tag: '历史', title: '河西走廊', author: '作者1', addtime: 20210102, status: 0 },
                { id: 1004, tag: '文化', title: '敦煌舞曲', author: '作者1', addtime: 20210102, status: 0 },
                { id: 1005, tag: '经济', title: '改革开放三十年经济分析', author: '作者1', addtime: 20210102, status: 0 },
                { id: 1001, tag: '美食', title: '舌尖上的中国', author: '作者1', addtime: 20210102, status: 1 },
                { id: 1002, tag: '美食', title: '传承文化的面食', author: '作者1', addtime: 20210102, status: 0 },
                { id: 1003, tag: '历史', title: '河西走廊', author: '作者1', addtime: 20210102, status: 0 },
                { id: 1004, tag: '文化', title: '敦煌舞曲', author: '作者1', addtime: 20210102, status: 0 },
                { id: 1005, tag: '经济', title: '改革开放三十年经济分析', author: '作者1', addtime: 20210102, status: 0 },
                { id: 1001, tag: '美食', title: '舌尖上的中国', author: '作者1', addtime: 20210102, status: 1 },
                { id: 1002, tag: '美食', title: '传承文化的面食', author: '作者1', addtime: 20210102, status: 0 },
                { id: 1003, tag: '历史', title: '河西走廊', author: '作者1', addtime: 20210102, status: 0 },
                { id: 1004, tag: '文化', title: '敦煌舞曲', author: '作者1', addtime: 20210102, status: 0 },
                { id: 1005, tag: '经济', title: '改革开放三十年经济分析', author: '作者1', addtime: 20210102, status: 0 },
            ]
        });

        //监听行工具事件
        table.on('tool(articleListTable)', function(obj) { //注：tool 是工具条事件名，test 是 table 原始容器的属性 lay-filter="对应的值"
            var data = obj.data //获得当前行数据
                ,
                layEvent = obj.event; //获得 lay-event 对应的值
            if (layEvent === 'detail') {
                layer.msg('查看操作');
            } else if (layEvent === 'more') {
                //下拉菜单
                dropdown.render({
                    elem: this, //触发事件的 DOM 对象,
                    show: true, //外部事件触发即显示,
                    data: [{
                        title: '编辑',
                        id: 'edit'
                    }, {
                        title: '删除',
                        id: 'del'
                    }],
                    click: function(menudata) {
                        if (menudata.id === 'del') {
                            layer.confirm('真的删除行么', function(index) {
                                obj.del(); //删除对应行（tr）的DOM结构
                                layer.close(index);
                                //向服务端发送删除指令
                            });
                        } else if (menudata.id === 'edit') {
                            layer.msg('编辑操作，当前行 ID:' + data.id);
                        }
                    },
                    align: 'right', //右对齐弹出（v2.6.8 新增） ,
                    style: 'box-shadow: 1px 1px 10px rgb(0 0 0 / 12%);' //设置额外样式
                })
            } else if (layEvent === 'edit') {
                layer.msg('查看操作');
            } else if (layEvent === 'del') {
                layer.msg('删除');
            }
        });
    });
}
articleList.deltableData = function() {
    $("#batchdel").on('click', function() {
        layui.use(['table', 'layer'], function() {
            let table = layui.table,
                layer = layui.layer;
            table.render({
                id: 'articletable'
            });
            let checkStatus = table.checkStatus('articletable');
            if (checkStatus.data.length) {
                layer.alert('删除');
            }
        });
    });
}
articleList.addTableData = function() {
    $("#add").on('click', function() {
        layui.use(['layer'], function() {
            let layer = layui.layer;
            layer.open({
                type: 2,
                area: ['400px', '600px'],
                content: '../home/addtable.html'
            });
        });
    });
}

managerclass.createTable = function() {
    layui.use(['table'], function() {
        let table = layui.table;
        let dropdown = layui.dropdown;
        table.render({
            elem: "#manageclass",
            skin: 'row',
            even: true,
            height: 350,
            page: false,
            id: 'manageclass',
            cols: [
                [
                    { type: 'checkbox', fixed: 'left' },
                    { field: 'id', title: 'ID', sort: true, width: 120 },
                    { field: 'class', title: '分类名', sort: false },
                    //绑定列工具条
                    //{ fixed: 'right', title: '操作', width: 150, align: 'center', toolbar: '#barDemo' }
                    //自定义模板
                    { field: 'action', title: '操作', sort: false, templet: '#classTpl', width: 220 },
                ]
            ],
            data: [
                { id: 1001, class: '美食' },
                { id: 1003, class: '历史' },
                { id: 1004, class: '文化' },
                { id: 1005, class: '经济' }
            ]
        });

        //监听行工具事件
        table.on('tool(manageclass)', function(obj) { //注：tool 是工具条事件名，test 是 table 原始容器的属性 lay-filter="对应的值"
            var data = obj.data //获得当前行数据
                ,
                layEvent = obj.event; //获得 lay-event 对应的值
            if (layEvent === 'detail') {
                layer.msg('查看操作');
            } else if (layEvent === 'more') {
                //下拉菜单
                dropdown.render({
                    elem: this, //触发事件的 DOM 对象,
                    show: true, //外部事件触发即显示,
                    data: [{
                        title: '编辑',
                        id: 'edit'
                    }, {
                        title: '删除',
                        id: 'del'
                    }],
                    click: function(menudata) {
                        if (menudata.id === 'del') {
                            layer.confirm('真的删除行么', function(index) {
                                obj.del(); //删除对应行（tr）的DOM结构
                                layer.close(index);
                                //向服务端发送删除指令
                            });
                        } else if (menudata.id === 'edit') {
                            layer.msg('编辑操作，当前行 ID:' + data.id);
                        }
                    },
                    align: 'right', //右对齐弹出（v2.6.8 新增） ,
                    style: 'box-shadow: 1px 1px 10px rgb(0 0 0 / 12%);' //设置额外样式
                })
            } else if (layEvent === 'edit') {
                layer.msg('查看操作');
            } else if (layEvent === 'del') {
                layer.msg('删除');
            }
        });
    });
}

managerclass.addTableData = function() {
    $("#addclass").on('click', function() {
        layui.use(['layer'], function() {
            let layer = layui.layer;
            layer.prompt({
                formType: 0,
                value: '',
                title: '请输入分类',
                area: ['800px', '350px'] //自定义文本域宽高
            }, function(value, index, elem) {
                layer.alert(value); //得到value
                layer.close(index);
            });
        });
    });
}

messagecenter.createAlltable = function() {
    let item = '#allmessage',
        cols = [
            { type: 'checkbox', width: 50, sort: false, fixed: 'left' },
            { field: 'title', title: '标题内容', sort: false },
            { field: 'time', title: '添加时间' }
        ],
        data = [
            { title: 'you have a message', time: '2020-10-23 09:30:00' },
            { title: '项目开发', time: '2020-10-23 09:30:00' },
            { title: '陪吃饭', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: 'you have a message', time: '2020-10-23 09:30:00' },
            { title: '项目开发', time: '2020-10-23 09:30:00' },
            { title: '陪吃饭', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: 'you have a message', time: '2020-10-23 09:30:00' },
            { title: '项目开发', time: '2020-10-23 09:30:00' },
            { title: '陪吃饭', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: 'you have a message', time: '2020-10-23 09:30:00' },
            { title: '项目开发', time: '2020-10-23 09:30:00' },
            { title: '陪吃饭', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: 'you have a message', time: '2020-10-23 09:30:00' },
            { title: '项目开发', time: '2020-10-23 09:30:00' },
            { title: '陪吃饭', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: 'you have a message', time: '2020-10-23 09:30:00' },
            { title: '项目开发', time: '2020-10-23 09:30:00' },
            { title: '陪吃饭', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: 'you have a message', time: '2020-10-23 09:30:00' },
            { title: '项目开发', time: '2020-10-23 09:30:00' },
            { title: '陪吃饭', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: 'you have a message', time: '2020-10-23 09:30:00' },
            { title: '项目开发', time: '2020-10-23 09:30:00' },
            { title: '陪吃饭', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: 'you have a message', time: '2020-10-23 09:30:00' },
            { title: '项目开发', time: '2020-10-23 09:30:00' },
            { title: '陪吃饭', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' }
        ];
    adminConsole.crateTable(item, cols, data, true, 500);
}

messagecenter.createNoticetable = function() {
    let item = '#noticemessage',
        cols = [
            { type: 'checkbox', width: 50, sort: false, fixed: 'left' },
            { field: 'title', title: '标题内容', sort: false },
            { field: 'time', title: '添加时间' }
        ],
        data = [
            { title: 'hello message', time: '2020-10-23 09:30:00' },
            { title: '项目开发', time: '2020-10-23 09:30:00' },
            { title: '陪吃饭', time: '2020-10-23 09:30:00' },
            { title: 'hello message', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: 'you have a message', time: '2020-10-23 09:30:00' },
            { title: 'hello message', time: '2020-10-23 09:30:00' },
            { title: '陪吃饭', time: '2020-10-23 09:30:00' },
            { title: 'hello message', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: 'you have a message', time: '2020-10-23 09:30:00' },
            { title: '项目开发', time: '2020-10-23 09:30:00' },
            { title: '陪吃饭', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: 'you have a message', time: '2020-10-23 09:30:00' },
            { title: '项目开发', time: '2020-10-23 09:30:00' },
            { title: '陪吃饭', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: 'you have a message', time: '2020-10-23 09:30:00' },
            { title: '项目开发', time: '2020-10-23 09:30:00' },
            { title: '陪吃饭', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: 'you have a message', time: '2020-10-23 09:30:00' },
            { title: '项目开发', time: '2020-10-23 09:30:00' },
            { title: '陪吃饭', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: 'you have a message', time: '2020-10-23 09:30:00' },
            { title: '项目开发', time: '2020-10-23 09:30:00' },
            { title: '陪吃饭', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: 'you have a message', time: '2020-10-23 09:30:00' },
            { title: '项目开发', time: '2020-10-23 09:30:00' },
            { title: '陪吃饭', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: 'you have a message', time: '2020-10-23 09:30:00' },
            { title: '项目开发', time: '2020-10-23 09:30:00' },
            { title: '陪吃饭', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' }
        ];
    adminConsole.crateTable(item, cols, data, true, 500);
}

messagecenter.createDirecttable = function() {
    let item = '#directmessage',
        cols = [
            { type: 'checkbox', width: 50, sort: false, fixed: 'left' },
            { field: 'title', title: '标题内容', sort: false },
            { field: 'time', title: '添加时间' }
        ],
        data = [
            { title: 'you have a message', time: '2020-10-23 09:30:00' },
            { title: '项目开发', time: '2020-10-23 09:30:00' },
            { title: '陪吃饭', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: 'you have a message', time: '2020-10-23 09:30:00' },
            { title: '项目开发', time: '2020-10-23 09:30:00' },
            { title: '陪吃饭', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: 'you have a message', time: '2020-10-23 09:30:00' },
            { title: '项目开发', time: '2020-10-23 09:30:00' },
            { title: '陪吃饭', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: 'you have a message', time: '2020-10-23 09:30:00' },
            { title: '项目开发', time: '2020-10-23 09:30:00' },
            { title: '陪吃饭', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: 'you have a message', time: '2020-10-23 09:30:00' },
            { title: '项目开发', time: '2020-10-23 09:30:00' },
            { title: '陪吃饭', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: 'you have a message', time: '2020-10-23 09:30:00' },
            { title: '项目开发', time: '2020-10-23 09:30:00' },
            { title: '陪吃饭', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: 'you have a message', time: '2020-10-23 09:30:00' },
            { title: '项目开发', time: '2020-10-23 09:30:00' },
            { title: '陪吃饭', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: 'you have a message', time: '2020-10-23 09:30:00' },
            { title: '项目开发', time: '2020-10-23 09:30:00' },
            { title: '陪吃饭', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: 'you have a message', time: '2020-10-23 09:30:00' },
            { title: '项目开发', time: '2020-10-23 09:30:00' },
            { title: '陪吃饭', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' },
            { title: '修改小bug', time: '2020-10-23 09:30:00' }
        ];
    adminConsole.crateTable(item, cols, data, true, 500);
}

worksystem.createTable = function() {
    layui.use(['table'], function() {
        let table = layui.table;
        let dropdown = layui.dropdown;
        table.render({
            elem: "#worksystem",
            skin: 'row',
            even: true,
            height: 550,
            page: true,
            id: 'worksystem',
            toolbar: 'default',
            cols: [
                [
                    { type: 'checkbox', fixed: 'left' },
                    { field: 'id', title: '工单号', sort: true, width: 120 },
                    { field: 'tag', title: '业务性质', sort: false, width: 100 },
                    { field: 'title', title: '工单标题', sort: false, width: 140 },
                    { field: 'process', title: '进度', sort: false, width: 120, templet: '#workprocess' },
                    { field: 'poster', title: '提交者', sort: false, width: 120 },
                    { field: 'receiver', title: '受理人员', sort: false, width: 120 },
                    { field: 'status', title: '工单状态', sort: false, width: 120, templet: '#workstatus' },
                    //绑定列工具条
                    { fixed: 'right', title: '操作', width: 150, align: 'center', toolbar: '#workaction' }
                    //自定义模板
                    // { field: 'action', title: '操作', sort: false, templet: '#articleTpl' },
                ]
            ],
            data: [
                { id: 1001, tag: '公告', title: '舌尖上的中国', process: 23, poster: '作者1', receiver: '111', status: 1 },
                { id: 1002, tag: '讨论', title: '传承文化的面食', process: 100, poster: '作者1', receiver: '111', status: 0 },
                { id: 1003, tag: '分享', title: '河西走廊', process: 68, poster: '作者1', receiver: '111', status: 2 },
                { id: 1004, tag: '提问', title: '敦煌舞曲', process: 0, poster: '作者1', receiver: '111', status: 0 },
                { id: 1005, tag: '分享', title: '改革开放三十年经济分析', process: 54, poster: '作者1', receiver: '111', status: 0 },
                { id: 1001, tag: '分享', title: '舌尖上的中国', process: 88, poster: '作者1', receiver: '111', status: 2 },
                { id: 1001, tag: '公告', title: '舌尖上的中国', process: 23, poster: '作者1', receiver: '111', status: 1 },
                { id: 1002, tag: '讨论', title: '传承文化的面食', process: 100, poster: '作者1', receiver: '111', status: 0 },
                { id: 1003, tag: '分享', title: '河西走廊', process: 68, poster: '作者1', receiver: '111', status: 2 },
                { id: 1004, tag: '提问', title: '敦煌舞曲', process: 0, poster: '作者1', receiver: '111', status: 0 },
                { id: 1005, tag: '分享', title: '改革开放三十年经济分析', process: 54, poster: '作者1', receiver: '111', status: 0 },
                { id: 1001, tag: '分享', title: '舌尖上的中国', process: 88, poster: '作者1', receiver: '111', status: 1 },
                { id: 1001, tag: '公告', title: '舌尖上的中国', process: 23, poster: '作者1', receiver: '111', status: 1 },
                { id: 1002, tag: '讨论', title: '传承文化的面食', process: 100, poster: '作者1', receiver: '111', status: 0 },
                { id: 1003, tag: '分享', title: '河西走廊', process: 68, poster: '作者1', receiver: '111', status: 0 },
                { id: 1004, tag: '提问', title: '敦煌舞曲', process: 0, poster: '作者1', receiver: '111', status: 0 },
                { id: 1005, tag: '分享', title: '改革开放三十年经济分析', process: 54, poster: '作者1', receiver: '111', status: 0 },
                { id: 1001, tag: '分享', title: '舌尖上的中国', process: 88, poster: '作者1', receiver: '111', status: 1 },
                { id: 1001, tag: '公告', title: '舌尖上的中国', process: 23, poster: '作者1', receiver: '111', status: 1 },
                { id: 1002, tag: '讨论', title: '传承文化的面食', process: 100, poster: '作者1', receiver: '111', status: 0 },
                { id: 1003, tag: '分享', title: '河西走廊', process: 68, poster: '作者1', receiver: '111', status: 0 },
                { id: 1004, tag: '提问', title: '敦煌舞曲', process: 0, poster: '作者1', receiver: '111', status: 0 },
                { id: 1005, tag: '分享', title: '改革开放三十年经济分析', process: 54, poster: '作者1', receiver: '111', status: 0 },
                { id: 1001, tag: '分享', title: '舌尖上的中国', process: 88, poster: '作者1', receiver: '111', status: 1 },
                { id: 1001, tag: '公告', title: '舌尖上的中国', process: 23, poster: '作者1', receiver: '111', status: 1 },
                { id: 1002, tag: '讨论', title: '传承文化的面食', process: 100, poster: '作者1', receiver: '111', status: 0 },
                { id: 1003, tag: '分享', title: '河西走廊', process: 68, poster: '作者1', receiver: '111', status: 0 },
                { id: 1004, tag: '提问', title: '敦煌舞曲', process: 0, poster: '作者1', receiver: '111', status: 0 },
                { id: 1005, tag: '分享', title: '改革开放三十年经济分析', process: 54, poster: '作者1', receiver: '111', status: 0 },
                { id: 1001, tag: '分享', title: '舌尖上的中国', process: 88, poster: '作者1', receiver: '111', status: 1 },
                { id: 1001, tag: '公告', title: '舌尖上的中国', process: 23, poster: '作者1', receiver: '111', status: 1 },
                { id: 1002, tag: '讨论', title: '传承文化的面食', process: 100, poster: '作者1', receiver: '111', status: 0 },
                { id: 1003, tag: '分享', title: '河西走廊', process: 68, poster: '作者1', receiver: '111', status: 0 },
                { id: 1004, tag: '提问', title: '敦煌舞曲', process: 0, poster: '作者1', receiver: '111', status: 0 },
                { id: 1005, tag: '分享', title: '改革开放三十年经济分析', process: 54, poster: '作者1', receiver: '111', status: 0 },
                { id: 1001, tag: '分享', title: '舌尖上的中国', process: 88, poster: '作者1', receiver: '111', status: 1 },
                { id: 1001, tag: '公告', title: '舌尖上的中国', process: 23, poster: '作者1', receiver: '111', status: 1 },
                { id: 1002, tag: '讨论', title: '传承文化的面食', process: 100, poster: '作者1', receiver: '111', status: 0 },
                { id: 1003, tag: '分享', title: '河西走廊', process: 68, poster: '作者1', receiver: '111', status: 0 },
                { id: 1004, tag: '提问', title: '敦煌舞曲', process: 0, poster: '作者1', receiver: '111', status: 0 },
                { id: 1005, tag: '分享', title: '改革开放三十年经济分析', process: 54, poster: '作者1', receiver: '111', status: 0 },
                { id: 1001, tag: '分享', title: '舌尖上的中国', process: 88, poster: '作者1', receiver: '111', status: 1 },
            ]
        });

        //监听行工具事件
        table.on('tool(worksystem)', function(obj) { //注：tool 是工具条事件名，test 是 table 原始容器的属性 lay-filter="对应的值"
            var data = obj.data //获得当前行数据
                ,
                layEvent = obj.event; //获得 lay-event 对应的值
            if (layEvent === 'detail') {
                layer.msg('查看操作');
            } else if (layEvent === 'more') {
                //下拉菜单
                dropdown.render({
                    elem: this, //触发事件的 DOM 对象,
                    show: true, //外部事件触发即显示,
                    data: [{
                        title: '编辑',
                        id: 'edit'
                    }, {
                        title: '删除',
                        id: 'del'
                    }],
                    click: function(menudata) {
                        if (menudata.id === 'del') {
                            layer.confirm('真的删除行么', function(index) {
                                obj.del(); //删除对应行（tr）的DOM结构
                                layer.close(index);
                                //向服务端发送删除指令
                            });
                        } else if (menudata.id === 'edit') {
                            layer.msg('编辑操作，当前行 ID:' + data.id);
                        }
                    },
                    align: 'right', //右对齐弹出（v2.6.8 新增） ,
                    style: 'box-shadow: 1px 1px 10px rgb(0 0 0 / 12%);' //设置额外样式
                })
            } else if (layEvent === 'edit') {
                layer.msg('查看操作');
            } else if (layEvent === 'del') {
                layer.msg('删除');
            }
        });
    });
}
admin.userTollge();

adminConsole.carousel();
adminConsole.processTbale();
adminConsole.topSeachTable();
adminConsole.hotposts();

adminMain.showReply();
webUser.crateTable();
adminUser.crateTable();
roleManage.roleTable();
profit.upload();
customer.createPager();
product.createPager();

articleList.crateTable();
articleList.deltableData();
articleList.addTableData();

managerclass.createTable();
managerclass.addTableData();

messagecenter.createAlltable();
messagecenter.createNoticetable();
messagecenter.createDirecttable();

worksystem.createTable();