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



// const div= document.querySelector('div');
// console.log(div);

// // modifing the txt
// const h4=document.createElement('h4')
// const zz=div.append(h4);
// h4.innerText='tom';
// console.log(div);

// // modifing the attribute

// h4.setAttribute('id','abc');

// // remove attribute
// // h4.removeAttribute('id')


// // remove element
// h4.remove();




// // 

// let ul=document.querySelector('ul')
// // console.log(ul.parentElement)
// // console.log(ul.parentElement.parentElement)

// // console.log(ul.childNodes)
// console.log(ul.childNodes[2])

// console.log(ul.firstChild)
// console.log(ul.lastChild)
// console.log(ul.firstElementChild)
// console.log(ul.previousElementSibling)
// console.log(ul.nextElementSibling)
// console.log(ul.lastElementChild)
// console.log(ul.firstElementChild)

// console.log(ul.previousSibling)
// console.log(ul.nextSibling)

// const html=document.documentElement
// console.log(html.parentNode)
// console.log(html.parentElement)








////////////////////////////EVENT LISTNER//////////indexx.html////////////////

const btn2=document.querySelector('.btn2')

function alrtbtn2(){
alert('olaaaaaaaaaa')
}

btn2.addEventListener('click',alrtbtn2)





const btn3=document.querySelector('.btn3')

function alrtbtn2(){
 btn3.style.backgroundColor='red'
}

btn3.addEventListener('mouseover',alrtbtn2)





const btn4=document.querySelector('.btn4')
const disp=document.querySelector('.ab1')

function showhide(){

    if (disp.classList.contains('ab1')){
        disp.classList.remove('ab1')

    }else{
        disp.classList.add('ab1')
    }
}


btn4.addEventListener('click',showhide)


