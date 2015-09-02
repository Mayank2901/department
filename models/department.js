var mongoose=require('mongoose');

var ObjectId = mongoose.Schema.Types.ObjectId;

var department=mongoose.model(department,{
	dep_name: {type:String},
	company_name: {type:String},
	total_emp: {type:Number},
	dep_id: {type:Number},
	created: {type:Date,default:Date.now}
});