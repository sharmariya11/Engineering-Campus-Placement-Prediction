// ===============================
// Student Placement Prediction
// JavaScript File
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Student Placement Prediction System Loaded!");

    // Get the form
    const form = document.querySelector("form");

    // Get submit button
    const submitBtn = document.querySelector("button[type='submit']");

    if (form) {

        form.addEventListener("submit", function (event) {

            // Get all required fields
            const requiredFields = form.querySelectorAll("[required]");

            let valid = true;

            // Check empty fields
            requiredFields.forEach(field => {

                if (field.value.trim() === "") {

                    valid = false;

                    field.style.border = "2px solid red";

                } else {

                    field.style.border = "1px solid #ccc";

                }

            });

            // Validate Marks
            const tenth = parseFloat(document.getElementsByName("10th_marks")[0].value);

            const twelfth = parseFloat(document.getElementsByName("12th_marks")[0].value);

            if (tenth < 0 || tenth > 100) {

                alert("10th Marks must be between 0 and 100.");

                event.preventDefault();

                return;

            }

            if (twelfth < 0 || twelfth > 100) {

                alert("12th Marks must be between 0 and 100.");

                event.preventDefault();

                return;

            }

            // Validate CGPA
            const cgpa = parseFloat(document.getElementsByName("Cgpa")[0].value);

            if (cgpa < 0 || cgpa > 10) {

                alert("CGPA must be between 0 and 10.");

                event.preventDefault();

                return;

            }

            // If any required field is empty
            if (!valid) {

                alert("Please fill in all required fields.");

                event.preventDefault();

                return;

            }

            // Loading effect
            submitBtn.innerHTML = "Predicting...";

            submitBtn.disabled = true;

        });

    }

});