document.getElementsByTagName("body")[0].addEventListener("click", function(){
  window.open("/home/base.html");
});

window.addEventListener('DOMContentLoaded', (event) => {
	const letterMap = document.getElementById("letterMaps")
	letterMap.addEventListener("mousemove", function (event) {
	console.log("inside EventListener")

		const height = window.innerHeight
		const width = window.innerWidth

		const house = letterMap.querySelector(".house")
		house.style.width = event.pageX+"px"
		house.style.height = event.pageY+"px"

		const tent = letterMap.querySelector(".tent")
		tent.style.width = width - event.pageX +"px"
		tent.style.height = event.pageY + "px"

		const outside = letterMap.querySelector(".outside")
		outside.style.width = event.pageX + "px"
		outside.style.height = height - event.pageY + "px"

		const municipal = letterMap.querySelector(".municipal")
	  municipal.style.width = width - event.pageX  + "px"
		municipal.style.height = height - event.pageY + "px"

	})
});
