//  Javascript for video Slider Navigations

const videos = document.querySelectorAll('.video');
const contents = document.querySelectorAll('.add-section-content');
const navCircles = document.querySelectorAll('.slider-bttn');

navCircles.forEach((circle, index) => {
  circle.addEventListener('click', () => {
    setActive(index);
  });
});

function setActive(index) {
  videos.forEach((video, i) => {
    if (i === index) {
      video.classList.add('active');
      contents[i].classList.add('active');
      navCircles[i].classList.add('active');
    } else {
      video.classList.remove('active');
      contents[i].classList.remove('active');
      navCircles[i].classList.remove('active');
    }
  });
}


$(document).ready(function(){
  $.ajax({
    url: "./assets/API/index.json",
    type: "get" ,
    success: function (objectdata) {
      let x = "";
      $.each(objectdata, function(index,indexObject){
        x+=`
        <div class="collection_div">
          <a href="../featured Pro/featured.html"><img src="${indexObject.image}" alt=""></a>
          <div class="collection-title">
          <a href="../featured Pro/featured.html"><p>${indexObject.heading}</p></a>
          </div>
        </div>
         `
      })
      $("#content").html(x);
    }
  })
})


$(document).ready(function(){
  $.ajax({
    url: "../featured Pro/assets/API/featured.json",
    type: "get" ,
    success: function (objectdata) {
      let x = "";
      $.each(objectdata, function(index,indexObject){
        x+=`
        <div class="swiper-slide">
          <div class="featured-div">
            <div class="Image">
              <a href=""><img src="${indexObject.Image}" alt=""></a>
            </div>
            <a class="featured-detail" href="">
              <h1 class="featured-subheading">${indexObject.heading}</h1>
              <p class="featured-para">${indexObject.para}</p>
            </a>
          </div>
        </div>
         `
      })
      $("#featured-content").html(x);
    }
  })
});


let mobile_nav=document.querySelector(".mobile-nav-bttn");
let nav_header=document.querySelector(".navbar-section")
let toggleNavbar= () => {
    // alert("Hi Saeed")
    nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click" , () => toggleNavbar());


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