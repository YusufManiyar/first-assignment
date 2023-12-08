const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneNo = document.querySelector('#phone')
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit)
userList.addEventListener('click', removeItem)

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === '' || phoneNo.value === '') {
      alert('Please enter all fields')
    } else {
    let userObj = {
      name: `${nameInput.value}`,
      email: `${emailInput.value}`,
      phoneNo:`${phoneNo.value}`,
      msg: `${msg.value}`
    }
    localStorage.setItem(emailInput.value,JSON.stringify(userObj))
    let li = document.createElement('li')
    li.className = 'text-info bg-dark'
    let data = JSON.parse(localStorage.getItem(emailInput.value))
    console.log(data)
    li.appendChild(document.createTextNode(`${data.name} : ${data.email} : ${data.phoneNo} : ${data.msg}`))
    let btnDelete = document.createElement('button')
    btnDelete.className = 'btn btn-danger btn-sm float-right delete'
    btnDelete.appendChild(document.createTextNode('X'))
    li.appendChild(btnDelete)
    userList.appendChild(li)

    nameInput.value = ''
    emailInput.value = ''
    phoneNo.value = ''
    msg.value = ''
    }
  }

  function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        let li = e.target.parentElement;
        userList.removeChild(li);
      }
    }
  }