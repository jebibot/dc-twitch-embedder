chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    const clipId = request.clipId;
    if (clipId && /^[\w-]+$/.test(clipId)) {
      fetch(`https://api.twitch.tv/kraken/clips/${clipId}`, {
        headers: {
          Accept: 'application/vnd.twitchtv.v5+json',
          'Client-ID': 'lvjrtc0njc8ivvio71b0dyt4yv1pps',
        },
      })
        .then(response => response.json())
        .then(result => fetch(result.thumbnails.small.replace(/-preview.*/, '.mp4')))
        .then(response => response.blob())
        .then(blob => sendResponse({result: URL.createObjectURL(blob)}))
        .catch(error => sendResponse({error}));
      return true;
    }
  });
  