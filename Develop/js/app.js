$(document).ready(function () {
  // Create current date
  let today = dayjs().format('MMM-DD-YYYY');
  // display date
  $('#currentDay').text(today);

  //button click listener to save
  $('.saveBtn').click(function () {
    let text = $('.txt').val();
    // set text inputs into storage
    localStorage.setItem('text', JSON.stringify(text));

    // localStorage.setIem(key, value)
  });

  //COLOR CHANGE FUNCTION
  function hourVal() {
    let currentHour = dayjs().hour();

    // looping over blocks
    $('.time-block').each(function () {
      let evalHour = parseInt($(this).attr('id').split('hr')[1]);
      if (currentHour === evalHour) {
        $(this).addClass('present');
        $(this).removeClass('past');
        $(this).removeClass('future');
      } else if (currentHour > evalHour) {
        $(this).addClass('past');
        $(this).removeClass('present');
        $(this).removeClass('future');
      } else {
        $(this).addClass('future');
        $(this).removeClass('present');
        $(this).removeClass('past');
      }
    });
  }

  hourVal();
});

// Allow user to type in event in timeblocks
// 	-input fields, with text saved in local storage
// 	-attribute that indicates time-block on input fields
// 	-On SAVE: store the date/time as the key and the event as the value
// 		-create an event listener for the save button that puts this key,
// 		value pair into local storage

// On refresh, grab the data from local storage and display it in the apppropriate time block.
