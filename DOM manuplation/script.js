// DOM manuplation - stand for Document object model which can contain all the elements of page in a tree structure 

//important notes : text and comments are also nodes 

// children of an elements 
{
    let firstChild = document.body.firstChild;
    console.log(firstChild); // return text 
    let lastChild = document.body.lastChild;
    console.log(lastChild); //return script
    let allChild = document.body.childNodes;
    console.log(allChild); //return node list

    // for only elements nodes 
    let firstElementChild = document.body.firstElementChild;
    let lastElementChild = document.body.lastElementChild;
    console.log(firstElementChild, lastElementChild);

    //for siblings 
    let prvious_sibling = document.body.previousElementSibling;
    console.log(prvious_sibling);

    let nextElementSibling = document.body.nextElementSibling;
    console.log(nextElementSibling); // return null body dont have any siblings   
}
//searching in DOM 
{
    // document.getElementById("");
    // document.getElementsByTagName("");
    // document.getElementsByClassName("");
    // document.getElementsByName("");
    // document.querySelector("");
    // document.querySelectorAll("") // return node
}

//matches , closest , contains methods
{
    let body = document.querySelector("body");
    let div = document.querySelector("div");

    //matches
    console.log(body.matches("body"));
    //closest
    console.log(body.closest("html"));
    //contains
    console.log(body.contains(div));
}

//Events and other DOM properties 

//inner html and outer html
{
    let innerHtml = document.querySelector("body").innerHTML;
    let innerText = document.querySelector("body").innerText;
    let outerHtml = document.querySelector("body").outerHTML;
    console.log(`Inner html -> ${innerHtml} , inner Text ->  ${innerText} , Outer Html -> ${outerHtml}`);

    //innerText -> return user visible text containt ignores display : none , visibility : hidden
    //textContains -> return raw dom include display : none , visibility : hidden to 

    //textContains
    let textcontent = document.querySelector("div").textContent;
    console.log(textcontent);

    //hidden property (hide element)
    // document.querySelector("div").hidden = true;
}

//Attribute methods 
{
    // let div = document.querySelector("div");
    // console.log(div.hasAttribute("class"));

    // console.log(div.getAttribute("class"));

    // div.setAttribute("class", "added_class");
    // console.log(div.attributes);


    //important note : setAttribute funtion reassign the original class 
}

//creating an element and insertion 
{
    // let div = document.createElement("div");
    // div.innerText = "Hello i am created div";
    // div.className = "added_div";

    // document.getElementsByClassName("container").append(div);
    // document.getElementsByClassName("container").prepend(div);
    // document.getElementsByClassName("container").after(div);
    // document.getElementsByClassName("container").before(div);
}

// insert adjesent property 
{
    // let element = document.createElement("div");
    // element.innerText = "Hello i am added div";
    // //after begin
    // document.querySelector(".conatiner").insertAdjacentElement("afterbegin", element);
    // //before begin
    // document.querySelector(".conatiner").insertAdjacentElement("beforbegin", element);
    // //after end
    // document.querySelector(".conatiner").insertAdjacentElement("afterend", element);
    // //before end
    // document.querySelector(".conatiner").insertAdjacentElement("beforeend", element);
}

// class name and class list
{
    //     let element = document.querySelector('div');
    //     element.classList.add("addedClass");
    //     console.log(element.className);
    //     element.classList.remove("addedClass");
    //     console.log(element.className);
}
//Events 
{
    document.querySelector("#btn").addEventListener("click", () => {
        console.log("I am clicked");
    })
    document.querySelector("#btn").addEventListener("click", (e) => {
        console.log(e);
    })

    // Event bubbling

    // this is event bublling for stopping it we use elementObject.stopPropagation();
    document.querySelector(".parent").addEventListener("click", (e) => {
        e.stopPropagation();
        alert("Hey i am clicked , parent");
    })

    document.querySelector(".parentChild").addEventListener("click", (e) => {
        e.stopPropagation();
        alert("Hey i am clicked , parent Child");
    })
    document.querySelector(".child").addEventListener("click", (e) => {
        e.stopPropagation();
        alert("Hey i am clicked , child");
    })

    // we can use remove event listener to remove the events kike this 
    document.querySelector(".child").removeEventListener("click", (e) => {
        e.stopPropagation();
        alert("Hey i am clicked , child");
    })


}

//settime out and setinterval
{
    //set time out and setintervals use to make the event in loop like this 
    let random_color = () => {
        let r = Math.ceil((0 + Math.random() * 255));
        let g = Math.ceil((0 + Math.random() * 255));
        let b = Math.ceil((0 + Math.random() * 255));
        return `rgb(${r}, ${g}, ${b})`
    }

    setInterval(() => {
        document.querySelector(".parentChild").style.backgroundColor = random_color();
    }, 1000);
    // setTimeout(() => {
    //     document.querySelector(".parentChild").style.backgroundColor = random_color();
    // }, 2000);

    // The main difference between settimeout and setinterval funtion setimout run ones and setinterval run in a loop
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