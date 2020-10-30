
	/*const menuIcon = document.getElementByClassName('.menu-icon')[0];
	const nav = document.getElementByClassName('.nav-links')[0];
	
	menuIcon.addEventListener('click',() => {
		nav.classList.toggle('.active');
	});*/
	
	
/*function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
*/


let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-icon');


navBarToggle.addEventListener('click', function(){
	mainNav.classList.toggle('active');
});