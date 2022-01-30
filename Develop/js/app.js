// Create current date
let today = dayjs().format('MMM-DD-YYYY');
// display date
$('#currentDay').text(today);

// Color-code time blocks for past, present and future
// 	if time is equal to current hour, color red
// else if time is more than current hour, color gray
//else color green
//COLOR CHANGE FUNCTION
function hourVal() {
  let currentHour = dayjs().hour();
  //need variable to represent time listed on block - PLACEHOLDER will represent this for now
  $('.time-block').each(function (index) {
    console.log(index + ': ' + $(this).text());
  });

  if (currentHour === PLACEHOLDER) {
    $(this).addClass('present');
    $(this).removeClass('past');
    $(this).removeClass('future');
  } else if (currentHour > PLACEHOLDER) {
    $(this).addClass('past');
    $(this).removeClass('present');
    $(this).removeClass('future');
  } else {
    $(this).addClass('future');
    $(this).removeClass('present');
    $(this).removeClass('past');
  }
}

// Allow user to type in event in timeblocks
// 	-input fields, with text saved in local storage
// 	-attribute that indicates time-block on input fields
// 	-On SAVE: store the date/time as the key and the event as the value
// 		-create an event listener for the save button that puts this key,
// 		value pair into local storage

// On refresh, grab the data from local storage and display it in the apppropriate time block.
