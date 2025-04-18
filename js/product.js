$(function () {
  $.ajax({
    url: "http://kkms4001.iptime.org/~ysb/304/04/html/json/product.json",
    dataType: "json",
    success: function (data) {
      if (data.length > 0) {
        const productKeys = Object.keys(data[0]);
        for (let product of productKeys) {
          data[0][product].forEach((p) => {
            $(`.${product}`).append(
              `<div class="${p.class}">
                <a href="#">
                  <img src="${p.src}" alt="${p.alt}">
                </a>
                <span class="desc">
                  <a href="#">${p.desc}</a>
                </span>
                <span class="price">
                  <a href="#">${p.price}</a>
                </span>
                <span class="rating">
                  <a href="#">${p.rating}</a>
                </span>
              </div>`
            );
          });
        }
      }
    },
  });
});
