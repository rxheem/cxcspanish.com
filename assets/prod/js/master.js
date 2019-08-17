"use strict";

if (!Cookies.get("index")) {
  Cookies.set("index", "true", { expires: 7 });
  let timerInterval;
  Swal.fire({
    title: "Thanks for visiting!",
    html:
      "We're still working on uploading all our content. Please bear with us while we do some fine tuning.",
    timer: 4000,
    onBeforeOpen: () => {
      Swal.showLoading();
      timerInterval = setInterval(() => {
        Swal.getContent().querySelector(
          "strong"
        ).textContent = Swal.getTimerLeft();
      }, 100);
    },
    onClose: () => {
      clearInterval(timerInterval);
      console.clear();
    }
  }).then(result => {
    if (
      // Read more about handling dismissals
      result.dismiss === Swal.DismissReason.timer
    ) {
      return;
    }
  });
}
