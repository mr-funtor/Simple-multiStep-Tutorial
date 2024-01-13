const changingNumber = document.getElementById("changing-number");
const nextButton = document.getElementById("next-button");
const numberBox = document.getElementById("numbers-box");

const prevButton = document.getElementById("prev-button");
const buttonContainer = document.getElementById("button-container");

const allInputBoxes = document.querySelectorAll(".inputs-casing");

let presentNumber = 1;

nextButton.addEventListener('click',()=>{
  if(presentNumber >= 3) return;
  presentNumber = presentNumber + 1;
  
  changingNumber.innerText = presentNumber;

  if(presentNumber === 3){
    numberBox.style.color = 'green';

    nextButton.innerText = 'Submit';
  }else{
    buttonContainer.classList.remove("expand-button")
  }

  showPresentInput()
})

prevButton.addEventListener('click',()=>{
  if(presentNumber <= 1) return;
  presentNumber = presentNumber - 1;
  changingNumber.innerText = presentNumber;

  numberBox.style.color = 'red';
  nextButton.innerText = 'Next';

  if(presentNumber === 1){
    buttonContainer.classList.add('expand-button')
  }

  showPresentInput()
})

function showPresentInput(){
  allInputBoxes.forEach((box, index)=>{
    box.classList.add('hidden-form')
  })

  allInputBoxes[presentNumber - 1].classList.remove('hidden-form')
}