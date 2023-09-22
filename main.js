// Letters
const letters = "abcdefghijklmnopqrstuvwxyz+#";

// Get Array From Letters
let lettersArray = Array.from(letters);

// Select Letters Container
let lettersContainer = document.querySelector(".letters");

// Generate Letters
lettersArray.forEach((letter) => {
  // Create Span
  let span = document.createElement("span");

  // Create Letter Text Node
  let theLetter = document.createTextNode(letter);

  // Append The Letter To Span
  span.appendChild(theLetter);

  // Add class On Span
  span.className = "letter-box";

  // Append Span To The Letters Container
  lettersContainer.appendChild(span);
});

// Object Of Words + Categories
const words = {
  programming: [
    "php",
    "javascript",
    "go",
    "c#",
    "Dart",
    "c",
    "c++",
    "python",
  ],
  movies: [
    "Prestige",
    "Inception",
    "Parasite",
    "Interstellar",
    "whiplash",
    "Memento",
    "Coco",
    "Up",
  ],
  football_Players: [
    "Zlatan Ibrahimovic",
    "Luka Modric",
    "Kieran Trippier",
    "Edinson Cavani",
    "Antoine Griezman", 
    "Angel DiMaria",
    "Toni Kroos",
    "Kyle Walker",
    "Thomas Muller",
    "Kareem Benzema",
    "Manuel Neuer",
    "Roberto Firmino",
    "Cristiano Ronaldo",
    "Riyad Mahrez",
    "Ngolo Kante",
    "Leonel Messi",
    "Van Dijk",
    "Mohamed Salah",
    "Erling Haaland",
    "Kylian Mbappe", 
    
  ],
  arab_countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar", "Iraq", "Lebanon", "Tunisia", "Sudan", "Jordan", "Morocco"],
};

// Get Random Property

let allKeys = Object.keys(words);

const settings = document.querySelector(".settings");
let programmingBtn = document.querySelector(".settings .programming");
let moviesBtn = document.querySelector(".settings .movies");
let peopleBtn = document.querySelector(".settings .people");
let countriesBtn = document.querySelector(".settings .countries");
let randomBtn = document.querySelector(".settings .random");


