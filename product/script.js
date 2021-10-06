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
$("#minus").click(function(event) {
  zoom("out");
});

$("#plus").click(function(event) {
  zoom("in");
});

$("#range").on('input change', function(event) {
  $('#output').text($(event.currentTarget).val());
});

function zoom(direction) {
  var slider = $("#range");
  var step = parseInt(slider.attr('step'), 10);
  var currentSliderValue = parseInt(slider.val(), 10);
  var newStepValue = currentSliderValue + step;

  if (direction === "out") {
    newStepValue = currentSliderValue - step;
  } else {
    newStepValue = currentSliderValue + step;
  }

  slider.val(newStepValue).change();
};

/* Add & subtract function end */
