const express = require('express');
const app = express();
const path = require('path');

// 处理文件下载请求
app.get('/api/download/:filename', (req, res) => {
	
	date = new Date();
	let years = date.getFullYear();
	let months = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
	let days = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
	
	let year = "" + years;
	let month = '' + months;
	let day = '' + days;
	//File f = new File("D:/小程序素材/heima_shop_server/public/uploads/"+year+'/'+month+'/'+day+'/'+(hour+min))
	let addr = 'public/uploads/'+year+'/'+month+'/'+day;
	const filename = req.params.filename;
	const filePath = path.join(__dirname, addr, filename);

	res.download(filePath, (err) => {
		if (err) {
			console.error('Error downloading file:', err);
		res.status(404).json({ success: false, message: 'File not found' });
		}
	});
});
// 启动服务器
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});