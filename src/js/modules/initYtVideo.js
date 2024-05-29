import loadApi from '../helpers/loadApi'

export default () => {
  const playBtn = document.querySelector('.js-play-video')
  if (!playBtn) return;

  const player = []
  let flag = false
  const videoUrl = playBtn.dataset.videoUrl


  function youtube_parser(url) {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
    const match = url.match(regExp)
    return (match && match[7].length == 11) ? match[7] : false
  }

  function onYouTubePlayer(url, btn) {
    let playerInstance = new YT.Player(btn, {
      height: '100%',
      width: '100%',
      videoId: youtube_parser(url),
      events: {
        'onReady': onPlayerReady
      }
    })

    player.push(playerInstance)
  }

  function onPlayerReady(event) {
    event.target.playVideo()
    flag = true
  }

  function loadPlayer(url, btn) {
    if (typeof (YT) == 'undefined' || typeof (YT.Player) == 'undefined') {
      loadApi('YT', 'https://www.youtube.com/iframe_api', null);

      window.onYouTubePlayerAPIReady = () => {
        onYouTubePlayer(url, btn);
      };
    } else {
      onYouTubePlayer(url, btn);
    }
  }

  playBtn.addEventListener('click', () => loadPlayer(videoUrl, playBtn))
};
