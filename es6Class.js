// //Begening with prototype
// function Person(name,age){
//     this.name=name,
//     this.age=age
//     // ekhane kuno method declare korle, ai class theke toiree howya sob object e alada alada vabe method ti refer hoy-object boro hoye zay
//     // this.eat=function(){
//     //     console.log(`${this.name} is eating!`);
//     //     }
// }

// //prototype e ze method va variable declare kora hoy, seti object/instane er _proto_ er moddhye thake
// Person.prototype={
//     eat:function(food){
//         console.log(`${this.name} is eating ${food}!`);
//     }
// }
// const msa=new Person('MSA',25)
// //  console.log(msa.eat());
// const adeel=new Person('Adeel',25)
// // console.log(adeel.eat());

// //prototyping 
// var f1=function Person2(){
//     console.log(this.name);
// }
// console.dir(f1);

// Object.prototype.msa=function(){
//     console.log('MSA');
// }
// const user={
// } 
// user.msa()

function Person(name,age){
    this.name=name,
    this.age=age 
}
Person.prototype={
    eat:function(){
        console.log(`${this.name} is eating`);}}

function Cricketer(name,age,role,run){
    //Person.call er this hocce Crickter constructor er this
    Person.call(this)
    //Person constructor er direct property gulu Cricketer er moddhye cole asche
    this.name=name 
    this.age=age 
    this.role=role 
    this.run=run
}
//Person prototype er moddhyokar function/variable gulu Cricketer er moddhye niye aste hobe
Cricketer.prototype=Object.create(Person.prototype)
Cricketer.prototype.constructor=Cricketer 
Cricketer.prototype.play=function (){
    console.log(`${this.name} is playing`);
}

const msa=new Cricketer('MSA',25,'Allrounder',36465)
// msa.eat() //suggestion dekhay na tobe access kora zay
// msa.play()


