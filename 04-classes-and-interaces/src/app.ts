// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b:number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
   return n1 + n2
};

interface Named{
  readonly name?: string;
  NName? : string;
  
}

interface Greetable extends Named{
  greet(phrase: string): void;

}

class Person implements Greetable{
  name?: string;

  age = 16;

  constructor(n?:string){
    if (n) {
      this.name = n;
    }else{
      console.log('Hi!');
    }
  }
  greet(phrase: string){
    if (this.name){
      console.log(phrase + ' ' + this.name);
    };
    
  }
}


let user1: Greetable;

user1 = new Person()

user1.greet('Hi there - I am');
console.log(user1);