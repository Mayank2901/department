var mongoose = require('mongoose');

var department=mongoose.model('department');

methods.adddepartment=function(req,res)
{
	new department({
	dep_name: req.body.dname,
	company_name: req.body.cname,
	total_emp: req.body.totalemp,
	dep_id: req.body.did
	})
	.save(
		function(err,data)
			{
				if(err)
					console.log(err);
				else
				{
					console.log(data);
					res.send('department saved');
				}
			});
}
methods.deletedepartment=function(req,res)
{
	department.findOneAndRemove
	({
		dep_id:req.body.did
	})
	.exec(function(err)
	{
		if(err)
			console.log(err);
	});
}
methods.updatedepartment=function(req,res)
{
	new department({
	dep_name: req.body.dname,
	company_name: req.body.cname,
	total_emp: req.body.totalemp,
	dep_id: req.body.did
	})
	.save(
		function(err,data)
			{
				if(err)
					console.log(err);
				else
				{
					console.log(data);
					res.send('department saved');
				}
			});
}
app.post('/department',methods.adddepartment);
app.post('/deletedepartment',methods.deletedepartment);
app.post('/updatedepartment',methods.updatedepartment);