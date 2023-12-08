const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users')
let count = 0

myForm.addEventListener('submit', print);

// myForm.addEventListener("mouseover",print);

// myForm.addEventListener("mouseout",print);

function print(e){
    e.preventDefault();
    
    console.log(localStorage)
    if(nameInput.value === '' || emailInput.value === '') {
      msg.innerHTML = 'Please enter all fields';
      setTimeout(() => msg.remove(), 3000);
    } else {
      count += 1 
    let user = 'user'+count 
    let userObj = {
      name: `${nameInput.value}`,
      email: `${emailInput.value}`
    }
    localStorage.setItem(user,JSON.stringify(userObj))
    let li = document.createElement('li')
    let data = JSON.parse(localStorage.getItem(user))
    console.log(data)
    li.appendChild(document.createTextNode(`${data.name} : ${data.email}`))
    
    userList.appendChild(li)

    nameInput.value = ''
    emailInput.value = ''
    }
  }