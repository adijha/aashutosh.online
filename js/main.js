// Initialize and add the map
function initMap() {
  // Your location
  const loc = { lat: 26.821553, lng: 75.858193};
  // Centered map on location26.821553, 75.858193
  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 19,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}

// Sticky menu background
// window.addEventListener("scroll", function() {
//   if (window.scrollY > 150) {
//     document.querySelector("#navbar").style.opacity = 0.9;
//   } else {
//     document.querySelector("#navbar").style.opacity = 1;
//   }
// });

// Smooth Scrolling
$("#navbar a , #header a ,#what a,#team a,#projects a").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      800
    );
  }
});




