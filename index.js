//object litrals
const circle ={
    radius:1,
    draw: function(){
        console.log('draw');
    }
};

const c1=circle.draw();
console.log(c1)


//factory functon
function createCircle(radius){
    return{
        radius:radius,
       draw: function(){
        console.log('draw');
    }
    };
} 

const c2=createCircle(4)
console.log(c2)



//constructor functon

function Circle(radius){
  
    this.radius=radius,
    this.draw= function(){
    console.log('draw');
    }
} 

const c3=new Circle(88)
console.log(c3)

