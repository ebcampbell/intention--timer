var studyBtn = document.querySelector(".study-btn");
var meditateBtn = document.querySelector(".meditate-btn");
var exerciseBtn = document.querySelector(".exercise-btn");
var btnContainer = document.querySelector(".activity-btns-container")
var studyImg = document.querySelector('#study-img');
var meditateImg = document.querySelector('#meditate-img');
var exerciseImg = document.querySelector('#exercise-img');


studyBtn.addEventListener('click', changeStudyColor);
meditateBtn.addEventListener('click', changeMeditateColor)
exerciseBtn.addEventListener('click', changeExerciseColor)

function changeStudyColor() {
  studyBtn.classList.toggle('study-btn-activated');
  meditateBtn.classList.remove('meditate-btn-activated');
  exerciseBtn.classList.remove('exercise-btn-activated');

  changeStudyImage()
}

function changeMeditateColor() {
  meditateBtn.classList.toggle('meditate-btn-activated');
  studyBtn.classList.remove('study-btn-activated');
  exerciseBtn.classList.remove('exercise-btn-activated');

  changeMeditateImage()
}

function changeExerciseColor() {
  exerciseBtn.classList.toggle('exercise-btn-activated');
  studyBtn.classList.remove('study-btn-activated');
  meditateBtn.classList.remove('meditate-btn-activated');

  changeExerciseImage()
}


function changeStudyImage() {
  // var studyImg = document.querySelector('#study-img');
  studyImg.src = './assets/study-active.svg';
  meditateImg.src = './assets/meditate.svg';
  exerciseImg.src = './assets/exercise.svg';
}

function changeMeditateImage() {
  // var meditateImg = document.querySelector('#meditate-img');
  meditateImg.src = './assets/meditate-active.svg'
  studyImg.src = './assets/study.svg';
  exerciseImg.src = './assets/exercise.svg';
}

function changeExerciseImage() {
  // var exerciseImg = document.querySelector('#exercise-img');
  // if the event.target is exerciseBtn change the img otherwise leave it white.
  exerciseImg.src = './assets/exercise-active.svg'
  studyImg.src = './assets/study.svg';
  meditateImg.src = './assets/meditate.svg';

}
