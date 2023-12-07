let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);

function addItem(e){
  e.preventDefault();

  let newItem = document.getElementById('item').value;
  let newdes = document.getElementById('des').value
  let li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode("Item: "+newItem));
  let tagP = document.createElement('p')
  tagP.id = 'description'
  tagP.appendChild(document.createTextNode("description: "+newdes))
  li.appendChild(tagP)
  let deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('X'));
  li.appendChild(deleteBtn);
  let editBtn = document.createElement('button');
  editBtn.className = 'btn btn-outline-success float-right mr-2 edited';
  editBtn.appendChild(document.createTextNode('Edit'));
  li.appendChild(editBtn);
  itemList.appendChild(li);
}

function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e){
  let text = e.target.value.toLowerCase();
  let items = itemList.getElementsByTagName('li');
  Array.from(items).forEach((item) => {
    let itemName = item.firstChild.textContent;
    let des = item.childNodes[1].textContent
    if(itemName.toLowerCase().indexOf(text) != -1 || des.toLocaleLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}