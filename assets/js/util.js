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
  
  if( Cookies.get('popup-seen')=='true')
  {
    $("#popup").hide();
  }

  // close announcement banner
  $("#close-banner").click(function() {
    $(this).closest("#banner").remove();
      Cookies.set('banner-seen', 'true', { expires: 7 });
  });
  
  $("#close-popup").click(function() {
    $(this).closest("#popup").remove();
      Cookies.set('popup-seen', 'true', { expires: 7 });
  });

  if( Cookies.get('cookies-ok') == 'true')
  {
      $("#disclaimer-container").remove();
  }
  else{
    $("#disclaimer-container").css('opacity', '1');
  }
  
  // close announcement banner
  $("#close-disclaimer").click(function() {
    $(this).closest("#disclaimer-container").remove();
  });

  $(".disclaimerOK").click(function () {
    $(this).closest("#disclaimer-container").remove();
    Cookies.set('cookies-ok', 'true', { expires: 365 });
    // does ga still exist here?
    window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
    ga('create', '{{ analytics }}', 'auto');
    ga('send', 'pageview');
  });

  if($(location).attr('href').indexOf('owaps.org') >= 0)
  {
    $(location).attr('href','https://owasp.org/');
  }
});

// browser version checker and notifier
// source: https://browser-update.org
// var $buoop = {required:{e:-1,f:-3,o:-3,s:-1,c:-3},insecure:true,reminder:0,api:2019.07 }; 
// function $buo_f(){ 
//  var e = document.createElement("script"); 
//  e.src = "//browser-update.org/update.min.js"; 
//  document.body.appendChild(e);
// };
// try {document.addEventListener("DOMContentLoaded", $buo_f,false)}
// catch(e){window.attachEvent("onload", $buo_f)}
