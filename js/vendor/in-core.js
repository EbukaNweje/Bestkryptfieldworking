/*! jquery.breadcrumbs-generator 1.0.3 | toumin.m7@gmail.com | Yuusaku Miyazaki | MIT License */
!function(e){"object"==typeof module&&"object"==typeof module.exports?e(require("jquery"),window):e(jQuery,window)}((function(e,t){e.fn.breadcrumbsGenerator=function(t){return this.each((function(){new e.breadcrumbsGenerator(this,t)}))},e.breadcrumbsGenerator=function(e,t){this.elem=e,this.option=this._setOption(t),this._main()},e.extend(e.breadcrumbsGenerator.prototype,{_setOption:function(t){return e.extend({sitemaps:"#sitemaps",index_type:"index.html"},t)},_main:function(){var n=t.location.pathname.split("https://www.indonez.com/").pop();""==n&&(n=this.option.index_type);var a=e(this.option.sitemaps).find('a[href*="'+n+'"]'),i=e(this.elem).children();e(this.elem).empty();var s=this;e(a).parentsUntil(this.option.sitemaps).filter(":has(> a[href])").each((function(){e("<li>").append(e(this).children("a").clone()).prependTo(s.elem)})),e(this.elem).prepend(i),e(this.elem).find('a[href*="'+n+'"]').each((function(){e(this).parent().text(e(this).text())}))}})})),
/*! jquery.contactform 1.1 | http://www.indonez.com | (c) 2020 Indonez | MIT License */
function(e){"use strict";let t={theme_contact_page:function(){e("#sendemail").click((function(){let t=e("#name").val(),n=e("#subject").val(),a=e("#email").val(),i=e("#message").val();return""!=a?(e.ajax({url:"./sendemail.php",type:"POST",data:"name="+t+"&subject="+n+"&email="+a+"&message="+i,success:function(t){"email_error"==t?e("#email").addClass("uk-form-danger").on("click",(function(){e("#email").removeClass("uk-form-danger")})):(e("#name, #subject, #email, #message").val(""),UIkit.notification("<i class='fas fa-check-circle uk-margin-small-right'></i> Your message has been sent successfully. Thank you!",{timeout:3e3,status:"primary",pos:"bottom-right"}))}}),!1):(""==t&&e("#name").addClass("uk-form-danger").on("click",(function(){e("#name, #email, #subject, #message").removeClass("uk-form-danger")})),""==a&&e("#email").addClass("uk-form-danger").on("click",(function(){e("#name, #email, #subject, #message").removeClass("uk-form-danger")})),""==n&&e("#subject").addClass("uk-form-danger").on("click",(function(){e("#name, #email, #subject, #message").removeClass("uk-form-danger")})),""==i&&e("#message").addClass("uk-form-danger").on("click",(function(){e("#name, #email, #subject, #message").removeClass("uk-form-danger")})),!1)}))},theme_init:function(){t.theme_contact_page()}};jQuery(document).ready((function(e){t.theme_init()}))}(jQuery),
/*! jquery.totop 1.0 | http://www.indonez.com | (c) 2020 Indonez | MIT License */
function(e){"use strict";let t={theme_to_top:function(){e(window).scroll((function(){e(window).scrollTop()>300?e(".in-totop").fadeIn(0).addClass("uk-animation-slide-top"):e(".in-totop").fadeOut(300).removeClass("uk-animation-slide-top")}))},theme_init:function(){t.theme_to_top()}};jQuery(document).ready((function(e){t.theme_init()}))}(jQuery);