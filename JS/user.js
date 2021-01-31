let express=require("express")()
let mysql=require("mysql")
const port = 8080
/* Node解决跨域问题 */
express.all("/*", function(req, res, next) {
    // 跨域处理
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next(); // 执行下一个路由
})
// 规划mysql链接
let sql = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"123456",
	database:"mysql"
})
// 尝试链接
sql.connect()
/* 登录 */
express.get("/login",(request,response)=>{
    console.log(request)
    let username = request.query.username;
    let password = request.query.password;
    sql.query(`SELECT * FROM denglu WHERE username="${username}" AND password="${password}"`,(error,data)=>{
        if(error){
            console.log(error);
            response.send("error")
        }
            else{
                console.log(data)
                if(!data.length){
                    response.end("error")
                }
                else{
                    response.end("success")
                }
            }
    })
})
/* 注册 */
express.get("/adduser",(request,response)=>{
    let username = request.query.username;
    console.log(username)
    let password = request.query.password;
    console.log(password)
    sql.query(`INSERT INTO zhuce (username,password) VALUES ("${username}","${password}")`,(error)=>{
		if(error){
			console.log(error);
			response.send("error")
		}
		else{
			response.send("success")
		}
	})
})
// 监听在哪一个8080端口上
express.listen(port)
console.log("server is running at " + port)