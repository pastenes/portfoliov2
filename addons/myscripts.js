(function() {

	//Selecting our node
	var myNode = document.querySelector('#nav tbody');

	myNode.addEventListener('click', function(e) {

		if(e.target.tagName === 'IMG') {

			var myOverlay = document.createElement('div');
			myOverlay.id = 'overlay';
			document.body.appendChild(myOverlay);

			//set up overlay styles
			myOverlay.style.position = 'absolute';
			myOverlay.style.top = 0;
			myOverlay.style.backgroundColor = 'rgba(255,255,255,0.7)';
			myOverlay.style.cursor = 'pointer';

			//resize and position overlay
			myOverlay.style.width = window.innerWidth + 'px';
			myOverlay.style.height = window.innerHeight + 'px';
			myOverlay.style.top = window.pageYOffset + 'px';
			myOverlay.style.left = window.pageXOffset + 'px';

			//create large image element
			var imageSrc = e.target.src;
			var imageLarge = document.createElement('img');
			imageLarge.id = 'largeImage';
			imageLarge.src = imageSrc.substr(0, imageSrc.length-11) + '01_400x326.png';
			imageLarge.style.display = 'block';
			imageLarge.style.position = 'absolute';
			myOverlay.appendChild(imageLarge);

			//wait untile the image has loaded
			imageLarge.addEventListener('load', function() {

				//Resize if taller
				if (this.height > window.innerHeight) {
					this.ratio = window.innerHeight / this.height;
					this.height = this.height * this.ratio;
					this.width + this.width * this.ratio;
				}

				//Resize if wider
				if (this.width > window.innerWidth) {
					this.ratio = window.innerWidth / this.width;
					this.height = this.height * this.ratio;
					this.width + this.width * this.ratio;
				}

				centerImage(this);
				//myOverlay.appendChild('imageLarge');

			}); //image has loaded

			imageLarge.addEventListener('click', function() {

				if (myOverlay) {
					window.removeEventListener('resize', window, false);
					window.removeEventListener('scroll', window, false);
					myOverlay.parentNode.removeChild(myOverlay);
				}

			}, false)

			window.addEventListener('scroll', function() {

				if (myOverlay) {
					myOverlay.style.top = window.pageYOffset + 'px';
					myOverlay.style.left = window.pageXOffset + 'px';
				}

			}, false)

			window.addEventListener('resize', function() {

				if (myOverlay) {
					myOverlay.style.width = window.innerWidth + 'px';
					myOverlay.style.height = window.innerHeight + 'px';
					myOverlay.style.top = window.pageYOffset + 'px';
					myOverlay.style.left = window.pageXOffset + 'px';

					centerImage(imageLarge);
				}

			}, false)

		} //target is an image

		

	}, false); //image is clicked

	function centerImage(theImage) {

		var myDifX = (window.innerWidth - theImage.width)/2;
		var myDifY = (window.innerHeight - theImage.height)/2;

		theImage.style.top = myDifY + 'px';
		theImage.style.left = myDifX + 'px';

		return theImage;
	}

})(); //self executing function















