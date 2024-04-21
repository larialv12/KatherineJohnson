window.onscroll = function() {
  var secao1 = document.getElementById("carreira");
  var imagem1 = document.getElementById("carreira_img");
  var secao2 = document.getElementById("contribuicoes");
  var imagem2 = document.getElementById("contribuicoes-img");

  if (isElementInViewport(secao1)) {
    setTimeout(function() {
      imagem1.style.display = "block";
    }, 2000);
  }

  if (isElementInViewport(secao2)) {
    setTimeout(function() {
      imagem2.style.display = "block";
    }, 2000);
  }
};

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );

}



  
  