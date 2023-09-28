var currentDate = dayjs();
displayCurrentDate(currentDate);

// Function to display the current date
function displayCurrentDate(date) {
}

createTimeBlocks();

function createTimeBlocks() {
  // Loop through hours 9am to 5pm
  for (var hour = 9; hour <= 17; hour++) {
    //time block element for hour
    var timeBlock = createNewTimeBlock(hour);

    $('#calendar').append(timeBlock);
  }
}


function createNewTimeBlock(hour) {
  var timeBlock = $('<div>').addClass('time-block');
  var timeLabel = $('<div>').addClass('time').text(formatHour(hour));
  var eventInput = $('<textarea>').addClass('event');
  var saveButton = $('<button>').addClass('save-btn').text('Save');


  return timeBlock;
}


function formatHour(hour) {
  // Used Day.js to format the hour
  return dayjs().hour(hour).format('h:mm A');
}

// Functionality for the Save Button
$('.save-btn').on('click', function() {

  var userInput = $(this).siblings('.event').val();

  var hour = parseHour($(this).siblings('.time').text());
  // Store userInput in local storage with the hour as the key
  saveEventToLocalStorage(hour, userInput);
});

function parseHour(formattedHour) {

}

// Function to save an event to local storage
function saveEventToLocalStorage(hour, event) {

}


function getEventFromLocalStorage(hour) {
  
}

renderSavedEventsFromLocalStorage();

