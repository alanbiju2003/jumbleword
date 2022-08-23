// declaring variables by class from html

const wordtext=document.querySelector(".word");
const hinttext=document.querySelector(".hint span");
const refreshbtn=document.querySelector(".refresh-word");
const checkbtn=document.querySelector(".check-word");
const inputfield=document.querySelector(".input");
const timee=document.querySelector(".time");

const words = [

    {
        word: "addition",
        hint: "The process of adding numbers"
    },

    {
        word: "meeting",
        hint: "Event in which people come together"
    },

    {
        word: "number",
        hint: "Math symbol used for counting"
    },

    {
        word: "exchange",
        hint: "The act of trading"
    },

    {
        word: "canvas",
        hint: "Piece of fabric for oil painting"
    },

    {
        word: "garden",
        hint: "Space for planting flower and plant"
    },

    {
        word: "position",
        hint: "Location of someone or something"
    },

    {
        word: "feather",
        hint: "Hair like outer covering of bird"
    },

    {
        word: "comfort",
        hint: "A pleasant feeling of relaxation"
    },

    {
        word: "tongue",
        hint: "The muscular organ of mouth"
    },

    {
        word: "expansion",
        hint: "The process of increase or grow"
    },

    {
        word: "country",
        hint: "A politically identified region"
    },

    {
        word: "group",
        hint: "A number of objects or persons"
    },

    {
        word: "taste",
        hint: "Ability of tongue to detect flavour"
    },

    {
        word: "store",
        hint: "Large shop where goods are traded"
    },

    {
        word: "field",
        hint: "Area of land for farming activities"
    },
    {
        word: "friend",
        hint: "Person other than a family member"
    },

    {
        word: "pocket",
        hint: "A bag for carrying small items"
    },

    {
        word: "needle",
        hint: "A thin and sharp metal pin"
    },

    {
        word: "expert",
        hint: "Person with extensive knowledge"
    },

    {
        word: "statement",
        hint: "A declaration of something"
    },

    {
        word: "second",
        hint: "One-sixtieth of a minute"
    },

    {
        word: "library",
        hint: "Place containing collection of books"
    },


]

// creating variable for timer and checking the correct word

let correctword,timer;

//seting time limit
const initimer=maxtime=>{
    timer=setInterval(() =>{
        if (maxtime > 0) {
            maxtime--;
            return timee.innerText=maxtime;

            
        }
        clearInterval(timer);
        alert(`TIME STOPS! ${correctword.toUpperCase()} was the correct word`);

    },1000);

}



//making word jumble and random and swapping


const initgame =() =>{

    initimer(30);
    let randomobj=words[Math.floor(Math.random() * words.length)];
    let wordarray=randomobj.word.split("");
    
    for(let i=wordarray.length-1; i > 0;i--){
        let j=Math.floor(Math.random() * (i+1));

        [wordarray[i],wordarray[j]]= [wordarray[j],wordarray[i]];


    }

    wordtext.innerText=wordarray.join("");
    hinttext.innerText=randomobj.hint;
    correctword=randomobj.word.toLowerCase();
    inputfield.value=" ";
    inputfield.setAttribute("maxlength",correctword.length);
    
    console.log(randomobj);



}

initgame();


//checking the answer whether it is correct or not 
// and alerting for the wrong answer

const checkword = () => {
    let userword = inputfield.value.toLowerCase();
    if(!userword) return alert(`pls enter a word`);
    if(userword !==correctword) return alert(`Oops! ${userword} is not a correct word`);
    alert(`Congrats! ${correctword.toUpperCase()} is the correct word`);


}

refreshbtn.addEventListener("click",initgame);
checkbtn.addEventListener("click",checkword);
