document.addEventListener("DOMContentLoaded", function() {
    // console.log("The DOM has loaded");
    // let text = document.querySelector('p#text')
    // return text.innerText = 'This is really cool!'
    updateDOM();
  }); 

function updateDOM(){
    document.getElementById('text')
    .innerHTML = "This is really cool!"
}
// console.log(
//     "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
// ); 