const currentDay = document.getElementById('currentDay');

// Create current date
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

// insert date to top of calendar
currentDay.textContent += today;

// Render time blocks
// 	-hard code in html using rows and cols
// 	-loop over and render the table rows and cols in javascript

// Color-code time blocks for past, present and future
// 	-javascript, css
// 	-if then statements that relate to the date and apply certain css properties
// 	(select html elements in javascript - and add css to it)

// Allow user to type in event in timeblocks
// 	-input fields, with text saved in local storage
// 	-attribute that indicates time-block on input fields
// 	-On SAVE: store the date/time as the key and the event as the value
// 		-create an event listener for the save button that puts this key,
// 		value pair into local storage

// On refresh, grab the data from local storage and display it in the apppropriate time block.
