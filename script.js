const submit = document.querySelector('#submitButton');
const ratingContainer = document.querySelector('.container-rating');
const containerRated = document.querySelector('.container-rated');
// const rated = document.querySelector('.rated')

submit.addEventListener('click', function(e) {
    e.preventDefault();
    if(containerRated.style.display !== 'none') {
        containerRated.style.display = 'none';
    } else {
        containerRated.style.display = 'flex';
        ratingContainer.style.display = 'none';
        rated.textContent = displayRadioValue();
    }
});

function displayRadioValue() {
    const ele = document.getElementsByName('rating');
      
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        return document.querySelector("#rated").textContent = " "+ele[i].value;
    }
}