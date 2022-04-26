"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Rectangulo_area;
class Rectangulo {
    constructor(base = 0, altura = 0) {
        _Rectangulo_area.set(this, void 0);
        this.base = base;
        this.altura = altura;
        __classPrivateFieldSet(this, _Rectangulo_area, base * altura, "f");
    }
    metodo() {
        console.log(__classPrivateFieldSet(this, _Rectangulo_area, 3 * 3, "f"));
        return __classPrivateFieldGet(this, _Rectangulo_area, "f");
    }
}
_Rectangulo_area = new WeakMap();
const rectangulo = new Rectangulo(3, 2);
console.log(rectangulo);
console.log(rectangulo.metodo());
