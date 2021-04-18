const menuToggle = document.querySelector('.menu-ham');

function functionAlert(msg) {
	var confirmBox = document.querySelector('.popup');
	document.querySelector(".message").innerText = msg;
	confirmBox.classList.add("open");
	document.querySelector('.yes').addEventListener('click', () => {
		confirmBox.classList.remove("open");
	});
}

menuToggle.addEventListener('click', () => {
	menuToggle.classList.toggle("open");
})

document.querySelectorAll(".menu-level-1").forEach(el => {
	el.addEventListener('click', (e) => {
		if (e.target.classList.contains('menu-level-1') ||
		e.target.parentNode.classList.contains('menu-level-1')) {
			el.classList.toggle('open');
		} else {
			functionAlert(e.target.innerText);
		}
	})
})