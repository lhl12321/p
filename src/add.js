const express = require('express');
const app = express();
const multer = require('multer');


// 创建multer实例并配置上传目录
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    // 设置上传文件保存的目录，这里设置为public/uploads/
	date = new Date();
	let years = date.getFullYear();
	let months = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
	let days = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
	let year = "" + years;
	let month = '' + months;
	let day = '' + days;
	
	//File f = new File("D:/小程序素材/heima_shop_server/public/uploads/"+year+'/'+month+'/'+day+'/'+(hour+min))
	let addr = 'public/uploads/'+year+'/'+month+'/'+day;
    cb(null, addr);
  },
  
  filename: function(req, file, cb) {
    // 设置上传文件的文件名，这里使用原始文件名
	
	
    cb(null, file.originalname);
  }
});

// 创建multer中间件
const upload = multer({ storage });

// 处理文件上传请求
app.post('/api/upload', upload.single('file'), (req, res) => {
  if (req.file) {
    console.log('File uploaded:', req.file);
    res.status(200).json({ success: true, message: 'File uploaded successfully' });
  } else {
    res.status(400).json({ success: false, message: 'No file uploaded' });
  }
});






// 启动服务器
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});