const colors = ["blue", "red", "green", "rgba(122, 232, 255)", "#852bd9"];
const button = document.getElementById('btn');
const color = document.querySelector(".color")

button.addEventListener("click", function(){
    //get random number between 0-4
    const randomNumber = getRandomNumber();
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})

function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}