var studyBtn = document.querySelector(".study-btn");
var meditateBtn = document.querySelector(".meditate-btn");
var exerciseBtn = document.querySelector(".exercise-btn");
var btnContainer = document.querySelector(".activity-btns-container")
var studyImg = document.querySelector('#study-img');
var meditateImg = document.querySelector('#meditate-img');
var exerciseImg = document.querySelector('#exercise-img');
var activityInput = document.querySelector('.activity-input');
var minInput = document.querySelector('.min-input');
var secInput = document.querySelector('.sec-input');
var timeContaner = document.querySelector('.min-sec-container');
var startBtn = document.querySelector('.start-btn');
var leftContainer = document.querySelector('.left-container');

btnContainer.addEventListener('click', clickHandler);
timeContaner.addEventListener('input', onlyNumbers);
startBtn.addEventListener('click', inputNotification);

function clickHandler() {
  if (event.target.classList.contains("study-btn")) {
    changeStudyColor();
  } else if (event.target.classList.contains("meditate-btn")) {
    changeMeditateColor();
  } else if (event.target.classList.contains("exercise-btn")) {
    changeExerciseColor();
  }
}

function changeStudyColor() {
  studyBtn.classList.toggle('study-btn-activated');
  meditateBtn.classList.remove('meditate-btn-activated');
  exerciseBtn.classList.remove('exercise-btn-activated');

  studyImg.src = './assets/study-active.svg';
  meditateImg.src = './assets/meditate.svg';
  exerciseImg.src = './assets/exercise.svg';
}

function changeMeditateColor() {
  meditateBtn.classList.toggle('meditate-btn-activated');
  studyBtn.classList.remove('study-btn-activated');
  exerciseBtn.classList.remove('exercise-btn-activated');

  meditateImg.src = './assets/meditate-active.svg'
  studyImg.src = './assets/study.svg';
  exerciseImg.src = './assets/exercise.svg';
}


function changeExerciseColor() {
  exerciseBtn.classList.toggle('exercise-btn-activated');
  studyBtn.classList.remove('study-btn-activated');
  meditateBtn.classList.remove('meditate-btn-activated');

  exerciseImg.src = './assets/exercise-active.svg'
  studyImg.src = './assets/study.svg';
  meditateImg.src = './assets/meditate.svg';
}

function onlyNumbers() {
  if (minInput.value === '' && secInput.value === '') {
    minInput.value = ''
    secInput.value = '';
  }
}

function inputNotification() {
  var inputError = document.querySelector('.activity-error-container');
  var minError = document.querySelector('.min-error');
  var secError = document.querySelector('.sec-error');
  if (activityInput.value === '') {
    inputError.removeAttribute('hidden')
  } else if (minInput.value === '') {
    minError.removeAttribute('hidden')
  } else if (secInput.value === '') {
    secError.removeAtribute('hidden')
  } else {
        leftContainer.innerHTML = `
        <div class="activity-content">
          <p class='activity-title'>Current Activity</p>
          <div class="activity-form">
            <section class='timer-content'>
              <div class="timer-container">
                <p class="timer-title">Deep Breathing</p>
                <div class="time">
                  <p>05:00</p>
                </div>
                <button class="timer-btn" type="button">START</button>
                <button class="log-activity-btn" type="button" hidden>LOG ACTIVITY</button>
              </div>
            </section>
          </div>
        </div>`
      }
}





// function inputNotification() {
//   var inputError = document.querySelector('.activity-error-container');
//   var minError = document.querySelector('.min-error');
//   var secError = document.querySelector('.sec-error');
//   if (activityInput.value === '') {
//     inputError.innerHTML = `<p>A discription is required.</p>`
//   } else if (minInput.value === '') {
//     minError.innerHTML = `<p>A number is required.</p>`
//   } else if (secInput.value === '') {
//     secError.innerHTML = `<p>A number is required.</p>`
//   } else {
//     leftContainer.innerHTML =
//     `<div class="activity-content">
//           <p class="activity-title">Current Activity</p>
//           <div class="timer-container">
//             <p class="timer-title">Deep Breathing</p>
//             <div class="time">
//               <p>05:00</p>
//             </div>
//             <div>
//               <button class="timer-btn" type="button">START</button>
//             </div>
//           </div>
//         </div>`
//   }
// }
