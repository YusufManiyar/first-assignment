const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const userList = document.querySelector('#user')

window.addEventListener("DOMContentLoaded",() => {
    axios.get("https://crudcrud.com/api/b475b9f78bf24d169408566af80c6df0/appointmentdata")
    .then((res) => {
        alert("successfuly")
        for(let i = 0; i < res.data.length; i++){
            showData(res.data[i])
        }
        console.log(res.data)
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
    
    axios.post("https://crudcrud.com/api/b475b9f78bf24d169408566af80c6df0/appointmentdata", userObj)
    .then((res) => {
        alert("successfuly")
        showData(res.data)
        console.log(res.data)
    }).catch((err) => {
        alert(err)
    })

    nameInput.value = ''
    emailInput.value = ''
    phoneInput.value = ''
    }
  }

function showData(data){
let li = document.createElement('li')
li.className = 'm-3'
let editedBtn = document.createElement('button')
editedBtn.appendChild(document.createTextNode('Edited'))
let deleteBtn = document.createElement('button')
deleteBtn.appendChild(document.createTextNode('Delete'))
deleteBtn.className = 'btn btn-danger btn-sm m-1  float-right delete'
editedBtn.className = 'btn btn-info btn-sm m-1 float-right edited'
console.log(data)
li.appendChild(document.createTextNode(`${data.name} : ${data.email} : ${data.phone}`))
li.id = data._id
li.appendChild(editedBtn)
li.appendChild(deleteBtn)
userList.appendChild(li)

}

async function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
        let li = e.target.parentElement;
        let id =  li.id
        
       await axios.delete(`https://crudcrud.com/api/b475b9f78bf24d169408566af80c6df0/appointmentdata/${id}`)
        .then((res) => alert('Successfully deleted appointment'))
        .catch((err) => alert(err));
        
        userList.removeChild(li);

        }
    }
}

function editItem(e){
    if(e.target.classList.contains('edited')){
        let li = e.target.parentElement;
        console.log(e.target.parentElement.id)
        let data = JSON.parse(localStorage.getItem(li.id))
        $(`#modal-${li.id}`).modal('show');
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
    modalTitle.textContent = 'Expense Tracker Form';

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

    // Create modal footer
    var modalFooter = document.createElement('div');
    modalFooter.className = 'modal-footer';

    // Create close button for the footer
    var closeFooterButton = document.createElement('button');
    closeFooterButton.type = 'button';
    closeFooterButton.className = 'btn btn-secondary';
    closeFooterButton.setAttribute('data-dismiss', 'modal');
    closeFooterButton.textContent = 'Close';
    closeFooterButton.onclick = (e) => {
        e.preventDefault()
        $(`#${modal.id}`).modal('hide')
    }
    // Append close button to the footer
    modalFooter.appendChild(closeFooterButton);

    // Append header, body, and footer to the modal content
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);

    // Append modal content to the modal dialog
    modalDialog.appendChild(modalContent);

    // Append modal dialog to the modal
    modal.appendChild(modalDialog);

    return modal
}