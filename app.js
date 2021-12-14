
document.getElementById("currentDay").innerText = moment().format('MMMM Do YYYY, h:mm:ss a');

document.getElementById("btn").addEventListener("click", function (event) {
  console.log(event.target.classList[0])
  console.log(document.getElementById(event.target.classList[0]).value)
  console.log(document.getElementById(event.target.classList[1]).innerText)

})

