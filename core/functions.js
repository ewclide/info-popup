export function isTouch()
{
	return ("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch;
}

export function createElement(tag, attr, styles)
{
	var element = document.createElement(tag);

	if (typeof attr == "string")
		element.classList.add(attr);

	else if (typeof attr == "object")
		for (var name in attr) element.setAttribute(name, attr[name]);

	if (styles)
	{
		for (var name in styles)
			element.style[name] = styles[name];
	}

	return element;
}

export function getCallBack(str)
{
	if (typeof str == "string")
		return new Function("e", str);

	else if (typeof str == "function")
		return str;

	else return null;
}

export function getSettings(settings, defaults, attributes, element)
{
	for (var i in defaults)
		if (settings[i] === undefined)
		{
			var attr = element ? element.getAttribute('data-' + (attributes[i] || i)) : null,
				num = +attr;

			if (attr === "" || attr === "true")
				attr = true;

			else if (attr === "false")
				attr = false;

			else if (attr !== null && !isNaN(num))
				attr = num;

			settings[i] = attr !== null ? attr : defaults[i];
		}

	return settings;
}