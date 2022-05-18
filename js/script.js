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

tooltipBody.append(tooltipText, facebookIcon, twitterIcon, pinterestIcon);
tooltipContainerDesktop.append(tooltipBody, tooltipArrow);

const iconContainer = document.querySelector(".icon-container");
const shareIconContainer = document.querySelector(".share-icon-container");
const shareIcon = document.querySelector(".share-icon");

function showShareIcons() {
  iconContainer && iconContainer.append(tooltipContainerDesktop);
}

function hideShareIcons() {
  tooltipContainerDesktop && tooltipContainerDesktop.remove();
}

shareIconContainer.addEventListener("click", () => {
  if (iconContainer.className === "icon-container closed-container") {
    showShareIcons();
    iconContainer.className = "icon-container opened-container";
    shareIconContainer.className = "share-icon-container dark-container";
    shareIcon.className = "share-icon light-icon";
  } else if (iconContainer.className === "icon-container opened-container") {
    hideShareIcons();
    iconContainer.className = "icon-container closed-container";
    shareIconContainer.className = "share-icon-container light-container";
    shareIcon.className = "share-icon dark-icon";
  }
});
