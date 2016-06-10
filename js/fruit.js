var fruitObj = function () {
	this.alive = [];
	this.x = [];
	this.y = [];
	this.orange = new Image();
	this.blue = new Image();
}
fruitObj.prototype.nume = 30;
fruitObj.prototype.init = function(){
	for (var i = 0; i < this.num; i++) {
		this.alive[i] = false;
		this.x[i] =0;
		this.y[i] =0;
		this.born(i);
	}
	this.orange.src = "./src/fruit.png";
	this.orange.src = "./src/blue.png";
}
fruitObj.prototype.draw = function(){
    for(var i=0;i<this.num;i++){
        ctx2.drawImage(this.orange,this.x[i],this.y[i]);
    }
}
fruitObj.prototype.born = function(){
	var id = Math.floor(random() * ane.num);
	this.x[i] = ane.x[aneID];
	this.y[i] = canHeight - ane.len[aneID];
}