let screenType = "";

const tooltipContainerDesktop = document.createElement("div");
tooltipContainerDesktop.className = "tooltip-container-desktop";

const tooltipBody = document.createElement("div");
tooltipBody.className = "tooltip-body";

const tooltipText = document.createElement("p");
tooltipText.className = "tooltip-text";
tooltipText.innerText = "SHARE";

const facebookIcon = document.createElement("img");
facebookIcon.className = "social-media-icon facebook-icon";
facebookIcon.src = "./images/icon-facebook.svg";
facebookIcon.alt = "icon-facebook";

const twitterIcon = document.createElement("img");
twitterIcon.className = "social-media-icon twitter-icon";
twitterIcon.src = "./images/icon-twitter.svg";
twitterIcon.alt = "icon-twitter";

const pinterestIcon = document.createElement("img");
pinterestIcon.className = "social-media-icon pinterest-icon";
pinterestIcon.src = "./images/icon-pinterest.svg";
pinterestIcon.alt = "icon-pinterest";

const tooltipArrow = document.createElement("i");
tooltipArrow.className = "tooltip-arrow";

const textSection = document.querySelector(".text-section");
const authorSection = document.querySelector(".author-section");
const authorImg = document.querySelector(".author-img");
const authorInfo = document.querySelector(".author-info");
const iconContainer = document.querySelector(".icon-container");
const shareIconContainer = document.querySelector(".share-icon-container");
const shareIcon = document.querySelector(".share-icon");

function showShareIcons() {
  iconContainer.className = "icon-container opened-container";
  shareIconContainer.className = "share-icon-container dark-container";
  shareIcon.className = "share-icon light-icon";
  if (screenType === "desktop") {
    tooltipBody.append(tooltipText, facebookIcon, twitterIcon, pinterestIcon);
    tooltipContainerDesktop.append(tooltipBody, tooltipArrow);
    iconContainer.append(tooltipContainerDesktop);
  }
  if (screenType === "mobile") {
    authorInfo.remove();
    authorImg.remove();
    authorSection.append(tooltipText, facebookIcon, twitterIcon, pinterestIcon);
    authorSection.className = "author-section dark-background";
  }
}

function hideShareIcons() {
  iconContainer.className = "icon-container closed-container";
  shareIconContainer.className = "share-icon-container light-container";
  shareIcon.className = "share-icon dark-icon";
  if (screenType === "desktop") {
    document.querySelector(".tooltip-container-desktop") &&
      tooltipContainerDesktop.remove();
  }
  if (screenType === "mobile") {
    tooltipText.remove();
    facebookIcon.remove();
    twitterIcon.remove();
    pinterestIcon.remove();
    authorSection.append(authorImg, authorInfo);
    authorSection.className = "author-section white-background";
  }
}

shareIconContainer.addEventListener("click", () => {
  if (iconContainer.className === "icon-container closed-container") {
    showShareIcons();
  } else if (iconContainer.className === "icon-container opened-container") {
    hideShareIcons();
  }
});

function handleResize() {
  let currentType = screenType;
  if (window.innerWidth < 750) {
    if (currentType === "desktop") {
      hideShareIcons();
    }
    screenType = "mobile";
  } else {
    if (currentType === "mobile") {
      hideShareIcons();
    }
    screenType = "desktop";
  }
}

window.addEventListener("resize", handleResize);
handleResize();
