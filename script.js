document.addEventListener("DOMContentLoaded", () => {

  const popup = document.getElementById("popup");

  // Hap popup
  window.showPopup = function () {
    popup.style.display = "flex";
  }

  // Mbyll popup
  window.closePopup = function () {
    popup.style.display = "none";
  }

  // Mbyll kur klikon jashtë
  popup.addEventListener("click", function(e){

    if(e.target === popup){
      closePopup();
    }

  });

  // Forma per rezervimin e tavolines
  const ticketForm = document.getElementById("ticketForm");

  if(ticketForm){

    ticketForm.addEventListener("submit", function(e){

      e.preventDefault();

      alert("Rezervimi juaj u krye me sukses 🎉");

      closePopup();

      this.reset();

    });

  }

});
