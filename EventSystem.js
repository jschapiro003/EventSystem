var addEventSystem = function(target){

	target.events = {};
	target.on = function(e,cb){
		this.events[e] = this.events[e] || [];
		this.events[e].push(cb)
	}

	target.trigger = function(e){
		_.each(this.events[e],function(cb){
				cb();
		});	
	/* no underscore refactor
		for (var i = 0; i < this.events[e].length; i++){
			this.events[e][i]();
		}
	}
	*/
}