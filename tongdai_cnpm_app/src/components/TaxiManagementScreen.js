// src/TaxiManagementScreen.js
import React, { useState, useEffect } from 'react';
import AddModal from './AddModal';
import EditModal from './EditModal';

const TaxiManagementScreen = () => {
  const [taxis, setTaxis] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedTaxi, setSelectedTaxi] = useState(null);

  useEffect(() => {
    // Mock data
    const mockData = [
      { id: 1, licensePlate: 'ABC123', type: 'Sedan', brand: 'Toyota', active: true, driver: 'Nguyễn Văn A' },
      { id: 2, licensePlate: 'XYZ789', type: 'SUV', brand: 'Honda', active: false, driver: null },
      // ...Thêm dữ liệu khác
    ];

    setTaxis(mockData);
  }, []);

  const handleSearch = () => {
    // Mock data
    const filteredTaxis = taxis.filter(taxi =>
      taxi.licensePlate.toLowerCase().includes(searchText.toLowerCase())
    );
    setTaxis(filteredTaxis);
  };

  const handleAddNew = () => {
    setShowAddModal(true);
  };

  const handleEdit = (taxiId) => {
    const selected = taxis.find(taxi => taxi.id === taxiId);
    setSelectedTaxi(selected);
    setShowEditModal(true);
  };

  const handleDelete = (taxiId) => {
    const updatedTaxis = taxis.filter(taxi => taxi.id !== taxiId);
    setTaxis(updatedTaxis);
    // Gọi API hoặc thực hiện các thao tác cần thiết để xoá xe taxi với ID là taxiId
  };

  const handleAddModalClose = () => {
    setShowAddModal(false);
  };

  const handleEditModalClose = () => {
    setShowEditModal(false);
  };

  const handleSave = (formData) => {
    // Xử lý dữ liệu đã nhập từ modal và thêm mới hoặc chỉnh sửa thông tin của xe taxi
    if (formData.id) {
      // Đây là trường hợp chỉnh sửa
      const updatedTaxis = taxis.map(taxi =>
        taxi.id === formData.id ? { ...taxi, ...formData } : taxi
      );
      setTaxis(updatedTaxis);
      // Gọi API hoặc thực hiện các thao tác cần thiết để cập nhật thông tin xe taxi
    } else {
      // Đây là trường hợp thêm mới
      setTaxis([...taxis, { id: taxis.length + 1, ...formData }]);
      // Gọi API hoặc thực hiện các thao tác cần thiết để thêm mới xe taxi
    }

    setShowAddModal(false);
    setShowEditModal(false);
  };

  return (
    <div>
      <h2>Quản lý danh sách xe taxi</h2>
      <div>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Tìm kiếm biển số xe"
        />
        <button onClick={handleSearch}>Tìm kiếm</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Biển số xe</th>
            <th>Loại xe</th>
            <th>Hãng xe</th>
            <th>Trạng thái hoạt động</th>
            <th>Tài xế đang lái</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {taxis.map(taxi => (
            <tr key={taxi.id}>
              <td>{taxi.licensePlate}</td>
              <td>{taxi.type}</td>
              <td>{taxi.brand}</td>
              <td>{taxi.active ? 'Hoạt động' : 'Không hoạt động'}</td>
              <td>{taxi.driver || 'Không có tài xế'}</td>
              <td>
                <button onClick={() => handleEdit(taxi.id)}>Sửa</button>
                <button onClick={() => handleDelete(taxi.id)}>Xoá</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddNew}>Thêm mới</button>

      {/* Modal thêm mới */}
      {showAddModal && (
        <AddModal
          onSave={handleSave}
          onClose={handleAddModalClose}
        />
      )}

      {showEditModal && (
        <EditModal
          taxi={selectedTaxi}
          onSave={handleSave}
          onClose={handleEditModalClose}
        />
      )}
    </div>
  );
};

export default TaxiManagementScreen;
