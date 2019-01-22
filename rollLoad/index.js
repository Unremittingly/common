;(function ($) {
    let defaultOpt = {
      cur_page:1,//当前页数
      total_page:10,//
      page_num:10,//每页加载数量
    };
    $.fn.scrollLoad =function (option) {

        $.extend(defaultOpt,option);



        return this;
    };
})(jQuery);