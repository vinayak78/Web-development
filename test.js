// random color generator 
let random_color = ()=> {
let r = Math.ceil((0 + Math.random()*255));
let g = Math.ceil((0 + Math.random()*255));
let b = Math.ceil((0 + Math.random()*255));
return `rgb(${r}, ${g}, ${b})`
}

