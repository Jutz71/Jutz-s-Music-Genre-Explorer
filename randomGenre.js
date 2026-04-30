fetch('./genres.json')
  .then(r => r.json())
  .then(myJson => {
    const genres = myJson;

    const genreName = document.getElementById('genreName');
    const previewArtist = document.getElementById('previewArtist');
    const previewSong =  document.getElementById('previewSong');
    const rollBtn = document.getElementById('rollBtn');
    const link = document.getElementById('link');
    const name = document.getElementById('name');
    const stopBtn = document.getElementById('stopPlay').addEventListener('click', stopPlay)
    const resumeBtn = document.getElementById('resumePlay').addEventListener('click', resumePlay)
    const replayBtn = document.getElementById('rePlay').addEventListener('click', rePlay)

    
    rollBtn.addEventListener("click", () => {
      const random = Math.floor(Math.random() * genres.length);
      const genre = genres[random];

      genreName.textContent = genre.name; 
      previewArtist.textContent = genre.previewArtist; 
      previewSong.textContent = genre.previewSong; 
      link.href = genre.link;
      preview.src = genre.preview;
      preview.play()
    });
  });

function stopPlay(){
  preview.pause()

}

function resumePlay(){
  preview.play()

}

function rePlay(){
  preview.currentTime = 0
  preview.play()

}
