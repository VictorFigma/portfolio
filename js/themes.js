var icons = document.getElementsByClassName('theme-swap');
var profileImg = document.getElementById('profile-image');
var iconLkd = document.getElementById('iconLkd');
var iconGit = document.getElementById('iconGit');
var iconContact = document.getElementById('iconContact');
var isDarkMode = localStorage.getItem('isDarkMode');

document.addEventListener("DOMContentLoaded", function() {
  // Load stored theme preference
  if (isDarkMode != null) {
    if (isDarkMode == 'true') {
      setDarkTheme();
    }
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Load browser's theme
    setDarkTheme();
  }

  // Switch button
  for (var i = 0; i < icons.length; i++) {
    icons[i].onclick = function() {
        isDarkMode = document.body.classList.contains('dark-theme') ? 'false' : 'true';
        localStorage.setItem('isDarkMode', isDarkMode);
        isDarkMode == 'false' ? setLightTheme() : setDarkTheme();
    }
  }
});

function setLightTheme(){
  document.body.classList.toggle('dark-theme');
  for (var j = 0; j < icons.length; j++) {
    icons[j].src = './images/theme-light.svg';
  }
  profileImg.src = './images/victor-light.png';
  iconLkd.src = './images/linkedin-mark-light.svg';
  iconGit.src = './images/github-mark-light.svg';
  iconContact.src = './images/contact-mark-light.png';
}

function setDarkTheme(){
  document.body.classList.toggle('dark-theme');
  for (var j = 0; j < icons.length; j++) {
    icons[j].src = './images/theme-dark.svg';
  }
  profileImg.src = './images/victor-dark.png';
  iconLkd.src = './images/linkedin-mark-dark.svg';
  iconGit.src = './images/github-mark-dark.svg';
  iconContact.src = './images/contact-mark-dark.png';
}