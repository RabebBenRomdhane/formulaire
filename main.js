

// prevent refresh
const form = document.querySelector('.my-form');
form.addEventListener('submit', e =>{
  e.preventDefault();
console.log('form submitted');
})

//manipulation du boutton clear

  btn-sec.addEventListener('click', e =>{
    e.target.input.remove();
})
const checkBox = document.querySelector('.my-form');
checkBox.addEventListener('click', e =>{
  alert('jjjj');
})
const username = document.querySelector("#username")
let pattern =/[a-zA-Z0-9]/
let username = form-username.value;
