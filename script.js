let design = document.getElementById('design');
let submit = document.getElementById('submit');
let thank_you = document.getElementById('thank_you');
let selectedNumber = document.getElementById('selectedNumber');
let numbers = document.querySelectorAll('.number');
numbers.forEach(number => {
    number.addEventListener('click', function () {
        selectedNumber.innerHTML = number.innerHTML;
    });
});
submit.addEventListener('click', function () {
    design.style.display = 'none';
    thank_you.style.display = 'flex';

});