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
    let x=1;
    this.radius=radius,
    
    this.draw= function(){
    console.log('draw');
    }
    //getter & setters
    Object.defineProperty(this,'dlocation',{
        get:function(){
            return x;
        },
        set: function(value)
        {
            x=value;
        }
    }); 
} 


c3.dlocation=2;//setter
console.log(c3.dlocation)//getter


const c3=new Circle(88)
//or
const c3=Circle.call({},88);
const c3=Circle.apply({},[88,4,3]); //it it's array

c3.location=9;//add ppt
console.log(c3)

delete c3.location;//delete ppt
console.log(c3)

//list all properties
for (let key in c3){
    console.log(key,c3[key]);
}

//or 

console.log(Object.keys(c3))




//another wayto define an object/function
const Circle= new Function('radius',`
     this.radius=radius,
     this.draw= function(){
     console.log('draw');}`
     );
const c5=Function(1);
console.log(c5);










//reference types
let x1={a:3};
let y1=x;
x1.a=9
console.log(x1.a,y1.a)


//value types
let x2=3;
let y2=x2;
x2=9
console.log(x2,y2)





