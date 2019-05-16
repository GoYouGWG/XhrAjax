# $xhrAjax
##
由于jQuery用得越来越少, 而且使用时经常只使用了其中一部分功能, 不想全部引入, 因此自己封装了请求
# 使用方式
	1.引入 xhrAjax.js
	<script src="XhrRequest.js"></script>
	2.执行请求方式
	$xhrAjax.ajax({
       url: url,
       data: data,
       type: 'get',
       success: function(res) {
		 // 成功后的回调
         console.log(res)
       },
       error: function(err) {
		 // 失败后的回调
         console.log(err)
       }
     })
# 请求配置说明
- url: 请求连接
- type: 请求方法, 默认 GET
- async: 是否异步, 默认 true
- cache: 是否缓存, 默认 true
- contentType: 请求类型, post 默认 application/x-www-form-urlencoded
- success: 请求成功回调函数
- error: 请求失败回调函数
##
> 欢迎指正
