const palindrome = () => {
    const inputText = document.getElementById('text-input').value.trim();
    const resultDiv = document.getElementById('result');
    if (inputText === '') {
        alert('Please input a value');
        return;
    }

    const cleanedInput = inputText.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedInput = cleanedInput.split('').reverse().join('');

    if (cleanedInput === reversedInput) {
        resultDiv.textContent = `${inputText} is a palindrome!`;
    } else {
        resultDiv.textContent = `${inputText} is not a palindrome.`;
    }
};

document.getElementById('check-btn').addEventListener('click', palindrome);
document.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        palindrome();
    }
});