function programming() {
  localStorage.setItem("category", "programming");

  // Category
  let randomPropName = allKeys[0];

  // Category Words
  let randomPropValue = words[randomPropName];

  // Random Number Depend On words
  let randomValueNumbers = Math.floor(Math.random() * randomPropValue.length);

  // The Chosen Word
  let randomValue = randomPropValue[randomValueNumbers];

  // Set Category Info
  document.querySelector(".game-info .category span").innerHTML =
    randomPropName;

  // Select Letters Guess Container
  let lettersGuessContainer = document.querySelector(".letters-guess");

  // Convert Chosen Word To Array
  let lettersAndSpace = Array.from(randomValue);

  // Create Spans Depends On Word
  lettersAndSpace.forEach((letter) => {
    // Create Empty Span
    let emptySpan = document.createElement("span");

    // If Letters Is Space
    if (letter === "") {
      // Add Class To The Span
      emptySpan.className = "with-space";
    }

    // Append Span To Letters Guess Container
    lettersGuessContainer.appendChild(emptySpan);
  });

  // Select Guess Spans
  let guessSpans = document.querySelectorAll(".letters-guess span");

  let wrongAttempts = 0;

  let successAttempts = 0;

  // Select The Draw Element
  let theDraw = document.querySelector(".hangman-draw");

  // Handle Clicking On Letters
  document.addEventListener("click", (e) => {
    // Set The Chose Status
    let theStatus = false;

    if (e.target.className === "letter-box") {
      e.target.classList.add("clicked");

      // Get Clicked Letter
      let theClickedLetter = e.target.innerHTML.toLowerCase();

      // The Chosen Word
      let theChosenWord = Array.from(randomValue.toLowerCase());

      theChosenWord.forEach((wordLetter, wordindex) => {
        // If The Clicked Letter Equal To One Of The Chosen Word Letter

        if (theClickedLetter === wordLetter) {
          // Set Status To Correct
          theStatus = true;

          // Loop On All Guess Spans
          guessSpans.forEach((span, spanIndex) => {
            if (wordindex === spanIndex) {
              span.innerHTML = theClickedLetter;
              successAttempts++;
            }
          });
        }
      });

      // Outside Loop

      // If Letter Is Wrong
      if (theStatus !== true) {
        // Increase The Wrong Attempts
        wrongAttempts++;

        // Add Class Wrong To The Draw Element
        theDraw.classList.add(`wrong-${wrongAttempts}`);

        // Play Fail Sound
        document.getElementById("fail").play();

        if (wrongAttempts === 8) {
          endGame();

          lettersContainer.classList.add("finished");
        }
      } else {
        // Play Success Sound
        document.getElementById("success").play();
        if (
          successAttempts == Array.from(randomValue).length &&
          wrongAttempts < 4
        ) {
          // Create Popup Div
          let popup = document.createElement("div");

          // Create Text
          let popupText = document.createTextNode(
            `Congtratlation, The Word Is ${randomValue}.

    You Have ${wrongAttempts} Mistakes.

    Your Level: Exellent.`
          );

          // Append Text To The Popup
          popup.appendChild(popupText);

          // Add Class At Popup Div
          popup.className = "popup";

           // Create The "Ok" Button
   let popupBtn = document.createElement("button")

   // Create Text Node
   let buttonText = document.createTextNode("OK")

popupBtn.append(buttonText)

popupBtn.classList.add("popupBtn")

   popup.appendChild(popupBtn)


   popupBtn.onclick = function() {
    location.reload()
   }
          // Append To The Body
          document.body.appendChild(popup);

          lettersContainer.classList.add("finished");
        } else if (
          successAttempts == Array.from(randomValue).length &&
          wrongAttempts >= 4 &&
          wrongAttempts <= 6
        ) {
          // Create Popup Div
          let popup = document.createElement("div");

          // Create Text
          let popupText = document.createTextNode(
            `Congtratlation, The Word Is ${randomValue}.

           You Have ${wrongAttempts} Mistakes.

           Your Level: Intermidiate.`
          );

          // Append Text To The Popup
          popup.appendChild(popupText);

          // Add Class At Popup Div
          popup.className = "popup";

 // Create The "Ok" Button
 let popupBtn = document.createElement("button")

 // Create Text Node
 let buttonText = document.createTextNode("OK")

popupBtn.append(buttonText)

popupBtn.classList.add("popupBtn")

 popup.appendChild(popupBtn)


 popupBtn.onclick = function() {
  location.reload()
 }

          // Append To The Body
          document.body.appendChild(popup);

          lettersContainer.classList.add("finished");
        } else if (
          successAttempts == Array.from(randomValue).length &&
          wrongAttempts > 6
        ) {
          // Create Popup Div
          let popup = document.createElement("div");

          // Create Text
          let popupText = document.createTextNode(
            `Congtratlation, The Word Is ${randomValue}.

           You Have ${wrongAttempts} Mistakes.

           Your Level: Not Bad.`
          );

          // Append Text To The Popup
          popup.appendChild(popupText);

          // Add Class At Popup Div
          popup.className = "popup";

 // Create The "Ok" Button
 let popupBtn = document.createElement("button")

 // Create Text Node
 let buttonText = document.createTextNode("OK")

popupBtn.append(buttonText)

popupBtn.classList.add("popupBtn")



 popup.appendChild(popupBtn)

 popupBtn.onclick = function() {
  location.reload()
 }

          // Append To The Body
          document.body.appendChild(popup);

          lettersContainer.classList.add("finished");
        }
      }
    }
  });

  function endGame() {
    // Create Popup Div
    let popup = document.createElement("div");

    // Create Text
    let popupText = document.createTextNode(
      `Game Over, The Word Is "${randomValue}".`
    );

    // Append Text To The Popup
    popup.appendChild(popupText);

    // Add Class At Popup Div
    popup.className = "popup";

 // Create The "Ok" Button
 let popupBtn = document.createElement("button")

 // Create Text Node
 let buttonText = document.createTextNode("OK")

popupBtn.append(buttonText)

popupBtn.classList.add("popupBtn")

 popup.appendChild(popupBtn)


 popupBtn.onclick = function() {
  location.reload()
 }

    // Append To The Body
    document.body.appendChild(popup);

    lettersContainer.classList.add("finished");
  }

  settings.style = "display: none";
}

