const resultsDiv = document.getElementById("results-div");
const inputText = document.getElementById("user-input");



const checkNumber = (input) => {
  if (input === "") {
    alert('Please provide a phone number');
    return
  }
  const phoneRegex = /^1?\s?(?:\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;

  const pText = document.createElement('p');
  pText.className = 'results-text';
  phoneRegex.test(input) ? (pText.style.color = 'green') : (pText.style.color = 'red');
  pText.appendChild(
    document.createTextNode(
      `${phoneRegex.test(input) ? 'Valid' : 'Invalid'} US number: ${input}`
    )
  );
  resultsDiv.appendChild(pText);
};

const clear = () => {
  resultsDiv.textContent ='';
  inputText.value ='';
};

document.getElementById('check-btn').addEventListener("click", () => {
  checkNumber(inputText.value);
  inputText.value ='';
  }
  );
document.getElementById('clear-btn').addEventListener('click', clear);
document.addEventListener('keydown', (e) => {
  if (e.key === "Enter") {
    checkNumber(inputText.value);
    inputText.value ='';
  }
})