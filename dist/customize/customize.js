var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}!function e(t,n,i){function s(l,o){if(!n[l]){if(!t[l]){var u="function"==typeof require&&require;if(!o&&u)return u(l,!0);if(r)return r(l,!0);var a=new Error("Cannot find module '"+l+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[l]={exports:{}};t[l][0].call(c.exports,function(e){var n=t[l][1][e];return s(n||e)},c,c.exports,e,t,n,i)}return n[l].exports}for(var r="function"==typeof require&&require,l=0;l<i.length;l++)s(i[l]);return s}({1:[function(e,t,n){var i,s,r,l,o,u,a,c,h=e("./module/dom.js"),f=e("./module/uploader.js"),d=e("./module/canvas.js"),m=e("./module/group.js"),v=e("./module/group-item.js");e("./module/area.js");window,document,i=new f("#upload-file"),s=new d("#canvas"),r=new m("#group"),h("#main"),l=h("#index"),o=h("#upload-img"),h("#upload-option"),u=h("#zoom-in"),a=h("#zoom-out"),c=h("#replace-img"),l.on("animationend",function(){l.remove()}),o.on("click",function(){i.open({name:"图片",accept:"image/*"}).success(function(e){s.setImage(e),l.addClass("hide")})}),u.on("click",function(){s.zoomIn()}),a.on("click",function(){s.zoomOut()}),c.on("click",function(){i.open({name:"图片",accept:"image/*"}).success(function(e){s.setImage(e)})}),r.append(new v("分组1")),r.append(new v("分组2").setActive())},{"./module/area.js":2,"./module/canvas.js":3,"./module/dom.js":4,"./module/group-item.js":5,"./module/group.js":6,"./module/uploader.js":7}],2:[function(e,t,n){t.exports=function i(){_classCallCheck(this,i)}},{}],3:[function(e,t,n){var i=e("./dom.js"),s=function(){function e(t){_classCallCheck(this,e),this.$el=i(t),this.$img=this.$el.find("img")}return _createClass(e,[{key:"init",value:function(){this.width=this.$img.width(),this.height=this.$img.height(),this.scale=1,this.updateImage()}},{key:"updateImage",value:function(){this.$img.width(this.width*this.scale),this.$img.height(this.height*this.scale)}},{key:"setImage",value:function(e){var t=this;this.$img.clearStyle(),this.$img.attr("src",e),this.$img.on("load",function(){return t.init()},!0)}},{key:"zoomIn",value:function(){this.scale+=.1,this.updateImage()}},{key:"zoomOut",value:function(){this.scale>.2&&(this.scale-=.1,this.updateImage())}}]),e}();t.exports=s},{"./dom.js":4}],4:[function(e,t,n){var i=function(){function e(t){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:document;_classCallCheck(this,e),/^<(\w+)\s*[\w\=\-\"]*>([\w\W]*)<\/\w+>$/.test(t)?(this.el=document.createElement("div"),this.html(t),this.el=this.el.firstChild,this.els=[this.el]):"object"===(void 0===t?"undefined":_typeof(t))?t instanceof e?(this.el=t.getElement(),this.els=t.getElements()):(this.el=t,this.els=[t]):(this.els=n.querySelectorAll(t),this.el=this.els[0])}return _createClass(e,[{key:"each",value:function(e){this.els.forEach(function(t){e(t)})}},{key:"find",value:function(t){return new e(t,this.el)}},{key:"on",value:function(e,t,n){return n?this.el["on"+e]=t:this.el.addEventListener(e,t),this}},{key:"off",value:function(e,t){return this.el.removeEventListener(e,t),this}},{key:"attr",value:function(e,t){return t||0===t?(this.el.setAttribute(e,t),this):this.el.getAttribute(e,t)}},{key:"removeAttr",value:function(e,t){return this.el.removeAttribute(e,t),this}},{key:"addClass",value:function(){var e;return(e=this.el.classList).add.apply(e,arguments),this}},{key:"removeClass",value:function(){var e;return(e=this.el.classList).remove.apply(e,arguments),this}},{key:"width",value:function(e){if(!e)return this.el.width;this.el.style.width=e+"px"}},{key:"height",value:function(e){if(!e)return this.el.height;this.el.style.height=e+"px"}},{key:"clearStyle",value:function(){return this.el.style.cssText="",this}},{key:"getElement",value:function(){return this.el}},{key:"getElements",value:function(){return this.els}},{key:"append",value:function(t){return t instanceof e&&(t=t.getElement()),this.el.appendChild(t),this}},{key:"remove",value:function(){return this.el.remove(),this}},{key:"replace",value:function(t){return t instanceof e&&(t=t.getElement()),this.parent().getElement().replaceChild(t,this.el),this}},{key:"html",value:function(e){return e?(this.el.innerHTML=e,this):this.el.innerHTML}},{key:"parent",value:function(){return new e(this.el.parentNode)}},{key:"child",value:function(){return[].concat(_toConsumableArray(this.el.children)).map(function(t){return new e(t)})}},{key:"show",value:function(){return this.removeClass("hidden"),this}},{key:"hidden",value:function(){return this.addClass("hidden"),this}},{key:"click",value:function(){return this.el.click(),this}}]),e}();t.exports=function(e){return new i(e)}},{}],5:[function(e,t,n){var i=e("./dom.js"),s=function(){function e(t){_classCallCheck(this,e),this.$el=i('<li class="item">\n\t\t\t<span class="status">\n\t\t\t\t<i class="js-show icon icon-show" title="隐藏"></i>\n\t\t\t\t<i class="js-hide icon icon-hide hidden" title="显示"></i>\n\t\t\t</span>\n\t\t\t<p class="js-name single-line" title="'+t+'">'+t+'</p>\n\t\t\t<input class="js-input edit-text hidden" autocomplete="off"/>\n\t\t\t<span class="ctrl">\n\t\t\t\t<i class="js-edit icon icon-edit" title="重命名"></i>\n\t\t\t\t<i class="js-submit icon icon-submit hidden" title="确定"></i>\n\t\t\t\t<i class="js-delete icon icon-delete" title="删除"></i>\n\t\t\t</span>\n\t\t</li>'),this.name=t}return _createClass(e,[{key:"getElement",value:function(){return this.$el}},{key:"getName",value:function(){return this.name}},{key:"setName",value:function(e){return this.name=e,this.$el.find(".js-name").attr("title",e).html(e),this}},{key:"setActive",value:function(){return this.$el.addClass("active"),this}},{key:"removeActive",value:function(){return this.$el.removeClass("active"),this}},{key:"show",value:function(){return this.$el.find(".js-show").removeClass("hidden"),this.$el.find(".js-hide").addClass("hidden"),this}},{key:"hide",value:function(){return this.$el.find(".js-show").addClass("hidden"),this.$el.find(".js-hide").removeClass("hidden"),this}}]),e}();t.exports=s},{"./dom.js":4}],6:[function(e,t,n){var i=e("./dom.js"),s=function(){function e(t){_classCallCheck(this,e),this.$el=i(t),this.children=[]}return _createClass(e,[{key:"append",value:function(e){this.$el.append(e.getElement()),this.children.push(e)}},{key:"remove",value:function(e){this.children.length>1&&(e.getElement().remove(),this.children.splice(this.children.indexOf(this.$el),1))}},{key:"length",value:function(){return this.children.length}}]),e}();t.exports=s},{"./dom.js":4}],7:[function(e,t,n){var i=e("./dom.js"),s=function(){function e(t){_classCallCheck(this,e);var n=this;this.$el=i(t),this.init(),this.$el.on("change",function(){var e=this.files[0];if(!e)return this.value="",!1;if("function"==typeof n.chooseHandeler&&!1===n.chooseHandeler(e))return this.value="",!1;var t=new FileReader;t.onload=function(e){"function"==typeof n.successHandeler&&n.successHandeler(e.target.result,e)},t.onerror=function(e){"function"==typeof n.errorHandeler&&n.errorHandeler(e)},t.readAsDataURL(e),this.value=""})}return _createClass(e,[{key:"init",value:function(){var e=this;this.successHandeler=function(){},this.errorHandeler=function(){return alert((e.options.name||"文件")+"读取错误")},this.$el.removeAttr("accept")}},{key:"open",value:function(e){return this.init(),this.options=e||{},this.options.accept&&this.$el.attr("accept",e.accept),this.$el.click(),this}},{key:"choose",value:function(e){this.chooseHandeler=e}},{key:"success",value:function(e){return this.successHandeler=e,this}},{key:"error",value:function(e){return this.errorHandeler=e,this}}]),e}();t.exports=s},{"./dom.js":4}]},{},[1]);
//# sourceMappingURL=customize.js.map
