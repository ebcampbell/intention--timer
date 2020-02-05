var studyBtn = document.querySelector(".study-btn");
var meditateBtn = document.querySelector(".meditate-btn");
var exerciseBtn = document.querySelector(".exercise-btn");
var btnContainer = document.querySelector(".activity-btns-container")
var studyImg = document.querySelector('#study-img');
var meditateImg = document.querySelector('#meditate-img');
var exerciseImg = document.querySelector('#exercise-img');

btnContainer.addEventListener("click", clickHandler)

function clickHandler() {
  console.log('meow');
  if (event.target.classList.contains("study-btn")) {
    changeStudyColor();
  } else if (event.target.classList.contains("meditate-btn")) {
    changeMeditateColor();
  } else if (event.target.classList.contains("exercise-btn"))
    changeExerciseColor()
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
