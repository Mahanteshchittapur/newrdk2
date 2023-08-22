var url = "aamps://dash.akamaized.net/dash264/TestCasesMCA/dolby/3/1/ChID_voices_20_128_ddp.mpd";
//var url ="aamps://nlitenams-inso.streaming.media.azure.net/e14ba364-9de4-4252-908d-aa4e622748d7/The_Chase_30_sec_animation.ism/manifest(format=mpd-time-csf,encryption=cenc).mpd";
//var player;

// window.onload = function() {
//     player = new AAMPMediaPlayer();
// }

function loadAAMPVideo() {
    var video = document.getElementById("video");
    video.src = url;
    video.play();
    video.style.display = "block";

    // if (video.requestFullscreen) {
    //     video.requestFullscreen();
    // } else if (video.mozRequestFullScreen) {
    //     video.mozRequestFullScreen();
    // } else if (video.webkitRequestFullscreen) {
    //     video.webkitRequestFullscreen();
    // } else if (video.msRequestFullscreen) {
    //     video.msRequestFullscreen();
    // }

    var header = document.querySelector(".header");
    var carouselContainer = document.getElementById("carouselContainer");
    var languagesContainer = document.getElementById("languagesContainer");
    var playbtn = document.querySelector(".play-btn");

    header.style.display = "none";
    carouselContainer.style.display = "none";
    languagesContainer.style.display = "none";
    playbtn.style.display = "none";

    // Listen for the 'ended' event to display the homepage sections after video ends
    // video.addEventListener("ended", function() {
    //     header.style.display = "block";
    //     carouselContainer.style.display = "block";
    //     languagesContainer.style.display = "block";
    //     playbtn.style.display = "block";
    // });
}

var playButton = document.getElementById("playButton");

playButton.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) { // Enter key
        loadAAMPVideo();
    }
});
               function goToHome() {
        window.location.href = "./index.html";
    }

        document.addEventListener("keydown", function(event) {
            if (event.keyCode === 8) { // Backspace key
                  console.log("backspace is working");
                // if (video.currentTime === video.duration || video.paused) {
                    goToHome();
                   // showUI();
                
             
                    
                  
                // }
            }
        });
// // var url = "aamps://dash.akamaized.net/dash264/TestCasesMCA/dolby/3/1/ChID_voices_20_128_ddp.mpd";
// var url = "aamp://amssamples.streaming.mediaservices.windows.net/683f7e47-bd83-4427-b0a3-26a6c4547782/BigBuckBunny.ism/manifest(format=mpd-time-csf)";
// // https://https://
// var player;

// window.onload = function() {
//     player = new AAMPMediaPlayer();
// }

// function loadAAMPVideo() {
//     var video = document.getElementById("video");
//     video.src = url;
//     video.play();
//     video.style.display = "block";

//     // Request full screen mode
//     if (video.requestFullscreen) {
//         video.requestFullscreen();
//     } else if (video.mozRequestFullScreen) {
//         video.mozRequestFullScreen();
//     } else if (video.webkitRequestFullscreen) {
//         video.webkitRequestFullscreen();
//     } else if (video.msRequestFullscreen) {
//         video.msRequestFullscreen();
//     }

//     // Hide specified sections
//     var header = document.querySelector(".header");
//     var carouselContainer = document.getElementById("carouselContainer");
//     var languagesContainer = document.getElementById("languagesContainer");

//     header.style.display = "none";
//     carouselContainer.style.display = "none";
//     languagesContainer.style.display = "none";
// }

// var playButton = document.getElementById("playButton");

// playButton.addEventListener("keydown", function(event) {
//     if (event.keyCode === 13) { // Enter key
//         loadAAMPVideo();
//     }
// });




//ooooo
// var url = "aamps://dash.akamaized.net/dash264/TestCasesMCA/dolby/3/1/ChID_voices_20_128_ddp.mpd";
// var player;

// window.onload = function() {
//     player = new AAMPMediaPlayer();
// }

