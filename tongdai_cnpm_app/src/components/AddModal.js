// src/AddModal.js
import React, { useState } from 'react';

const AddModal = ({ onSave, onClose }) => {
  const [formData, setFormData] = useState({
    licensePlate: '',
    type: '',
    brand: '',
    active: true,
    driver: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSaveClick = () => {
    onSave(formData);
  };

  return (
    <div className="modal">
      <h3>Thêm mới xe taxi</h3>
      <label>Biển số xe:</label>
      <input
        type="text"
        value={formData.licensePlate}
        onChange={(e) => handleInputChange('licensePlate', e.target.value)}
      />
      <label>Loại xe:</label>
      <input
        type="text"
        value={formData.type}
        onChange={(e) => handleInputChange('type', e.target.value)}
      />
      <label>Hãng xe:</label>
      <input
        type="text"
        value={formData.brand}
        onChange={(e) => handleInputChange('brand', e.target.value)}
      />
      <label>Trạng thái hoạt động:</label>
      <input
        type="text"
        value={formData.active}
        onChange={(e) => handleInputChange('active', e.target.value)}
      />
      <label>Tài xế đang lái:</label>
      <input
        type="text"
        value={formData.driver}
        onChange={(e) => handleInputChange('driver', e.target.value)}
      />
      
      <button onClick={handleSaveClick}>Lưu</button>
      <button onClick={onClose}>Đóng</button>
    </div>
  );
};

export default AddModal;
