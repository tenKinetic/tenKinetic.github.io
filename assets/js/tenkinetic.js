const videos = [
  '/assets/au/before-the-draft.mp3',
  '/assets/au/divided-by-hemispheres.mp3',
  '/assets/au/everything.mp3',
  '/assets/au/five-dollars.mp3',
  '/assets/au/hallway-never-ends.mp3',
  '/assets/au/i-dont-want-you-there.mp3',
  '/assets/au/look-you-in-the-eye.m4a',
  '/assets/au/plane.mp3',
  '/assets/au/plenty-of-fist.mp3',
  '/assets/au/radio.mp3',
  '/assets/au/smile.mp3',
  '/assets/au/stress-fracture.m4a',
  '/assets/au/sun.mp3',
  '/assets/au/tiny-pieces.mp3',
  '/assets/au/torque.mp3',
  '/assets/au/tucson.mp3'
]

document.addEventListener( "DOMContentLoaded", () => {

  let currentVideo = 5
  const nextVideo = () => {
    if (currentVideo === 15) currentVideo = 0
    else ++currentVideo
    return videos[currentVideo]
  }

  const audioPlayer = document.querySelector('audio')
  audioPlayer.onended = function() {
    audioPlayer.src = nextVideo()
    audioPlayer.play()
  }

  document.getElementById('show-audio').addEventListener('click', () => {
    if (audioPlayer.style.display !== 'inline') {
      audioPlayer.style.display = 'inline'
      audioPlayer.play()
    }
  })

}, false)
