//hello, world

function getNumberFromInput() {
  let numArray = '';
  numArray=Number(document.getElementById("input").value);
  console.log(typeof(numArray))
  console.log(typeof(numArray)==='number') 
  if (isNaN(numArray)) {
    return false;
  } else {
    return numArray;
  }
}

function displayOutput(numArray) {
  let outputHtml = "";
  console.log(numArray)
  if (numArray === false) {
    outputHtml = `<span>Wrong Input! Please enter a number.</span>`;
  } else {
    for (i = 1; i <= numArray; i++) {
      let fizzOrBuzz;
      if (i % 3 == 0 && i % 5 == 0) {
        fizzOrBuzz = "Fizz Buzz";
        outputHtml += `<span>${fizzOrBuzz},&nbsp;</span>`;
      } else if (i % 5 == 0) {
        fizzOrBuzz = "Buzz";
        outputHtml += `<span>${fizzOrBuzz},&nbsp;</span>`;
      } else if (i % 3 == 0) {
        fizzOrBuzz = "Fizz";
        outputHtml += `<span>${fizzOrBuzz},&nbsp;</span>`;
      } else {
        fizzOrBuzz = i;
        outputHtml += `<span>${fizzOrBuzz},&nbsp;</span>`;
      }
    }
  }

  document.getElementById("output-container").innerHTML = outputHtml;
  console.log(outputHtml);
}

const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", () => {
  displayOutput(getNumberFromInput());
  console.log(getNumberFromInput());
});

document.documentElement.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    displayOutput(getNumberFromInput());
    console.log(getNumberFromInput());
  }
});
