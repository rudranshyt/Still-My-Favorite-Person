const musicBtn = document.getElementById("music-btn");
const bgMusic = document.getElementById("bg-music");

let isPlaying = false;

musicBtn.addEventListener("click", () => {
  if (!isPlaying) {
    bgMusic.play();
    musicBtn.textContent = "Pause ⏸️";
    isPlaying = true;
  } else {
    bgMusic.pause();
    musicBtn.textContent = "Play🎵";
    isPlaying = false;
  }
});
