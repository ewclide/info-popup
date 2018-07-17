import * as func from './functions';
import {API} from './api';

var sides  = ["top", "bottom", "left", "right"],
	aligns = ["begin", "middle", "end"];

var defaults = {
    type        : "hover",
    content     : "",
    speed       : 250,
    zIndex      : 100,
    side        : "bottom",
    align       : "begin",
    showDelay   : 0,
    hideDelay   : 0,
    hideOnOver  : false,
    closeButton : false,
    closeText   : "",
    className   : null,
    onShow      : null,
    onHide      : null,
    onReady     : null,
}

var attributes = {
    showDelay   : "show-delay",
    hideDelay   : "hide-delay",
    hideOnOver  : "hide-onover",
    closeButton : "close-button",
    closeText   : "close-text",
    className   : "class",
    onShow      : "on-show",
    onHide      : "on-hide",
    onReady     : "on-ready",
}

export class InfoPopup
{
	constructor(target, settings = {})
	{
		this.target = target;

		// add to API
		this.id = API.add(this, target.id);

		func.getSettings(settings, defaults, attributes, target);

		this.speed     = settings.speed;
		this.side      = settings.side;
		this.align     = settings.align;
		this.showDelay = settings.showDelay;
		this.hideDelay = settings.hideDelay;
		this.active    = false;

		this._create(settings);
		this._listenEvents(settings);

		this.setSide(settings.side);
		this.setAlign(settings.align);

		this.onShow  = func.getCallBack(settings.onShow);
		this.onHide  = func.getCallBack(settings.onHide);
		this.onReady = func.getCallBack(settings.onReady);

		if (this.onReady)
			this.onReady(API.output(this.id));
	}

	_create(settings)
	{
		var self = this;

		this.wrapper = func.createElement(
			"div",
			"info-popup",
			{
				display    : "none",
				position   : "fixed",
				transition : settings.speed + "ms, top 1ms, left 1ms",
				zIndex     : settings.zIndex
			}
		);

		this.wrapper.innerHTML = settings.content;

		if (settings.className)
			this.wrapper.classList.add(settings.className);

		if (settings.closeButton && settings.type == "click")
		{
			this.closeButton = func.createElement("button", "close");
			this.closeButton.innerHTML = settings.closeText;
			this.wrapper.appendChild(this.closeButton);
		}

		document.body.appendChild(this.wrapper);
	}

	_listenEvents(settings)
	{
		var self = this, touch = func.isTouch();

		if (settings.type == "hover" && !touch)
		{
			this.target.addEventListener("mouseover", function(){
				self.show();
			})

			if (!settings.hideOnOver)
				this.wrapper.addEventListener("mouseover", function(){
					self.show();
				})

			this.target.addEventListener("mouseleave", function(){
				self.hide();
			})

			this.wrapper.addEventListener("mouseleave", function(){
				self.hide();
			})
		}
		else if (settings.type == "click" || touch)
		{
			this.target.addEventListener("click", function(){
				self.toggle();
			});

			if (this.closeButton)
				this.closeButton.onclick = function(){
					self.hide(true);
				};

			window.addEventListener("scroll", function(e){
				if (self.active) self._updatePosition();
			})
		}
	}

	_updatePosition()
	{
		var offsetX = 0, offsetY = 0,
			rect = this.target.getBoundingClientRect();

		switch (this.side)
		{
			case "top" :
				offsetX = this._align(this.align, rect.left, rect.width, this.wrapper.offsetWidth);
				offsetY = rect.top - this.wrapper.offsetHeight;
				break;

			case "bottom" :
				offsetX = this._align(this.align, rect.left, rect.width, this.wrapper.offsetWidth);
				offsetY = rect.bottom;
				break;

			case "left" :
				offsetY = this._align(this.align, rect.top, rect.height, this.wrapper.offsetHeight);
				offsetX = rect.left - this.wrapper.offsetWidth;
				break;

			case "right" :
				offsetY = this._align(this.align, rect.top, rect.height, this.wrapper.offsetHeight);
				offsetX = rect.right;
				break;
		}

		this.wrapper.style.top = offsetY + "px";
		this.wrapper.style.left = offsetX + "px";
	}

	_align(direction, value, sizeTarget, sizeWrap)
	{
		switch (direction)
		{
			case "begin" : value = value; break;
			case "middle": value = value + (sizeTarget / 2) - (sizeWrap / 2); break;
			case "end"   : value = value + sizeTarget - sizeWrap; break;
		}

		return value;
	}

	toggle(fast)
	{
		this._updatePosition();
		this.active ? this.hide(fast) : this.show(fast);
	}

	show(fast)
	{
		this.active = true;

		clearTimeout(this.hideTimer);

		if (this.showDelay && !fast)
			this.showTimer = setTimeout( () => this._show(), this.showDelay )

		else this._show()
	}

	_show()
	{
		if (this.active)
		{
			this.wrapper.style.display = "block";

			this._updatePosition();

			this.wrapper.classList.add("active");
			this.target.classList.add("active");

			if (this.onShow) this.onShow();
		}
	}

	hide(fast)
	{
		this.active = false;

		clearTimeout(this.showTimer);

		if (this.hideDelay && !fast)
			this.hideTimer = setTimeout( () => this._hide(), this.hideDelay )

		else this._hide()
	}

	_hide()
	{
		if (!this.active)
		{
			this.wrapper.classList.remove("active");

			this.speed
			? setTimeout( () => this._hideElements(), this.speed )
			: this._hideElements();
		}
	}

	_hideElements()
	{
		if (!this.active)
		{
			this.wrapper.style.display = "none";
			this.target.classList.remove("active");

			if (this.onHide) this.onHide();
		}
	}

	destroy()
	{
		API.remove(this.id);
		document.body.removeChild(this.wrapper);
		delete this;
	}

	setSide(side)
	{
		if (sides.indexOf(side) != -1)
		{
			this.wrapper.classList.remove(this.side);
			this.side = side;
			this.wrapper.classList.add(side);
		}
	}

	setAlign(align)
	{
		if (aligns.indexOf(align) != -1)
		{
			this.wrapper.classList.remove(this.align);
			this.align = align;
			this.wrapper.classList.add(align);
		}
	}
}