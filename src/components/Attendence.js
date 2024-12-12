import React, { useState } from 'react';
import './Attendence.css';
import edit_icon from '../assets/images/edit_icon.png';
import { useNavigate, useLocation } from 'react-router-dom';


export default function Attendence() {
  const [formData, setFormData] = useState({
    date: '',
    operator: '',
    shift: '',
    pump: '',
    bay: '',
    attendance: '',
    remarks: ''
  });

  const location = useLocation();
  const navigate = useNavigate();


  const [records, setRecords] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (editingIndex !== null) {
      const updatedRecords = [...records];
      updatedRecords[editingIndex] = formData;
      setRecords(updatedRecords);
      setEditingIndex(null);
    } else {
      setRecords([...records, formData]);
    }
    setFormData({
      date: '',
      operator: '',
      shift: '',
      pump: '',
      bay: '',
      attendance: '',
      remarks: ''
    });
  };

  const handleEdit = (index) => {
    setFormData(records[index]);
    setEditingIndex(index);
  };

  const handleCancel = () => {
    setFormData({
      date: '',
      operator: '',
      shift: '',
      pump: '',
      bay: '',
      attendance: '',
      remarks: ''
    });
    setEditingIndex(null);
  };

  const History =()=>{
    navigate("/home/save"); 
  }

  return (
    <div className='Create_warpper1'>
      <div className='Create_warpper1_lable'>Employee Attendance</div>
      <div style={{textAlign:'left'}}>
        <button style={{backgroundColor:'#002B8B',color:'white',border:'none',borderRadius:'4px',padding:'5px 10px',float:'right'}} onClick={History}>History</button>
      </div>
      <div className='Create_main_warpper'>
        <div className='AlternativeCreate'>
          <div className='Create_main_warpper_Employee1'>
            <div className='data_lable'>Date</div>
            <div className='data_input_lable'>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                style={{ width: '100%', paddingBottom: '7px', paddingTop: '5px', border: '0.8px solid #ccc', borderRadius: '5px' }}
              />
            </div>
          </div>
          <div className='Create_main_warpper_Employee1'>
            <div className='data_lable'>Operator Name</div>
            <div className='data_input_lable'>
              <select
                name="operator"
                value={formData.operator}
                onChange={handleInputChange}
                className='Create_data_input_text'
              >
                <option value="">Select</option>
                <option value="Sai">Sai</option>
                <option value="Teja">Teja</option>
                <option value="Gopi">Gopi</option>
              </select>
            </div>
          </div>
          <div className='Create_main_warpper_Employee1'>
            <div className='data_lable'>Operator Shift</div>
            <div className='data_input_lable'>
              <select
                name="shift"
                value={formData.shift}
                onChange={handleInputChange}
                className='Create_data_input_text'
              >
                <option value="">Select</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>
          </div>
        </div>

        <div className='AlternativeCreate'>
          <div className='Create_main_warpper_Employee1'>
            <div className='data_lable'>Pump Number</div>
            <div className='data_input_lable'>
              <select
                name="pump"
                value={formData.pump}
                onChange={handleInputChange}
                className='Create_data_input_text'
              >
                <option value="">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
          <div className='Create_main_warpper_Employee1'>
            <div className='data_lable'>Bay-Side</div>
            <div className='data_input_lable'>
              <select
                name="bay"
                value={formData.bay}
                onChange={handleInputChange}
                className='Create_data_input_text'
              >
                <option value="">Select</option>
                <option value="bay1">Bay 1</option>
                <option value="bay2">Bay 2</option>
                <option value="bay3">Bay 3</option>
              </select>
            </div>
          </div>
          <div className='Create_main_warpper_Employee1'>
            <div className='data_lable'>Attendance</div>
            <div className='data_input_lable'>
              <select
                name="attendance"
                value={formData.attendance}
                onChange={handleInputChange}
                className='Create_data_input_text'
              >
                <option value="">Select</option>
                <option value="present">Present</option>
                <option value="absent">Absent</option>
              </select>
            </div>
          </div>
        </div>

        <div className='AlternativeCreate'>
          <div className='data_lable'>Remarks</div>
          <div className='data_input_lable'>
            <textarea
              name="remarks"
              value={formData.remarks}
              onChange={handleInputChange}
              className='Create_data_input_text_text'
            ></textarea>
          </div>
        </div>

        <div className="submitsave_warpper_panle1">
          <button type="button" className="save_btn_pump1" onClick={handleSubmit}>
            {editingIndex !== null ? 'Update' : 'Submit'}
          </button>
          {editingIndex !== null && (
            <button
              type="button"
              className="save_btn_pump1"
              style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}
              onClick={handleCancel}
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      <section className='mt-5'>
        <div className='pump_Master_warpper'>Attendance Breakdown</div>
        <div style={{ overflowX: 'auto' }}>
          <table id="customers">
            <thead>
              <tr>
                <th>S.NO</th>
                <th>Date</th>
                <th>Operator Name</th>
                <th>Operator Shift</th>
                <th>Pump No</th>
                <th>Bay-Side</th>
                <th>Attendance</th>
                <th>Remarks</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{record.date}</td>
                  <td>{record.operator}</td>
                  <td>{record.shift}</td>
                  <td>{record.pump}</td>
                  <td>{record.bay}</td>
                  <td>{record.attendance}</td>
                  <td>{record.remarks}</td>
                  <td>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      {editingIndex === index ? (
                        <span style={{ color: 'blue', fontWeight: 'bold' }}>Editing...</span>
                      ) : (
                        <img
                          className="menuiconhome1 text-center"
                          src={edit_icon}
                          alt="Edit"
                          onClick={() => handleEdit(index)}
                          style={{ cursor: 'pointer' }}
                        />
                      )}
                    </div>

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
