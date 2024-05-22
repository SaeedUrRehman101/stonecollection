$(document).ready(function () {
    // Add active class to the sort button when sidebar is active
    $('.sort-btn').click(function () {
        $('.sort-btn').toggleClass('active');
        $('.sort-options').toggleClass('active');
    });

    $.ajax({
        url: "../Collections/assets/API/couture.json",
        type: "get",
        success: function (objectdata) {
            // Initialize the variable to store HTML content
            let x = "";

            // Loop through each object in the JSON data
            $.each(objectdata, function (index, indexObject) {
                // Append HTML for each featured product
                x += `
                <div class="featured-div" data-id="${index}" data-price="${parseFloat(indexObject.para.replace('$', '').replace(/,/g, ''))}">
                    <div class="Image">
                        <a href="../Collections/couture.html?getid=${index}"><img src="${indexObject.Image}" alt=""></a>
                    </div>
                    <a href="../Collections/couture.html?getid=${index}" class="featured-detail" href="">
                        <h1 class="featured-subheading">${indexObject.heading}</h1>
                        <p class="featured-para">${indexObject.para}</p>
                    </a>
                    <a href="javascript:void(0);" class="add-to-cart" data-id="${index}" data-name="${indexObject.heading}" data-price="${parseFloat(indexObject.para.replace('$', '').replace(/,/g, ''))}" data-img="${indexObject.Image}">
                        <ion-icon name="bag-outline" class="shopping-bag"></ion-icon>
                    </a>
                </div>`;
            });

            // Display the featured products
            $("#featured-content").html(x);

            // Filter functionality
            $('#filter-price-high-to-low').change(function () {
                if (this.checked) {
                    $('.featured-div').sort(function (a, b) {
                        return parseFloat($(b).data('price')) - parseFloat($(a).data('price'));
                    }).appendTo('#featured-content');
                }
            });

            $('#filter-price-low-to-high').change(function () {
                if (this.checked) {
                    $('.featured-div').sort(function (a, b) {
                        return parseFloat($(a).data('price')) - parseFloat($(b).data('price'));
                    }).appendTo('#featured-content');
                }
            });

            // Add to cart functionality
            $('.add-to-cart').click(function () {
                let id = $(this).data('id');
                let name = $(this).data('name');
                let price = $(this).data('price');
                let img = $(this).data('img');

                // Show alert when item is added to cart
                alert(`${name} has been added to your cart!`);

                let cartItemHtml = `
                    <div class="cart-box" data-id="${id}">
                        <img class="cart-img" src="${img}" alt="${name}">
                        <div class="detail-box">
                            <div class="cart-product-title">${name}</div>
                            <div class="cart-price">$${price.toFixed(2)}</div>
                            <input type="number" value="1" class="cart-quantity">
                        </div>
                        <i class="fa-solid fa-trash cart-remove"></i>
                    </div>`;

                $('.cart-content').append(cartItemHtml);
                updateTotal();
            });

            // Update total price
            function updateTotal() {
                let total = 0;
                $('.cart-box').each(function () {
                    let price = parseFloat($(this).find('.cart-price').text().replace('$', ''));
                    let quantity = parseInt($(this).find('.cart-quantity').val());
                    total += price * quantity;
                });
                $('.total-price').text(`$${total.toFixed(2)}`);
            }

            // Remove item from cart
            $(document).on('click', '.cart-remove', function () {
                $(this).closest('.cart-box').remove();
                updateTotal();
            });

            // Update total when quantity changes
            $(document).on('change', '.cart-quantity', function () {
                updateTotal();
            });
        }
    });
});

function handleCheckboxClick(checkbox) {
    if (checkbox.checked) {
        var checkboxes = document.getElementsByClassName("filter-checkbox");
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i] !== checkbox) {
                checkboxes[i].checked = false;
            }
        }
    }
}

let mobile_nav = document.querySelector(".mobile-nav-bttn");
let nav_header = document.querySelector(".navbar-section")
let toggleNavbar = () => {
    nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

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
