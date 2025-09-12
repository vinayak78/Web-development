// console log use to print anything in console(terminal)

console.log("Hello world");
console.log("Node js is working");

// variable
{
    // we can use var , let  , const to declare variable 
    // we dont use var because it dont have scope funtion
    // Data type (2)
    // 1. Premitive data type - number , string , boolean , undefine , null , bigint , symbol
    // 2. non - premitive data type - array , object

    let num = 55;
    let name = "vinayak"
    let user_login = true;
    let user_password = undefined;
    let user_status = null;

    // object - key value pair
    let user_info = {
        'name_name': "vinayak",
        "user_password": 5547,
        "user_status": null,
        "user_guid": undefined
    };
    console.log(user_info)
}

{
    /*
    1. Arithmetic operator
    + , - , / , % , * , ** 

    2.  operators
    == , === , < , > , >= , <= , != , !==

    3. conditional operator
    && , || , !
    */
}
// if else / ternary operator
{
    let user_login = true;
    if (user_login == true) console.log("User login succesfully");
    else console.log("User didnt login");

    // else if 
    let user_status = "login";
    if (user_status == "login") console.log("User is login");
    else if (user_status == "offline") console.log("user is offline");
    else console.log("Unknown");

    //ternory operator
    (user_status == "login") ? console.log("User login") : console.log("user offline");
}

//loops
{
    /*
    for loop 
    for in (object)
    for of (array)
    for each
    while
    do while
    */
    for (let index = 0; index < 5; index++) console.log(index);

    let user_info = {
        'name_name': "vinayak",
        "user_password": 5547,
        "user_status": null,
        "user_guid": undefined
    };
    for (const key in user_info) console.log(key, user_info[key]);

    let arr = [1, 2, 3, 4, 5, 6];
    for (const element of arr) console.log(element);

    i = 5;
    while (i < 6){
        console.log(i); 
        i++;
    }
    i = 0;
    do {
        console.log(i);
        i++;
    } while (i < 10); 
}

// funtion 
{   
    //funtion declaration / funtion defination
    function print() {
        console.log("I am an funtion");
    }

    //funtion call
    print();

    //paramter funtion
    function sum(a , b , c = 3){ // c = 3 default value
        return a + b + c;
    }

    let result = sum(5,5,5);
    console.log(result);


    //arrow funtion
    let new_fun = ()=>{console.log("Hello i am arrow funtion")}
    new_fun();

    let arrwo_sum = (x,y)=>{return x+ y};
    console.log(arrwo_sum(1,2));
}

// string 
{
    let name = "Harshit";
    //indexing 
    console.log(name[0]);
    console.log(name[5]);

    // Template literal
    let last_name = "Yadav";
    console.log(`User full name : ${name} ${last_name}`);
    
    // escape sequence charcter -> \ , \n , \t , \r 
    console.log("roha\"n");

    //string method and funtion (these are some most used funtion is js)
    let str = "User_name";
    console.log(str.length);
    console.log(str.toLowerCase());
    console.log(str.toUpperCase());
    console.log(str.indexOf("U"));
    console.log(str.trim());
    console.log(str.charAt(2));
    console.log(str.replace("User" , "Hello"));
    console.log(str.slice(1,5));
    console.log(str.slice(2));
    console.log(str);
}

//array 
{
    let arr = [1,2,3,4,5,6,7];
    let arr1 = ["harshit" , "Arpit" , "Rahul"];
    let arr2 = [null , undefined , "Harshit" , 1 , 1.3 ];

    let test_array = [1,2,3,4,5,6];

    //funtion and methods
    console.log(test_array[0]);
    console.log(test_array.indexOf(5)); // return 5 value index if not then -1
    console.log(test_array.includes(5));  // return true / false

    test_array.pop(); // remove the last element 
    test_array.shift(); // remove the first element 
    test_array.push(6); // add at the end of array 
    test_array.unshift(1); // addd front of array

    delete test_array[5]; // will empty the space not reduce the lenght of array

    arr.concat(arr1,arr2) ; // concat the array 

    arr.splice(1,3 , 2222, 3333 , 4444); // splice (startting index , how many value have to splice , value add insted of removerd ones)
    console.log(arr);

    arr.slice(1 , 5); // slice the value 1 from 4 5 will not include 

    arr.reverse(); // reverse the array 

    let hello_array = Array.from("Hello"); 

    console.log(test_array.length); //lenght of array

    //for each 
    test_array.forEach(value => console.log(value));
    test_array.forEach((value , index , arr) => console.log(value , index , arr));

    // map (return new array)
    test_array.map(value => console.log(value * value));

    //filter
    test_array.filter(value => value > 5);

    //reduce 
    test_array.reduce((previous_value , current_value) => previous_value + current_value);
    
    //sort 
    test_array.sort((a,b) => a - b ); // assending 
    test_array.sort((a,b) => b - a ); // Dessending 
}

