var iconSwap1 = document.getElementById('theme-swap1');
var iconSwap2 = document.getElementById('theme-swap2');
var bttnSwap = document.getElementById('bttn-swap');
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

  // Switch buttons
  iconSwap1.onclick = function() {
    switchListener();
  }
  bttnSwap.onclick = function() {
    switchListener();
  }
});

function switchListener(){
  isDarkMode = document.body.classList.contains('dark-theme') ? 'false' : 'true';
  localStorage.setItem('isDarkMode', isDarkMode);
  isDarkMode == 'false' ? setLightTheme() : setDarkTheme();
}

function setLightTheme(){
  document.body.classList.toggle('dark-theme');
  iconSwap1.src = './images/theme-light.svg';
  iconSwap2.src = './images/theme-light.svg';
  profileImg.src = './images/victor-light.png';
  iconLkd.src = './images/linkedin-mark-light.svg';
  iconGit.src = './images/github-mark-light.svg';
  iconContact.src = './images/contact-mark-light.png';
}

function setDarkTheme(){
  document.body.classList.toggle('dark-theme');
  iconSwap1.src = './images/theme-dark.svg';
  iconSwap2.src = './images/theme-dark.svg';
  profileImg.src = './images/victor-dark.png';
  iconLkd.src = './images/linkedin-mark-dark.svg';
  iconGit.src = './images/github-mark-dark.svg';
  iconContact.src = './images/contact-mark-dark.png';
}