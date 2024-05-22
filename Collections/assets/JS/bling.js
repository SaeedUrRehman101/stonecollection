let purl = location.href;
let getUrl = new URL(purl);
let getId = getUrl.searchParams.get("getid");

$.ajax({
    url: "../Collections/assets/API/bling.json",
    type: "get",
    success: function (datajson) {
        $.each(datajson, function (index, indexObject) {
            if (index == getId) {
                $("#content").html(`
                    <div class="product-image">
                        <img src="${indexObject.image}" alt="">
                    </div>
                    <div class="product-content container">
                        <div class="product-heading">
                            <h1>${indexObject.heading}</h1>
                            <p>${indexObject.para}</p>
                        </div>
                        <div class="product-discription">
                            <ul>
                                <li>${indexObject.li_f}</li>
                                <li>${indexObject.li_s}</li>
                                <li>${indexObject.li_t}</li>
                                <li>${indexObject.li_fr}</li>
                            </ul>
                            <p>${indexObject.para_s}</p>
                            <ul>
                                <li>${indexObject.li_fif}</li>
                                <li>${indexObject.li_six}</li>
                                <li>${indexObject.li_sev}</li>
                            </ul>
                        </div>
                        <div class="product-choices w-80">
                            <label for="option-selector-1" class="pro-label">${indexObject.lab}</label>
                            <div class="select-options">
                                <select name="" id="option-selector-1">
                                    <option value="Yellow Gold" selected>${indexObject.opt_f}</option>
                                    <option value="Rose Gold">${indexObject.opt_s}</option>
                                    <option value="White Gold">${indexObject.opt_t}</option>
                                </select>
                            </div>
                        </div>
                        <div class="product-choices w-80">
                            <label for="option-selector-1" class="pro-label">${indexObject.pro_size}</label>
                            <div class="select-options">
                                <select name="" id="option-selector-1">
                                    <option value="${indexObject.opt_fr}" selected>${indexObject.opt_fr}</option>
                                    <option value="${indexObject.opt_fif}">${indexObject.opt_fif}</option>
                                    <option value="${indexObject.opt_six}">${indexObject.opt_six}</option>
                                    <option value="${indexObject.opt_sev}">${indexObject.opt_sev}</option>
                                </select>
                            </div>
                        </div>
                        <div class="product-size w-80">
                            <label for="Quantity" class="pro-label">${indexObject.pro_lab}</label>
                            <input type="number" name="" id="Quantity" value="1" min="1" class="">
                        </div>
                        <div class="add-card-btn w-80">
                            <a class="bttn add-to-cart" data-product="${indexObject.heading}" data-image="${indexObject.image}" data-price="${indexObject.price}">${indexObject.btn_1}</a>
                        </div>
                        <div class="buy-card-btn w-80">
                            <a class="bttn buy-now">${indexObject.btn_2}</a>
                        </div>
                    </div>`)
            }
        });

        $(document).ready(function () {
            $('.add-to-cart').click(function () {
                // Corrected selector to target the correct image element
                let productImage = $(this).closest('.product-content').find('.product-image img').attr('src');
                let productName = $(this).closest('.product-content').find('.product-heading h1').text();
                let productPrice = $(this).closest('.product-content').find('.product-heading p').text();
                let productQuantity = $(this).closest('.product-content').find('.product-size input').val();
                // Show alert when item is added to cart
                alert(`${productName} has been added to your cart!`);
            
                let cartItemHtml = `
                    <div class="cart-box">
                        <img src="${productImage}" alt="${productName}">
                        <div class="detail-box">
                            <div class="cart-product-title">${productName}</div>
                            <div class="cart-price">${productPrice}</div>
                            <input type="number" value="${productQuantity}" class="cart-quantity">
                        </div>
                        <i class="fa-solid fa-trash cart-remove"></i>
                    </div>`;
            
                $('.cart-content').append(cartItemHtml);
                updateTotal();
            });

            // Buy Now Button
                $(document).ready(function(){
                    $(".buy-now").click(function(){
                        alert("Your purchase is complete! Thank you for shopping with us.")
                    })
                })
            

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
        });
    }
});
