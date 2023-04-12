$(function () {

  let currentHour;


  function getCurrentTime() {
    currentHour = dayjs().hour();
    $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY h:mm:ss a"));
    setInterval(getCurrentTime, 1000);
    setBlockColor();
}
  getCurrentTime();


  $(".saveBtn").click(function () {
    let timeblockHour = $(this).parent().attr("id");

    let userInput = $(this).prev().val();

    localStorage.setItem(timeblockHour, userInput);
  });


  function setBlockColor () {
    let timeblocks = $(".time-block");
    timeblocks.each(function () {
      let timeblockHour = $(this).data("hour");

      if(timeblockHour === currentHour) {
        $(this).addClass("present");
      }else if(timeblockHour < currentHour) {
        $(this).addClass("past");
      }else {
        $(this).addClass("future");
      }
    });
  }
  setBlockColor();


  function getLocalStorage () {
    let inputs = $(".description");
    inputs.each(function (index) {
      let key = "hour-" + (index + 9);
      $(this).val(localStorage.getItem(key)); 
    });
  }
  getLocalStorage();
});
