// 2. This code loads the IFrame Player API code asynchronously.
const tag = document.createElement("script");
const video = document.getElementById("player");
const inputForm = document.getElementById("input-form");
const startMusic = document.getElementsByClassName("start-music")[0];
const timeValue = document.getElementsByClassName("time-value")[0];
const listenAgainButton = document.getElementsByClassName(
  "listen-again-button"
)[0];
const answerPart = document.getElementsByClassName("answer-part")[0];

const currentMusicID = 0;

const musicsClass = [
  (music1 = {
    youtubePart: {
      height: "0",
      width: "0",
      videoId: "kNyR46eHDxE",
      playerVars: {
        playsinline: 1,
        start: 2,
      },
    },

    answerPart: {
      firstAnswer: "Death Note",
      secondAnswer: "Attack On Titan",
      thirdAnswer: "Full Metal Alch",
    },
    correctAnswer: "Death Note",
  }),
  (music2 = {
    youtubePart: {
      height: "0",
      width: "0",
      videoId: "qR6dzwQahOM",
      playerVars: {
        playsinline: 1,
        start: 0.5,
      },
    },
    answerPart: {
      firstAnswer: "Code Geass",
      secondAnswer: "L From Death Note",
      thirdAnswer: "Naruto",
    },
    correctAnswer: "L From Death Note",
  }),
  (music3 = {
    height: "0",
    width: "0",
    videoId: "LKP-vZvjbh8",
    playerVars: {
      playsinline: 1,
      start: 0.5,
    },
  }),
];

const ThingsToDoWhenStart = () => {
  SetAnswers();
  SetAddEventListeners();
};

startMusic.addEventListener("click", function (e) {
  inputForm.style.display = "none";
  console.log(timeValue.value);
  e.preventDefault();
  setTimeout(() => {
    PlayVideo();
  }, 1000);
});

listenAgainButton.addEventListener("click", function () {
  PlayVideo();
});

const ShowOrHideElement = (status, showObject) => {
  if (status === "show") {
    showObject.style.display = "block";
  } else {
    showObject.style.display = "none";
  }
};

const StopVideo = () => {
  player.stopVideo();
};

const PlayVideo = () => {
  const videoId = musicsClass[currentMusicID].youtubePart.videoId;
  const startSeconds = musicsClass[currentMusicID].youtubePart.playerVars.start;

  if (player && player.loadVideoById) {
    player.loadVideoById({
      videoId: videoId,
      startSeconds: startSeconds,
    });
  } else {
    console.error(
      "Player not available or loadVideoById method not supported."
    );
  }

  setTimeout(() => {
    StopVideo();
    ShowOrHideElement("show", listenAgainButton);
  }, timeValue.value * 1000);
};

const SetAnswers = () => {
  answerPart.children[0].innerHTML =
    musicsClass[currentMusicID].answerPart.firstAnswer;
  answerPart.children[1].innerHTML =
    musicsClass[currentMusicID].answerPart.secondAnswer;
  answerPart.children[2].innerHTML =
    musicsClass[currentMusicID].answerPart.thirdAnswer;
};

const SetAddEventListeners = () => {
  answerPart.children[0].addEventListener("click", function (e) {
    AnswerEventController(e.target);
  });
  answerPart.children[1].addEventListener("click", function (e) {
    AnswerEventController(e.target);
  });
  answerPart.children[2].addEventListener("click", function (e) {
    AnswerEventController(e.target);
  });
};

const AnswerEventController = (e) => {
  if (musicsClass[currentMusicID].correctAnswer === e.innerHTML) {
    console.log("Correct Answer");
  } else {
    console.log("Wrong Answer");
  }
};

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", musicsClass[currentMusicID].youtubePart);
}

ThingsToDoWhenStart();