function movies() {
  localStorage.setItem("category", "movies");

  // Category
  let randomPropName = allKeys[1];

  // Category Words
  let randomPropValue = words[randomPropName];

  // Random Number Depend On words
  let randomValueNumbers = Math.floor(Math.random() * randomPropValue.length);

  // The Chosen Word
  let randomValue = randomPropValue[randomValueNumbers];

  // Set Category Info
  document.querySelector(".game-info .category span").innerHTML =
    randomPropName;

  // Select Letters Guess Container
  let lettersGuessContainer = document.querySelector(".letters-guess");

  // Convert Chosen Word To Array
  let lettersAndSpace = Array.from(randomValue);

  // Create Spans Depends On Word
  lettersAndSpace.forEach((letter) => {
    // Create Empty Span
    let emptySpan = document.createElement("span");

    // If Letters Is Space
    if (letter === "") {
      // Add Class To The Span
      emptySpan.className = "with-space";
    }

    // Append Span To Letters Guess Container
    lettersGuessContainer.appendChild(emptySpan);
  });

  // Select Guess Spans
  let guessSpans = document.querySelectorAll(".letters-guess span");

  // Set Wrong Attempts
  let wrongAttempts = 0;

  // Set Success Attempts
  let successAttempts = 0;

  // Select The Draw Element
  let theDraw = document.querySelector(".hangman-draw");

  // Handle Clicking On Letters
  document.addEventListener("click", (e) => {
    // Set The Chose Status
    let theStatus = false;

    if (e.target.className === "letter-box") {
      e.target.classList.add("clicked");

      // Get Clicked Letter
      let theClickedLetter = e.target.innerHTML.toLowerCase();

      // The Chosen Word
      let theChosenWord = Array.from(randomValue.toLowerCase());

      theChosenWord.forEach((wordLetter, wordindex) => {
        // If The Clicked Letter Equal To One Of The Chosen Word Letter

        if (theClickedLetter === wordLetter) {
          // Set Status To Correct
          theStatus = true;

          // Loop On All Guess Spans
          guessSpans.forEach((span, spanIndex) => {
            if (wordindex === spanIndex) {
              span.innerHTML = theClickedLetter;
              successAttempts++;
            }
          });
        }
      });

      // Outside Loop

      // If Letter Is Wrong
      if (theStatus !== true) {
        // Increase The Wrong Attempts
        wrongAttempts++;

        // Add Class Wrong To The Draw Element
        theDraw.classList.add(`wrong-${wrongAttempts}`);

        // Play Fail Sound
        document.getElementById("fail").play();

        if (wrongAttempts === 8) {
          endGame();

          lettersContainer.classList.add("finished");
        }
      } else {
        // Play Success Sound
        document.getElementById("success").play();
        if (
          successAttempts == Array.from(randomValue).length &&
          wrongAttempts < 4
        ) {
          // Create Popup Div
          let popup = document.createElement("div");

          // Create Text
          let popupText = document.createTextNode(
            `Congtratlation, The Word Is ${randomValue}.
    
        You Have ${wrongAttempts} Mistakes.
    
        Your Level: Exellent.`
          );

          // Append Text To The Popup
          popup.appendChild(popupText);

          // Add Class At Popup Div
          popup.className = "popup";

 // Create The "Ok" Button
 let popupBtn = document.createElement("button")

 // Create Text Node
 let buttonText = document.createTextNode("OK")

popupBtn.append(buttonText)

popupBtn.classList.add("popupBtn")

 popup.appendChild(popupBtn)

 popupBtn.onclick = function() {
  location.reload()
 }
          // Append To The Body
          document.body.appendChild(popup);

          lettersContainer.classList.add("finished");
        } else if (
          successAttempts == Array.from(randomValue).length &&
          wrongAttempts >= 4 &&
          wrongAttempts <= 6
        ) {
          // Create Popup Div
          let popup = document.createElement("div");

          // Create Text
          let popupText = document.createTextNode(
            `Congtratlation, The Word Is ${randomValue}.
    
               You Have ${wrongAttempts} Mistakes.
    
               Your Level: Intermidiate.`
          );

          // Append Text To The Popup
          popup.appendChild(popupText);

          // Add Class At Popup Div
          popup.className = "popup";

 // Create The "Ok" Button
 let popupBtn = document.createElement("button")

 // Create Text Node
 let buttonText = document.createTextNode("OK")

popupBtn.append(buttonText)

popupBtn.classList.add("popupBtn")

 popup.appendChild(popupBtn)

 popupBtn.onclick = function() {
  location.reload()
 }
          // Append To The Body
          document.body.appendChild(popup);

          lettersContainer.classList.add("finished");

        } else if (
          successAttempts == Array.from(randomValue).length &&
          wrongAttempts > 6
        ) {
          // Create Popup Div
          let popup = document.createElement("div");

          // Create Text
          let popupText = document.createTextNode(
            `Congtratlation, The Word Is ${randomValue}.
    
               You Have ${wrongAttempts} Mistakes.
    
               Your Level: Not Bad.`
          );

          // Append Text To The Popup
          popup.appendChild(popupText);

          // Add Class At Popup Div
          popup.className = "popup";

 // Create The "Ok" Button
 let popupBtn = document.createElement("button")

 // Create Text Node
 let buttonText = document.createTextNode("OK")

popupBtn.append(buttonText)

popupBtn.classList.add("popupBtn")

 popup.appendChild(popupBtn)

 popupBtn.onclick = function() {
  location.reload()
 }
          // Append To The Body
          document.body.appendChild(popup);

          lettersContainer.classList.add("finished");
        }
      }
    }
  });

  function endGame() {
    // Create Popup Div
    let popup = document.createElement("div");

    // Create Text
    let popupText = document.createTextNode(
      `Game Over, The Word Is "${randomValue}".`
    );

    // Append Text To The Popup
    popup.appendChild(popupText);

    // Add Class At Popup Div
    popup.className = "popup";

 // Create The "Ok" Button
 let popupBtn = document.createElement("button")

 // Create Text Node
 let buttonText = document.createTextNode("OK")

popupBtn.append(buttonText)

popupBtn.classList.add("popupBtn")

 popup.appendChild(popupBtn)

 popupBtn.onclick = function() {
  location.reload()
 }
    // Append To The Body
    document.body.appendChild(popup);

    lettersContainer.classList.add("finished");
  }

  settings.style = "display: none";
}

