// //Functional object creation
// function Person(name,age){
//     let person={}
//     person.name=name
//     person.age=age
//     person.eat=function(){
//         console.log(`${this.name} is eating`);
//         }
//     person.play=function(){
//         console.log(`${this.name} is playing`);
//         }
//     person.sleep=function(){
//         console.log(`${this.name} is sleeping`);
//         }
//     return person
// }

// const msa=Person('MSA',25)
// const adeel=Person('Adeel',24)

// console.dir(msa)
// console.dir(adeel);

//object refference
// const personMethods={
//     eat(){
//         console.log('person is eating');
        
//     },
//     sleep(){
//         console.log('person is sleeping');
        
//     },
//     play(){
//         console.log('person is playing');
        
//     }
// }

// function Person(name, age){
//     let person={}
//     person.name=name
//     person.age=age

//     //reference object for create methods
//     person.eat=personMethods.eat;
//     person.sleep=personMethods.sleep;
//     person.play=personMethods.play

//     return person
// }

// const msa=Person('MSA',25)
// console.dir(Person); //f Person(name, age)

// console.dir(msa);// object

const captain={
    name:'MSA',
    age:26,
    country:'Bangladesh'
}
const player=Object.create(captain)
// console.log(player);

//player object captan object theke toiree hoyeche. player child tar parent object captain
// console.log(player); //{}
//player ekti empty object. kintu player er prototype er moddhye captain object er sob property pawa zabe.

//JS e prototype er maddhyome property ebong method inherited hoy.OOP language gulute class er maddhoyme property ebong method parent class theke child class e inherited hoy.



// function Person(name,age){
//     let person=Object.create(Person.prototype)
//     person.name=name 
//     person.age=age
//     return person
// }
//ekahne Person ekti constructor function
//JS e sob objecti kichui constructor function
// Person.prototype={
//     eat(name){
//         console.log(`${name} person is playing`);
//        }
// }

// const msa=Person('MSA',24)
// msa.eat('MSA');

// function Person(name,age){
//     //imagine
//     //this=Object.create(Person.prototype) //Person.prototype={eat(){}}
//     this.name=name
//     this.age=age 

// }

// Person.prototype={
//     eat(){
//         console.log(`${this.name} is playing`);
//     }
// }

// const msa=new Person('MSA',24)
// console.log(msa);
// console.log(msa.eat);

// console.log(Person.prototype); //eat(){c.log(console.log(`${this.name} is playing`);)}

class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
   eat(){
    console.log(`${this.name} is playing`);
    }
    play(){
        console.log(`${this.name} is playing`);
        
    }
    details(){
        return `${this.name} is ${this.age} years old`
    }
}

const msa=new Person('MSA',25)
msa.eat()
msa.play()
console.log(msa.details());
console.log(msa);

