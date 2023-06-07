const btnUp = {
  el: document.querySelector(".btn__up"),
  show() {
    this.el.classList.remove("btn__up_hide");
  },
  hide() {
    this.el.classList.add("btn__up_hide");
  },
  addEventListener() {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 80 ? this.show() : this.hide();
    });
    document.querySelector(".btn__up").onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
  },
};

btnUp.addEventListener();
