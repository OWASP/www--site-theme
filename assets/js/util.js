$(document).ready(function() {

  // introduce an element that blocks for 0.01s when page loads
  // fix for a bug when user's mouse triggers JS events too early
  setTimeout(function(){
       $('#blocker').remove();
  }, 10);


  // element hiding CSS utility classes
  // use hideEl for hiding elements from only the SIGHTED USERS
  // use removeEl for hiding elements from EVERYONE
  var hideEl = "hide-el";
  var removeEl = "remove-el";

  // close announcement banner
  $("#close-banner").click(function() {
    $(this).closest("#banner").remove();
  });

  // show and focus on search bar
  $("#search-icon").click(function() {
    $(".search-bar").animate({
      width: 'show'
    }, 300);
    $(".search-bar").focus();
  });

  // toggle mobile menu display
  $(".menu-toggler").click(function() {
    $(".mobile-menu").toggleClass(hideEl);
    $("#overlay").toggleClass(removeEl);
  });

  // load and select sub-menu navigation
  $(".sub-nav li:first-child>a").addClass("current");

  $(".tab-link").click(function(e) {
    e.preventDefault();
    $(".tab-link").removeClass("current");
    $("#"+this.id).addClass("current");
    $(".sub-nav").siblings(".tab").addClass(removeEl);
    $("section#" + (this.id.replace("-link",""))).toggleClass(removeEl);
  });

  // show dropdown
  $(".top-nav > ul li").hover(function() {
    $(this).children(".dropdown-menu").toggleClass(hideEl);
  });


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