// function loadAAMPVideo() {
//     var video = document.getElementById("video");
//     video.src = url;
//     video.play();
//     video.style.display = "block";
   
// }

// var playButton = document.getElementById("playButton");

// playButton.addEventListener("keydown", function(event) {
//     if (event.keyCode === 13) { // Enter key
//         loadAAMPVideo();
//     }
// });

//  // Get references to the video element and the play button
// const url = "https://dash.akamaized.net/dash264/TestCasesMCA/dolby/3/1/ChID_voices_20_128_ddp.mpd";
// const player = new AAMPMediaPlayer();
//  player.load(url);
//  const videoPlayer = document.getElementById("videoPlayer");
//  const playPauseButton = document.getElementById("playButton");
//  const progressBar = document.getElementById('progress-bar');

 
 

//  // player.initialize(videoPlayer, "https://dash.akamaized.net/dash264/TestCasesIOP33/multiplePeriods/4/manifest_multiple_Periods_Different_SegmentDuration.mpd", true);
// //// vishwas Code 
// playPauseButton.addEventListener('click', function() {
//    console.log('button is xyz');
//   togglePlayPause();
//   console.log('button is clicked');
// });

 

// document.addEventListener('keydown', function(event) {
//   if (event.key === 'Enter') {togglePlayPause();
//                                console.log(togglePlayPause(), 'button is Hitted');
//                              }

 

// });

 

// videoPlayer.addEventListener('timeupdate', function() {
//   var progress = (videoPlayer.currentTime / videoPlayer.duration) * 100;
//   progressBar.style.width = progress + '%';
// });

 

// video.addEventListener('ended', function() {
//   playPauseButton.textContent = 'Play';
//   progressBar.style.width = '0';
// });

 

// function togglePlayPause() {
//   if (videoPlayer.paused || videoPlayer.ended) {
//     videoPlayer.play();
//     playPauseButton.textContent = 'Pause';
//   } else {
//     videoPlayer.pause();
//     playPauseButton.textContent = 'Play';
//   }
// }

