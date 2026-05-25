function First_Page() {
  const FirstPage = document.getElementByClass("Title Card");
  const SecondPage = document.getElementByClass("Page Two");
  const ThirdPage = document.getElementByClass("Page Three");
  FirstPage.style.display = "block";
  SecondPage.style.display = "none";
  ThirdPage.style.display = "none";  
}

function Second_Page() {
  const FirstPage = document.getElementByClass("Title Card");
  const SecondPage = document.getElementByClass("Page Two");
  const ThirdPage = document.getElementByClass("Page Three");
  FirstPage.style.display = "none";
  SecondPage.style.display = "block";
  ThirdPage.style.display = "none";  
}

function Third_Page() {
  const FirstPage = document.getElementByClass("Title Card");
  const SecondPage = document.getElementByClass("Page Two");
  const ThirdPage = document.getElementByClass("Page Three");
  FirstPage.style.display = "none";
  SecondPage.style.display = "none";
  ThirdPage.style.display = "block";  
}
