domReady(function(event) {

  // element hiding CSS utility class
  var el = "hide-el";

  // fix to dynamically specify announcement banner height
  function sizeBanner() {
    var h = document.getElementById("has-announcement");
    var b = document.getElementById("banner").offsetHeight;
    h.style.top = b + "px";
  }
  window.onload = sizeBanner;
  window.onresize = sizeBanner;

  // toggle mobile menu through toggling the class above
  function toggleMenu() {
    var x = document.getElementById("menu-toggle");
    var y = document.getElementById("overlay");
    if (x.classList.contains(el)) {
      x.classList.remove(el);
      y.classList.remove(el);
    } else {
      x.classList.add(el);
      y.classList.add(el);
    }
  }

  // tab switcher
  function switchTab(event, tabName) {
    event.preventDefault();

    var i, tab, tab_link;

    // hide all tab content by default
    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++) {
      tab[i].classList.add(el);
    }

    tab_link = document.getElementsByClassName("tab_link");
    for (i = 0; i < tab_link.length; i++) {
      tab_link[i].classList.remove("current");
    }

    document.getElementById(tabName).classList.remove(el);
    event.currentTarget.classList.add("current");

  }

  // simulate click behavior to show first tab by default
  document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("tab_default").click();
  });

  // browser version checker and notifier
  // source: https://browser-update.org
  var $buoop = {required:{e:-2,f:-3,o:-3,s:-1,c:-3},insecure:true,unsupported:true,api:2019.06 }; 
  function $buo_f(){ 
   var e = document.createElement("script"); 
   e.src = "//browser-update.org/update.min.js"; 
   document.body.appendChild(e);
  };
  try {document.addEventListener("DOMContentLoaded", $buo_f,false)}
  catch(e){window.attachEvent("onload", $buo_f)}

});

