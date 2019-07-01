// source: https://stackoverflow.com/a/25560381
(function(exports, d) {
  function domReady(fn, context) {

    function onReady(event) {
      d.removeEventListener("DOMContentLoaded", onReady);
      fn.call(context || exports, event);
    }

    function onReadyIe(event) {
      if (d.readyState === "complete") {
        d.detachEvent("onreadystatechange", onReadyIe);
        fn.call(context || exports, event);
      }
    }

    d.addEventListener && d.addEventListener("DOMContentLoaded", onReady) ||
    d.attachEvent      && d.attachEvent("onreadystatechange", onReadyIe);
  }

  exports.domReady = domReady;
})(window, document);