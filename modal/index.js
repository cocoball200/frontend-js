const wrapper = document.querySelector(".wrapper");
const items = document.querySelectorAll(".item");

// 1
// wrapper.addEventListener("click", function (e) {
//   const targetElement = e.target;
//   e.stopPropagation();
//   if (!targetElement.classList.contains("item")) return;
//   targetElement.classList.toggle("open");
//   items.forEach(function (item) {
//     if (item !== targetElement) item.classList.remove("open");
//   });
// });
// document.body.addEventListener("click", function (e) {
//   if (e.target.classList.contains("context")) return;
//   items.forEach(function (element) {
//     element.classList.remove("open");
//   });
// });

//2

document.body.addEventListener("click", function (e) {
  const targetClassList = e.target.classList;
  console.log(targetClassList);
  if (targetClassList.contains("context")) return;
  //display: block일때 return
  if (targetClassList.contains("items")) {
    targetClassList.toggle("open");
    items.forEach(function (item) {
      if (item !== e.target) item.classList.remove("open");
      //클릭된 것만 놔두고 나머지는 remove!
    });
    return;
  }
});
