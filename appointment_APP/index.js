const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const userList = document.querySelector('#user')

myForm.addEventListener('submit', print);

function print(e){
    e.preventDefault();
    
    console.log(localStorage)
    if(nameInput.value === '' || emailInput.value === '' || phoneInput.value === '') {
      alert('Please enter all fields');
    } else {
    let userObj = {
      name: `${nameInput.value}`,
      email: `${emailInput.value}`,
      phone: `${phoneInput.value}`
    }
    
    axios.post("https://crudcrud.com/api/9d0a21f19d674af3be76d2329eddf866/appointmentdata", userObj)
    .then((res) => {
        alert("successfuly")
        console.log(res.data)
    }).catch((err) => {
        alert(err)
    })

    let li = document.createElement('li')
    let data = JSON.parse(localStorage.getItem(emailInput.value))
    console.log(data)
    li.appendChild(document.createTextNode(`${data.name} : ${data.email} : ${data.phone}`))
    
    userList.appendChild(li)

    nameInput.value = ''
    emailInput.value = ''
    phoneInput.value = ''
    }
  }