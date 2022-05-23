const name = 'DuyAnh';
let age = 20;
const hasHobbies = true;


age = 21;

const summarizeUser = (userName, userAge, userHobby) => {
    return (
        'Name is ' + 
        userName + 
        ', age is ' + 
        userAge + 
        ' and the user has hobbies : ' + 
        userHobby
    );
}

const addRandom = () => 1+2;

console.log(addRandom());

// const add = (a,b) => a + b;
// const addOne = a =>a+1;
// console.log(addOne(1));

console.log(summarizeUser(name,age,hasHobbies));

// =========================================================
const person = {
    name: 'DuyAnh',
    age:19,
    greet()  {
        console.log('Hi, I am ' + this.name)
    }
};
person.greet();
