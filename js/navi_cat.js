$(function () {
  $.ajax({
    // url: "http://kkms4001.iptime.org/~ysb/304/04/html/json/navi_cat.json",
    url: "./json/delivery.json",
    dataType: "json",
    success: function (data) {
      if (data.length > 0) {
        for (var i in data) {
          if (!data[i].class) {
            $(".navi_cat").append(
              `<li>
                <a href="${data[i].href}">${data[i].content}</a>
              </li>`
            );
          } else {
            $(".navi_cat").append(
              `<a href="${data[i].href}">
                <div class="${data[i].class}">
                <p>${data[i].content}</p>
                <img src="${data[i].src}" alt="${data[i].alt}">
                </div>
                </a>`
            );
          }
        }
      }
    },
  });
});
