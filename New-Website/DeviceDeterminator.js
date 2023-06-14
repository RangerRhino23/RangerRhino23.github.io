function checkWindowResize() {
  var width = window.innerWidth;
  var isDesktop = width > 1200;

  if (isDesktop !== lastIsDesktop) {
    if (isDesktop) {
      loadDesktopView(window.location.pathname);
    } else {
      loadMobileView(window.location.pathname);
    }
  }

  lastIsDesktop = isDesktop;
}

function loadMobileView(pathName) {
  var lastIndexOfDot = pathName.lastIndexOf('.');
  var pathname = pathName.substring(0, lastIndexOfDot);

  var url = `${pathname}-Mobile.html`;
  window.location.href = url;
}

function loadDesktopView(pathName) {
  var lastIndexOfDot = pathName.lastIndexOf('-');
  var pathname = pathName.substring(0, lastIndexOfDot);

  var url = `${pathname}.html`;
  window.location.href = url;
}

var lastIsDesktop = window.innerWidth > 1200;
window.addEventListener('resize', checkWindowResize);