const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const cloneItems = items.map(item => item.cloneNode(true));
cloneItems.forEach(clone => track.appendChild(clone));

function showModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove('hidden');
  modal.style.opacity = 0;
  let opacity = 0;
  const fadeIn = setInterval(() => {
    if (opacity >= 1) {
      clearInterval(fadeIn);
    } else {
      opacity += 0.1;
      modal.style.opacity = opacity;
    }
  }, 3);
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  let opacity = 1;
  const fadeOut = setInterval(() => {
    if (opacity <= 0) {
      clearInterval(fadeOut);
      modal.classList.add('hidden');
    } else {
      opacity -= 0.1;
      modal.style.opacity = opacity;
    }
  }, 3);
}

function showSIAModal() {
  showModal('siaModal');
}

function closeSIAModal() {
  closeModal('siaModal');
}

function showConnectBCAModal() {
  showModal('connectBCAModal');
}

function closeConnectBCAModal() {
  closeModal('connectBCAModal');
}

function showBincangRakyatModal() {
  showModal('bincangRakyatModal');
}

function closeBincangRakyatModal() {
  closeModal('bincangRakyatModal');
}

function showMarvelModal() {
  showModal('marvelModal');
}

function closeMarvelModal() {
  closeModal('marvelModal');
}

function showCryptoModal() {
  showModal('cryptoModal');
}

function closeCryptoModal() {
  closeModal('cryptoModal');
}

function showCekResiModal() {
  showModal('cekResiModal');
}

function closeCekResiModal() {
  closeModal('cekResiModal');
}

function showBCRModal() {
  showModal('bcrModal');
}

function closeBCRModal() {
  closeModal('bcrModal');
}

function showPortfolioModal() {
  showModal('portfolioModal');
}

function closePortofolioModal() {
  closeModal('portfolioModal');
}

function showSimplifyModal() {
  showModal('simplifyModal');
}

function closeSimplifyModal() {
  closeModal('simplifyModal');
}