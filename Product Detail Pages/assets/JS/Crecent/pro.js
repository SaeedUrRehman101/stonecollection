let purl=location.href;
// console.log(purl)
let getUrl=new URL(purl);
// console.log(getUrl)
let getId=getUrl.searchParams.get("getid");
// console.log(getId)
$.ajax({
    url: "../featured Pro/assets/API/featured.json",
    type : "get" ,
    success:function(datajson){
        $.each(datajson,function(index,indexObject){
            if (index == getId){
                // console.log(index)
                $("#content").html(`<div class="product-image">
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
      
      
                <div class="product-size w-80">
      
                  <label for="Quantity" class="pro-label">${indexObject.pro_lab}</label>
                  <input type="number" name="" id="Quantity" value="1" min="1" class="">
      
      
                </div>
      
                <div class="add-card-btn w-80">
                  <a class="bttn" href="">${indexObject.btn_1}</a>
                </div>
      
                <div class="buy-card-btn w-80">
                  <a class="" href="">${indexObject.btn_2}</a>
                </div>
      
      
      
              </div>`)
            }
        })
    }
})