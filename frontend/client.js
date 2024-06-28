document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("demoForm");

  // Show the modal (for demonstration, you might want to trigger this with a button click)

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      babyStage: form.babyStage.value,
    };

    try {
      const response = await fetch("http://localhost:5000/api/book-demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Demo session booked successfully!");
        form.reset();
        window.location.href = 'index.html'
        overlay.style.display = "none";
        modal.style.display = "none";
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  });
});
