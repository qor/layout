!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof exports?require("jquery"):jQuery)}(function(t){"use strict";function i(e,n){this.$element=t(e),this.options=t.extend({},i.DEFAULTS,t.isPlainObject(n)&&n),this.init()}var e="qor.widget",n="enable."+e,o="disable."+e,r="click."+e,a=".qor-widget-button, .qor-slideout__close";return i.prototype={constructor:i,init:function(){this.$element;this.bind(),this.initStatus()},bind:function(){this.$element.on(r,t.proxy(this.click,this))},initStatus:function(){t("body").append('<iframe id="qor-widget-iframe" src="/admin/widget_instances/frontend-edit"></iframe>')},click:function(i){var e=t(i.target);i.stopPropagation(),e.is(a)&&(t("#qor-widget-iframe").contents().find(".js-widget-edit-link").attr("data-url",e.data("url")),t("#qor-widget-iframe").addClass("show"))}},i.plugin=function(n){return this.each(function(){var o,r=t(this),a=r.data(e);if(!a){if(/destroy/.test(n))return;r.data(e,a=new i(this,n))}"string"==typeof n&&t.isFunction(o=a[n])&&o.apply(a)})},i.isScrollToBottom=function(t){return t.clientHeight+t.scrollTop===t.scrollHeight},t(function(){t("body").attr("data-toggle","qor.widgets"),t(".qor-widget").each(function(i,e){var n=t(e).find("*").eq(0);n.css("position","relative").addClass("qor-widget").attr("data-url",t(e).data("url")).unwrap(),n.append('<div class="qor-widget-embed-wrapper"><button data-url="'+t(e).data("url")+'" class="qor-widget-button">Edit</button></div>')}),window.closeWidgetEditBox=function(){t("#qor-widget-iframe").removeClass("show"),t("#qor-widget-iframe")[0].contentWindow.location.reload()};var e='[data-toggle="qor.widgets"]';t(document).on(o,function(n){i.plugin.call(t(e,n.target),"destroy")}).on(n,function(n){i.plugin.call(t(e,n.target))}).triggerHandler(n)}),i});