/*
const image = [
"/assets/mumokkino1.jpg", "/assets/auto1.png", "/assets/mumokkino2.jpg", "/assets/auto3.png",  "/assets/mumokkino4.jpg",  "/assets/auto2.png", "/assets/mumokkino3.jpg" ]

let i = 0

function placeImage(x, y) {

	const nextImage = image[i]

	const img = document.createElement("img")
	img.setAttribute("src", nextImage)
	img.style.left = x + "px"
	img.style.top = y + "px"
	img.style.transform = "translate(-50%, -50%) scale(0.2) rotate(" + (Math.random() * 20 - 10) + "deg)"
	document.body.appendChild(img)

	i = i + 1

	if (i >= image.length) {
		i = 0
	}
}
var style = document.createElement('style');
  style.innerHTML = `
  img {
  position: absolute;
	top: 250px;
	left: 100px;
	fit: contain;
	transform: rotate(10deg);
	animation: fadeIn 0.5s;
  }
  `;
  document.head.appendChild(style);

document.addEventListener("click", function (event) {
	placeImage(event.pageX, event.pageY)
})

document.addEventListener("touched", function (event) {
	event.preventDefault()
	placeImage(event.pageX, event.pageY)
})
*/
