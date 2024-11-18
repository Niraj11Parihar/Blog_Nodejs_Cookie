
// home read more functionality 
function toggleDescription(index) {
    const shortDesc = document.getElementById(`short-desc-${index}`);
    const fullDesc = document.getElementById(`full-desc-${index}`);
    const toggleBtn = document.querySelector(`#short-desc-${index} + .read-more-btn`);

    if (shortDesc.style.display === "none") {
      shortDesc.style.display = "block";
      fullDesc.style.display = "none";
      toggleBtn.innerText = "Read More";
    } else {
      shortDesc.style.display = "none";
      fullDesc.style.display = "block";
      toggleBtn.innerText = "Read Less";
    }
  }