const navElem = document.querySelector("#nav");
const navItems = Array.from(navElem.children);
const contentsElem = document.querySelector("#contents");
const contentItems = Array.from(contentsElem.children);

let offsetTops = [];
const getOffsetTops = () => {
  offsetTops = contentItems.map((elem) => {
    //각각의 요소의 [top의 위치, 유저의 height 값]
    const [ofs, clh] = [elem.offsetTop, elem.clientHeight];
    return [ofs - clh / 2, ofs + clh / 2];
  });
};

getOffsetTops();

window.addEventListener("scroll", (e) => {
  const { scrollTop } = e.target.scrollingElement;
  const targetIndex = Math.max(
    // [from, to] 에 안에 있는 범위에 맞는 결과의 인덱스를 찾는 것.
    offsetTops.findIndex(([from, to]) => scrollTop >= from && scrollTop < to),
    0
  );
  navItems.forEach((c, i) => {
    //className 추가와 삭제를 하기 위한.
    i === targetIndex ? c.classList.add("on") : c.classList.remove("on");
  });
});

window.addEventListener("reszie", getOffsetTops);

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
