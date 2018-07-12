var popup = infoPopup("[data-popup]", {
	type        : "click",
	closeButton : true,
	closeText   : "close",
	scrollSense : true,
	onShow      : function(e){
		console.log(e)
	}
});

infoPopup.getById("attention_2").setSide("top");

// infoPopup.getById("attention_2").destroy();