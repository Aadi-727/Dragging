console.log(
	`%cRadhey Radhey Radhey Shyam`,
	"color: orange; font-family: Arial; font-size:  17px; font-weight: bold;"
);

/**
 * @type { HTMLImageElement } draggable
 */
const draggable = document.querySelector(".draggable");
/**
 * @type { HTMLDivElement[] } holders
 */
const holders = [...document.querySelectorAll(".holder")];

draggable.addEventListener("dragstart", (e) => {
	console.log("dragstart");
	e.target.classList.add("hold");
	setTimeout(() => e.target.classList.add("invisible"), 0);
});

draggable.addEventListener("dragend", (e) => {
	draggable.className = "draggable";
});

holders.forEach((holder) => {
	holder.addEventListener("dragover", (e) => {
		e.preventDefault();
	});

	holder.addEventListener("dragenter", (e) => {
		e.preventDefault();
		e.target.classList.add("bounce");
		e.target.classList.add("hover");
	});

	holder.addEventListener("dragleave", (e) => {
		e.target.className = "holder";
		console.log("dragleave");
	});

	holder.addEventListener("drop", (e) => {
		e.target.appendChild(draggable);
		e.target.className = "holder";
	});
});
