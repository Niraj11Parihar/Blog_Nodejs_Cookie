// Data for the slider
const sliderData = [
    { img: "../assets/images/01.jpg", title: "TRAVEL", description: "THERE'S ALWAYS LIGHT AT THE END OF THE TUNNEL" },
    { img: "../assets/images/02.jpg", title: "LIFE", description: "THE LIFE OF TUFF" },
    { img: "../assets/images/03.jpg", title: "NATURE", description: "CUCKOO EVENTS" },
    { img: "../assets/images/04.jpg", title: "LIFE", description: "STAY CALM AND SURF" },
    { img: "../assets/images/05.jpg", title: "FASHION", description: "BECOMING A DRAGONFLY" },
  ];
  
  // Create slider dynamically
  const swiperContainer = document.querySelector(".swiper");
  const swiperWrapper = document.createElement("div");
  swiperWrapper.className = "swiper-wrapper";
  
  sliderData.forEach(({ img, title, description }) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.innerHTML = `
      <div class="slider-content">
        <img src="${img}" alt="${title}" />
        <div class="img-content">
          <div class="img-title">${title}</div>
          <div class="img-description">${description}</div>
        </div>
      </div>
    `;
    swiperWrapper.appendChild(slide);
  });
  
  swiperContainer.appendChild(swiperWrapper);
  
  // Initialize Swiper
  new Swiper(".mySwiper", {
    slidesPerView: 3,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    freeMode: true,
    loop: true,
  });
  