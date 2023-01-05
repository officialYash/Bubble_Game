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

const bubblecolors=[
  "purple",
  "red",
  "green",
  "cyan",
  "orange",
  "pink",
  "gray",
]


// GETTING BUBBLE FROM DOM

let Bubbles=[];

let score=0;


let missBubble=0;



// Function For Creating the Bubble

const createbubble = () =>{
    // getting a all the Random values for bubble
    const randomAlphabet = Math.floor(Math.random() * alphabhetArray.length);
    const randomColor =Math.floor(Math.random() * bubblecolors.length);
    const randomTime=Math.floor(Math.random() * (30 - 10 + 1) + 10);
    const randomLeft = Math.floor(Math.random() * (95 -5 + 1) + 5);
    // Creating the new Bubble with random Values
    const mydiv = document.createElement("div");
    mydiv.style.width="50px";
    mydiv.style.height="50px";
    mydiv.style.bottom="0px";
    mydiv.innerText =alphabhetArray[randomAlphabet];
    mydiv.style.backgroundColor=bubblecolors[randomColor];
    mydiv.style.style["-webkit-animation-duration"] =`${randomTime}s`;
    mydiv.style.left=`${randomLeft}%`;
    mydiv.style.boxShadow=
    "inset -5px -5px 10px rgba(0, 0, 0, 1),1px 1px 1px white,-1px -1px 1px white";
    mydiv.classList.add("bubble");
    document.body.appendChild(mydiv);

    // updating the bubbles list with new ones

    Bubbles=document.querySelectorAll(".bubble");
    Bubbles=Array.from(Bubbles);

    // for deleting the bubble on animation end (bubble reach on top)
    mydiv.addEventListener("webkitAnimationEnd", () =>{
        document.body.removeChild(mydiv);
        missBubble+=1;
        console.log(missBubble);
    })

};


// Function for popping up the bubble if key matches

    const burstBubble =(event)=>{
        const key =event.key;
        for(let i=0; i< Bubbles.length ;i++ ){
            if(Bubbles[i].innerText === key){
                // popping the bubble
                document.body.removeChild(Bubbles[i]);
            }

            // Updating the bubble list after popping the bubble
            Bubbles=document.querySelectorAll(".bubble");
            Bubbles=Array.from(Bubbles);
            break; 
        }

    };
   
    // creating the game Loop

    let startTime = new Date().getTime();
    let frameRate = 0.5;

    // game loop for running the game 

    const gameloop= () =>{
        const currentTime=new Date().getTime();
        const Difference = currentTime -startTime;
        if(Difference >1000 / frameRate){
            startTime=currentTime;
            createbubble();
        }
        window.requestAnimationFrame(gameloop);
    };






// function for adding the window event listner for user key input
window.addEventListener("keyup", burstBubble);