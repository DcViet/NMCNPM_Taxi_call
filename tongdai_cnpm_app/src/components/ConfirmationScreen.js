// src/ConfirmationScreen.js
import React from 'react';

const ConfirmationScreen = ({ data }) => {
  return (
    <div>
      <h2>Màn hình xác nhận đặt xe</h2>
      <p>{data ? data.confirmationMessage : 'Chưa có xác nhận nào'}</p>
    </div>
  );
};

export default ConfirmationScreen;
