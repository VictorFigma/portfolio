document.addEventListener("DOMContentLoaded", function() {
  var icons = document.getElementsByClassName('theme-swap');
  var isDarkMode = localStorage.getItem('isDarkMode');

  // Load stored theme preference
  if (isDarkMode != null) {
    if(isDarkMode == "true"){
      document.body.classList.toggle('light-theme');
      for (var i = 0; i < icons.length; i++) {
        icons[i].src = './images/theme-light.svg';
      }
    }else{
      document.body.classList.toggle('dark-theme');
      for (var i = 0; i < icons.length; i++) {
        icons[i].src = './images/theme-dark.svg';
      }
    }
  }else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //Load browser's theme
    document.body.classList.toggle('dark-theme');
    for (var i = 0; i < icons.length; i++) {
      icons[i].src = './images/theme-dark.svg';
    }
  }

  // Switch button
  for (var i = 0; i < icons.length; i++) {
    icons[i].onclick = function() {
        document.body.classList.toggle('dark-theme');
        isDarkMode = document.body.classList.contains('dark-theme');
        localStorage.setItem('isDarkMode', !isDarkMode);
        for (var j = 0; j < icons.length; j++) {
          icons[j].src = isDarkMode ? './images/theme-dark.svg' : './images/theme-light.svg';
        }
    }
  }
});