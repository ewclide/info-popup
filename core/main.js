import { InfoPopup } from './popup';

class Output
{
	constructor(query, settings)
	{
		var self = this;

		this.list = [];

		document.querySelectorAll(query).forEach((element) => {
			this.list.push(new InfoPopup(element, settings));
		});
	}

	show(fast)
	{
		this.list.forEach( item => item.show(fast) );
	}

	hide(fast)
	{
		this.list.forEach( item => item.hide(fast) );
	}

	toggle(fast)
	{
		this.list.forEach( item => item.toggle(fast) );
	}

	getElementBy(query)
	{

	}
}

window.InfoPopup = Output;

var out = new Output("[data-info-popup]");