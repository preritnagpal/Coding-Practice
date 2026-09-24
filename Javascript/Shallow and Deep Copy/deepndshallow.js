// Shallow Copy

let user = {
    name:"Prerit",
    adrdess:{
        city:"Bareilly",
        state:"UP"
    }
};

let shallow = {...user}

shallow.adrdess.city = "Noida";

console.log(user);

// Deep Copy

let user2 = {
    name:"Prerit",
    address:{
        city:"Bareilly",
        state:"UP"
    }
};

let deep = structuredClone(user2)

deep.address.city = "Noida";

console.log(user2);