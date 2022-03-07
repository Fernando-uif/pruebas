"use strict";
const obj = [{
        id: 1,
        nombre: 'fer',
        bol: true,
    }];
const obj2 = {
    id: 2,
    nombre: 'nando',
    bol: false,
};
console.log(obj);
console.log(...obj);
console.log(...obj, Object.assign({}, obj2));
const combinar = (obj, obj2) => {
    return [...obj, obj2];
};
const resp = combinar(obj, obj2);
console.log(resp, 'Contenido');
let obj3 = [
    {
        saludo: "hola",
        despedida: "adios",
        nombre: "Fernando",
    },
    {
        saludo: "wha",
        despedida: "bye",
        nombre: "Armandou",
    },
];
let nuevoArr = obj3.map((e) => (Object.assign(Object.assign({}, e), { saludo: 4, despedida: true })));
let nuevoArr2 = obj3.map((e) => ({
    saludo: 4,
}));
console.log(nuevoArr);
console.log(nuevoArr2);
let arreglo = ["amigo", "enemigo", "conocido"];
console.log(...arreglo);
let respuestaArr = arreglo.map((e) => {
    return e;
});
console.log(respuestaArr);
let algoMas;
let a = 9;
let b = 6;
let algo = a > b ? "hola" : 3;
console.log(algo);
const obj45 = {
    saludo: 'hola',
    despedida: 'adios'
};
const funcion = (obj45) => {
    return Object.assign(Object.assign({}, obj45), { dspedida: 'adiosssss' });
};
console.log(funcion(obj45));
class Fer {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    get getElemento() {
        return 'hello';
    }
    set setMensaje(parametro) {
        console.log("Llamada desde fuera");
    }
    funcionando() {
        this.funcionando2('algo');
    }
    funcionando2(paramet) {
        console.log('Tenemos el segundo mensjae');
        console.log(paramet);
    }
}
let nuevoFer = new Fer("Fernando", 25);
// console.log(nuevoFer.getElemento, "No manches");
nuevoFer.funcionando2('Tenemos texto aqui');
let color1 = new String('Verde');
console.log(color1);
// var Base64 = {
// 	// private property
// 	_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
// 	// public method for encoding
// 	encode : function (input:string) {
// 		var output = "";
// 		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
// 		var i = 0;
// 		input = Base64._utf8_encode(input);
// 		while (i < input.length) {
// 			chr1 = input.charCodeAt(i++);
// 			chr2 = input.charCodeAt(i++);
// 			chr3 = input.charCodeAt(i++);
// 			enc1 = chr1 >> 2;
// 			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
// 			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
// 			enc4 = chr3 & 63;
// 			if (isNaN(chr2)) {
// 				enc3 = enc4 = 64;
// 			} else if (isNaN(chr3)) {
// 				enc4 = 64;
// 			}
// 			output = output +
// 			this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
// 			this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
// 		}
// 		return output;
// 	},
// 	// public method for decoding
// 	decode : function (input:string) {
// 		var output = "";
// 		var chr1, chr2, chr3;
// 		var enc1, enc2, enc3, enc4;
// 		var i = 0;
// 		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
// 		while (i < input.length) {
// 			enc1 = this._keyStr.indexOf(input.charAt(i++));
// 			enc2 = this._keyStr.indexOf(input.charAt(i++));
// 			enc3 = this._keyStr.indexOf(input.charAt(i++));
// 			enc4 = this._keyStr.indexOf(input.charAt(i++));
// 			chr1 = (enc1 << 2) | (enc2 >> 4);
// 			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
// 			chr3 = ((enc3 & 3) << 6) | enc4;
// 			output = output + String.fromCharCode(chr1);
// 			if (enc3 != 64) {
// 				output = output + String.fromCharCode(chr2);
// 			}
// 			if (enc4 != 64) {
// 				output = output + String.fromCharCode(chr3);
// 			}
// 		}
// 		output = Base64._utf8_decode(output);
// 		return output;
// 	},
// 	// private method for UTF-8 encoding
// 	_utf8_encode : function (string:string) {
// 		string = string.replace(/\r\n/g,"\n");
// 		var utftext = "";
// 		for (var n = 0; n < string.length; n++) {
// 			var c = string.charCodeAt(n);
// 			if (c < 128) {
// 				utftext += String.fromCharCode(c);
// 			}
// 			else if((c > 127) && (c < 2048)) {
// 				utftext += String.fromCharCode((c >> 6) | 192);
// 				utftext += String.fromCharCode((c & 63) | 128);
// 			}
// 			else {
// 				utftext += String.fromCharCode((c >> 12) | 224);
// 				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
// 				utftext += String.fromCharCode((c & 63) | 128);
// 			}
// 		}
// 		return utftext;
// 	},
// 	// private method for UTF-8 decoding
// 	_utf8_decode : function (utftext:string) {
// 		var string = "";
// 		var i = 0;
// 		var c = c1 = c2 = 0;
// 		while ( i < utftext.length ) {
// 			c = utftext.charCodeAt(i);
// 			if (c < 128) {
// 				string += String.fromCharCode(c);
// 				i++;
// 			}
// 			else if((c > 191) && (c < 224)) {
// 				c2 = utftext.charCodeAt(i+1);
// 				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
// 				i += 2;
// 			}
// 			else {
// 				c2 = utftext.charCodeAt(i+1);
// 				c3 = utftext.charCodeAt(i+2);
// 				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
// 				i += 3;
// 			}
// 		}
// 		return string;
// 	}
// }
// let cadena = Base64.decode(informacion);
// console.log(cadena);
// let resultado = atob(cadena);
// console.log(resultado)
// document.querySelector('.espacio')?.innerHTML = resultado;
