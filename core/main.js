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
	var list = [];

	document.querySelectorAll(query).forEach((element) =>{
		var popup = new InfoPopup(element, settings);
		list.push(popup.id);
	});

	return API.output(list)
}

build.getById = function(id)
{
	return API.output(id)
}

window.infoPopup = build;

build("[data-infopopup]");