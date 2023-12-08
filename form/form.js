const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users')

myForm.addEventListener('submit', print);

// myForm.addEventListener("mouseover",print);

// myForm.addEventListener("mouseout",print);

function print(e){
    e.preventDefault();
    localStorage.setItem(nameInput.value,nameInput.value)
    localStorage.setItem(emailInput.value,emailInput.value)
    if(nameInput.value === '' || emailInput.value === '') {
      msg.innerHTML = 'Please enter all fields';
      setTimeout(() => msg.remove(), 3000);
    } else {
    let li = document.createElement('li')
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
    
    userList.appendChild(li)

    nameInput.value = ''
    emailInput.value = ''
    }
  }