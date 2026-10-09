
const startButton = document.querySelector("#start-button");
const letterButton = document.querySelector("#letter-button");
const letterContent = document.querySelector("#letter-content");

const photos = [
  {
    src: "photo1.JPG",
    caption: "누가 인형이고 사람이죠?"
  },
  {
    src: "photo2.JPG",
    caption: "아름다운 미소"
  },
  {
    src: "photo3.JPG",
    caption: "예쁜 커플이에요1"
  },
  {
    src: "photo4.JPG",
    caption: "예쁜 커플이에요2"
  },
  {
    src: "photo5.JPG",
    caption: "절로 웃음이 나네요"
  },
  {
    src: "photo6.JPG",
    caption: "자식 농사 goat1"
  },
  {
    src: "photo7.JPG",
    caption: "자식 농사 goat22"
  }
];

let currentPhoto = 0;

// 첫 화면의 버튼을 누르면 편지 섹션으로 이동
startButton.addEventListener("click", () => {
  document.querySelector("#letter").scrollIntoView({
    behavior: "smooth"
  });

  letterContent.classList.remove("hidden");
  letterButton.textContent = "편지가 열렸어요 ♡";
});

// 편지를 열고 닫기
letterButton.addEventListener("click", () => {
  letterContent.classList.toggle("hidden");

  if (letterContent.classList.contains("hidden")) {
    letterButton.textContent = "편지 열어보기 ✉";
  } else {
    letterButton.textContent = "편지 닫기 ♡";
  }
});

// 사진 갤러리 표시
function showPhoto(index) {
  currentPhoto = (index + photos.length) % photos.length;

  document.querySelector("#gallery-image").src =
    photos[currentPhoto].src;

  document.querySelector("#photo-caption").textContent =
    photos[currentPhoto].caption;

  document.querySelector("#photo-count").textContent =
    `${currentPhoto + 1} / ${photos.length}`;
}

document.querySelector("#prev-button").addEventListener("click", () => {
  showPhoto(currentPhoto - 1);
});

document.querySelector("#next-button").addEventListener("click", () => {
  showPhoto(currentPhoto + 1);
});

// 음악 재생 및 일시 정지
const music = document.querySelector("#background-music");
const musicButton = document.querySelector("#music-button");
const musicStatus = document.querySelector("#music-status");

musicButton.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicButton.textContent = "Ⅱ";
      musicStatus.textContent = "음악이 재생 중이에요 ♫";
    } catch (error) {
      musicStatus.textContent =
        "music.mp3 파일이 있는지 확인해 주세요.";
    }
  } else {
    music.pause();
    musicButton.textContent = "▶";
    musicStatus.textContent = "음악이 잠시 멈췄어요";
  }
});

// 사진이 처음부터 올바르게 표시되도록 초기화
showPhoto(0);
