const s = document.createElement('script');
s.src = chrome.runtime.getURL('movie-embed.js');
document.body.appendChild(s);
