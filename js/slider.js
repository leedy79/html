$(function () {
  $.ajax({
    url: "./json/delivery.json",
    dataType: "json",
    success: function (data) {
      if (data.length > 0) {
        for (var i in data) {
          $(".slider-list").append(
            `<li class="${data[i].class}" data-index="${i}">
              <a href="${data[i].href}">
              <img src="${data[i].src}" alt="${data[i].alt}">
              </a>
            </li>`
          );
        }
        initSlider();
      }
    },
  });
});
