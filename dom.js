// const x=document.getElementsByClassName('123');
// console.log(x);

// const y=document.getElementById('123');
// console.log(y);

// const z= document.querySelector('div')
// console.log(z)


// // insert element
// const ul= document.querySelector('ul');
// console.log(ul);
// const li=document.createElement('li');

// // inserting element
// zz=ul.append(li);
// console.log(typeof li);



const div= document.querySelector('div');
console.log(div);

// modifing the txt
const h4=document.createElement('h4')
const zz=div.append(h4);
h4.innerText='tom';
console.log(div);

// modifing the attribute

h4.setAttribute('id','abc');

// remove attribute
// h4.removeAttribute('id')


// remove element
h4.remove();



 