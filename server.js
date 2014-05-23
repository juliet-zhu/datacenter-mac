/*
 * 模拟查看所有消息Ajax请求
*/
module.exports = function server(connect,options,middlewares){
	console.log('=================================================');
    console.log('handle request.')
    console.log('=================================================');
    middlewares.push(
    	function (req, res, next){
            if(req.url=='/show-message'){
                console.log('=================================================');
                console.log('hi,arrived');
                console.log('=================================================');
                var data = ['系统更新通知1','系统更新通知2','系统更新通知3'];
                res.end(data);
            }
                            
        });
    return middlewares;
}
