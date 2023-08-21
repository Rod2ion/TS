type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startData: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;
type ElevatedEmployee2 = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Rodion',
    privileges: ['create-server'],
    startData: new Date()
}

const e2: ElevatedEmployee2 = {
    name: 'Rodiiaa',
    privileges: ['Admin'],
    startData: new Date()
};

type Combinable = string | number;
type Numberic = number | boolean;

type universal = Combinable & Numberic;

function add(a: number, b: number): number;
function add(a:string, b:string):string

function add(a: Combinable, b:Combinable){
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b
}

const result = add('Rodion', 'Pozdniakov') as string;
result.split(' ');

const fetchedUserData = {
    id: 'u1',
    name: 'Rodion',
    job: {title: 'CEO', description: 'My own company'}
};

console.log(fetchedUserData?.job?.title);

const userInput = '';

const storedData = userInput ?? 'DEFAULT';

console.log(storedData);
// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//     console.log('Name: ' + emp.name);
//     if ('privileges' in emp) {
//         console.log('Privileges: ' + emp.privileges);
//     }
//     if ('startData' in emp) {
//         console.log('Start Date: ' + emp.startData);
//     }
// }

// printEmployeeInformation(e1);
// printEmployeeInformation(e2);
// //
// class Car{
//     drive(){
//         console.log('Driving...');
//     }
// }

// class Truck{
//     drive(){
//         console.log('Driving a truck...');
//     }

//     loadCargo(amount:number){
//         console.log('Loading cargo...' + amount);
//     }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle){
//     vehicle.drive();
//     if('loadCargo' in vehicle){
//         vehicle.loadCargo(1000);

//     }
// }

// useVehicle(v1);
// useVehicle(v2);
// //
// interface Bird{
//     type:'bird';
//     flyingSpeed: number;
// };
// interface Hourse{
//     type:'hourse';
//     runningSpeed: number;
// };

// type Animal = Bird | Hourse;
// function moveAnimal(animal: Animal){
//     let speed;
//     switch (animal.type) {
//         case 'bird':
//             speed = animal.flyingSpeed;
            
//             break;
//         case 'hourse':
//             speed = animal.runningSpeed;
        
//     }
//     console.log('Moving at speed: ' + speed);
// }
 
// moveAnimal({type: 'bird', flyingSpeed: 10});
// moveAnimal({type: 'hourse', runningSpeed: 17});

// //
// const peragraph = document.querySelector('p');
// const peragraph2 = document.getElementById('messege-output');
// // const userInputElement = <HTMLInputElement>document.getElementById('user-input')!; // version one
//  const userInputElement = document.getElementById('user-input')! as HTMLInputElement; // version two

// if(userInputElement){ 
//     userInputElement.value = 'Hi there!';
// }

// //

// interface ErrorContainer{ // {email: 'Not a valid email', username: 'Must start with a choracter!'}
// [prop: string]:string;
// }

// const errorBag: ErrorContainer = {
//     email: 'Not a valid email!',
//     username: 'Must start with  a charcter!'
// }

