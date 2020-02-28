/* const canvasTag = document.querySelector("canvas")

canvasTag.width = window.innerWidth * 2
canvasTag.height = window.innerHeight * 2

canvasTag.style.width = window.innerWidth + "px"
canvasTag.style.height = window.innerHeight + "px"

const context = canvasTag.getContext("2d")
context.scale(2, 2)

let i = 0

const images = ["beautiful1.jpg", "beautiful2.jpg", "beautiful4.jpg", "beautiful5.jpg", "beautiful6.jpg"].map(src => {
	const image = document.createElement("img")
	image.src = src
	return image
})


document.addEventListener("mousemove", function (event) {
	if (images[i].complete) {
		context.drawImage(images[i], event.pageX, event.pageY, 400, 600)
		console.log(event.pageX, event.pageY)
	}
})
*/
