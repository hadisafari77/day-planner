
$("#currentDay").text(moment().format("dddd, MMMM, Do"))
var currentTime = moment().hours()


$(".saveBtn").on("click", function () {
  var textValue = $(this).siblings(".inputValue").val()

  var divKey = $(this).parent().attr("id")

  localStorage.setItem(divKey, textValue)
})

$("#9 .inputValue").val(localStorage.getItem("9"))
$("#10 .textValue").val(localStorage.getItem("10"))
$("#11 .textValue").val(localStorage.getItem("11"))
$("#11 .textValue").val(localStorage.getItem("11"))


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