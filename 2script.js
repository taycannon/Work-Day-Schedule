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

  // Function to load events from localStorage
  function loadEvents() {
    for (let hour = 9; hour <= 17; hour++) {
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
  
  // Initial rendering of time and loading of events
  renderTime();
  loadEvents();
  
  // Update time every second
  setInterval(renderTime, 1000);
