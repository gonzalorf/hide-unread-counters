setInterval(() => {
  chrome.storage.local.get('facebookCheckbox', function (result) {
    if(result.facebookCheckbox === "true"){
        hideFacebookCounters();
    }
  });
}, 5000);

function hideFacebookCounters(){
  const badgeColor = 'rgb(228, 30, 63)';

  let spans = document.querySelectorAll('span');
  
  spans.forEach(function(span) {
    var computedStyle = window.getComputedStyle(span);
    var backgroundColor = computedStyle.backgroundColor;
      if(backgroundColor === badgeColor){  
          span.style.display = 'none';
      }
  });
  
  // Page title
  document.querySelector('title').textContent = 'Facebook';
}