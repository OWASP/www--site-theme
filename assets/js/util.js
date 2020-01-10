$(function() {

  // introduce an element that blocks for 0.01s when page loads
  // fix for a bug when user's mouse triggers JS events too early
  /*setTimeout(function(){
       $('#blocker').remove();
  }, 10);*/


  // element hiding CSS utility classes
  // use hideEl for hiding elements from only the SIGHTED USERS
  // use removeEl for hiding elements from EVERYONE
  var hideEl = "hide-el",
      removeEl = "remove-el";

  if( Cookies.get('banner-seen') == 'true')
  {
      $("#banner").hide();
  }
  
  // close announcement banner
  $("#close-banner").click(function() {
    $(this).closest("#banner").remove();
    Cookies.set('banner-seen', 'true', { expires: 7 });
  });

  // show and focus on search bar
  // $("#search-icon").click(function() {
  //   $(".search-bar").animate({
  //     width: 'show'
  //   }, 200);
  //   $(".search-bar").focus();
  // });

  // $(".search-bar").focusout(function() {
  //   $(".search-bar").animate({
  //     width: 'hide'
  //   }, 200);
  // });

  // toggle mobile menu display
  // $(".menu-toggler").click(function() {
  //   $(".mobile-menu").toggleClass(hideEl);
  //   $("#overlay").toggleClass(removeEl);
  // });

  // give first tab in sub-menu a current class by default
  //$(".sub-nav li:first-child>a").addClass("current");

  // detect hash ID and load corresponding tab
  /*
  if (window.location.hash != "") {
    var pageTab = window.location.hash;
    $(".tab-link").removeClass("current");
    $(pageTab+"-link").addClass("current");
    //$(".sub-nav").siblings(".tab").addClass(removeEl);
    //$(pageTab).toggleClass(removeEl);
    //$(window).one('scroll', function() {
    //    window.scrollTo(0, 0);
    //})
  }
  */
 
  // show and hide tabs based on sub-menu item clicked
  /*
    $(".tab-link").click(function(e) {
    
    var x = window.pageXOffset,
        y = window.pageYOffset;
    $(".tab-link").removeClass("current");
    $("#"+this.id).addClass("current");
    //$(".sub-nav").siblings(".tab").addClass(removeEl);
    //$("#" + (this.id.replace("-link",""))).toggleClass(removeEl);
    window.location.hash = $(this).attr("id").replace("-link","");
    //$(window).one('scroll', function() {
    //    window.scrollTo(x, y);
    //})
  });
  */
  // show dropdown
  /*$(".top-nav > ul li").hover(function() {
  
    $(this).children(".dropdown-menu").toggleClass(hideEl);
  });*/
  
});

// browser version checker and notifier
// source: https://browser-update.org
var $buoop = {required:{e:-1,f:-3,o:-3,s:-1,c:-3},insecure:true,reminder:0,api:2019.07 }; 
function $buo_f(){ 
 var e = document.createElement("script"); 
 e.src = "//browser-update.org/update.min.js"; 
 document.body.appendChild(e);
};
try {document.addEventListener("DOMContentLoaded", $buo_f,false)}
catch(e){window.attachEvent("onload", $buo_f)}
