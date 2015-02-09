// Cross-browser event listener
var addEvent = function(element, ev, fn){
	if(element.addEventListener) 
		element.addEventListener(ev, fn, false);
	else element.attachEvent("on" + ev, fn);
}

// Synchronise preview scroll to editor scrolling
module.exports = function(){
	// If preview element isn't defined.
	if(this.$preview !== null){

		// Sync scrolling between editor and preview
		addEvent(this.$scroll, "scroll", function(){

			// Percentage editor is scrolled for the top.
			var editorPercentFromTop = (100 / this.$scroll.scrollTopMax) * this.$scroll.scrollTop,
				// How many pixels down the preview should be to match.
				previewScrolltop = (this.$preview.scrollTopMax / 100) * editorPercentFromTop;

			// Set preview scroll
			this.$preview.scrollTop = previewScrolltop;
			
		}.bind(this));

	}
}