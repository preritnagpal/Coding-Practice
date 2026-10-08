"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "Prerit",
    sayName: function () {
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
};
person.sayName();
