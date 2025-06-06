console.log("hello world");

const container = document.querySelector("#container");
for(let i=0; i <16; i++){
    for(let j=0; j<16; j++){
        const box = document.createElement("div");
        box.setAttribute("class", "box");
        box.setAttribute("style", "border: 2px solid black; padding:20px; height:35px; width:35px;");
        container.appendChild(box);
    }
}

const boxButton = document.querySelector("#boxButton");
const boxes = document.querySelectorAll(".box");
boxButton.addEventListener("click", ()=>{
    let width = prompt("Enter width of how many boxes you would like", "16");
    let height = prompt("Enter the height of how many boxes you would like", "16");    
    width = parseInt(width);
    height = parseInt(height);
    container.innerHTML="";
    for(let x= 0; x<width; x++){
        for(let y=0; y <height; y++){   
        const box = document.createElement("div");
        box.setAttribute("class", "box");
        box.setAttribute("style", "border: 2px solid black; padding:20px; height:35px; width:35px;");
        container.appendChild(box);
        }
    }
    const newBoxes = document.querySelectorAll(".box");
    newBoxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
    box.setAttribute("style", "border: 2px solid black; padding:20px; height:35px; width:35px;background-color:pink;");
    });
  });
});



boxes.forEach((box)=>{
    box.addEventListener("mouseover",() =>{
        box.setAttribute("style", "border: 2px solid black; padding:20px; height:35px; width:35px;background-color:blue;");
    });
});


