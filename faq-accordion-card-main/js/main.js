"use strict";

function showInfoBox(event) {
  switch (event.target.id) {
    case "question-1": {
      document.getElementById("question-1").classList.toggle("list-active");
      document.getElementById("question-1").classList.toggle("no-border");
      document.getElementById("hidden-1").classList.toggle("hidden-info-1");
      break;
    }
    case "question-2": {
      document.getElementById("question-2").classList.toggle("list-active");
      document.getElementById("question-2").classList.toggle("no-border");
      document.getElementById("hidden-2").classList.toggle("hidden-info-2");
      break;
    }
    case "question-3": {
      document.getElementById("question-3").classList.toggle("list-active");
      document.getElementById("question-3").classList.toggle("no-border");
      document.getElementById("hidden-3").classList.toggle("hidden-info-3");
      break;
    }
    case "question-4": {
      document.getElementById("question-4").classList.toggle("list-active");
      document.getElementById("question-4").classList.toggle("no-border");
      document.getElementById("hidden-4").classList.toggle("hidden-info-4");
      break;
    }
    case "question-5": {
      document.getElementById("question-5").classList.toggle("list-active");
      document.getElementById("hidden-5").classList.toggle("hidden-info-5");
      break;
    }
    default:
      break;
  }
}
