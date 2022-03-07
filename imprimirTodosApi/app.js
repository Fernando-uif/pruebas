"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const peticion = () => __awaiter(void 0, void 0, void 0, function* () {
    const dom = document.querySelector('.container');
    const respuestas = yield fetch("https://reqres.in/api/users?page=1", {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const { data } = yield respuestas.json();
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
});
console.log(peticion());
const elementoDom = document.querySelector('.container') || false;
(elementoDom) ? elementoDom.innerHTML = '<div>Hola desde el inner</div>' : '';
