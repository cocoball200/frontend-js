const navElem = document.querySelector("#nav");
const navItems = Array.from(navElem.children);
const contentsElem = document.querySelector("#contents");
const contentItems = Array.from(contentsElem.children);

const scrollSpyObserver = new IntersectionObserver(
  (entries) => {
    console.log(entries.find((entry) => entry.isIntersecting));
    const { target } = entries.find((entry) => entry.isIntersecting) || {};
    //비구조 할당을 이런식으로도 할 수 있음 ,
    //IntersectionObserverEntry에는 isIntersecting, target등 여러가지의 속성이 있는데, isIntersection이 true인 entry을 찾고, 여기서 target값을 가져오는 것!
    // false이면 {}반환 target은 해당 div를 가지고 있음. 그래서 target의 index를 가져오는 것
    const targetIndex = contentItems.indexOf(target);
    Array.from(navElem.children).forEach((c, i) => {
      c.classList[i === targetIndex ? "add" : "remove"]("on");
      // c.classList.add || c.classList.remove("on") 이걸 한줄로~!
    });
  },
  {
    root: null,
    rootMargin: "0px",
    threshold: 0.8,
  }
);

contentItems.forEach((item) => scrollSpyObserver.observe(item));

navElem.addEventListener("click", (e) => {
  const targetElem = e.target;
  if (targetElem.tagName === "BUTTON") {
    const targetIndex = navItems.indexOf(targetElem.parentElement);
    contentItems[targetIndex].scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }
});
