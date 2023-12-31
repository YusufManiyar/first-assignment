const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const userList = document.querySelector('#user')

window.addEventListener("DOMContentLoaded",() => {
    axios.get("https://crudcrud.com/api/b18fe9d149784a9ab4666532766df579/appointmentdata")
    .then((res) => {
        for(let i = 0; i < res.data.length; i++){
            showData(res.data[i])
        }
    }).catch((err) => {
        alert(err)
    })
})

myForm.addEventListener('submit', print);
userList.addEventListener('click', removeItem)
userList.addEventListener('click', editItem)

function print(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '' || phoneInput.value === '') {
      alert('Please enter all fields');
    } else {
    let userObj = {
      name: `${nameInput.value}`,
      email: `${emailInput.value}`,
      phone: `${phoneInput.value}`
    }
    
    axios.post("https://crudcrud.com/api/b18fe9d149784a9ab4666532766df579/appointmentdata", userObj)
    .then((res) => {
        alert("successfuly")
        showData(res.data)
    }).catch((err) => {
        alert(err)
    })
        myForm.reset()
    }
  }

function showData(data){
let li = document.createElement('li')
li.className = 'm-3'
let editedBtn = document.createElement('button')
editedBtn.appendChild(document.createTextNode('Edit'))
let deleteBtn = document.createElement('button')
deleteBtn.appendChild(document.createTextNode('Delete'))
deleteBtn.className = 'btn btn-danger btn-sm m-1  float-right delete'
editedBtn.className = 'btn btn-info btn-sm m-1 float-right edit'
console.log(data)
li.appendChild(document.createTextNode(`${data.name} : ${data.email} : ${data.phone}`))
li.id = data._id
li.appendChild(editedBtn)
li.appendChild(deleteBtn)
userList.appendChild(li)

}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
        let li = e.target.parentElement;
        let id =  li.id
        
       axios.delete(`https://crudcrud.com/api/b18fe9d149784a9ab4666532766df579/appointmentdata/${id}`)
        .then((res) => alert('Successfully deleted appointment'))
        .catch((err) => alert(err));
        
        userList.removeChild(li);

        }
    }
}

function editItem(e){
    if(e.target.classList.contains('edit')){
        let li = e.target.parentElement;
        axios.get(`https://crudcrud.com/api/b18fe9d149784a9ab4666532766df579/appointmentdata/${li.id}`)
        .then((res) => {
            li.appendChild(createModal(createForm(res.data)))
            $(`#modal-${li.id}`).modal('show');
            console.log(`#modal-${li.id}`)
        }).catch((err) => {
            alert(err)
        })
    }
}

function createModal(form) {
    // Create modal element
    var modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'modal-' + form.getAttribute('uniqueId');

    // Create modal dialog
    var modalDialog = document.createElement('div');
    modalDialog.className = 'modal-dialog';

    // Create modal content
    var modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    // Create modal header
    var modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';

    // Create modal title
    var modalTitle = document.createElement('h4');
    modalTitle.className = 'modal-title';
    modalTitle.textContent = 'Update Appointment';

    // Create close button
    var closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'close';
    closeButton.setAttribute('data-dismiss', 'modal');
    closeButton.innerHTML = '&times;';
    closeButton.onclick = (e) => {
        e.preventDefault()
        $(`#${modal.id}`).modal('hide')
    }
    // Append title and close button to the header
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);

    // Create modal body
    var modalBody = document.createElement('div');
    modalBody.className = 'modal-body';

    // Append the form to the modal body
    modalBody.appendChild(form);

    // Append header, body, and footer to the modal content
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);

    // Append modal content to the modal dialog
    modalDialog.appendChild(modalContent);

    // Append modal dialog to the modal
    modal.appendChild(modalDialog);

    return modal
}

function createForm(data) {
    // Create form element
    var form = document.createElement('form');
    form.id = 'form-' + data._id ;
    form.setAttribute('uniqueId', data._id);


    // Create and append input elements
    createInput('Your Name:', 'name', 'text', 'Enter Name', form, true, data.name);
    createInput('Email Id:', 'email', 'email', 'Enter Email', form, true, data.email);
    createInput('Phone No:', 'phone', 'tel', 'Enter Phone No.', form, true, data.phone);

    form.onsubmit = function (e) {
        e.preventDefault()
        let formData = new FormData(e.target);
        let formObject = {};
        formData.forEach(function (value, key) {
            formObject[key] = value;
        });

        axios.put(`https://crudcrud.com/api/b18fe9d149784a9ab4666532766df579/appointmentdata/${data._id}`, formObject)
        .then(() => {
            location.reload(true)
        }).catch((err) => {
            alert(err)
        })

    };

    // Create submit button
    var submitBtn = document.createElement('input');
    submitBtn.type = 'submit';
    submitBtn.id = 'save';
    submitBtn.value = 'Save';
    form.appendChild(submitBtn);

    return form
}

function createInput(labelText, inputId, inputType, placeholderText, form, required, value) {
    // Create label
    var label = document.createElement('label');
    label.textContent = labelText;
    label.htmlFor = inputId;
    form.appendChild(label);

    // Create input
    var input = document.createElement('input');
    input.type = inputType;
    input.id = inputId;
    input.name = inputId;
    input.placeholder = placeholderText;
    if (required) {
        input.required = true;
    }

    if (value) {
        input.value = value;
    }

    form.appendChild(input);

    // Add line break for spacing
    form.appendChild(document.createElement('br'));
}
