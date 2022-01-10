class TwitchClip extends HTMLElement {
  constructor() {
    super();
  }

  get files() {
    return [this.file];
  }

  get value() {
    return this.file.name;
  }
}
customElements.define('twitch-clip', TwitchClip);

const twitchClipButton = document.createElement('button');
twitchClipButton.id = 'btn_twitch_clip';
twitchClipButton.classList.add('btn_lightpurple', 'small');
twitchClipButton.innerText = '트위치 클립 삽입';
twitchClipButton.addEventListener('click', () => {
  const url = prompt('클립 주소를 입력하세요');
  if (!url || url.indexOf('twitch.tv') === -1) {
    return;
  }
  const parts = url.split('/');
  const clipId = parts[parts.length - 1].split('?')[0];

  if (/^[\w-]+$/.test(clipId)) {
    document.getElementById('movie_comment').value = `https://clips.twitch.tv/${clipId}`;
    const fileInput = document.getElementById('file');
    const twitchClip = document.createElement('twitch-clip');
    twitchClip.id = "file";
    fileInput.parentNode.replaceChild(twitchClip, fileInput);

    fetch(`https://api.twitchgg.tv/clips?id=${clipId}`)
      .then(response => response.json())
      .then(result => fetch(result[clipId].url))
      .then(response => response.blob())
      .then(blob => {
        twitchClip.file = new File([blob], `${clipId}.mp4`, {type: 'video/mp4'});
        changeValue();
      })
      .catch(error => alert(error.message || error));
  }
});

const cancelButton = document.getElementById('btn_video_up');
cancelButton.parentNode.appendChild(twitchClipButton);
