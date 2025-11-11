// JavaScript for Image Gallery
function changeImage(src) {
  document.getElementById("mainImage").src = src;
  document.querySelectorAll(".thumbnail").forEach((thumb) => {
    thumb.classList.remove("active");
  });
  // Use event.currentTarget if changeImage is called from an inline onclick
  if (event && event.currentTarget) {
    event.currentTarget.classList.add("active");
  }
}

// JavaScript for Tabs
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }
  tablinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

// JavaScript for Microcopy Messages
function showMessage(id) {
  // Logic to check size
  const sizeSelect = document.getElementById("size-select");
  if (sizeSelect && sizeSelect.value === "") {
    document.getElementById("select-size-msg").classList.add("show");
    setTimeout(() => {
      document.getElementById("select-size-msg").classList.remove("show");
    }, 3000);
    return; // Stop if size not selected
  }

  // Show success message
  const msg = document.getElementById(id);
  if (msg) {
    msg.classList.add("show");
    setTimeout(() => {
      msg.classList.remove("show");
    }, 3000);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // --- QUANTITY STEPPER ---
  document.querySelectorAll(".quantity-stepper").forEach((stepper) => {
    const input = stepper.querySelector("input");
    const plus = stepper.querySelector(".plus");
    const minus = stepper.querySelector(".minus");

    plus.addEventListener("click", () => {
      input.value = parseInt(input.value) + 1;
    });
    minus.addEventListener("click", () => {
      if (input.value > 1) {
        input.value = parseInt(input.value) - 1;
      }
    });
  });

  // --- COLOR SWATCHES ---
  document.querySelectorAll(".color-swatch").forEach((swatch) => {
    swatch.addEventListener("click", (e) => {
      document
        .querySelectorAll(".color-swatch")
        .forEach((s) => s.classList.remove("active"));
      e.currentTarget.classList.add("active");
    });
  });

  // --- VIRTUAL TRY-ON (AR) MODAL LOGIC ---
  const arModal = document.getElementById("arTryOnModal");
  const openArBtn = document.getElementById("arButton");
  const openArThumbnail = document.getElementById("arThumbnailBtn");
  const closeArBtn1 = document.getElementById("arModalCloseBtn");
  const closeArBtn2 = document.getElementById("arModalCloseBtn-2");

  const openArModal = () => {
    if (arModal) arModal.style.display = "flex";
  };
  const closeArModal = () => {
    if (arModal) arModal.style.display = "none";
  };

  if (openArBtn) openArBtn.addEventListener("click", openArModal);
  if (openArThumbnail) openArThumbnail.addEventListener("click", openArModal);
  if (closeArBtn1) closeArBtn1.addEventListener("click", closeArModal);
  if (closeArBtn2) closeArBtn2.addEventListener("click", closeArModal);

  // --- ADD REVIEW MODAL LOGIC (NEW) ---
  const reviewModal = document.getElementById("addReviewModal");
  const openReviewBtn = document.getElementById("openReviewModalBtn");
  const closeReviewBtn = document.getElementById("reviewModalCloseBtn");
  const cancelReviewBtn = document.getElementById("reviewModalCancelBtn");
  const starRatingInput = document.querySelector(".star-rating-input");
  const hiddenRatingInput = document.getElementById("review-rating");
  const reviewForm = document.getElementById("reviewForm");

  const openReviewModal = () => {
    if (reviewModal) reviewModal.style.display = "flex";
  };
  const closeReviewModal = () => {
    if (reviewModal) reviewModal.style.display = "none";
  };

  if (openReviewBtn) openReviewBtn.addEventListener("click", openReviewModal);
  if (closeReviewBtn)
    closeReviewBtn.addEventListener("click", closeReviewModal);
  if (cancelReviewBtn)
    cancelReviewBtn.addEventListener("click", closeReviewModal);

  // Star rating
  if (starRatingInput) {
    const stars = starRatingInput.querySelectorAll(".fa-star");

    const setRating = (value) => {
      hiddenRatingInput.value = value;
      stars.forEach((star) => {
        if (star.getAttribute("data-value") <= value) {
          star.classList.add("active");
        } else {
          star.classList.remove("active");
        }
      });
    };

    stars.forEach((star) => {
      star.addEventListener("click", () => {
        setRating(star.getAttribute("data-value"));
      });
      star.addEventListener("mouseover", () => {
        const hoverValue = star.getAttribute("data-value");
        stars.forEach((s) => {
          s.classList.toggle(
            "hover",
            s.getAttribute("data-value") <= hoverValue
          );
        });
      });
    });

    starRatingInput.addEventListener("mouseleave", () => {
      // Reset to the selected rating
      setRating(hiddenRatingInput.value);
      stars.forEach((s) => s.classList.remove("hover"));
    });
  }

  // Review form submission (demo)
  if (reviewForm) {
    reviewForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Review submitted successfully! (Demo)");
      closeReviewModal();
      reviewForm.reset();
      // Reset stars
      hiddenRatingInput.value = 0;
      if (starRatingInput) {
        starRatingInput
          .querySelectorAll(".fa-star")
          .forEach((s) => s.classList.remove("active"));
      }
    });
  }

  // --- MOBILE NAV TOGGLE (from original file) ---
  const mobileToggle = document.querySelector(".mobile-nav-toggle");
  const mainNav = document.querySelector(".main-nav");
  const headerSearch = document.querySelector(".header-search");

  if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
      mainNav.classList.toggle("active");
      headerSearch.classList.toggle("active");
    });
  }
});
