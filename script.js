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
// DOM  (document object model)
{
    // let html_code = document.querySelector("body");
    // console.log(html_code);
    

}
