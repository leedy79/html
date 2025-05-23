$(function () {
  $.ajax({
    url: "./json/delivery.json",
    dataType: "json",
    success: function (data) {
      if (data.length > 0) {
        for (var i in data) {
          $(".delivery_group").append(
            `<div class="${data[i].class}">
                <a href="${data[i].href}">
                <img src="${data[i].src}" alt="${data[i].alt}">
                <p>${data[i].content}</p>
                </a>
              </div>`
          );
        }
      }
    },
  });
});
