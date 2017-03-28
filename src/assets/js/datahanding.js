//数据验证处理

const regs = {};

//图片匹配
regs.img = /(.*)\.[jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga]/g;


function regObj(value){
	this.value = value;
	this.regs = regs;
}

regObj.prototype.bool = function(str){
	//全匹配正则  布尔值
	try{
		//规则
		let reg = this.regs[str];
	}catch(e){
		return `没有找到匹配的规则`
	}
	return this.value.match(this.value)?this.value:false;
	
}

//
function regFun(value){
	return new regObj(value);
};

export default regFun;
