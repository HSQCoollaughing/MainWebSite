/**
 * Created by wuyaru
 * Author: wuyaru
 * Date: 2019/1/3
 * Time: 10:47
 */

$(function () {

    //鼠标进入下载app链接展示
    $("#J_downloadapp").on("mouseenter",function () {
        $(this).find(".app-qrcode").css("display","block");
    }).on("mouseleave",function () {
        $(this).find(".app-qrcode").css("display","none");
    })

    //mini购物车展示详情
    $(".topbar-cart-mini").on("mouseenter",function () {
        $("#J_miniCartMenu").stop().slideDown();
    }).on("mouseleave",function () {
        $("#J_miniCartMenu").stop().slideUp();
    })

    //搜索框获取焦点
    $("#search").on("focus",function () {
        // 清空热搜词汇
       $(".search-hot-words").addClass("hide");
       // 为search-form添加类
        $(".search-form").addClass("search-form-focus");

        //将data-search-config中保存的数据转成li放到result-list中
        // {'defaultWords':[{'Key':'小米6X','Rst':6},{'Key':'小米MIX 2S','Rst':5},{'Key':'黑鲨游戏手机','Rst':3},{'Key':'红米Note 5','Rst':6},{'Key':'红米5A','Rst':13},{'Key':'小米电视4C','Rst':5},{'Key':'电视32英寸','Rst':3},{'Key':'笔记本pro','Rst':5},{'Key':'空气净化器','Rst':11},{'Key':'净水器','Rst':8}]}
        var keywords = JSON.parse($("#search").data("search-config").toString().replace(/'/g,"\""));

        keywords.defaultWords.forEach(function (item,index) {
            console.log(index);
            //拼接li
            var liItem =" <li class=\"result-list-item\">\n" +
                "                            <a href=\"javascript:;\">\n" +
                "                                "+item.Key+"\n" +
                "                                <span class=\"result\">约有"+item.Rst+"件</span>\n" +
                "                            </a>\n" +
                "                        </li>";
            $(".result-list").append(liItem);
        });
        $(".keywords-list").removeClass("hide");

    });
    $("#search").on("blur",function () {
        // 清空热搜词汇
        $(".search-hot-words").removeClass("hide");
        // 为search-form添加类
        $(".search-form").removeClass("search-form-focus");
        $(".result-list").empty();
        $(".keywords-list").addClass("hide");
    });


})
 