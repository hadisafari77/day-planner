
$("#currentDay").text(moment().format("dddd, MMMM, Do"))
var currentTime = moment().hours()


$(".saveBtn").on("click", function () {
  var textValue = $(this).siblings(".inputValue").val()

  var divKey = $(this).parent().attr("id")

  localStorage.setItem(divKey, textValue)
})

$("#9 .inputValue").val(localStorage.getItem("9"))
$("#10 .inputValue").val(localStorage.getItem("10"))
$("#11 .inputValue").val(localStorage.getItem("11"))
$("#12 .inputValue").val(localStorage.getItem("12"))
$("#13 .inputValue").val(localStorage.getItem("13"))
$("#14 .inputValue").val(localStorage.getItem("14"))
$("#15 .inputValue").val(localStorage.getItem("15"))
$("#16 .inputValue").val(localStorage.getItem("16"))
$("#17 .inputValue").val(localStorage.getItem("17"))


const cssUpdate = () => {
  currentTime = moment().hours()
  $(".timeBlock").each(function () {
    var divId = $(this).attr("id")

    if (currentTime == divId) {
      $(this).addClass("present")
    } else if (currentTime < divId) {
      $(this).addClass("future")
    } else {
      $(this).addClass("past")
    }

  })
}

cssUpdate()