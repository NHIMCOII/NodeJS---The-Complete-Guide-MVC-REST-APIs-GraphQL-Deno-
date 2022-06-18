class Human {    
    gender = 'male';

    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {   //Person inheritate Human's properties and methods
//Property
    name = 'duyanh';
    gender = 'female';
//Method
    printMyName= () => {  
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();