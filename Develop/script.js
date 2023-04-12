$(function () {

  let currentHour; //declaring currentHour

  // This grabs your current local time and displays it in the desired format to the second.
  function getCurrentTime() {
    currentHour = dayjs().hour();
    $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY h:mm:ss a"));
    setInterval(getCurrentTime, 1000);
    setBlockColor();
}
  getCurrentTime();


  // This saves the user input to local storage when the saveBtn is clicked.
  $(".saveBtn").click(function () {
    let timeblockHour = $(this).parent().attr("id");

    let userInput = $(this).prev().val();

    localStorage.setItem(timeblockHour, userInput);
  });


  // This saves the time blocks to display as desired, differentiating from past, present, and future time slots.
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


  // This grabs the user input saved from local storage upon refreshing page to display.
  function getLocalStorage () {
    let inputs = $(".description");
    inputs.each(function (index) {
      let key = "hour-" + (index + 9);
      $(this).val(localStorage.getItem(key)); 
    });
  }
  getLocalStorage();
});
