const toastTriggers = document.querySelectorAll("#liveToastBtn");
const toastLiveExamples = document.querySelectorAll("#liveToast");

toastTriggers.forEach((toastTrigger, index) => {
  const toastBootstrap = new bootstrap.Toast(toastLiveExamples[index]);

  toastTrigger.addEventListener("click", () => {
    toastBootstrap.show();
  });
});