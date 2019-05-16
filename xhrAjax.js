// url: 请求连接
// type: 请求方法, 默认 GET
// async: 是否异步, 默认 true
// cache: 是否缓存, 默认 true
// contentType: 请求类型, post 默认 application/x-www-form-urlencoded
// success: 请求成功回调函数
// error: 请求失败回调函数
// 
var $xhrAjax = (function(){
  var Request = function() {};
  Request.prototype.ajax = function (options) {
    options = options || {};
    // 发送请求URL
    var url = options.url;
    // 请求类型
    var type = (options.type || 'GET').toUpperCase();
    // 是否异步请求
    var async = options.async || true;
    // 是否缓存
    var cache = options.cache === undefined ? true : options.cache;
    // 发送数据到服务器是所使用的内容类型
    var contentType= options.contentType || 'application/x-www-form-urlencoded';
    options.dataType = options.dataType || 'json';
    // 数据
    var data = options.data
    // 创建xhr对象
    var xhr
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else {
      // 兼容低版本IE 10以下
      xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    // GET POST
    if (type === 'GET') {
      // 格式化参数
      var params = formatParams(data);
      xhr.open('GET', url + '?' + params, async);
      xhr.send(null);
    } else {
      var params = formatParams(data);
      xhr.open('POST', url, async)
      // 默认提交 表单格式
      xhr.setRequestHeader('Content-Type', contentType);
      xhr.send(params);
    }
    // 接收
    xhr.onreadystatechange = function () {
      // console.log(xhr.readyState);
      if (xhr.readyState === 4) {
        var status = xhr.status;
        if (status === 200) {
          options.success && options.success(xhr.responseText);
        } else {
          options.error && options.error(xhr);
        }
      }
    }
    // 格式化参数
    function formatParams() {
      var data = arguments[0];
      var arr = [];
      for(var key in data) {
        arr.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
      }
      if (!cache) {
        arr.push('rand=' + Math.random());
      }
      return arr.join('&')
    }
  }
  if (Request.flag) {
    return Request.flag;
  }
  Request.flag = new Request();
  return Request.flag;
})();
