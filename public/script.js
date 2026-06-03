document.addEventListener("DOMContentLoaded", () => {
  // Page sections
  const cookingAssistant = document.getElementById("cooking-assistant");

  // Buttons
  const navBtn = document.getElementById("nav-btn");
  const prevBtn = document.getElementById("prev-btn");

  // Recipe step containers
  const steps = document.querySelectorAll(".step-container");
  const totalSteps = steps.length; // Dynamically count steps
  let currentStep = 1;

  const updateView = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    steps.forEach((step, index) => {
      if (index + 1 === currentStep) {
        step.classList.remove("hidden");
      } else {
        step.classList.add("hidden");
      }
    });

    // Always show the previous button when the assistant is active
    prevBtn.style.display = currentStep > 1 ? "inline-block" : "none";

    if (currentStep === totalSteps) {
      navBtn.textContent = "Finish Cooking 🍳";
    } else {
      navBtn.textContent = "Next Step ->";
    }
  };

  const handleFinish = () => {
    // Run the confetti
    if (typeof confetti === "function") {
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 },
      });
    }

    // --- Start of Simple JS Alert ---

    // 1. Create the gray background
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = "1000";

    // 2. Create the pop-up box
    const alertBox = document.createElement("div");
    alertBox.style.background = "white";
    alertBox.style.padding = "20px 40px";
    alertBox.style.borderRadius = "8px";
    alertBox.style.textAlign = "center";
    alertBox.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";

    // 3. Create the message (This text is now translatable!)
    const message = document.createElement("p");
    message.innerText = "You Completed Cooking! 🎉";
    message.style.fontSize = "1.2rem";
    message.style.margin = "0 0 20px 0";

    // 4. Create the close button
    const closeBtn = document.createElement("button");
    closeBtn.innerText = "OK";
    closeBtn.className = "btn"; // Uses your existing button style

    // 5. Put it all together and add to the page
    alertBox.appendChild(message);
    alertBox.appendChild(closeBtn);
    overlay.appendChild(alertBox);
    document.body.appendChild(overlay);

    // 6. Make the button close the pop-up
    closeBtn.addEventListener("click", () => {
      document.body.removeChild(overlay);
    });

    // --- End of Simple JS Alert ---
  };

  navBtn.addEventListener("click", () => {
    if (currentStep < totalSteps) {
      currentStep++;
      updateView();
    } else {
      handleFinish();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentStep > 1) {
      // If on any step after the first, just go back one step
      currentStep--;
      updateView();
    }
  });
  updateView();
});

auth.onAuthStateChanged((user) => {
  if (user) {
    // This line looks for an element with the id "user-name"
    document.getElementById("user-name").textContent =
      localStorage.getItem("username") || user.email;
  } else {
    // ...
  }
});
