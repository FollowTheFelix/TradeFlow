import React from "react";

function ItemFilter() {
  // function onClick(){}
  return (
  <>
  <div class="item-filter">
    {/* <form onClick={}> */}
    <form>
      <div class="delivery-filter">
      <label htmlFor="">Delivery</label>
      <input type="radio" name="delivery" />One Day <br />
      <input type="radio" name="delivery" />3 Days <br />
      <input type="radio" name="delivery" />7 Days <br />
      <input type="radio" name="delivery" />Over 7 Days <br />
      </div>
       <br />
      <div class="price-filter">
      <label htmlFor="">Price</label>
      <input type="radio" name="wholesalePrice" />Under $25 <br />
      <input type="radio" name="wholesalePrice" />$25 - $50 <br />
      <input type="radio" name="wholesalePrice" />$25 - $50 <br />
      <input type="radio" name="wholesalePrice" />$25 - $50 <br />
      <input type="radio" name="wholesalePrice" />$200 & Above  <br />
      </div>
      <br />
      <div class="min-max-price">
        <input type="text" placeholder="min" />
        <input type="text" placeholder="max" />
        <button>Filter</button>
      </div>
      <br />
      <div class="rating-filter">
      <label htmlFor="">Rating</label>
      <input type="radio" name="wholesalePrice" />⭐⭐⭐⭐☆ & Up<br />
      <input type="radio" name="wholesalePrice" />⭐⭐⭐☆☆ & Up<br />
      <input type="radio" name="wholesalePrice" />⭐⭐☆☆☆ & Up <br />
      <input type="radio" name="wholesalePrice" />⭐☆☆☆☆ & Up <br />
      <button>Go</button> 
      <br />
      <button>Clear Filters</button>
      </div>
    </form>
  </div>
  </>
  )
}

export default ItemFilter;
