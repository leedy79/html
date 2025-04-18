function initSlider() {
  const sliderItems = document.querySelectorAll(".slider-item");
  const totalSlides = sliderItems.length;
  let currentIndex = 0;

  const counterEl = document.getElementById("slide-counter");
  const playToggleBtn = document.getElementById("toggle-play");

  let autoSlideInterval = null;
  let isPlaying = true;

  const SLIDE_WIDTH = 760;
  const SLIDE_GAP = 20;
  const TOTAL_WIDTH = SLIDE_WIDTH + SLIDE_GAP;

  function updateSliderView() {
    sliderItems.forEach((item, index) => {
      const pos = (index - currentIndex + totalSlides) % totalSlides;

      if (pos === totalSlides - 1) {
        // 왼쪽
        item.style.transform = `translateX(-${TOTAL_WIDTH}px)`;
        item.style.opacity = "1";
        item.style.zIndex = "1";
      } else if (pos === 0) {
        // 가운데
        item.style.transform = `translateX(0px)`;
        item.style.opacity = "1";
        item.style.zIndex = "2";
      } else if (pos === 1) {
        // 오른쪽
        item.style.transform = `translateX(${TOTAL_WIDTH}px)`;
        item.style.opacity = "1";
        item.style.zIndex = "1";
      } else {
        // 나머지 숨김
        item.style.transform = `translateX(0px)`;
        item.style.opacity = "0";
        item.style.zIndex = "0";
      }
    });

    counterEl.textContent = `${currentIndex + 1} / ${totalSlides}`;
  }

  function next() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSliderView();
  }

  function prev() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSliderView();
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(next, 3000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  function togglePlay() {
    isPlaying = !isPlaying;
    if (isPlaying) {
      startAutoSlide();
      playToggleBtn.textContent = "⏸";
    } else {
      stopAutoSlide();
      playToggleBtn.textContent = "▶";
    }
  }

  //실행
  updateSliderView();
  startAutoSlide();

  playToggleBtn.addEventListener("click", togglePlay);

  // 전역으로 prev/next 연결 (버튼이 onclick으로 연결된 경우)
  window.prev = prev;
  window.next = next;
}
