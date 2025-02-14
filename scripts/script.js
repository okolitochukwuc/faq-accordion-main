const firstDescribe = document.querySelector('.js-des-1');
const secondDescribe = document.querySelector('.js-des-2');
const thirdDescribe = document.querySelector('.js-des-3');
const fourthDescribe = document.querySelector('.js-des-4');
const firstDropBtn = document.querySelector('.js-acc-img-1');
const secondDropBtn = document.querySelector('.js-acc-img-2');
const thirdDropBtn = document.querySelector('.js-acc-img-3');
const fourthDropBtn = document.querySelector('.js-acc-img-4');

function onClickFirst() {
  firstDescribe.classList.toggle('hide');
  if (firstDescribe.classList.contains('hide')) {
    firstDropBtn.innerHTML =
      '<img src="../assets/images/icon-plus.svg" alt="" />';
  } else {
    secondDescribe.className = 'hide';
    thirdDescribe.className = 'hide';
    fourthDescribe.className = 'hide';

    firstDropBtn.innerHTML =
      '<img src="../assets/images/icon-minus.svg" alt="" />';
    secondDropBtn.innerHTML =
      '<img src="../assets/images/icon-plus.svg" alt="" />';
    thirdDropBtn.innerHTML =
      '<img src="../assets/images/icon-plus.svg" alt="" />';
    fourthDropBtn.innerHTML =
      '<img src="../assets/images/icon-plus.svg" alt="" />';
  }
}

function onClickSecond() {
  secondDescribe.classList.toggle('hide');
  if (!secondDescribe.classList.contains('hide')) {
    firstDescribe.className = 'hide';
    thirdDescribe.className = 'hide';
    fourthDescribe.className = 'hide';

    firstDropBtn.innerHTML =
      '<img src="../assets/images/icon-plus.svg" alt="" />';
    secondDropBtn.innerHTML =
      '<img src="../assets/images/icon-minus.svg" alt="" />';
    thirdDropBtn.innerHTML =
      '<img src="../assets/images/icon-plus.svg" alt="" />';
    fourthDropBtn.innerHTML =
      '<img src="../assets/images/icon-plus.svg" alt="" />';
  } else {
    secondDropBtn.innerHTML =
      '<img src="../assets/images/icon-plus.svg" alt="" />';
  }
}

function onclickthird() {
  thirdDescribe.classList.toggle('hide');
  if (thirdDescribe.classList.contains('hide')) {
    thirdDropBtn.innerHTML =
      '<img src="../assets/images/icon-plus.svg" alt="" />';
  } else {
    firstDescribe.className = 'hide';
    secondDescribe.className = 'hide';
    fourthDescribe.className = 'hide';

    firstDropBtn.innerHTML =
      '<img src="../assets/images/icon-plus.svg" alt="" />';
    secondDropBtn.innerHTML =
      '<img src="../assets/images/icon-plus.svg" alt="" />';
    thirdDropBtn.innerHTML =
      '<img src="../assets/images/icon-minus.svg" alt="" />';
    fourthDropBtn.innerHTML =
      '<img src="../assets/images/icon-plus.svg" alt="" />';
  }
}

function onClickFourth() {
  fourthDescribe.classList.toggle('hide');
  if (fourthDescribe.classList.contains('hide')) {
    fourthDropBtn.innerHTML =
      '<img src="../assets/images/icon-plus.svg" alt="" />';
  } else {
    firstDescribe.className = 'hide';
    secondDescribe.className = 'hide';
    thirdDescribe.className = 'hide';

    firstDropBtn.innerHTML =
      '<img src="../assets/images/icon-plus.svg" alt="" />';
    secondDropBtn.innerHTML =
      '<img src="../assets/images/icon-plus.svg" alt="" />';
    thirdDropBtn.innerHTML =
      '<img src="../assets/images/icon-plus.svg" alt="" />';
    fourthDropBtn.innerHTML =
      '<img src="../assets/images/icon-minus.svg" alt="" />';
  }
}

firstDropBtn.addEventListener('click', onClickFirst);
secondDropBtn.addEventListener('click', onClickSecond);
thirdDropBtn.addEventListener('click', onclickthird);
fourthDropBtn.addEventListener('click', onClickFourth);
