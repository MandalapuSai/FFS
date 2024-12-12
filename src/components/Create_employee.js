import React, { useState, useRef } from 'react';
import './Create_employee.css';
import edit_icon from '../assets/images/edit_icon.png';
import { toast } from 'react-toastify';
import AadharPic from '../assets/images/aadhar.jpg';
import PersonPic from '../assets/images/person.jpg';


export default function Create_employee() {


  const fileInputRef = useRef(null);
  const fileInputRef1 = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    altMobile: '',
    aadhar: '',
    address: '',
    aadharFile: null,
    photoFile: null,
  });

  const defaultRecord = {
    name: 'Sai',
    mobile: '8499031787',
    altMobile: '8786766887',
    aadhar: '500279564454',
    address: 'Hyderabad',
    aadharFile: require('../assets/images/aadhar.jpg'),
    photoFile: PersonPic,
  };


  const [records, setRecords] = useState([defaultRecord]); // Store employee records
  const [editingIndex, setEditingIndex] = useState(null); // Track which record is being edited

  // Handle input change for all fields
  const handleChange = (e, index) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      // For file inputs, handle the file
      const newRecords = [...records];
      newRecords[index] = {
        ...newRecords[index],
        [name]: files[0],
      };
      setRecords(newRecords);
    } else {
      // For text inputs, handle the value change
      const newRecords = [...records];
      newRecords[index] = {
        ...newRecords[index],
        [name]: value,
      };
      setRecords(newRecords);
    }
  };

  // Handle form submit (add new record)
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, mobile, altMobile, aadhar, address, aadharFile, photoFile } = formData;

    if (!name || !mobile || !altMobile || !aadhar || !address || !aadharFile || !photoFile) {
      toast.error("All fields are required");
      return;
    }

    if (editingIndex === null) {

      setRecords([...records, formData]);
    }
    setFormData({
      name: '',
      mobile: '',
      altMobile: '',
      aadhar: '',
      address: '',
      aadharFile: null,
      photoFile: null,
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      console.log(fileInputRef.current.value)
    }
    if (fileInputRef1.current) {
      fileInputRef1.current.value = '';
      console.log(fileInputRef1.current.value)
    }
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  // Handle save button click (save edited data)
  const handleSave = (record, index) => {
    // console.log(record)
    setEditingIndex(null);
  };

  const handleMobileInput = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setFormData({ ...formData, mobile: value });
    }
  };
  const handleMobileInputalt = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setFormData({ ...formData, altMobile: value });
    }
  };
  const handleMobileInput1 = (a) => {
    const value = a.target.value;
    if (/^\d*$/.test(value) && value.length <= 12) {
      setFormData({ ...formData, aadhar: value });
    }
  };



  return (
    <div>
      <div className="Create_warpper1">
        <div className="Create_warpper1_lable">Create Employee</div>
        <div className="Create_main_warpper">
          <div className="AlternativeCreate">
            <div className="Create_main_warpper_Employee1">
              <div className="data_lable">Name</div>
              <div className="data_input_lable">
                <input
                  className="Create_data_input_text"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className="Create_main_warpper_Employee1">
              <div className="data_lable">Mobile Number</div>
              <div className="data_input_lable">
                <input
                  className="Create_data_input_text"
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={(e) => handleMobileInput(e)}
                  required
                />
              </div>
            </div>
            <div className="Create_main_warpper_Employee1">
              <div className="data_lable">Alternative M.No</div>
              <div className="data_input_lable">
                <input
                  className="Create_data_input_text"
                  type="text"
                  name="altMobile"
                  value={formData.altMobile}
                  onChange={(e) => handleMobileInputalt(e)}
                  required
                />
              </div>
            </div>
          </div>

          <div className="AlternativeCreate">
            <div className="Create_main_warpper_Employee1">
              <div className="data_lable">Aadhar No</div>
              <div className="data_input_lable">
                <input
                  className="Create_data_input_text"
                  type="text"
                  name="aadhar"
                  value={formData.aadhar}
                  onChange={(a) => handleMobileInput1(a)}
                  required
                />
              </div>
            </div>
            <div className="Create_main_warpper_Employee1">
              <div className="data_lable">Upload Aadhar</div>
              <div className="data_input_lable">
                <input
                  className="txt"
                  type="file"
                  name="aadharFile"
                  onChange={(e) => setFormData({ ...formData, aadharFile: e.target.files[0] })}
                  ref={fileInputRef}
                  accept=".pdf,.jpeg,.jpg,.doc,.docx"
                  required
                />
              </div>
            </div>
            <div className="Create_main_warpper_Employee1">
              <div className="data_lable">Upload Photo</div>
              <div className="data_input_lable">
                <input
                  className="txt"
                  type="file"
                  name="photoFile"
                  onChange={(e) => setFormData({ ...formData, photoFile: e.target.files[0] })}
                  ref={fileInputRef1}
                  accept=".pdf,.jpeg,.jpg,.doc,.docx"
                  required
                />
              </div>
            </div>
          </div>

          <div className="AlternativeCreate">
            <div className="data_lable">Address</div>
            <div className="data_input_lable">
              <textarea
                className="Create_data_input_text_text"
                name="address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="submitsave_warpper_panle1">
            <button type="button" className="save_btn_pump1" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
      <section className="mt-5">
        <div className="pump_Master_warpper">Create Employee Details</div>
        <div style={{ overflowX: 'auto' }}>
          <table id="customers">
            <thead>
              <tr>
                <th style={{ minWidth: '50px' }}>S.NO</th>
                <th style={{ minWidth: '150px' }}>Name</th>
                <th style={{ minWidth: '100px' }}>Mobile Number</th>
                <th style={{ minWidth: '100px' }}>Aadhar No</th>
                <th style={{ minWidth: '100px' }}>Upload Aadhar</th>
                <th style={{ minWidth: '100px' }}>Upload Photo</th>
                <th style={{ minWidth: '100px' }}>Address</th>
                <th style={{ minWidth: '100px' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    {editingIndex === index ? (
                      <input
                        type="text"
                        name="name"
                        value={record.name}
                        onChange={(e) => handleChange(e, index)}
                      />
                    ) : (
                      record.name
                    )}
                  </td>
                  <td>
                    {editingIndex === index ? (
                      <input
                        type="number"
                        name="mobile"
                        value={record.mobile}
                        onChange={(e) => handleChange(e, index)}
                        maxLength={10}
                      />
                    ) : (
                      record.mobile
                    )}
                  </td>
                  <td>
                    {editingIndex === index ? (
                      <input
                        type="number"
                        name="aadhar"
                        value={record.aadhar}
                        onChange={(e) => handleChange(e, index)}
                        maxLength={12}
                      />
                    ) : (
                      record.aadhar

                    )}
                  </td>
                  <td>
                    {editingIndex === index ? (
                      <input
                        type="file"
                        name="aadharFile"
                        accept=".pdf,.jpeg,.jpg,.doc,.docx"
                        onChange={(e) => handleChange(e, index)}
                      />
                    ) : (
                      record.aadharFile ? (
                        <img
                          src={record.aadharFile}
                          alt="Aadhar"
                          style={{ width: '50px', height: 'auto' }}
                        />
                      ) : ''
                    )}
                  </td>
                  <td>
                    {editingIndex === index ? (
                      <input
                        type="file"
                        name="photoFile"
                        accept=".pdf,.jpeg,.jpg,.doc,.docx"
                        onChange={(e) => handleChange(e, index)}
                      />
                    ) :(
                      record.photoFile ? 'File Uploaded': ''
                    )}
                  </td>
                  <td>
                    {editingIndex === index ? (
                      <textarea
                        name="address"
                        value={record.address}
                        onChange={(e) => handleChange(e, index)}
                      />
                    ) : (
                      record.address
                    )}
                  </td>
                  <td>
                    {editingIndex === index ? (
                      <button onClick={() => handleSave(record, index)} style={{ padding: '5px 11px', backgroundColor: '#002B8B', color: 'white', border: 'none', cursor: 'pointer' }}>Save</button>
                    ) : (
                      <img
                        style={{ width: '17px', cursor: 'pointer' }}
                        src={edit_icon}
                        alt="Edit"
                        onClick={() => handleEdit(index)}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
