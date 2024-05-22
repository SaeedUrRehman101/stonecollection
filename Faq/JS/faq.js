// Function to update ticker content
function updateTicker() {
    var tickerElement = document.getElementById('ticker');
    var now = new Date();
    var dateStr = now.toDateString();
    var timeStr = now.toLocaleTimeString();
    
    // Get current location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var locationStr = "Latitude: " + latitude + ", Longitude: " + longitude;
            
            // Update ticker content
            tickerElement.textContent = dateStr + " | " + timeStr + " | " + locationStr;
        });
    } else {
        tickerElement.textContent = dateStr + " | " + timeStr + " | Location not available";
    }
  }
  
  // Function to update visitor count
  function updateVisitorCount() {
    var countElement = document.getElementById('count');
    var count = localStorage.getItem('visitorCount');
    if (count === null) {
        count = 1;
    } else {
        count = parseInt(count) + 1;
    }
    localStorage.setItem('visitorCount', count);
    countElement.textContent = count;
  }
  
  // Update ticker and visitor count initially and every 30 seconds
  updateTicker();
  updateVisitorCount();
  setInterval(updateTicker, 90000);