// let headTitle = document.getElementById('main-header')

// headTitle.style.borderBottom = 'solid 3px black'
// let text = document.getElementsByClassName('title')

// text[0].style.fontWeigth = 'bold'
// text[0].style.color = 'green'

// let item = document.getElementsByTagName('li')
// item[2].style.backgroundColor = 'green'
// for(let i = 0; i < item.length; i++){
//     item[i].style.fontStyle = 'bold'
// }

let oddItem = document.querySelectorAll('.list-group-item:nth-child(odd)')
for(let i = 0; i < oddItem.length; i++){
    oddItem[i].style.backgroundColor = 'green'
}

let secondItem = document.querySelectorAll('li')
console.log(secondItem)
for(let i = 1; i < secondItem.length; i++){
    secondItem[i].style.color = 'green'
}