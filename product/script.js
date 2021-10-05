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

/* Add & subtract function */
var incrementPlus;
var incrementMinus;

var buttonPlus = $('.cart-qty-plus');
var buttonMinus = $('.cart-qty-minus');

var incrementPlus = buttonPlus.click(function () {
  var $n = $(this)
    .parent('.button-container')
    .parent('.container')
    .find('.qty');
  var amount = Number($n.val());
  if (amount < 100) {
    $n.val(amount + 5);
  }
});

var incrementMinus = buttonMinus.click(function () {
  var $n = $(this)
    .parent('.button-container')
    .parent('.container')
    .find('.qty');
  var amount = Number($n.val());
  if (amount > 0) {
    $n.val(amount - 5);
  }
});

/* Add & subtract function end */
