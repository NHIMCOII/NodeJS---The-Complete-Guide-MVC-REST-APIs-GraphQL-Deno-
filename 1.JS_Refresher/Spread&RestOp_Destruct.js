const person = {
    name: 'DuyAnh',
    age:19,
    greet()  {
        console.log('Hi, I am ' + this.name)
    }
};
// person.greet;
const hobbies = ['Sports','Cooking'];
// for (let hobby of hobbies){
//     console.log(hobby);
// }

// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);
// ==============================Spread & Rest operators( ... )=========================
hobbies.push('Programming');
// console.log(hobbies);
// const copiedArray = hobbies.slice();
const non_nestedArray = [...hobbies]; //Spread Operator
// console.log(non_nestedArray);

const copiedPerson = {...person};
// console.log(copiedPerson);

const toArray = (...args) => {  //Rest operator
    return args;
};

// console.log(toArray(1,2,3,4));

// ============================Destructuring=================
const printName = ({ name, greet }) => {
    console.log(name);
    
}

printName(person);

const {name,age} = person;
console.log(name,age);

const [hobby1, hobby2] = hobbies;
console.log(hobby1,hobby2);