function people() {
  localStorage.setItem("category", "people");

  // Category
  let randomPropName = allKeys[2];

  // Category Words
  let randomPropValue = words[randomPropName];

  // Random Number Depend On words
  let randomValueNumbers = Math.floor(Math.random() * randomPropValue.length);

  // The Chosen Word
  let randomValue = randomPropValue[randomValueNumbers];

  // Set Category Info
  document.querySelector(".game-info .category span").innerHTML =
    randomPropName;

  // Select Letters Guess Container
  let lettersGuessContainer = document.querySelector(".letters-guess");

  // Convert Chosen Word To Array
  let lettersAndSpace = Array.from(randomValue);

  // Create Spans Depends On Word
  lettersAndSpace.forEach((letter) => {
    // Create Empty Span
    let emptySpan = document.createElement("span");

    // If Letters Is Space
    if (letter === "") {
    }

    // Append Span To Letters Guess Container
    lettersGuessContainer.appendChild(emptySpan);
  });

  // Select Guess Spans
  let guessSpans = document.querySelectorAll(".letters-guess span");

  // Set Wrong Attempts
  let wrongAttempts = 0;

  // Set Success Attempts
  let successAttempts = 0;

  // Select The Draw Element
  let theDraw = document.querySelector(".hangman-draw");

  // Handle Clicking On Letters
  document.addEventListener("click", (e) => {
    // Set The Chose Status
    let theStatus = false;

    if (e.target.className === "letter-box") {
      e.target.classList.add("clicked");

      // Get Clicked Letter
      let theClickedLetter = e.target.innerHTML.toLowerCase();

      // The Chosen Word
      let theChosenWord = Array.from(randomValue.toLowerCase());

      theChosenWord.forEach((wordLetter, wordindex) => {
        // If The Clicked Letter Equal To One Of The Chosen Word Letter

        if (theClickedLetter === wordLetter) {
          // Set Status To Correct
          theStatus = true;

          // Loop On All Guess Spans
          guessSpans.forEach((span, spanIndex) => {
            if (wordindex === spanIndex) {
              span.innerHTML = theClickedLetter;
              successAttempts++;
            }
          });
        }
      });

      // Outside Loop

      // If Letter Is Wrong
      if (theStatus !== true) {
        // Increase The Wrong Attempts
        wrongAttempts++;

        // Add Class Wrong To The Draw Element
        theDraw.classList.add(`wrong-${wrongAttempts}`);

        // Play Fail Sound
        document.getElementById("fail").play();

        if (wrongAttempts === 8) {
          endGame();

          lettersContainer.classList.add("finished");
        }
      } else {
        // Play Success Sound
        document.getElementById("success").play();
        if (
          successAttempts == Array.from(randomValue).length - 1 &&
          wrongAttempts < 4
        ) {
          // Create Popup Div
          let popup = document.createElement("div");

          // Create Text
          let popupText = document.createTextNode(
            `Congtratlation, The Word Is ${randomValue}.
      
          You Have ${wrongAttempts} Mistakes.
      
          Your Level: Exellent.`
          );

          // Append Text To The Popup
          popup.appendChild(popupText);

          // Add Class At Popup Div
          popup.className = "popup";

 // Create The "Ok" Button
 let popupBtn = document.createElement("button")

 // Create Text Node
 let buttonText = document.createTextNode("OK")

popupBtn.append(buttonText)



popupBtn.classList.add("popupBtn")

 popup.appendChild(popupBtn)

 popupBtn.onclick = function() {
  location.reload()
 }
          // Append To The Body
          document.body.appendChild(popup);

          lettersContainer.classList.add("finished");
        } else if (
          successAttempts == Array.from(randomValue).length - 1 &&
          wrongAttempts >= 4 &&
          wrongAttempts <= 6
        ) {
          // Create Popup Div
          let popup = document.createElement("div");

          // Create Text
          let popupText = document.createTextNode(
            `Congtratlation, The Word Is ${randomValue}.
      
                 You Have ${wrongAttempts} Mistakes.
      
                 Your Level: Intermidiate.`
          );

          // Append Text To The Popup
          popup.appendChild(popupText);

          // Add Class At Popup Div
          popup.className = "popup";

 // Create The "Ok" Button
 let popupBtn = document.createElement("button")

 // Create Text Node
 let buttonText = document.createTextNode("OK")

popupBtn.append(buttonText)

popupBtn.classList.add("popupBtn")

 popup.appendChild(popupBtn)

 popupBtn.onclick = function() {
  location.reload()
 }
          // Append To The Body
          document.body.appendChild(popup);

          lettersContainer.classList.add("finished");
        } else if (
          successAttempts == Array.from(randomValue).length - 1 &&
          wrongAttempts > 6
        ) {
          // Create Popup Div
          let popup = document.createElement("div");

          // Create Text
          let popupText = document.createTextNode(
            `Congtratlation, The Word Is ${randomValue}.
      
                 You Have ${wrongAttempts} Mistakes.
      
                 Your Level: Not Bad.`
          );

          // Append Text To The Popup
          popup.appendChild(popupText);

          // Add Class At Popup Div
          popup.className = "popup";

 // Create The "Ok" Button
 let popupBtn = document.createElement("button")

 // Create Text Node
 let buttonText = document.createTextNode("OK")

popupBtn.append(buttonText)

popupBtn.classList.add("popupBtn")

 popup.appendChild(popupBtn)

 popupBtn.onclick = function() {
  location.reload()
 }
          // Append To The Body
          document.body.appendChild(popup);

          lettersContainer.classList.add("finished");
        }
      }
    }
  });

  function endGame() {
    // Create Popup Div
    let popup = document.createElement("div");

    // Create Text
    let popupText = document.createTextNode(
      `Game Over, The Word Is "${randomValue}".`
    );

    // Append Text To The Popup
    popup.appendChild(popupText);

    // Add Class At Popup Div
    popup.className = "popup";

 // Create The "Ok" Button
 let popupBtn = document.createElement("button")

 // Create Text Node
 let buttonText = document.createTextNode("OK")

popupBtn.append(buttonText)

popupBtn.classList.add("popupBtn")

 popup.appendChild(popupBtn)

 popupBtn.onclick = function() {
  location.reload()
 }
    // Append To The Body
    document.body.appendChild(popup);

    lettersContainer.classList.add("finished");
  }

  settings.style = "display: none";
}

