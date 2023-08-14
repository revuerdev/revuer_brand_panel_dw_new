module.exports = {
  switchMainTabs: () => {
    let tabsContainer = document.querySelector("#tabs");
    let tabTogglers = tabsContainer.querySelectorAll("#tabs a");
    tabTogglers.forEach(function (toggler) {
      toggler.addEventListener("click", function (e) {
        e.preventDefault();
        let tabName = this.getAttribute("href");
        let tabContents = document.querySelector("#tab-contents");
        for (let i = 0; i < tabContents.children.length; i++) {
          tabTogglers[i].parentElement.classList.remove(
            "-mb-px",
            "border-b-2",
            "bg-white",
            "text-[#001540]",
            "font-semibold"
            
          );
          tabContents.children[i].classList.remove("hidden");
          if ("#" + tabContents.children[i].id === tabName) {
            continue;
          }
          tabContents.children[i].classList.add("hidden");
        }
        e.target.parentElement.classList.add(
          "-mb-px",
          "border-b-[#FCB43C]",
          "border-b-2",
          "bg-white",
          "text-[#001540]",
          "font-semibold"

          
        );
      });
    });
  },

  

 toggleSubnav() {
  const btns = document.getElementsByClassName('menu__btn')
  Array.from(btns).forEach((btn) => {console.log(btn)
    btn.addEventListener('click', () => {
      document.getElementById(btn.dataset.collapseToggle).classList.toggle('hidden')
    })
  })
},
 rotateMenuBtnIcon() {
  const btns = document.getElementsByClassName('menu__btn')
  Array.from(btns).forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.getElementsByClassName('btn__icon')[0]
      const seed = Number(target.dataset.deg)
      target.style = `transform: rotate(${seed * 180}deg); transition-duration: 250ms`
      target.dataset.deg = Number(!seed)
    })
  })
}

};
