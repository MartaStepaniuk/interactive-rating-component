const design = document.getElementById('design');
const submit = document.getElementById('submit');
const thank_you = document.getElementById('thank_you');
const selectedNumber = document.getElementById('selectedNumber');
const numbers = document.querySelectorAll('.number');
let selectedElement;
numbers.forEach(number => {
    number.addEventListener('click', function () {
        if (selectedElement) {
            selectedElement.classList.remove('active-state');
        }
        selectedElement = number;
        selectedNumber.innerHTML = number.innerHTML;
        number.classList.add("active-state");
    });
});
submit.addEventListener('click', function () {
    design.style.display = 'none';
    thank_you.style.display = 'flex';
});