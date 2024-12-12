import React, { useState } from 'react';
import './SavedData.css';

export default function SavedData() {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => currentYear - i);
  const months = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];
  const operators = ["Operator 1", "Operator 2", "Operator 3", "Operator 4"];

  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedOperator, setSelectedOperator] = useState('');
  const [MonthWiseTable, SetMonthWiseTable] = useState(false);
  const [DateWiseTable, SetDateWiseTable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedData = {
      year: selectedYear,
      month: selectedMonth,
      operator: selectedOperator,
    };
    console.log("SSSSSSSSS")
    console.log(selectedData);
    SetMonthWiseTable(true)
  };

  const Employee_modal = (item) => {
    if (item == 1) {
      SetDateWiseTable(true)
    } else {
      console.log("BBBBBBBB")
    }
  }





  return (
    <div className="container-fluid mt-5">
      <div className="card p-4 shadow">
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-12 col-sm-6 col-md-4">
              <label htmlFor="year" className="form-label data_lable">Year</label>
              <select
                id="year"
                className="form-select Create_data_input_text"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                required
              >
                <option value="">Select Year</option>
                {years.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <label htmlFor="month" className="form-label data_lable">Month</label>
              <select
                id="month"
                className="form-select Create_data_input_text"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                required
              >
                <option value="">Select Month</option>
                {months.map((month, index) => (
                  <option key={index} value={index + 1}>{month}</option>
                ))}
              </select>
            </div>

            <div className="col-12 col-sm-6 col-md-4">
              <label htmlFor="operator" className="form-label data_lable ">Operator Name</label>
              <select
                id="operator"
                className="form-select Create_data_input_text"
                value={selectedOperator}
                onChange={(e) => setSelectedOperator(e.target.value)}
                required
              >
                <option value="">Select Operator</option>
                {operators.map((operator, index) => (
                  <option key={index} value={operator}>{operator}</option>
                ))}
              </select>
            </div>
          </div>
          <div className='text-center mt-4'>
            <button type="submit" className="save_btn_pump1">Submit</button>
          </div>
        </form>
      </div>

      {
        (
          MonthWiseTable &&
          <section className='mt-5'>
            <div className='pump_Master_warpper'> Nov - Month</div>

            <div style={{ overflowX: 'auto' }}>
              <table id="customers">
                <thead>
                  <tr>
                    <th style={{ minWidth: '50px' }}>S.NO</th>
                    <th style={{ minWidth: '150px' }}>Month/Date</th>
                    <th style={{ minWidth: '100px' }}>Operator Name</th>
                    <th style={{ minWidth: '100px', backgroundColor: 'green', color: 'white' }}>Present</th>
                    <th style={{ minWidth: '150px', backgroundColor: 'red', color: 'white' }}>Absent</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Nov/2</td>
                    <td>Teja</td>
                    <td style={{ color: 'green', cursor: 'pointer' }} onClick={() => Employee_modal(1)}>25</td>
                    <td style={{ color: 'red', cursor: 'pointer' }} onClick={() => Employee_modal(2)}>8</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        )
      }



      {
        (
          DateWiseTable &&
          <section className='mt-5'>
            <div className='pump_Master_warpper'>Month-Date</div>

            <div style={{ overflowX: 'auto' }}>
              <table id="customers">
                <thead>
                  <tr>
                    <th style={{ minWidth: '50px' }}>S.NO</th>
                    <th style={{ minWidth: '150px' }}>Month-Date</th>
                    <th style={{ minWidth: '100px' }}>Operator Name</th>
                    <th style={{ minWidth: '100px', backgroundColor: 'green', color: 'white' }}>Present</th>
                    <th style={{ minWidth: '150px', backgroundColor: 'red', color: 'white' }}>Absent</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Nov/2</td>
                    <td>Teja</td>
                    <td style={{ color: 'green', cursor: 'pointer' }}>25</td>
                    <td style={{ color: 'red', cursor: 'pointer' }}>8</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        )
      }
    </div>
  );
};












// const [selectedDay, setSelectedDay] = useState('');

// const days = Array.from({ length: 31 }, (_, i) => i + 1);


{/* <div className="col-12 col-sm-6 col-md-3">
              <label htmlFor="date" className="form-label">Date</label>
              <select
                id="date"
                className="form-select"
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
                required
              >
                <option value="">Select Date</option>
                {days.map((day) => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>
            </div> */}