//promises and callback
{
    //call back funtion 
    // let callback = ()=>{console.log("I am call back")};
    // let greeting = (value ,callback)=>{
    //     console.log(value);
    //     callback();
    // }
    // greeting("Hello" , callback);

    //anaonymus call back 
    let greeting = (value, callback) => {
        console.log(value);
        callback();
    }
    greeting("Hello", () => console.log("I am call back"));

    //pyramid of doom (call back hell)

    //promises 
    let myPromise = new Promise((resoleve, reject) => {
        userLogin = false;
        userLogin ? resoleve("User is indeed login") : reject("User didnt login yet");
    })
    myPromise.then((value) => {
        console.log(value);
    }).catch((value) => {
        console.log(value);
    })

    // there is also an finaly block to perform gneral cleanups 

    // prmoises api 

    let p1 = new Promise((resolve, reject) => {
        let randomNumber = Math.random();
        (randomNumber < 0.5) ? resolve("p1 resolve") : reject("Number is small");
    })
    let p2 = new Promise((resolve, reject) => {
        let randomNumber = Math.random();
        (randomNumber < 0.5) ? resolve("p2 resolve") : reject("Number is small");
    })
    let p3 = new Promise((resolve, reject) => {
        let randomNumber = Math.random();
        (randomNumber < 0.5) ? resolve("p3 resolve") : reject("Number is small");
    })
    let p4 = new Promise((resolve, reject) => {
        let randomNumber = Math.random();
        (randomNumber < 0.5) ? resolve("p4 resolve") : reject("Number is small");
    })
    //promise.all //if all work return value 
    let p_all = Promise.all([p1, p2, p3, p4]);
    p_all.then((e) => {
        console.log(e);
    }).catch(err => {
        console.log(err);
    })

    //prmise.settle // give all of them same if even not resolve
    let p_allSettle = Promise.allSettled([p1, p2, p3, p4]);
    p_allSettle.then((e) => {
        console.log(e);
    }).catch(err => {
        console.log(err);
    })

    //race //who ever promise resolve first 
    let p_race = Promise.race([p1, p2, p3, p4]);
    p_race.then((e) => {
        console.log(e);
    }).catch(err => {
        console.log(err);
    })

    //any 
    let p_any = Promise.any([p1, p2, p3, p4]);
    p_any.then((e) => {
        console.log(e);
    }).catch(err => {
        console.log(err);
    })

    //resolve
    let p_resolve = Promise.resolve([p1, p2, p3, p4]);
    p_resolve.then((e) => {
        console.log(e);
    }).catch(err => {
        console.log(err);
    })

    //reject
    let p_reject = Promise.reject([p1, p2, p3, p4]);
    p_reject.then((e) => {
        console.log(e);
    }).catch(err => {
        console.log(err);
    })
}

// await async 
{
    // we can use await and async funtion insted of .then in promises 

    async function user_data() {
        try {
            const data = fetch('https://jsonplaceholder.typicode.com/todos/1')
            const parse_data = data.json();
            return parse_data;
        }
        catch (err) {
            console.log(err);
        }
    }

    console.log('Loading data');
    console.log("data load complete");
    const user_info = await user_data();
    console.log(user_info);
}

//error handeling 
{
    // we can use custom error 
    let a = prompt("Enter A : ");
    let b = prompt("Enter B : ");
    if (isNaN(a) || isNaN(b)) throw ("Enter values is wrong"); // custom error
    console.log(a + b);

    // try and catch and finally

    let checking = () => {
        try {
            let a = prompt("Enter A : ");
            let b = prompt("Enter B : ");
            if (isNaN(a) || isNaN(b)) throw ("Enter values is wrong"); // custom error
            console.log(a + b);
            return true;
        }
        catch (error) {
            console.log(error);
            return false;
        }
        finally {
            console.log("Finally is working");
        }
    }

    // important note : finally block will execute even try and catch return in funtion 
}

// Classes and objects 

{

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
    console.log(obj4 instanceof animal); // return true
    console.log(obj3 instanceof lion); // return false

}

// advance js 
{
    async function sleep() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(45);
            }, 1000);
        })
    }
    // will give error
    // let a = await sleep();
    // let b = await sleep();;

    //IIFE imidiately invoke funtion
    (async function main() {
        let a = await sleep();
        console.log(a)
        let b = await sleep();
        console.log(b)
    })()  

    //deconstruct 
    let [a , b , ...rest] = [1 , 2 , 5,5,7,8,9];
    console.log(a , b , rest);

    //spread operator

    let sum = (a,b,c)=> console.log(a + b + c);
    let arr = [1,2,3];
    sum(...arr);

    //hosting - if we use for declaration of variable so during execution it will declare first means reach to the top of code only declaration not intilization so it will undfine only var support hosting not let and const
}
