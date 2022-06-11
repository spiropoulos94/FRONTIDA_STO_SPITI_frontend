export default function directive(app) {
  // you can name the directive whatever you want. -> click-outside
  app.directive("click-outside", {
    beforeMount(el, binding) {
      el.clickOutsideEvent = (evt) => {
        evt.stopPropagation();
        if (!(el === evt.target || el.contains(evt.target))) {
          binding.value(evt, el);
        }
      };
      window.requestAnimationFrame(() => {
        document.addEventListener("click", el.clickOutsideEvent);
      });
    },
    unmounted(el) {
      document.removeEventListener("click", el.clickOutsideEvent);
    },
  });
}

// Panta otan xrisimopoieis to click outside, frontise na vazeis event stop propagation sta elements ta opoia DEN theleis na trexei. Px otan kaneis klik na anoiksei i sidebar, DEN thes na to ws clickOutside, giati tha thn kleisei
