class Carousel {
	constructor(carousel) {
		this.carousel = carousel;

		this.leftButton = carousel.querySelector('.left-button');
		this.rightButton = carousel.querySelector('.right-button');

		this.images = carousel.querySelectorAll('img');

		this.index = 0;
		this.limit = this.images.length - 1;

		this.images[0].style.display = 'block';

		this.leftButton.addEventListener('click', (event) => this.displayImg(event));
		this.rightButton.addEventListener('click', (event) => this.displayImg(event));
	}
	moveForward() {
		this.index < this.limit ? (this.index += 1) : (this.index = 0);
		console.log('current index', this.index);
	}
	moveBack() {
		if (this.index >= 1) this.index--;
		console.log('current index', this.index);
	}

	displayImg(event) {
		let buttonClicked = event.target;
		switch (this.index) {
			case 0:
				this.images[0].style.display = 'block';
				this.images[1].style.display = 'none';
				this.images[this.limit].style.display = 'none';
				break;
		}

		if ((buttonClicked = this.rightButton)) {
			this.moveForward();
			if (this.index <= this.limit) {
				if (this.index != 0) {
					this.images[this.index - 1].style.display = 'none';
				} else {
                    this.images[this.index].style.display = 'block';
                    this.images[this.limit].style.display = 'none';
				}
			}

			let img = this.images[this.index];
			img.style.display = 'block';
		} else {
			if ((buttonClicked = this.leftButton)) {
				this.moveBack();
				let img = this.images[this.index];
				img.style.display = 'block';
			}
		}
	}
}

let carousel = new Carousel(document.querySelector('.carousel'));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