function countries() {
  localStorage.setItem("category", "countries");

  // Category
  let randomPropName = allKeys[3];

  // Category Words
  let randomPropValue = words[randomPropName];

  // Random Number Depend On words
  let randomValueNumbers = Math.floor(Math.random() * randomPropValue.length);

  // The Chosen Word
  let randomValue = randomPropValue[randomValueNumbers];

  // Set Category Info
  document.querySelector(".game-info .category span").innerHTML =
    randomPropName;

  // Select Letters Guess Container
  let lettersGuessContainer = document.querySelector(".letters-guess");

  // Convert Chosen Word To Array
  let lettersAndSpace = Array.from(randomValue);

  // Create Spans Depends On Word
  lettersAndSpace.forEach((letter) => {
    // Create Empty Span
    let emptySpan = document.createElement("span");

    // If Letters Is Space
    if (letter === "") {
      // Add Class To The Span
      emptySpan.className = "with-space";
    }

    // Append Span To Letters Guess Container
    lettersGuessContainer.appendChild(emptySpan);
  });

  // Select Guess Spans
  let guessSpans = document.querySelectorAll(".letters-guess span");

  // Set Wrong Attempts
  let wrongAttempts = 0;

  // Set Success Attempts
  let successAttempts = 0;

  // Select The Draw Element
  let theDraw = document.querySelector(".hangman-draw");

  // Handle Clicking On Letters
  document.addEventListener("click", (e) => {
    // Set The Chose Status
    let theStatus = false;

    if (e.target.className === "letter-box") {
      e.target.classList.add("clicked");

      // Get Clicked Letter
      let theClickedLetter = e.target.innerHTML.toLowerCase();

      // The Chosen Word
      let theChosenWord = Array.from(randomValue.toLowerCase());

      theChosenWord.forEach((wordLetter, wordindex) => {
        // If The Clicked Letter Equal To One Of The Chosen Word Letter

        if (theClickedLetter === wordLetter) {
          // Set Status To Correct
          theStatus = true;

          // Loop On All Guess Spans
          guessSpans.forEach((span, spanIndex) => {
            if (wordindex === spanIndex) {
              span.innerHTML = theClickedLetter;
              successAttempts++;
            }
          });
        }
      });

      // Outside Loop

      // If Letter Is Wrong
      if (theStatus !== true) {
        // Increase The Wrong Attempts
        wrongAttempts++;

        // Add Class Wrong To The Draw Element
        theDraw.classList.add(`wrong-${wrongAttempts}`);

        // Play Fail Sound
        document.getElementById("fail").play();

        if (wrongAttempts === 8) {
          endGame();

          lettersContainer.classList.add("finished");
        }
      } else {
        // Play Success Sound
        document.getElementById("success").play();
        if (
          successAttempts == Array.from(randomValue).length &&
          wrongAttempts < 4
        ) {
          // Create Popup Div
          let popup = document.createElement("div");

          // Create Text
          let popupText = document.createTextNode(
            `Congtratlation, The Word Is ${randomValue}.
      
          You Have ${wrongAttempts} Mistakes.
      
          Your Level: Exellent.`
          );

          // Append Text To The Popup
          popup.appendChild(popupText);

          // Add Class At Popup Div
          popup.className = "popup";

 // Create The "Ok" Button
 let popupBtn = document.createElement("button")

 // Create Text Node
 let buttonText = document.createTextNode("OK")

popupBtn.append(buttonText)

popupBtn.classList.add("popupBtn")

 popup.appendChild(popupBtn)

 popupBtn.onclick = function() {
  location.reload()
 }
          // Append To The Body
          document.body.appendChild(popup);

          lettersContainer.classList.add("finished");
        } else if (
          successAttempts == Array.from(randomValue).length &&
          wrongAttempts >= 4 &&
          wrongAttempts <= 6
        ) {
          // Create Popup Div
          let popup = document.createElement("div");

          // Create Text
          let popupText = document.createTextNode(
            `Congtratlation, The Word Is ${randomValue}.
      
                 You Have ${wrongAttempts} Mistakes.
      
                 Your Level: Intermidiate.`
          );

          // Append Text To The Popup
          popup.appendChild(popupText);

          // Add Class At Popup Div
          popup.className = "popup";

 // Create The "Ok" Button
 let popupBtn = document.createElement("button")

 // Create Text Node
 let buttonText = document.createTextNode("OK")

popupBtn.append(buttonText)

popupBtn.classList.add("popupBtn")

 popup.appendChild(popupBtn)

 popupBtn.onclick = function() {
  location.reload()
 }
          // Append To The Body
          document.body.appendChild(popup);

          lettersContainer.classList.add("finished");

        } else if (
          successAttempts == Array.from(randomValue).length &&
          wrongAttempts > 6
        ) {
          // Create Popup Div
          let popup = document.createElement("div");

          // Create Text
          let popupText = document.createTextNode(
            `Congtratlation, The Word Is ${randomValue}.
      
                 You Have ${wrongAttempts} Mistakes.
      
                 Your Level: Not Bad.`
          );

          // Append Text To The Popup
          popup.appendChild(popupText);

          // Add Class At Popup Div
          popup.className = "popup";

 // Create The "Ok" Button
 let popupBtn = document.createElement("button")

 // Create Text Node
 let buttonText = document.createTextNode("OK")

popupBtn.append(buttonText)

popupBtn.classList.add("popupBtn")

 popup.appendChild(popupBtn)

 popupBtn.onclick = function() {
  location.reload()
 }
          // Append To The Body
          document.body.appendChild(popup);

          lettersContainer.classList.add("finished");
        }
      }
    }
  });

  function endGame() {
    // Create Popup Div
    let popup = document.createElement("div");

    // Create Text
    let popupText = document.createTextNode(
      `Game Over, The Word Is "${randomValue}".`
    );

    // Append Text To The Popup
    popup.appendChild(popupText);

    // Add Class At Popup Div
    popup.className = "popup";

     // Create The "Ok" Button
   let popupBtn = document.createElement("button")

   // Create Text Node
   let buttonText = document.createTextNode("OK")

popupBtn.append(buttonText)

popupBtn.classList.add("popupBtn")

   popup.appendChild(popupBtn)

   popupBtn.onclick = function() {
    location.reload()
   }
    // Append To The Body
    document.body.appendChild(popup);

    lettersContainer.classList.add("finished");
  }

  settings.style = "display: none";
}

