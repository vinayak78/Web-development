// using proto funtion 
let obj1 = {
    name: "xyz",
    id: 1256
};
let obj2 = {
    salary: 25000
}
obj1.__proto__ = obj2;
console.log(obj1.salary);

//classes 
class animal {
    constructor(name) {
        console.log("Object is created... ");
        this.name = name;
    }

    eating() {
        console.log(`${this.name} eating`);
    }
    runing() {
        console.log(`${this.name} runing`);
    }
}
//inheritence
class lion extends animal {
    constructor(name) {
        //super use for parents class
        super(name);
        console.log("Lion class constructor");
    }

    // funtion rewrite 
    eating() {
        // parents class funtion
        super.eating();
        console.log(`${this.name} eating roar`);
    }
    //seter and getter 
    get() {
        return this.name;
    }
    set(name) {
        if (name.length < 4) console.log("Its to short");
        this.name = name;
    }
}

let obj3 = new animal("Buuny");
obj3.eating();
obj3.runing();
let obj4 = new lion("shera");
obj4.eating();
obj4.set("shera_new");
console.log(obj4.name);

//instance chacking 
console.log(obj4 instanceof animal) ; // return true
console.log(obj3 instanceof lion); // return false

