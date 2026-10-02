interface user{
    name:string;
    address: add;
}
type add ={
    city:string;
    state:string;
}

const shallow : user = {
    name:"Prerit",
    address:{
        city:"Bareilly",
        state:"UP"
    }
};
const copy:user = {...shallow};
shallow.address.city = "Noida";
console.log(copy);

const deep : user = {
    name:"Prerit",
    address:{
        city:"Bareilly",
        state:"UP"
    }
};

let copy2 = structuredClone(deep);

copy2.address.city = "Noida";

console.log(deep);