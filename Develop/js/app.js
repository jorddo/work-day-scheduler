$(document).ready(function () {
  // setting up empty value so I can manipulate it and add descriptions in
  function storeDescriptions() {
    const textAreas = $('.description');
    const arr = [];

    for (let i = 0; i < textAreas.length; i++) {
      arr.push($(textAreas[i]).val());
    }

    localStorage.setItem('key', JSON.stringify(arr));
  }

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

    if (schedule) {
      for (let i = 0; i < textAreas.length; i++) {
        $(textAreas[i]).val(schedule[i]);
      }
    }
  }

  //button click listener to save
  $('.saveBtn').click(function () {
    // set text inputs into storage
    storeDescriptions();
  });

  // Create current date
  const today = dayjs().format('MMM-DD-YYYY');
  // display date
  $('#currentDay').text(today);

  writeSchedule();
  hourVal();
});
