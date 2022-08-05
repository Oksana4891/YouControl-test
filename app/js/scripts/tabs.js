

export function switchTabs (tabBlock, tab, tabContent) {



const tabsBlok =document.querySelector(tabBlock);
const tabList = document.querySelectorAll(tab);
const tabContentList = document.querySelectorAll(tabContent);

// Functions that hides and show tabs

function hiddenTabContent(el) {
  for (let i = el; i < tabContentList.length; i++) {
    tabContentList[i].classList.add("hide");
    tabContentList[i].classList.remove("fade");
    tabList[i].classList.remove("is-active");
  }
}

function showTabContent(i) {
    tabContentList[i].classList.remove("hide");
    tabContentList[i].classList.add("fade");
    tabList[i].classList.add("is-active");
}

hiddenTabContent(1);

tabsBlok.addEventListener("click", handelChangeTab);

function handelChangeTab(event) {
  event.preventDefault();
  if (event.currentTarget === event.target) {
    return;
  } else {
    tabList.forEach((elem, i) => {
      if (elem === event.target) {
        hiddenTabContent(0);
        showTabContent(i);
      }
    });
  }
}
}