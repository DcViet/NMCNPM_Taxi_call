// src/CallCenterScreen.js
import React, { useState } from 'react';

const BookingtaxiScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [customer, setCustomer] = useState('');
  const [pickupAddress, setPickupAddress] = useState('');
  const [dropoffAddress, setDropoffAddress] = useState('');

  const handleBookRide = async () => {
    try {
      // Gửi thông tin đặt xe đến hệ thống broadcast (API backend)
      const response = await fetch('http://localhost:5000/api/bookRide', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber,
          customer,
          pickupAddress,
          dropoffAddress,
        }),
      });

      // Xử lý phản hồi từ hệ thống broadcast
      const data = await response.json();
      console.log('Response:', data);

      // Chuyển đến màn hình xác nhận đặt xe hoặc xử lý tiếp theo
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>TỔNG ĐÀI ĐẶT XE</h2>
      <label>Số điện thoại:</label>
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <label>Tên khách hàng:</label>
      <input
        type="text"
        value={customer}
        onChange={(e) => setCustomer(e.target.value)}
      />
      <label>Địa chỉ đón:</label>
      <input
        type="text"
        value={pickupAddress}
        onChange={(e) => setPickupAddress(e.target.value)}
      />
      <label>Địa chỉ đến:</label>
      <input
        type="text"
        value={dropoffAddress}
        onChange={(e) => setDropoffAddress(e.target.value)}
      />
      <button onClick={handleBookRide}>Đặt Xe</button>
    </div>
  );
};

export default BookingtaxiScreen;
