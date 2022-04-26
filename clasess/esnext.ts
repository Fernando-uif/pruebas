class Rectangulo{
    #area:number;
    base:number;
    altura:number;
    constructor(base:number  = 0, altura:number = 0){
        this.base = base;
        this.altura = altura;
        this.#area = base * altura;
    }
    metodo(){
        console.log(this.#area = 3 * 3);
        return this.#area;
    }
}

const rectangulo = new Rectangulo(3,2);
console.log(rectangulo);
console.log(rectangulo.metodo());