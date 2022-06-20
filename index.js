//Display a message in myMessage using innerText by adding the code below in index.js
const myMessage = document.querySelector('.myMessage');
console.log(myMessage);

//To show the above message after 3 seconds do this
setTimeout(function(){
    myMessage.innerText = 'This is a message in the DOM!'
}, 3000 )
//myMessage.innerText = 'This is a message in the DOM!'

//Show a message when a button is clicked
const theMessageButton = document.querySelector('.theMessageButton');
theMessageButton.addEventListener('click', function() {
    alert("button clicked!")
});

//Change the code in the button event listener to show message in the myMessage div element:
theMessageButton.addEventListener('click', function() {
    myMessage.innerText = 'Button pressed'
});

//get a DOM reference to the input element
const inputBox = document.querySelector('.theInputValue');

//Then you can use that in button press event handler to read the value entered by the user and then display that on the screen
theMessageButton.addEventListener('click', function() {
    myMessage.innerText = inputBox.value
});

//You will note that if no text is entered in the textbox and you click the button an empty message is displayed.
//You can fix that by adding an if statement to check if the user entered something:
theMessageButton.addEventListener('click', function() {
    if (inputBox.value.trim().length > 0) {
       myMessage.innerText = inputBox.value;
    }
});

//Let's add functionality that changes the background color of the myMessage div when you click on it. For that to work we need to add a click event handler to the div.
myMessage.addEventListener('click', function() {
    myMessage.classList.toggle('darkmode')
})

//creating a new DOM element
const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];
//Next we need to loop over the fruit list and then add a fruit for each item in the list
for(let i=0;i<fruits.length;i++){
    // get fruits from the list
    const fruit = fruits[i];
    
    // create a new li element
    const li = document.createElement('li');
    li.innerText = fruit;
 }