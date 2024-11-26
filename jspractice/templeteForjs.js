const list_Item=document.querySelector('.list-item')
list_Item.style.fontSize='2rem'
console.log(list_Item.textContent)
const ul=document.querySelector('ul');
const li=document.createElement('li');
ul.append(li);
console.log(list_Item.innerHTML)
li.innerText="here";
console.log(list_Item.innerHTML)
const li2=document.createElement('li');
ul.append(li2);
console.log(list_Item.innerHTML)
li2.innerText="static";
li2.setAttribute('id','main');
let k=document.querySelector('ul');
console.log(k.parentNode.parentNode);
console.log(k.parentElement);

