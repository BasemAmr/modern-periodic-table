document.addEventListener('DOMContentLoaded', (event) => {
	let elements = document.getElementsByClassName("el");
	let asteriks = document.getElementsByClassName("el2");
	let spans = document.getElementsByClassName("mod");
	let spanInfo = document.getElementsByClassName("mod2");
	let gridWrapper = document.getElementById("grid");
	let infoBox = document.getElementById("info-box");
	let closes = [document.getElementById("close-icon"), document.getElementById("overlay")];
	let symb = document.getElementById("symb");
	let name = document.getElementById("name");
	let type = document.getElementById("type");

	symb.style.fontSize = 0.047109375 * screen.width + "px";
	name.style.fontSize = 0.027578125 * screen.width + "px";
	type.style.fontSize = 0.023671875 * screen.width + "px";

	for (let element of asteriks) {
		element.style.width = 0.0390625 * screen.width + "px";
		element.style.height = 0.0390625 * screen.width + "px";
		element.style.fontSize = 0.015625 * screen.width + "px";
		element.style.margin = 0.0048828125 * screen.width + "px";
	}
	for (let element of elements) {
		element.style.width = 0.0390625 * screen.width + "px";
		element.style.height = 0.0390625 * screen.width + "px";
		element.style.fontSize = 0.015625 * screen.width + "px";
		element.style.margin = 0.0048828125 * screen.width + "px";
	}
	for (let span of spans) {
		span.style.fontSize = 0.015625 * screen.width + "px";
	}
	for (let span of spanInfo) {
		span.style.fontSize = 0.025625 * screen.width + "px";
	}
  	gridWrapper.style.gridGap = 0.0048828125 * screen.width + "px";

  	window.addEventListener("resize", (event)=> {
		for (let element of elements) {
			element.style.width = screen.width * 0.0390625 + "px";
			element.style.height = screen.width * 0.0390625 + "px";
			element.style.fontSize = screen.width * 0.015625 + "px";
			element.style.margin = 0.0048828125 * screen.width + "px";
		}
		for (let span of spans) {
			span.style.fontSize = 0.015625 * screen.width + "px";
		}
		for (let element of asteriks) {
			element.style.width = 0.0390625 * screen.width + "px";
			element.style.height = 0.0390625 * screen.width + "px";
			element.style.fontSize = 0.015625 * screen.width + "px";
			element.style.margin = 0.0048828125 * screen.width + "px";
		}
		for (let span of spanInfo) {
			span.style.fontSize = 0.025625 * screen.width + "px";
		}
		symb.style.fontSize = 0.047109375 * screen.width + "px";
		name.style.fontSize = 0.027578125 * screen.width + "px";
		type.style.fontSize = 0.023671875 * screen.width + "px";
		gridWrapper.style.gridGap = 0.0048828125 * screen.width + "px";
	});

  
  	// Open Inforamtion Box
  	for (let el of elements) {
	  el.addEventListener("click", () => {
		  	infoBox.classList.add("opened");
		});
	}
 	for (close of closes) {
		close.addEventListener("click", () => {
			if (infoBox.classList.contains("opened") == true) {
				infoBox.classList.remove("opened");
			}
		});
	}
})
