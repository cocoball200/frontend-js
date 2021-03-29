const navElem = document.querySelector("#nav");
const navItems = Array.from(navElem.children);
const contentsElem = document.querySelector("#contents");
const contentItems = Array.from(contentsElem.children);

const offsetTops = contentItems.map((elem) => {
  const [ofs, clh] = [elem.offsetTop, elem.clientHeight];
  return [ofs - clh / 2, ofs + clh / 2];
});

window.addEventListener("scroll", (e) => {
  const { scrollTop } = e.target.scrollingElement; // 현재 내가 스크롤이 된 위치값
  console.log(scrollTop);
  const targetIndex = Math.max(
    offsetTops.findIndex(([from, to]) => scrollTop >= from && scrollTop < to),
    //[]배열이 들어간 이유는 ofsetTops가 배열 타입
    0
  );
  Array.from(navElem.children).forEach((c, i) => {
    c.classList[i === targetIndex ? "add" : "remove"]("on");
  });
});

navElem.addEventListener("click", (e) => {
  //nav바 1~8눌렀을때 그 엘레멘트로 들어가도록.
  const targetElem = e.target;
  if (targetElem.tagName === "BUTTON") {
    const targetIndex = navItems.indexOf(targetElem.parentElement);
    contentItems[targetIndex].scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }
});
