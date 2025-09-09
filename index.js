// const ctaInput = document.querySelector(".cta-input");
// const errorMessage = document.querySelector(".email-error");
// const btnSecondary = document.querySelector(".btn-secondary");
// const emailApproved = document.querySelector(".email-approved");

// btnSecondary.onclick = function () {
//   const inputValue = ctaInput.value.trim();
//   if (inputValue.includes("@") && inputValue.includes(".")) {
//     errorMessage.textContent = "";
//     emailApproved.textContent = `Email address is valid`;
//     // console.log(`Email address is valid`);
//   } else {
//     emailApproved.textContent = "";
//     errorMessage.textContent = `Please enter a valid email address`;
//     // console.log(`Please enter a valid email address`);
//   }
// };

const ctaInput = document.querySelector(".cta-input");
const errorMessage = document.querySelector(".email-error");
const btnSecondary = document.querySelector(".btn-secondary");
const emailApproved = document.querySelector(".email-approved");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

btnSecondary.onclick = function () {
  const inputValue = ctaInput.value.trim();
  if (emailPattern.test(inputValue)) {
    errorMessage.textContent = "";
    emailApproved.textContent = `Email address is valid`;
    // console.log(`Email address is valid`);
  } else {
    emailApproved.textContent = "";
    errorMessage.textContent = `Please enter a valid email address`;
    // console.log(`Please enter a valid email address`);
  }
};
