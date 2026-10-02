"use strict";
const shallow = {
    name: "Prerit",
    address: {
        city: "Bareilly",
        state: "UP"
    }
};
const copy = { ...shallow };
shallow.address.city = "Noida";
console.log(copy);
const deep = {
    name: "Prerit",
    address: {
        city: "Bareilly",
        state: "UP"
    }
};
let copy2 = structuredClone(deep);
copy2.address.city = "Noida";
console.log(deep);
