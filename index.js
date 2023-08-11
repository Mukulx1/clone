
      const form = document.getElementById("form");
      form.addEventListener("onclick", logSubmit);
      function logSubmit(event) {
        alert("hahaha")
      event.preventDefault();
      }
