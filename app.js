
document.getElementById("currentDay").innerText = moment().format('MMMM Do YYYY, h:mm:ss a');

var currentTime = moment().hours()


document.getElementById("btn").addEventListener("click", function (event) {

  var inputValue = document.getElementById(event.target.classList[0]).value

  console.log(inputValue)

  var divKey = localStorage.setItem(divKey, inputValue)
})





