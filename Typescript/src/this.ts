export{}
const person:{
    name:string;
    sayName: () => void;
} = {
    name:"Prerit",
    sayName : function(){
        setTimeout(()=>{
            console.log(this.name);
        },1000);
    }
}
person.sayName();