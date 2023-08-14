module.exports = {
  changePaymentMethod: (event) => {
    console.log("event",event.target.parentNode);
    const target1 = event.target.parentNode.nextElementSibling.getElementsByClassName("creditCard");
    const target2 = event.target.parentNode.nextElementSibling.getElementsByClassName("netBanking");
    console.log("target1[0]",target1,target2);
    if (event.target.value === "net-banking") {
      target1[0].style.display = "none";
      target2[0].style.display = "block";
      return
    } else {
      target1[0].style.display = "block";
      target2[0].style.display = "none";
    }
  },
  toggleModal: () => {
    console.log("fun call ho gya")
    console.log(document.getElementById("modal"));
    document.getElementById("modal").classList.toggle("hidden");
  },
  tog1: () => {
    var element = document.getElementById("mynavbar-152");
    element.classList.toggle("navbar-close-1");
    element.classList.toggle("navbar-open-1");
  },

 
 togglePassword : () => {
  (".toggle-password").click(function() {

    (this).toggleClass("fa-eye fa-eye-slash");
    var input = ((this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  })
  }



  

};
