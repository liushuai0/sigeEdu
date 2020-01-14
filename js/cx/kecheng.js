var baseUrl = "http://hsing.natapp1.cc/"
$(function() {
	$("#headerpage").load("header.html");
	$("#aboutNav").load("./common/aboutNav.html");
	$("#footer").load("footer.html");
	//获取二级页文章列表
	var visiblePages
	var totalPages
	setCookie("visiblePages", 5)
	setCookie("totalPages", 6)

	//加载分液器
	$.jqPaginator('#pagination2', {
		totalPages: parseInt(getCookie("totalPages")),
		visiblePages: parseInt(getCookie("visiblePages")),
		currentPage: 1,
		first: '<li class="first"><a href="javascript:void(0);">首页</a></li>',
		prev: '<li class="prev"><a href="javascript:;">前一页</a></li>',
		next: '<li class="next"><a href="javascript:void(0);">下一页</a></li>',
		last: '<li class="last"><a href="javascript:void(0);">尾页</a></li>',
		page: '<li class="page"><a href="javascript:;">{{page}}</a></li>',
		onPageChange: function(num, type) {
			$('#p2').text(type + '：' + num);

			

			
		}
	});

})
