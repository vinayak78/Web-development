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
    console.log(firstElementChild , lastElementChild);

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
    let div = document.querySelector("div");
   console.log(div.hasAttribute("class")); 

   console.log(div.getAttribute("class"));

   div.setAttribute("class" , "added_class" );
   console.log(div.attributes);
}

//creating an element and insertion 
{
    let div = document.createElement("div");
    div.innerText = "Hello i am created div";
    div.className = "added_div";

    // document.getElementsByClassName(".container").append(div);
    // document.getElementsByClassName(".container").prepend(div);
    // document.getElementsByClassName(".container").after(div);
    // document.getElementsByClassName(".container").before(div);
}

// insert adjesent property 
{
    document.getElementsByClassName("container").insertAdjacentHTML("")
}