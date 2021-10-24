







/* Name Animation function */
var textOverImages = document.getElementsByClassName('onClickTextOverImage');
var previousTextOverImage;
for (var i = 0; i < textOverImages.length; i++) {
  textOverImages[i].onclick = function () {
    var classes = this.classList;
    if (classes.contains('show')) {
      classes.remove('show');
    } else {
      if (previousTextOverImage != null)
        previousTextOverImage.classList.remove('show');
      previousTextOverImage = this;
      classes.add('show');
    }
  };
}
/* Name Animation function End */

/* Animation for mushrooms and bean */

function stopPropagation(event) {
  event.stopPropagation();
}

var textOverImages = document.getElementsByClassName('onClickTextOverImage1');
var previousTextOverImage;
for (var i = 0; i < textOverImages.length; i++) {
  textOverImages[i].onclick = function () {
    var classes = this.classList;
    if (classes.contains('show')) {
      classes.remove('show');
    } else {
      if (previousTextOverImage != null)
        previousTextOverImage.classList.remove('show');
      previousTextOverImage = this;
      classes.add('show');
    }
  };
}

function stopPropagation(event) {
  event.stopPropagation();
}
var textOverImages = document.getElementsByClassName('onClickTextOverImage2');
var previousTextOverImage;
for (var i = 0; i < textOverImages.length; i++) {
  textOverImages[i].onclick = function () {
    var classes = this.classList;
    if (classes.contains('show')) {
      classes.remove('show');
    } else {
      if (previousTextOverImage != null)
        previousTextOverImage.classList.remove('show');
      previousTextOverImage = this;
      classes.add('show');
    }
  };
}

function stopPropagation(event) {
  event.stopPropagation();
}
var textOverImages = document.getElementsByClassName('onClickTextOverImage3');
var previousTextOverImage;
for (var i = 0; i < textOverImages.length; i++) {
  textOverImages[i].onclick = function () {
    var classes = this.classList;
    if (classes.contains('show')) {
      classes.remove('show');
    } else {
      if (previousTextOverImage != null)
        previousTextOverImage.classList.remove('show');
      previousTextOverImage = this;
      classes.add('show');
    }
  };
}

function stopPropagation(event) {
  event.stopPropagation();
}
/* Coffee & Mushroom Animation function End */

/* Result Animation function from enter first page*/

var i = 0;
text = document.getElementById('result').innerHTML =
  localStorage.getItem('textvalue');
function typing() {
  if (i < text.length) {
    document.getElementById('result').innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 400);
  }
}
typing();

document.getElementById('demo').innerHTML = hello;

/* Result Animation function from enter first page end*/


/* Total value to checkout page */

/* Increment & decrement */

var incrementButton = document.getElementsByClassName('inc');
var decrementButton = document.getElementsByClassName('dec');

for(var i = 0; i < incrementButton.length; i++){
var button = incrementButton[i];
button.addEventListener('click',function(event){
  var buttonClicked = event.target;
  var input = buttonClicked.parentElement.children[2];
  var inputValue = input.value;
  var newValue = parseInt(inputValue) + 5;
   if (newValue <= 100) {
      input.value = newValue;
    }
   else {
     alert('Qty cannot be more than 100%');
   } 
  
  getTotal();
})
}

for(var i = 0; i < decrementButton.length; i++){
var button = decrementButton[i];
  button.addEventListener('click',function(event){
  var buttonClicked = event.target;
  var input = buttonClicked.parentElement.children[2];
  var inputValue = input.value;
  var newValue = parseInt(inputValue) - 5;
    if (newValue >= 70) {
      input.value = newValue;
    }
   else {
     alert('Qty cannot be less than 70%');
   } 
     getTotal();
})
}

function getTotal() {
var arr = document.querySelectorAll('.input-filed');
var total = 0;
for(var i = 0; i < arr.length; i++ ) {
  if (parseInt(arr[i].value)) {
    total += parseInt(arr[i].value);
  }
}
document.getElementById('total').value = total;
}

/* function 2 */

var incrementButton = document.getElementsByClassName('inc1');
var decrementButton = document.getElementsByClassName('dec1');

for(var i = 0; i < incrementButton.length; i++){
var button = incrementButton[i];
button.addEventListener('click',function(event){
  var buttonClicked = event.target;
  var input = buttonClicked.parentElement.children[2];
  var inputValue = input.value;
  var newValue = parseInt(inputValue) + 5;
   if (newValue <= 40) {
      input.value = newValue;
    }
   else {
     alert('Qty cannot be more than 40%');
   } 
  
  getTotal();
})
}

for(var i = 0; i < decrementButton.length; i++){
var button = decrementButton[i];
  button.addEventListener('click',function(event){
  var buttonClicked = event.target;
  var input = buttonClicked.parentElement.children[2];
  var inputValue = input.value;
  var newValue = parseInt(inputValue) - 5;
    if (newValue >= 5) {
      input.value = newValue;
    }
   else {
     alert('Qty cannot be less than 0%');
   } 
     getTotal();
})
}

function getTotal() {
var arr = document.querySelectorAll('.input-filed');
var total = 0;
for(var i = 0; i < arr.length; i++ ) {
  if (parseInt(arr[i].value)) {
    total += parseInt(arr[i].value);
  }
}
document.getElementById('total').value = total;
}
/* function 2 ends*/

/* Increment & decrement end */











/* Total value to checkout page end */
