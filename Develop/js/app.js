$(document).ready(function () {
  // Create current date
  const today = dayjs().format('MMM-DD-YYYY');
  // display date
  $('#currentDay').text(today);

  // function to loop through time blocks and create objects with them????
  // setting up empty value so I can manipulate it and add descriptions in
  function storeDescriptions() {
    const textAreas = $('.description');
    const arr = [];

    for (let i = 0; i < textAreas.length; i++) {
      arr.push($(textAreas[i]).val());
    }

    localStorage.setItem('key', JSON.stringify(arr));
  }

  //button click listener to save
  $('.saveBtn').click(function () {
    // const text = $('.description').val();
    const text = $(this).siblings('textarea').val();
    // set text inputs into storage
    // localStorage.setItem('text', JSON.stringify(text));
    storeDescriptions();

    // localStorage.setIem(key, value)
  });

  //COLOR CHANGE FUNCTION
  function hourVal() {
    const currentHour = dayjs().hour();

    // looping over blocks
    $('.time-block').each(function () {
      const evalHour = parseInt($(this).attr('id').split('hr')[1]);
      if (currentHour === evalHour) {
        $(this).addClass('present');
      } else if (currentHour > evalHour) {
        $(this).addClass('past');
      } else {
        $(this).addClass('future');
      }
    });
  }

  function writeSchedule() {
    const schedule = JSON.parse(localStorage.getItem('key'));
    const textAreas = $('.description');

    for (let i = 0; i < textAreas.length; i++) {
      schedule.text($(textAreas[i]).val());
    }
  }
  writeSchedule();
  hourVal();
});

// Allow user to type in event in timeblocks
// 	-input fields, with text saved in local storage
// 	-attribute that indicates time-block on input fields
// 	-On SAVE: store the date/time as the key and the event as the value
// 		-create an event listener for the save button that puts this key,
// 		value pair into local storage

// On refresh, grab the data from local storage and display it in the apppropriate time block.
