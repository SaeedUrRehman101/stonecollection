function storeInLocalStorage(){
let uName=document.querySelector("#username").value;
let uemail=document.querySelector("#email").value;
let subject=document.querySelector("#subject").value;
let message=document.querySelector("#message").value;
let error1=document.querySelector("#error1");
let error2=document.querySelector("#error2");
let error3=document.querySelector("#error3");
let error4=document.querySelector("#error4");


let pattern1 = /^[A-Za-z\s]{3,}$/;
let pattern2 = /^[a-zA-Z\s]{4,}$/;



if (!uName){
    // document.querySelector("#error1").style.visibility="visible";
    error1.textContent ="";
} else if(!pattern1.test(uName)){

    document.querySelector("#error1").style.visibility="visible";


    error1.textContent= "Enter at least 3 characters!";
} else{
    error1.style.display="none" ;
}

if (!uemail){
    // document.querySelector("#error1").style.visibility="visible";
    error2.textContent ="";
} else if(!uemail.includes("@")){
    document.querySelector("#error2").style.visibility="visible";

    error2.textContent= "Email is not According to the pattern!";
} else{
    error2.style.display="none" ;
}

if (!subject){
    // document.querySelector("#error1").style.visibility="visible";
    error3.textContent ="";
} else if(!pattern2.test(subject)){
    document.querySelector("#error3").style.visibility="visible";

    error3.textContent= "Please enter the subject as a Titel!";
} else{
    error3.style.display="none" ;
}


//  Save user information to local storage

if(uName && uemail && subject && message){

    localStorage.setItem('username', uName);
     localStorage.setItem('email', uemail);
     localStorage.setItem('subject', subject);
     localStorage.setItem('message', message);
    
     alert('User information saved successfully!');
}
     else{
        document.querySelector("#error").style.visibility="visible";
     }

};

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

