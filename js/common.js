var popup = new InfoPopup("[data-popup]", {
	type        : "click",
	closeButton : true,
	closeText   : "close",
	scrollSense : true,
	onShow      : function(e){
		console.log(e)
	}
});

popup.show();