module.exports = {
  changePaymentMethod: (event) => {
    const target1 = event.target.parentNode.nextElementSibling.getElementsByClassName("creditCard");
    const target2 = event.target.parentNode.nextElementSibling.getElementsByClassName("netBanking");
    if (event.target.value === "net-banking") {
      target1[0].style.display = "none";
      target2[0].style.display = "block";
      return
    } else {
      target1[0].style.display = "block";
      target2[0].style.display = "none";
    }
  },

  toggleModal2: () => {
    document.getElementById("modal-2").classList.toggle("hidden");
  },
  toggleModal: () => {
    document.getElementById("modal").classList.toggle("hidden");
  },

  toggleModal4: () => {
    document.getElementById("modal-4").classList.toggle("hidden");
  },

  toggleModal5: () => {
    document.getElementById("modal-5").classList.toggle("hidden");
  },
  toggleModal6: () => {
    document.getElementById("insta-modal").classList.toggle("hidden");
  },
  toggleModal7: (videoURL) => {
    var source = document.createElement('source');
    const element = document.querySelector(".instareals-video video")
    if (document.getElementById("insta-modal-1").classList.contains("hidden")) {
      source.src = videoURL;
      source.type = "video/mp4";
      element.play()
      element.appendChild(source);
    } else {
      element.pause()
    }
    document.getElementById("insta-modal-1").classList.toggle("hidden");
  },
  toggleModal8: () => {
    document.getElementById("insta-modal-2").classList.toggle("hidden");
  },
  toggleModal9: () => {
    document.getElementById("face-modal-2").classList.toggle("hidden");
  },
  toggleModal10: () => {
    document.getElementById("modal").classList.toggle("hidden");
  },
  toggleModal11: () => {
    document.getElementById("modal").classList.toggle("hidden");
  },
  toggleModalLogout: () => {
    document.getElementById("modal-logout").classList.toggle("hidden");
  },
  toggleModalLogoutMobile: () => {
    document.getElementById("mobile-modal-logout").classList.toggle("hidden");
  },
  toggleModal12: () => {
    document.getElementById("modal").classList.toggle("hidden");
  },
  toggleModal13: () => {
    document.getElementById("modal1").classList.toggle("hidden");
  },
  changeDateFormate: (today) => {
    if (typeof today == "string") {
      today = today.split("/")
      today = today[1] + "-" + today[0] + "-" + today[2]
      today = new Date(today)
    }
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    return dd + '/' + mm + '/' + yyyy;
  }
}
