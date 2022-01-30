// Create current date
let today = moment().format('MMM Do YYYY');
// display date
$('#currentDay').html(today);

// Color-code time blocks for past, present and future
// 	if time is equal to current hour, color red
// else if time is more than current hour, color gray
//else color green
function hourVal() {
  let currentHour = moment().hour();
  console.log(currentHour);
  // determination of color
  // if () {
  //   // need to add classes for red, gray, green
  // }
}
hourVal();

// Allow user to type in event in timeblocks
// 	-input fields, with text saved in local storage
// 	-attribute that indicates time-block on input fields
// 	-On SAVE: store the date/time as the key and the event as the value
// 		-create an event listener for the save button that puts this key,
// 		value pair into local storage

// On refresh, grab the data from local storage and display it in the apppropriate time block.
