$(document).ready(function(){
    let  purl= location.href;
// console.log(purl)
let getUrl=new URL(purl);
// console.log(getUrl);
let getId=getUrl.searchParams.get("getid")
// console.log(getId)

$.ajax({
    url: "../Product Detail Pages/assets/API/pro.json",
    type: "get",
    success: function (objectdata) {
        let x= "";
        $.each(objectdata, function (index, indexobject){

                $.each(indexobject, function (arrayIndex, arrayitems){
                  // console.log(arrayIndex)
                  if (index == getId) {
                  
                    // console.log(obj)
                    
                    x +=`<div class="product-image">
                    <img src="${arrayitems.image}" alt="">
                  </div>
          
                  <div class="product-content container">
          
                    <div class="product-heading">
                      <h1>${arrayitems.heading}</h1>
                      <p>${arrayitems.para}</p>
                    </div>
          
                    <div class="product-discription">
                      <ul>
                        <li>${arrayitems.li_f}</li>
                        <li>${arrayitems.li_s}</li>
                        <li>${arrayitems.li_t}</li>
                        <li>${arrayitems.li_fr}</li>
                      </ul>
                      <p>${arrayitems.para_s}</p>
                      <ul>
                        <li>${arrayitems.li_fif}</li>
                        <li>${arrayitems.li_six}</li>
                        <li>${arrayitems.li_sev}</li>
                      </ul>
                    </div>
          
                    <div class="product-choices w-80">
          
                      <label for="option-selector-1" class="pro-label">${arrayitems.lab}</label>
                      <div class="select-options">
                        <select name="" id="option-selector-1">
                          <option value="Yellow Gold" selected>${arrayitems.opt_f}</option>
                          <option value="Rose Gold">${arrayitems.opt_s}</option>
                          <option value="White Gold">${arrayitems.opt_t}</option>
                        </select>
          
                      </div>
          
                    </div>
          
          
                    <div class="product-size w-80">
          
                      <label for="Quantity" class="pro-label">${arrayitems.pro_lab}</label>
                      <input type="number" name="" id="Quantity" value="1" min="1" class="">
          
          
                    </div>
          
                    <div class="add-card-btn w-80">
                      <a class="bttn" href="">${arrayitems.btn_1}</a>
                    </div>
          
                    <div class="buy-card-btn w-80">
                      <a class="" href="">${arrayitems.btn_2}</a>
                    </div>
          
          
          
                  </div>
                    `
                  }

                })
         
        })
        $("#content").html(x);
    }
})
})