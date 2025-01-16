document.addEventListener("DOMContentLoaded", () => {
    const companyName = document.getElementById("company-name");
    const ageVerification = document.getElementById("age-verification");
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
  
    // Show the age verification on click
    companyName.addEventListener("click", (e) => {
      e.preventDefault();
      ageVerification.classList.remove("hidden");
    });

        // Add the 'active' class to keep the company name yellow
        companyName.classList.add("active");
  
    // Handle "Yes" button click
    yesBtn.addEventListener("click", () => {
      localStorage.setItem("ageVerified", "true");
      ageVerification.innerHTML = `<p>You're granted access!</p>`;
      window.location.href = "https://squarespace.com"; // Redirect to About page
    });
  
    // Handle "No" button click
    noBtn.addEventListener("click", () => {
      ageVerification.innerHTML = `<p>This website is only available if you are over 21 years old.</p>`;
    });
  });

  