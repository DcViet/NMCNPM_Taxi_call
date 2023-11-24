const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Sử dụng body-parser để xử lý dữ liệu POST
app.use(bodyParser.urlencoded({ extended: true }));

// Đường dẫn chính
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Xử lý khi người dùng đặt xe
app.post('/book-ride', (req, res) => {
    const phoneNumber = req.body.phoneNumber;
    const customerName = req.body.customerName;
    const pickUpLocation = req.body.pickUpLocation;
    const dropOffLocation = req.body.dropOffLocation;
    const appointmentTime = req.body.appointmentTime;
    

    // Ở đây, bạn có thể thực hiện các xử lý khác như lưu vào cơ sở dữ liệu, gửi thông báo, v.v.


    res.send(`Đã đặt xe thành công! Thông tin đặt xe:
        Số điện thoại: ${phoneNumber}
        Tên khách hàng: ${customerName}
        Điểm đón: ${pickUpLocation}
        Điểm đến: ${dropOffLocation}
        Thời gian hẹn: ${appointmentTime}
    `);
});

// Khởi động server
app.listen(port, () => {
    console.log(`Server đang lắng nghe tại http://localhost:${port}`);
});
