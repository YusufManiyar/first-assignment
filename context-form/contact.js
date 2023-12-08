// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const phoneNo = document.querySelector('#phone')
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#users')

// myForm.addEventListener('submit', onSubmit)
// userList.addEventListener('click', removeItem)

// function onSubmit(e){
//     e.preventDefault();
//     if(nameInput.value === '' || emailInput.value === '' || phoneNo.value === '') {
//       alert('Please enter all fields')
//     } else {
//     let userObj = {
//       name: `${nameInput.value}`,
//       email: `${emailInput.value}`,
//       phoneNo:`${phoneNo.value}`,
//       msg: `${msg.value}`
//     }
//     localStorage.setItem(emailInput.value,JSON.stringify(userObj))
//     let li = document.createElement('li')
//     li.className = 'text-info bg-dark'
//     let data = JSON.parse(localStorage.getItem(emailInput.value))
//     li.appendChild(document.createTextNode(`${data.name} : ${data.email} : ${data.phoneNo} : ${data.msg}`))
//     let btnDelete = document.createElement('button')
//     btnDelete.className = 'btn btn-danger btn-sm float-right delete'
//     btnDelete.appendChild(document.createTextNode('X'))
//     li.appendChild(btnDelete)
//     userList.appendChild(li)

//     nameInput.value = ''
//     emailInput.value = ''
//     phoneNo.value = ''
//     msg.value = ''
//     }
//   }

//   function removeItem(e){
//     if(e.target.classList.contains('delete')){
//       if(confirm('Are You Sure?')){
//         let li = e.target.parentElement;
//         let data = userList.removeChild(li);
//         console.log(li.value)        
        
//       }
//     }
//   }

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("my-form");
  const userList = document.getElementById("users");

  // Load existing data from local storage on page load
  const savedData = JSON.parse(localStorage.getItem("userData")) || [];
  updateList(savedData);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.querySelector(".msg").value;

    const userData = { name, phone, email, message };

    // Check if data with the same name already exists
    const existingDataIndex = savedData.findIndex((data) => data.name === name);

    if (existingDataIndex !== -1) {
      // If exists, update the data
      savedData[existingDataIndex] = userData;
    } else {
      // If doesn't exist, add the new data
      savedData.push(userData);
    }

    // Save the updated data to local storage
    localStorage.setItem("userData", JSON.stringify(savedData));

    // Update the displayed list
    updateList(savedData);

    // Reset the form
    form.reset();
  });

  // Function to update the displayed list
  function updateList(data) {
    userList.innerHTML = "";

    data.forEach((user, index) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <span>${user.name}</span>
        <span>${user.phone}</span>
        <span>${user.email}</span>
        <span>${user.message}</span>
        <button onclick="editUser(${index})">Edit</button>
        <button onclick="deleteUser(${index})">Delete</button>
      `;
      userList.appendChild(listItem);
    });
  }

  // Function to delete a user
  window.deleteUser = function (index) {
    savedData.splice(index, 1);
    localStorage.setItem("userData", JSON.stringify(savedData));
    updateList(savedData);
  };

  // Function to edit a user
  window.editUser = function (index) {
    const user = savedData[index];
    document.getElementById("name").value = user.name;
    document.getElementById("phone").value = user.phone;
    document.getElementById("email").value = user.email;
    document.querySelector(".msg").value = user.message;
  };
});
