// Get the elements
const inputText = document.getElementById('inputText');
const addButton = document.getElementById('addButton');
const greetingElement = document.getElementById('Greeting');

// Function to update the greeting
function updateGreeting() {
    const userName = inputText.value.trim();
    
    if (userName === '') {
        greetingElement.textContent = 'Hello';
    } else {
        greetingElement.textContent = `Hello,  ${userName}!`;
    }
    
    // Clear the input field after greeting
    inputText.value = '';
}

// Add event listener to the button
addButton.addEventListener('click', updateGreeting);

// Allow pressing Enter key to trigger greeting
inputText.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        updateGreeting();
    }
});

function changeColor(color, boxId) {
    let box = document.getElementById(boxId);
    let currentColor = box.style.backgroundColor;

    // Toggle between the color and default lightgray
    if (currentColor === color) {
        box.style.backgroundColor = "white";
        box.style.color = "black"; // Text visible on gray
    } else {
        box.style.backgroundColor = color;
        box.style.color = "white"; // Text visible on dark colors
        if (color === "yellow") box.style.color = "black"; // Yellow needs black text
    }
}
