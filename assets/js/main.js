let no = document.querySelector('.button-no'),
    yes = document.querySelector('.button-yes'),
    wrapper = document.querySelector('.valentine__buttons'),
    mainImage = document.querySelector('.valentine__image'),
    okImage = document.querySelector('.agree-image'),
    text = document.querySelector('.valentine__text');

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

no.addEventListener("click", function () {
    this.style.position = "absolute";
    this.style.top = getRandomArbitrary(10,90) + "%";
    this.style.left = getRandomArbitrary(10,90) + "%";
    this.style.transition = "all .4s";
    wrapper.style.position = "unset";
});

no.addEventListener("mouseover", function () {
    this.style.position = "absolute";
    this.style.top = getRandomArbitrary(10,90) + "%";
    this.style.left = getRandomArbitrary(10,90) + "%";
    this.style.transition = "all .4s";
    wrapper.style.position = "unset";
});

yes.addEventListener("click", function () {
    document.querySelector('.valentine__buttons').style.display = "none";
    mainImage.style.display = 'none';
    okImage.style.display = 'block';
    text.innerHTML = "Люблю тебя <span style='color: red'>❤</span>";
});