class APIObject
{
	constructor()
	{
		this._objectList = {}
		this._Output = function(id){
			this.listId = [].concat(id);
		}
	}

	add(target, id)
	{
		if (id === undefined) id = Math.random();
		this._objectList[id] = target;
		return id;
	}

	remove(id)
	{
		delete this._objectList[id];
	}

	output(id)
	{
		return new this._Output(id);
	}

	_evoke(target, method, args)
	{
		var result = [];

		target.listId.forEach( id => {

			let value, obj = this._objectList[id];

			if (obj && typeof obj[method] == "function")
				value = obj[method].apply(obj, args);

			if (value !== undefined)
				result.push(value);
		});

		return result.length == 1 ? result[0] : result;
	}

	setMethods(methods)
	{
		var self = this;

		methods.forEach( method => {
			this._Output.prototype[method] = function(){
				return self._evoke(this, method, arguments);
			}
		});
	}
}

export var API = new APIObject();