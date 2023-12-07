// // // let headTitle = document.getElementById('main-header')

// // // headTitle.style.borderBottom = 'solid 3px black'
// // // let text = document.getElementsByClassName('title')

// // // text[0].style.fontWeigth = 'bold'
// // // text[0].style.color = 'green'

// // // let item = document.getElementsByTagName('li')
// // // item[2].style.backgroundColor = 'green'
// // // for(let i = 0; i < item.length; i++){
// // //     item[i].style.fontStyle = 'bold'
// // // }

// // let oddItem = document.querySelectorAll('.list-group-item:nth-child(odd)')
// // for(let i = 0; i < oddItem.length; i++){
// //     oddItem[i].style.backgroundColor = 'green'
// // }

// // let secondItem = document.querySelectorAll('li')
// // console.log(secondItem)
// // for(let i = 1; i < secondItem.length; i++){
// //     secondItem[i].style.colorf = 'green'
// // }

// let itemList = document.querySelector('#item')
// //parentNode
// // console.log(itemList.parentNode)
// // itemList.parentNode.style.backgroundColor = '#f4f4f4'
// // console.log(itemList.parentNode.parentNode.parentNode)
// //parentElement
// // console.log(itemList.parentElement)
// // itemList.parentElement.style.backgroundColor = '#f4f4f4'
// // console.log(itemList.parentElement.parentElement.parentElement)

// // childNode
// // console.log(itemList.childNodes)
// // console.log(itemList.children)
// // itemList.children[1].style.bachgroundColor = 'yellow'

// // firstChild
// // console.log(itemList.firstChild)
// //firstChildElement
// // console.log(itemList.firstElementChild)
// // itemList.firstElementChild.textContent = 'Hello1'

// // lastChild
// // console.log(itemList.lastChild)
// //lastChildElement
// // console.log(itemList.lastElementChild)
// // itemList.lastElementChild.textContent = 'Hello4'

// // nextSibling
// // console.log(itemList.nextSibling)
// // nextElementSibling
// // console.log(itemList.nextElementSibling)

// // previousSibling
// // console.log(itemList.previousSibling)
// // previousElementSibling
// // console.log(itemList.previousElementSibling)
// // itemList.previousElementSibling.style.color = 'green'

//createElement

//create a div
// let newDiv = document.createElement('div')

// //Add Class
// newDiv.className = 'hello'

// //Add Id
// newDiv.id = 'hello1'

// //Add Attr
// newDiv.setAttribute('title', 'hello Div')

// //Create A Text Node
// let newDivText = document.createTextNode('hello World')
// newDiv.appendChild(newDivText)

// let container = document.querySelector('header .container')
// let h1 = document.querySelector('header h1')
// console.log(newDiv)

// newDiv.style.fontSize = '30px'

// container.insertBefore(newDiv, h1)


//Add 'Hello' before 'Item Lister'
let headerTitle = document.querySelector('#header-title');
let helloText = document.createTextNode('Hello ');
headerTitle.insertBefore(helloText, headerTitle.firstChild);

// Add 'Hello' before 'Item 1'
let firstItem = document.querySelector('.list-group-item');
let helloItem = document.createTextNode('Hello ');
firstItem.insertBefore(helloItem, firstItem.firstChild);