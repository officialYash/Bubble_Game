const alphabhetArray=[
    "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// GETTING BUBBLE FROM DOM

let Bubbles;

// Creating the Game Loop

let StartTime = new Date().getTime();
let frameRate = 1;

// Game Loop For Running the Game

const gameloop= () =>{
    const currentTime = new Date().getTime();
    const differenceTime = currentTime -StartTime;
    if(differenceTime > 1000 / frameRate){
        console.log("good Time");
        StartTime = currentTime;
    }
    window.requestAnimationFrame(gameloop)
};

// Gameloop();

// Function For Creating the Bubble

const createbubble = () =>{
    const mydiv = document.createElement("div");
    mydiv.style.width="50px";
    mydiv.style.height="50px";
    mydiv.style.bottom="0px";
    mydiv.innerText=alphabhetArray[0];
    mydiv.style.backgroundColor="red";
    mydiv.style.boxShadow=
    "inset -5px -5px 10px rgba(0, 0, 0, 1),1px 1px 1px white,-1px -1px 1px white";
    mydiv.classList.add("bubble");
    document.body.appendChild(mydiv);

    // updating the bubbles list with new ones

    Bubbles=document.querySelectorAll(".bubble");
    Bubbles=Array.from(Bubbles);

};
createbubble();

// Function for popping up the bubble

const burstBubble = (event)=>{
    const key =event.key;
    Bubbles.map((element, index)=>{
        if(element.innerText === key){
            deleteIndex=index;
            document.body.removeChild(Bubbles[index]);
            Bubbles=document.querySelectorAll(".bubble");
            Bubbles=Array.from(Bubbles);
        }
    });
};

// function for adding the window event listner
window.addEventListener("keyup", burstBubble);