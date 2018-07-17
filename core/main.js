import { API } from './api';
import { InfoPopup } from './popup';

API.setMethods([
	"show",
	"hide",
	"toggle",
	"setSide",
	"setAlign",
	"destroy"
]);

function build(query, settings)
{
	var list = [],
		elements = document.querySelectorAll(query);

	// IE supporting
	for (var i = 0; i < elements.length; i++)
	{
		let popup = new InfoPopup(elements[i], settings);
		list.push(popup.id);
	}

	return API.output(list)
}

build.getById = function(id)
{
	return API.output(id)
}

window.infoPopup = build;

build("[data-infopopup]");