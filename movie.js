function injectScript(code) {
  const s = document.createElement('script');
  s.innerHTML = code;
  document.body.appendChild(s);
}

const _opener = window.opener;
const file_size = _opener.m_file_size;
const _GALLTYPE_ = _opener.document.getElementById('_GALLTYPE_').value;
const r_key = _opener.document.getElementById('r_key').value;
let id = _opener.document.getElementById('id').value;
if (_GALLTYPE_ == 'MI') id = 'mi$' + id;

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

  chrome.runtime.sendMessage({clipId}, response => {
    if (chrome.runtime.lastError || !response || response.error || !response.result) {
      alert(chrome.runtime.lastError || response?.error || '오류');
    }
    fetch(response.result)
      .then(response => response.blob())
      .then(blob => {
        const f = new File([blob], `${clipId}.mp4`, {type: 'video/mp4'});
        if (Math.floor(f.size / 1024 / 1024) > file_size) {
          throw new Error(`${file_size}MB를 초과합니다.`);
        }

        const data = new FormData();
        data.append('avatar', f);
        data.append('id', id);
        data.append('r_key', r_key);

        return fetch('https://m4up1.dcinside.com/movie_upload.php', {
          method: 'POST',
          body: data,
          headers: {
            Accept: 'application/json',
          },
        });
      })
      .then(response => response.json())
      .then(result => {
        if (result.msg) throw new Error(result.msg);
        const style_html = !result.thumbox && result.height >= 640 ? `style = "height:${result.height}px;"` : '';
        injectScript(`window.opener.insert_movie('<div class="dc_movie_thumbox${result.thumbox}" ${style_html}><img class="dc_mv" src="${result.thum_url}" id="tx_movie_${result.file_no}"/></div>', ${result.file_no});
closeWindow();`);
      })
      .catch(error => alert(error.message));
  });
});

const cancelButton = document.getElementById('btn_video_up_cancel');
cancelButton.parentNode.insertBefore(twitchClipButton, cancelButton);
