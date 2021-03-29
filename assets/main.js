const mainContent = document.getElementById('main-content');

window.addEventListener("hashchange", function(e) {
  setContentUrl();
}, false);

function setContentUrl() {
  let hash = '';

  if (location.hash) {
    hash = location.hash;
  } else {
    hash = '#home';
    location.hash = '#home';
  }
  
  contentUrl = 'tools/' + hash.replace('#', '') + '/index.html';

  mainContent.src = contentUrl;

  let linkElem = document.querySelector("a[href='" + hash + "'].nav-item");

  document.querySelectorAll('.nav-item').forEach(function(navItem) {
    navItem.classList.remove('active');
  })

  linkElem.classList.add('active');
}

setContentUrl();