// vishwas coide ended


 // // Add event listener to the play button
 // playButton.addEventListener("click", () => {
 //     // Request full-screen mode for the video element
 //     if (videoPlayer.requestFullscreen) {
 //         videoPlayer.requestFullscreen().then(() => {
 //             // Play the video when full-screen mode is granted
 //             videoPlayer.play();
 //         }).catch((error) => {
 //             console.log('Error attempting to enable full-screen mode:', error.message);
 //         });
 //     } else if (videoPlayer.mozRequestFullScreen) {
 //         videoPlayer.mozRequestFullScreen().then(() => {
 //             // Play the video when full-screen mode is granted
 //             videoPlayer.play();
 //         }).catch((error) => {
 //             console.log('Error attempting to enable full-screen mode:', error.message);
 //         });
 //     } else if (videoPlayer.webkitRequestFullscreen) {
 //         videoPlayer.webkitRequestFullscreen().then(() => {
 //             // Play the video when full-screen mode is granted
 //             videoPlayer.play();
 //         }).catch((error) => {
 //             console.log('Error attempting to enable full-screen mode:', error.message);
 //         });
 //     } else if (videoPlayer.msRequestFullscreen) {
 //         videoPlayer.msRequestFullscreen().then(() => {
 //             // Play the video when full-screen mode is granted
 //             videoPlayer.play();
 //         }).catch((error) => {
 //             console.log('Error attempting to enable full-screen mode:', error.message);
 //         });
 //     }
 // });

 // const videoPlayer1 = document.getElementById("videoPlayer1");
 // const playButton1= document.getElementById("playButton1");

 // // Initialize the Dash player
 // const dashPlayer1 = dashjs.MediaPlayer().create();
 // dashPlayer1.initialize(videoPlayer1, "https://dash.akamaized.net/dash264/CTA/imsc1/IT1-20171027_dash.mpd", true);

 // // Add event listener to the play button
 // playButton1.addEventListener("click", () => {
 //     // Request full-screen mode for the video element
 //     if (videoPlayer1.requestFullscreen) {
 //         videoPlayer1.requestFullscreen().then(() => {
 //             // Play the video when full-screen mode is granted
 //             videoPlayer1.play();
 //         }).catch((error) => {
 //             console.log('Error attempting to enable full-screen mode:', error.message);
 //         });
 //     } else if (videoPlayer1.mozRequestFullScreen) {
 //         videoPlayer1.mozRequestFullScreen().then(() => {
 //             // Play the video when full-screen mode is granted
 //             videoPlayer1.play();
 //         }).catch((error) => {
 //             console.log('Error attempting to enable full-screen mode:', error.message);
 //         });
 //     } else if (videoPlayer1.webkitRequestFullscreen) {
 //         videoPlayer1.webkitRequestFullscreen().then(() => {
 //             // Play the video when full-screen mode is granted
 //             videoPlayer1.play();
 //         }).catch((error) => {
 //             console.log('Error attempting to enable full-screen mode:', error.message);
 //         });
 //     } else if (videoPlayer1.msRequestFullscreen) {
 //         videoPlayer1.msRequestFullscreen().then(() => {
 //             // Play the video when full-screen mode is granted
 //             videoPlayer1.play();
 //         }).catch((error) => {
 //             console.log('Error attempting to enable full-screen mode:', error.message);
 //         });
 //     }
 // });


 // const videoPlayer2 = document.getElementById("videoPlayer2");
 // const playButton2= document.getElementById("playButton2");

 // // Initialize the Dash player
 // const dashPlayer2 = dashjs.MediaPlayer().create();
 // dashPlayer2.initialize(videoPlayer2, "https://raw.githubusercontent.com/Dash-Industry-Forum/SAND-Test-Vectors/master/mpd/dash-if/HTTPSReporting-Conf-OK-MultiRes.mpd", true);

 // // Add event listener to the play button
 // playButton2.addEventListener("click", () => {
 //     // Request full-screen mode for the video element
 //     if (videoPlayer2.requestFullscreen) {
 //         videoPlayer2.requestFullscreen().then(() => {
 //             // Play the video when full-screen mode is granted
 //             videoPlayer2.play();
 //         }).catch((error) => {
 //             console.log('Error attempting to enable full-screen mode:', error.message);
 //         });
 //     } else if (videoPlayer2.mozRequestFullScreen) {
 //         videoPlayer2.mozRequestFullScreen().then(() => {
 //             // Play the video when full-screen mode is granted
 //             videoPlayer2.play();
 //         }).catch((error) => {
 //             console.log('Error attempting to enable full-screen mode:', error.message);
 //         });
 //     } else if (videoPlayer2.webkitRequestFullscreen) {
 //         videoPlayer2.webkitRequestFullscreen().then(() => {
 //             // Play the video when full-screen mode is granted
 //             videoPlayer2.play();
 //         }).catch((error) => {
 //             console.log('Error attempting to enable full-screen mode:', error.message);
 //         });
 //     } else if (videoPlayer2.msRequestFullscreen) {
 //         videoPlayer2.msRequestFullscreen().then(() => {
 //             // Play the video when full-screen mode is granted
 //             videoPlayer2.play();
 //         }).catch((error) => {
 //             console.log('Error attempting to enable full-screen mode:', error.message);
 //         });
 //     }
 // });
 // const videoPlayer3 = document.getElementById("videoPlayer3");
 // const playButton3= document.getElementById("playButton3");

 // // Initialize the Dash player
 // const dashPlayer3 = dashjs.MediaPlayer().create();
 // dashPlayer3.initialize(videoPlayer3, "https://raw.githubusercontent.com/Dash-Industry-Forum/SAND-Test-Vectors/master/mpd/dash-if/HTTPSQuery-OK-MultiRes.mpd", true);

 // // Add event listener to the play button
 // playButton1.addEventListener("click", () => {
 //     // Request full-screen mode for the video element
 //     if (videoPlayer3.requestFullscreen) {
 //         videoPlayer3.requestFullscreen().then(() => {
 //             // Play the video when full-screen mode is granted
 //             videoPlayer3.play();
 //         }).catch((error) => {
 //             console.log('Error attempting to enable full-screen mode:', error.message);
 //         });
 //     } else if (videoPlayer3.mozRequestFullScreen) {
 //         videoPlayer3.mozRequestFullScreen().then(() => {
 //             // Play the video when full-screen mode is granted
 //             videoPlayer3.play();
 //         }).catch((error) => {
 //             console.log('Error attempting to enable full-screen mode:', error.message);
 //         });
 //     } else if (videoPlayer3.webkitRequestFullscreen) {
 //         videoPlayer3.webkitRequestFullscreen().then(() => {
 //             // Play the video when full-screen mode is granted
 //             videoPlayer3.play();
 //         }).catch((error) => {
 //             console.log('Error attempting to enable full-screen mode:', error.message);
 //         });
 //     } else if (videoPlayer3.msRequestFullscreen) {
 //         videoPlayer3.msRequestFullscreen().then(() => {
 //             // Play the video when full-screen mode is granted
 //             videoPlayer3.play();
 //         }).catch((error) => {
 //             console.log('Error attempting to enable full-screen mode:', error.message);
 //         });
 //     }
 // });

 // const videoPlayer4 = document.getElementById("videoPlayer4");
 // const playButton4= document.getElementById("playButton4");

 // // Initialize the Dash player
 // const dashPlayer4 = dashjs.MediaPlayer().create();
 // dashPlayer4.initialize(videoPlayer4, "https://dash.akamaized.net/dash264/TestCasesIOP33/multiplePeriods/4/manifest_multiple_Periods_Different_SegmentDuration.mpd", true);

 // // Add event listener to the play button
 // playButton4.addEventListener("click", () => {
 //     // Request full-screen mode for the video element
 //     if (videoPlayer4.requestFullscreen) {
 //         videoPlayer4.requestFullscreen().then(() => {
 //             // Play the video when full-screen mode is granted
 //             videoPlayer4.play();
 //         }).catch((error) => {
 //             console.log('Error attempting to enable full-screen mode:', error.message);
 //         });
 //     } else if (videoPlayer4.mozRequestFullScreen) {
 //         videoPlayer4.mozRequestFullScreen().then(() => {
 //             // Play the video when full-screen mode is granted
 //             videoPlayer4.play();
 //         }).catch((error) => {
 //             console.log('Error attempting to enable full-screen mode:', error.message);
 //         });
 //     } else if (videoPlayer4.webkitRequestFullscreen) {
 //         videoPlayer4.webkitRequestFullscreen().then(() => {
 //             // Play the video when full-screen mode is granted
 //             videoPlayer4.play();
 //         }).catch((error) => {
 //             console.log('Error attempting to enable full-screen mode:', error.message);
 //         });
 //     } else if (videoPlayer4.msRequestFullscreen) {
 //         videoPlayer4.msRequestFullscreen().then(() => {
 //             // Play the video when full-screen mode is granted
 //             videoPlayer4.play();
 //         }).catch((error) => {
 //             console.log('Error attempting to enable full-screen mode:', error.message);
 //         });
 //     }
 // });







// kjsdkljfhasdkk sadfkas


// <!DOCTYPE html>
// <html>
// <head>
//     <title>Video Player</title>
// </head>
// <body>
//     <!-- Video Element -->
//     <video id="videoPlayer" controls width="640" height="360">
//         <!-- Add video sources here -->
//     </video>

//     <!-- Play Button -->
//     <button id="playButton">Play</button>

//     <script src="https://cdn.dashjs.org/latest/dash.all.min.js"></script>
//     <script>
//            </script>
// </body>
// </html>
