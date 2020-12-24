
// function checkFlag() {
//     if(!document.querySelector('.Root__top-bar > header')) {
//        window.setTimeout(checkFlag, 100); /* this checks the flag every 100 milliseconds*/
//     } else {
//       inject()
//     }
//   }
//   checkFlag()
  
// async function inject() {

// async function queryAsync(query) {
//     return new Promise(resolve => {
//         const interval = setInterval(() => {
//             const element = document.querySelector(query);
//             if (element) {
//                 clearInterval(interval);
//                 return resolve(element);
//             }
//         }, 250);
//     });
// }

// /**
//  * Inject a middleware function in a object or instance
//  * @param ctx Object or instance
//  * @param fn Function name
//  * @param middleware Middleware function
//  * @param transform Transform function result
//  */
// function inject({ctx, fn, middleware, transform}) {
//     const original = ctx[fn];
//     ctx[fn] = function () {
//         if (!middleware || middleware.call(this, ...arguments) !== false) {
//             const result = original.call(this, ...arguments);
//             return transform ? transform.call(this, result, ...arguments) : result;
//         }
//     };
// }

// const nowPlayingBar = await queryAsync('.now-playing-bar');
// const playButton = await queryAsync('button[title=Play], button[title=Pause]');

// let audio;

// inject({
//     ctx: document,
//     fn: 'createElement',
//     transform(result, type) {

//         if (type === 'audio') {
//             audio = result;
//         }

//         return result;
//     }
// });

// // let playInterval;
// // new MutationObserver(() => {
// //     const link = document.querySelector('.now-playing > a');

// //     if (link) {

// //         if (!audio) {
// //             return console.error('Audio-element not found!');
// //         }

// //         if (!playButton) {
// //             return console.error('Play-button not found!');
// //         }

// //         // console.log('Ad found', audio, playButton, nowPlayingBar);

// //         audio.src = '';
// //         playButton.click();
// //         if (!playInterval) {
// //             playInterval = setInterval(() => {
// //                 if (!document.querySelector('.now-playing > a') && playButton.title === 'Pause') {
// //                     clearInterval(playInterval);
// //                     playInterval = null;
// //                 } else {
// //                     playButton.click();
// //                 }
// //             }, 500);
// //         }
// //     }
// // }).observe(nowPlayingBar, {
// //     characterData: true,
// //     childList: true,
// //     attributes: true,
// //     subtree: true
// // });

// Hide upgrade-button and captcha-errors, we don't what to see that.
const style = document.createElement('style');
style.innerHTML = `
    [aria-label="Upgrade to Premium"] {
        display: none !important;
    }
`;

document.body.appendChild(style);

// }
