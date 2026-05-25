function FirstLoad() {
  const FirstPage = document.getElementByClass("Title Card");
  const SecondPage = document.getElementByClass("Page Two");
  const ThirdPage = document.getElementByClass("Page Three");
  FirstPage.style.display = "block";
  SecondPage.style.display = "none";
  ThirdPage.style.display = "none";  
}
