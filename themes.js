document.addEventListener("DOMContentLoaded", function() {
  var icon = document.getElementById('theme-swap');
  var isDarkMode = localStorage.getItem('isDarkMode');

  // Load stored theme preference
  if (isDarkMode != null) {
    if(isDarkMode == "true"){
      document.body.classList.toggle('light-theme');
      icon.src = './images/theme-light.svg';
    }else{
      document.body.classList.toggle('dark-theme');
      icon.src = './images/theme-dark.svg';
    }
  }else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //Load browser's theme
    document.body.classList.toggle('dark-theme');
    icon.src = './images/theme-dark.svg';
  }

  // Switch button
  icon.onclick = function() {
      document.body.classList.toggle('dark-theme');
      isDarkMode = document.body.classList.contains('dark-theme');
      localStorage.setItem('isDarkMode', !isDarkMode);
      isDarkMode ? icon.src = './images/theme-dark.svg' : icon.src = './images/theme-light.svg';
  }
});