function random() {
  localStorage.setItem("category", "random");

  // Random Number Depend On Keys Length
  let randomPropNumber = Math.floor(Math.random() * allKeys.length);

  // Category
  let randomPropName = allKeys[randomPropNumber];

  // Category Words
  let randomPropValue = words[randomPropName];

  // Random Number Depend On words
  let randomValueNumbers = Math.floor(Math.random() * randomPropValue.length);

  // The Chosen Word
  let randomValue = randomPropValue[randomValueNumbers];

  // Set Category Info
  document.querySelector(".game-info .category span").innerHTML =
    randomPropName;

  // Select Letters Guess Container
  let lettersGuessContainer = document.querySelector(".letters-guess");

  // Convert Chosen Word To Array
  let lettersAndSpace = Array.from(randomValue);

  // Create Spans Depends On Word
  lettersAndSpace.forEach((letter) => {
    // Create Empty Span
    let emptySpan = document.createElement("span");

    // If Letters Is Space
    if (letter === "") {
      // Add Class To The Span
      emptySpan.className = "with-space";
    }

    // Append Span To Letters Guess Container
    lettersGuessContainer.appendChild(emptySpan);
  });

  // Select Guess Spans
  let guessSpans = document.querySelectorAll(".letters-guess span");

  // Set Wrong Attempts
  let wrongAttempts = 0;

  // Set Success Attempts
  let successAttempts = 0;

  // Select The Draw Element
  let theDraw = document.querySelector(".hangman-draw");

  // Handle Clicking On Letters
  document.addEventListener("click", (e) => {
    // Set The Chose Status
    let theStatus = false;

    if (e.target.className === "letter-box") {
      e.target.classList.add("clicked");

      // Get Clicked Letter
      let theClickedLetter = e.target.innerHTML.toLowerCase();

      // The Chosen Word
      let theChosenWord = Array.from(randomValue.toLowerCase());

      theChosenWord.forEach((wordLetter, wordindex) => {
        // If The Clicked Letter Equal To One Of The Chosen Word Letter

        if (theClickedLetter === wordLetter) {
          // Set Status To Correct
          theStatus = true;

          // Loop On All Guess Spans
          guessSpans.forEach((span, spanIndex) => {
            if (wordindex === spanIndex) {
              span.innerHTML = theClickedLetter;
              successAttempts++;
            }
          });
        }
      });

      // Outside Loop

      // If Letter Is Wrong
      if (theStatus !== true) {
        // Increase The Wrong Attempts
        wrongAttempts++;

        // Add Class Wrong To The Draw Element
        theDraw.classList.add(`wrong-${wrongAttempts}`);

        // Play Fail Sound
        document.getElementById("fail").play();

        if (wrongAttempts === 8) {
          endGame();

          lettersContainer.classList.add("finished");
        }
      } else {
        // Play Success Sound
        document.getElementById("success").play();
        if (
          successAttempts == Array.from(randomValue).length &&
          wrongAttempts < 4
        ) {
          // Create Popup Div
          let popup = document.createElement("div");

          // Create Text
          let popupText = document.createTextNode(
            `Congtratlation, The Word Is ${randomValue}.

    You Have ${wrongAttempts} Mistakes.

    Your Level: Exellent.`
          );

          // Append Text To The Popup
          popup.appendChild(popupText);

          // Add Class At Popup Div
          popup.className = "popup";

 // Create The "Ok" Button
 let popupBtn = document.createElement("button")

 // Create Text Node
 let buttonText = document.createTextNode("OK")

popupBtn.append(buttonText)

popupBtn.classList.add("popupBtn")

 popup.appendChild(popupBtn)

 popupBtn.onclick = function() {
  location.reload()
 }
          // Append To The Body
          document.body.appendChild(popup);

          lettersContainer.classList.add("finished");
        } else if (
          successAttempts == Array.from(randomValue).length &&
          wrongAttempts >= 4 &&
          wrongAttempts <= 6
        ) {
          // Create Popup Div
          let popup = document.createElement("div");

          // Create Text
          let popupText = document.createTextNode(
            `Congtratlation, The Word Is ${randomValue}.

           You Have ${wrongAttempts} Mistakes.

           Your Level: Intermidiate.`
          );

          // Append Text To The Popup
          popup.appendChild(popupText);

          // Add Class At Popup Div
          popup.className = "popup";

 // Create The "Ok" Button
 let popupBtn = document.createElement("button")

 // Create Text Node
 let buttonText = document.createTextNode("OK")

popupBtn.append(buttonText)

popupBtn.classList.add("popupBtn")

 popup.appendChild(popupBtn)

 popupBtn.onclick = function() {
  location.reload()
 }
          // Append To The Body
          document.body.appendChild(popup);

          lettersContainer.classList.add("finished");
        } else if (
          successAttempts == Array.from(randomValue).length &&
          wrongAttempts > 6
        ) {
          // Create Popup Div
          let popup = document.createElement("div");

          // Create Text
          let popupText = document.createTextNode(
            `Congtratlation, The Word Is ${randomValue}.

           You Have ${wrongAttempts} Mistakes.

           Your Level: Not Bad.`
          );

          // Append Text To The Popup
          popup.appendChild(popupText);

          // Add Class At Popup Div
          popup.className = "popup";

 // Create The "Ok" Button
 let popupBtn = document.createElement("button")

 // Create Text Node
 let buttonText = document.createTextNode("OK")

popupBtn.append(buttonText)

popupBtn.classList.add("popupBtn")

 popup.appendChild(popupBtn)

 popupBtn.onclick = function() {
  location.reload()
 }
          // Append To The Body
          document.body.appendChild(popup);

          lettersContainer.classList.add("finished");
        }
      }
    }
  });

  function endGame() {
    // Create Popup Div
    let popup = document.createElement("div");

    // Create Text
    let popupText = document.createTextNode(
      `Game Over, The Word Is "${randomValue}".`
    );

    // Append Text To The Popup
    popup.appendChild(popupText);

    // Add Class At Popup Div
    popup.className = "popup";

    // Create The "Ok" Button
   let popupBtn = document.createElement("button")

   // Create Text Node
   let buttonText = document.createTextNode("OK")

popupBtn.append(buttonText)

popupBtn.classList.add("popupBtn")

   popup.appendChild(popupBtn)

   popupBtn.onclick = function() {
    location.reload()
   }

    // Append To The Body
    document.body.appendChild(popup);

    lettersContainer.classList.add("finished");
  }
}



let clicks = 0;

randomBtn.onclick = function () {
  settings.style = "display:none";
};




settings.addEventListener("click", function (e) {
  if (e.target.classList.contains("programming")) {
    location.reload();

    programming();
  } else if (e.target.classList.contains("movies")) {
    location.reload();
    movies();
  } else if (e.target.classList.contains("people")) {
    location.reload();
    people();
  } else if (e.target.classList.contains("countries")) {
    location.reload();
    countries();
  } else if(e.target.classList.contains("random")){
    location.reload();
    random();
  }
});

let settingsBtn = document.querySelector(".settings-box");

if (clicks < 1) {
  settingsBtn.onclick = function () {
    settings.style = "display:flex;";
  };
}

if (localStorage.getItem("category") === "programming") {
  programming();
} else if (localStorage.getItem("category") === "movies") {
  movies();
} else if (localStorage.getItem("category") === "people") {
  people();
} else if (localStorage.getItem("category") === "countries") {
  countries();
} else {
  random();
}

let winSound = document.getElementById("win");

winSound.play();

// The Back Function
const backBtn = document.querySelector(".settings .back")

backBtn.onclick = function() { 
  settings.style = "display: none;"
}