// Function to render the current time
function renderTime() {
    $("#current-time").text(dayjs().format("MMM DD, YYYY [at] hh:mm A"));
    console.log("current-time");
  }
  
  // Function to save events to localStorage
  function saveEvent(hour) {
    const eventInput = $(`#event-${hour}`);
    const eventText = eventInput.val();
    localStorage.setItem(`event-${hour}`, eventText);
    console.log("saveEvent");
  }
  
// Function to clear events for a specific hour
function clearEvent(hour) {
    $(`#event-${hour}`).val(""); // Clear the input field
    localStorage.removeItem(`event-${hour}`); // Remove the event from local storage
  }

  $(".form-control").on("input", function () {
    const hour = $(this).attr("id").split("-")[1];
    saveEvent(hour);
  });

  // Function to load events from localStorage
  function loadEvents() {
    for (let hour = 1; hour <= 17; hour++) {
      const eventText = localStorage.getItem(`event-${hour}`);
      if (eventText) {
        $(`#event-${hour}`).val(eventText);
      }
    }
  }
  
  // Function to save button
  $(".save-button").on("click", function () {
    const hour = $(this).data("hour");
    saveEvent(hour);
  });

  // Function to clear button 
$(".clear-button").on("click", function () {
     const hour = $(this).data("hour");
    clearEvent(hour);
 });

// Function to update the row classes based on the current time
function updateRowClasses() {
    const currentTime = dayjs();
    $(".time-block").each(function () {
      const hour = parseInt($(this).data("hour"));
      if (hour < currentTime.hour()) {
        $(this).removeClass("present", "future").addClass("past");
      } else if (hour === currentTime.hour()) {
        $(this).removeClass("past", "future").addClass("present");
      } else {
        $(this).removeClass("past", "present").addClass("future");
      }
    });
  }
  
  // Call the function to update row classes on page load
  updateRowClasses();
  
  // Update row classes every minute (adjust the interval as needed)
  setInterval(updateRowClasses); // Every minute
  

  // Initial rendering of time and loading of events
  renderTime();
  loadEvents();
  
  // Update time every second
  setInterval(renderTime, 1000);
