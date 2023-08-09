let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let wordsContainerEl = document.getElementById("wordsContainer");
let errorMsgEl = document.getElementById("errorMsg");
let userInputElement = document.getElementById("userInput");

function createAndAddWordToWordCloud(word){
    let randomFontSize = Math.ceil(Math.random() * 40) + "px";
     let wordEl = document.createElement("span");
    wordEl.textContent = word;
    wordEl.style.fontSize = randomFontSize;
    wordEl.classList.add("m-3");
    wordsContainerEl.appendChild(wordEl);
}


for(let word of wordCloud){
    createAndAddWordToWordCloud(word)
}
function addElement() {
    let userEnteredWord = userInputElement.value;
    if(userEnteredWord !== ""){
        userInputElement.value = "";
        errorMsgEl.textContent = "";
        createAndAddWordToWordCloud(userEnteredWord)
    }
    else{
        errorMsgEl.textContent = "Please enter a word";
    }
}