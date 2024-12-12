import React, { useState, useEffect } from 'react'
import './Pumpsales.css';


export default function Pumpsales() {

  const shiftsales = '25225115';
  const totalpump = '25225115';


  const [selectedYear, setSelectedYear] = useState('');
  const [opername, SetName] = useState('');

  const SetSelectPump = (e) => {
    console.log(e, "Pump")
  }

  const OperatorName = (e) => {
    console.log(e, "Operator")
  }

  const ShiftName = (e) => {
    console.log(e, "Shift")
  }

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

  const handleSubmit = (e) => {
    e.preventDefault();
  };


  const Five_Hundred = 500;
  const [FiveAmount, setFiveAmount] = useState('');
  const [FiveValue, setFiveXValue] = useState("");
  const FiveChange = (e) => {
    const input = e.target.value;
    setFiveXValue(input);
    const FivecalculatedAmount = input ? Five_Hundred * Number(input) : 0;
    setFiveAmount(FivecalculatedAmount);
    recalculateTotal(FivecalculatedAmount, null, null, null, null, null, null, null, null);
  };

  const Two_Hundred = 200;
  const [TwoAmount, setTwoAmount] = useState('');
  const [TwoValue, setTwoXValue] = useState("");
  const TwoChange = (e) => {
    const input = e.target.value;
    setTwoXValue(input);
    const TwocalculatedAmount = input ? Two_Hundred * Number(input) : 0;
    setTwoAmount(TwocalculatedAmount);
    recalculateTotal(null, TwocalculatedAmount, null, null, null, null, null, null, null);
  };


  const One_Hundred = 100;
  const [OneAmount, setOneAmount] = useState('');
  const [OneValue, setOneXValue] = useState("");
  const OneChange = (e) => {
    const input = e.target.value;
    setOneXValue(input);
    const OnecalculatedAmount = input ? One_Hundred * Number(input) : 0;
    setOneAmount(OnecalculatedAmount);
    recalculateTotal(null, null, OnecalculatedAmount, null, null, null, null, null, null);
  };


  const Fifty_Hundred = 50;
  const [FiftyAmount, setFiftyAmount] = useState('');
  const [FiftyValue, setFiftyXValue] = useState("");
  const FiftyChange = (e) => {
    const input = e.target.value;
    setFiftyXValue(input);
    const FiftycalculatedAmount = input ? Fifty_Hundred * Number(input) : 0;
    setFiftyAmount(FiftycalculatedAmount);
    recalculateTotal(null, null, null, FiftycalculatedAmount, null, null, null, null, null);
  };


  const Twenty_Hundred = 20;
  const [TwentyAmount, setTwentyAmount] = useState('');
  const [TwentyValue, setTwentyXValue] = useState("");
  const TwentyChange = (e) => {
    const input = e.target.value;
    setTwentyXValue(input);
    const TwentycalculatedAmount = input ? Twenty_Hundred * Number(input) : 0;
    setTwentyAmount(TwentycalculatedAmount);
    recalculateTotal(null, null, null, null, TwentycalculatedAmount, null, null, null, null);
  };


  const Ten_Hundred = 10;
  const [TenAmount, setTenAmount] = useState('');
  const [TenValue, setTenXValue] = useState("");
  const TenChange = (e) => {
    const input = e.target.value;
    setTenXValue(input);
    const TencalculatedAmount = input ? Ten_Hundred * Number(input) : 0;
    setTenAmount(TencalculatedAmount);
    recalculateTotal(null, null, null, null, null, TencalculatedAmount, null, null, null);
  };

  const FiveRupe_Hundred = 5;
  const [FiveRupeAmount, setFiveRupeAmount] = useState('');
  const [FiveRupeValue, setFiveRupeXValue] = useState("");
  const FiveRupeChange = (e) => {
    const input = e.target.value;
    setFiveRupeXValue(input);
    const FiveRupecalculatedAmount = input ? FiveRupe_Hundred * Number(input) : 0;
    setFiveRupeAmount(FiveRupecalculatedAmount);
    recalculateTotal(null, null, null, null, null, null, FiveRupecalculatedAmount, null, null);
  };



  const TwoRupe_Hundred = 2;
  const [TwoRupeAmount, setTwoRupeAmount] = useState('');
  const [TwoRupeValue, setTwoRupeXValue] = useState("");
  const TwoRupeChange = (e) => {
    const input = e.target.value;
    setTwoRupeXValue(input);
    const TwoRupecalculatedAmount = input ? TwoRupe_Hundred * Number(input) : 0;
    setTwoRupeAmount(TwoRupecalculatedAmount);
    recalculateTotal(null, null, null, null, null, null, null, TwoRupecalculatedAmount, null);
  };

  const OneRupe_Hundred = 1;
  const [OneRupeAmount, setOneRupeAmount] = useState('');
  const [OneRupeValue, setOneRupeXValue] = useState("");
  const OneRupeChange = (e) => {
    const input = e.target.value;
    setOneRupeXValue(input);
    const OneRupecalculatedAmount = input ? OneRupe_Hundred * Number(input) : 0;
    setOneRupeAmount(OneRupecalculatedAmount);
    recalculateTotal(null, null, null, null, null, null, null, null, OneRupecalculatedAmount);

  };

  const [totalAmount, setTotalAmount] = useState('');

  const recalculateTotal = (Five_hund, Two_Hund, One_Hund, Fifty, Twnty, Ten_rupe, Five_Rupe, Two_Rpee, One_Rupee) => {
    const total = (Five_hund ?? FiveAmount) + (Two_Hund ?? TwoAmount) + (One_Hund ?? OneAmount) + (Fifty ?? FiftyAmount) + (Twnty ?? TwentyAmount) + (Ten_rupe ?? TenAmount) + (Five_Rupe ?? FiveRupeAmount) + (Two_Rpee ?? TwoRupeAmount) + (One_Rupee ?? OneRupeAmount);
    setTotalAmount(total);
  };


  const [advance1, setAdvance1] = useState('');
  const [advance2, setAdvance2] = useState('');
  const [credit, setCredit] = useState('');
  const [finalAmount, setFinalAmount] = useState('');


  const handleAdvance1Change = (e) => {
    setAdvance1(e.target.value);
  };

  const handleAdvance2Change = (e) => {
    setAdvance2(e.target.value);
  };

  const handleCreditChange = (e) => {
    setCredit(e.target.value);
  };


  const [QR, SetQR] = useState('');
  const [POS, SetPOS] = useState('');
  const [ALIP, SetALIP] = useState('');

  const QRChanage = (e) => {
    SetQR(e.target.value);
  };

  const QRChanage1 = (e) => {
    SetPOS(e.target.value);
  };

  const QRChanage2 = (e) => {
    SetALIP(e.target.value);
  };



  useEffect(() => {
    const updatedTotal = 
      (Number(totalAmount) || 0) + 
      (Number(advance1) || 0) + 
      (Number(advance2) || 0) + 
      (Number(credit) || 0) + 
      (Number(QR) || 0) + 
      (Number(POS) || 0) + 
      (Number(ALIP) || 0);
    
    setFinalAmount(updatedTotal > 0 ? updatedTotal : ""); // Set empty string if total is 0
    console.log(updatedTotal, "SSSSSSSSS");
  }, [totalAmount, advance1, advance2, credit, QR, POS, ALIP]);
  






  return (
    <div className='pump_warpper'>
      <div className="card p-4 shadow">
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-12 col-sm-6 col-md-3">
              <label htmlFor="year" className="form-label data_lable">Date</label>
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

            <div className="col-12 col-sm-6 col-md-3">
              <label htmlFor="pump" className="form-label data_lable ">Pump No</label>
              <select
                id="pump"
                className="form-select Create_data_input_text"
                onChange={(e) => SetSelectPump(e.target.value)}
                required
              >
                <option value="">Select Pump</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>

            <div className="col-12 col-sm-6 col-md-3">
              <label htmlFor="operatorname" className="form-label data_lable ">Operator Name</label>
              <select
                id="operatorname"
                className="form-select Create_data_input_text"
                onChange={(e) => OperatorName(e.target.value)}
                required
              >
                <option value="">Select Operator</option>
                <option value="sai">Sai</option>
                <option value="teja">Teja</option>
                <option value="kiran">Kiran</option>
              </select>
            </div>

            <div className="col-12 col-sm-6 col-md-3">
              <label htmlFor="shift" className="form-label data_lable ">Shift Name</label>
              <select
                id="shift"
                className="form-select Create_data_input_text"
                onChange={(e) => ShiftName(e.target.value)}
                required
              >
                <option value="">Select Shift</option>
                <option value="A">A</option>
                <option value="B">B</option>
              </select>
            </div>

          </div>
          <div className='text-center mt-4'>
            <button type="submit" className="save_btn_pump1">Submit</button>
          </div>
        </form>
      </div>

      <div className='pump_Master_warpper'>Account Master Entry</div>
      <div className='Petrol_lable'>Petrol Sales</div>
      <div className='qmr_warpper'>
        <div className='qmr_petrol_warpper1'>
          <div className='sub_qmr_petrol_warpper1'>
            <div className='sub_qmr_petrol_la_1'>
              <div className='sub_qmr_text'>01</div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>CMR</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>OMR</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>Sale</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>RS</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>Amount</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
          </div>
        </div>
        <div className='qmr_petrol_warpper1'>
          <div className='sub_qmr_petrol_warpper1'>
            <div className='sub_qmr_petrol_la_1'>
              <div className='sub_qmr_text'>02</div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>CMR</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>OMR</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>Sale</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>RS</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>Amount</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
          </div>
        </div>
        <div className='qmr_petrol_warpper1'>
          <div className='sub_qmr_petrol_warpper1'>
            <div className='sub_qmr_petrol_la_1'>
              <div className='sub_qmr_text'>03</div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>CMR</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>OMR</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>Sale</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>RS</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>Amount</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
          </div>
        </div>
        <div className='qmr_petrol_warpper1'>
          <div className='sub_qmr_petrol_warpper1'>
            <div className='sub_qmr_petrol_la_1'>
              <div className='sub_qmr_text'>04</div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>CMR</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>OMR</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>Sale</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>RS</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>Amount</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
          </div>
        </div>
      </div>

      <div className='Petrol_lable'>Speed Sales</div>
      <div className='Disel_qmr_warpper1'>
        <div className='qmr_petrol_warpper1'>
          <div className='sub_qmr_petrol_warpper1'>
            <div className='sub_qmr_petrol_la_1'>
              <div className='sub_qmr_text'>01</div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>CMR</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>O</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>Sale</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>RS</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>Amount</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
          </div>
        </div>
        <div className='qmr_petrol_warpper1'>
          <div className='sub_qmr_petrol_warpper1'>
            <div className='sub_qmr_petrol_la_1'>
              <div className='sub_qmr_text'>02</div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>CMR</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>OMR</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>Sale</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>RS</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>Amount</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
          </div>
        </div>


      </div>

      <div className='Petrol_lable'>Disel Sales</div>
      <div className='Disel_qmr_warpper'>
        <div className='qmr_petrol_warpper1'>
          <div className='sub_qmr_petrol_warpper1'>
            <div className='sub_qmr_petrol_la_1'>
              <div className='sub_qmr_text'>01</div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>CMR</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>OMR</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>Sale</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>RS</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>Amount</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
          </div>
        </div>
        <div className='qmr_petrol_warpper1'>
          <div className='sub_qmr_petrol_warpper1'>
            <div className='sub_qmr_petrol_la_1'>
              <div className='sub_qmr_text'>02</div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>CMR</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>OMR</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>Sale</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>RS</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
            <div className='sub_qmr_petrol_la_2'>
              <div className='data_lable'>Amount</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' /></div>
            </div>
          </div>
        </div>


      </div>

      <div className='pump_sales_warpper1'>
        <div className='pump_sales_t1'>
          <span className='Sales_lable'> Total Pump Sales :</span> <span className='Sales_input'><input className='qmr_data_input_text' value={totalpump} type='text' readOnly /></span>
        </div>
      </div>

      <div className='Petrol_lable'>Total sales</div>
      <div className='Total_qmr_warpper'>
        <div className='qmr_petrol_warpper1'>
          <div className='sub_qmr_petrol_warpper1'>

            <div className='number_warpper1'>
              <div className='number_warpper1_section1'>
                <div className='data_lable'>{Five_Hundred}</div>
                <div className='input_number_warpper1_section1'>
                  <div className='data_input_lable_1'><input className='qmr_data_input_text' type='text' placeholder='X2' value={FiveValue}
                    onChange={FiveChange} /></div>
                  <div className='data_input_lable_2'><input className='qmr_data_input_text' type='text' value={FiveAmount} style={{ backgroundColor: 'gray', color: 'white' }} /> </div>
                </div>
              </div>
              <div className='number_warpper1_section1'>
                <div className='data_lable'>{Two_Hundred}</div>
                <div className='input_number_warpper1_section1'>
                  <div className='data_input_lable_1' onChange={TwoChange}><input className='qmr_data_input_text' type='text' placeholder='X2' value={TwoValue} /></div>
                  <div className='data_input_lable_2'><input className='qmr_data_input_text' type='text' value={TwoAmount} style={{ backgroundColor: 'gray', color: 'white' }} /></div>
                </div>
              </div>
              <div className='number_warpper1_section1'>
                <div className='data_lable'>{One_Hundred}</div>
                <div className='input_number_warpper1_section1'>
                  <div className='data_input_lable_1' onChange={OneChange}><input className='qmr_data_input_text' type='text' placeholder='X2' value={OneValue} /></div>
                  <div className='data_input_lable_2'><input className='qmr_data_input_text' type='text' value={OneAmount} style={{ backgroundColor: 'gray', color: 'white' }} /></div>
                </div>
              </div>
            </div>


            <div className='number_warpper1'>
              <div className='number_warpper1_section1'>
                <div className='data_lable'>{Fifty_Hundred}</div>
                <div className='input_number_warpper1_section1'>
                  <div className='data_input_lable_1' onChange={FiftyChange}><input className='qmr_data_input_text' type='text' placeholder='X2' value={FiftyValue} /></div>
                  <div className='data_input_lable_2'><input className='qmr_data_input_text' type='text' value={FiftyAmount} style={{ backgroundColor: 'gray', color: 'white' }} /></div>
                </div>
              </div>
              <div className='number_warpper1_section1'>
                <div className='data_lable'>{Twenty_Hundred}</div>
                <div className='input_number_warpper1_section1'>
                  <div className='data_input_lable_1' onChange={TwentyChange}><input className='qmr_data_input_text' type='text' placeholder='X2' value={TwentyValue} /></div>
                  <div className='data_input_lable_2'><input className='qmr_data_input_text' type='text' value={TwentyAmount} style={{ backgroundColor: 'gray', color: 'white' }} /></div>
                </div>
              </div>
              <div className='number_warpper1_section1'>
                <div className='data_lable'>{Ten_Hundred}</div>
                <div className='input_number_warpper1_section1'>
                  <div className='data_input_lable_1' onChange={TenChange}><input className='qmr_data_input_text' type='text' placeholder='X2' value={TenValue} /></div>
                  <div className='data_input_lable_2'><input className='qmr_data_input_text' type='text' value={TenAmount} style={{ backgroundColor: 'gray', color: 'white' }} /></div>
                </div>
              </div>
            </div>

            <div className='number_warpper1'>
              <div className='number_warpper1_section1'>
                <div className='data_lable'>{FiveRupe_Hundred}</div>
                <div className='input_number_warpper1_section1'>
                  <div className='data_input_lable_1' onChange={FiveRupeChange}><input className='qmr_data_input_text' type='text' placeholder='X2' value={FiveRupeValue} /></div>
                  <div className='data_input_lable_2'><input className='qmr_data_input_text' type='text' value={FiveRupeAmount} style={{ backgroundColor: 'gray', color: 'white' }} /></div>
                </div>
              </div>
              <div className='number_warpper1_section1'>
                <div className='data_lable'>{TwoRupe_Hundred}</div>
                <div className='input_number_warpper1_section1'>
                  <div className='data_input_lable_1' onChange={TwoRupeChange}><input className='qmr_data_input_text' type='text' placeholder='X2' value={TwoRupeValue} /></div>
                  <div className='data_input_lable_2'><input className='qmr_data_input_text' type='text' value={TwoRupeAmount} style={{ backgroundColor: 'gray', color: 'white' }} /></div>
                </div>
              </div>
              <div className='number_warpper1_section1'>
                <div className='data_lable'>{OneRupe_Hundred}</div>
                <div className='input_number_warpper1_section1'>
                  <div className='data_input_lable_1' onChange={OneRupeChange}><input className='qmr_data_input_text' type='text' placeholder='X2' value={OneRupeValue} /></div>
                  <div className='data_input_lable_2'><input className='qmr_data_input_text' type='text' value={OneRupeAmount} style={{ backgroundColor: 'gray', color: 'white' }} /></div>
                </div>
              </div>
            </div>


          </div>
        </div>
        <div className='qmr_petrol_warpper1'>
          <div className='sub_qmr_petrol_warpper1'>
            <div className='dm_sub_qmr_petrol_la_2'>
              <div className='data_lable'>DM Amount</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' value={totalAmount} type='text' readOnly  /></div>
            </div>
            <div className='dm_sub_qmr_petrol_la_2'>
              <div className='data_lable'>Advance 1</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' value={advance1} onChange={handleAdvance1Change} /></div>
            </div>
            <div className='dm_sub_qmr_petrol_la_2'>
              <div className='data_lable'>Advance 2</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' value={advance2} onChange={handleAdvance2Change} /></div>
            </div>
            <div className='dm_sub_qmr_petrol_la_2'>
              <div className='data_lable'>Credit</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' value={credit} onChange={handleCreditChange} /></div>
            </div>
          </div>
        </div>

        <div className='qmr_petrol_warpper1'>
          <div className='sub_qmr_petrol_warpper1'>
            <div className='dm_sub_qmr_petrol_la_2'>
              <div className='data_lable'>QR Amount</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' value={QR} onChange={QRChanage} /></div>
            </div>
            <div className='dm_sub_qmr_petrol_la_2'>
              <div className='data_lable'>POS Amount</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' value={POS} onChange={QRChanage1} /></div>
            </div>
            <div className='dm_sub_qmr_petrol_la_2'>
              <div className='data_lable'>ALP Amount</div>
              <div className='data_input_lable'><input className='qmr_data_input_text' type='text' value={ALIP} onChange={QRChanage2} /></div>
            </div>
          </div>
        </div>
      </div>

      <div className='pump_sales_warpper1'>
        <div className='pump_sales_t1'>
          <span className='Sales_lable'> Shift Sales :</span> <span className='Sales_input'>
            <input className='qmr_data_input_text' value={finalAmount} type='text' readOnly />
          </span>
        </div>
      </div>

      <div className='save_warpper'>
        <div className='save_warpper_panle1'>
          <button type='button' className='save_btn_pump1'>Save</button>
          <button type='button' className='clear_btn_pump1'>Clear</button>
        </div>
      </div>



    </div>
  )
}



// const calculateTotal = (five_hundred, two_hundred, one_hundred, fifty, twenty, ten, five, two, one) => {
//   const total1 = (Number(five_hundred) || 0) + (Number(two_hundred) || 0) + (Number(one_hundred) || 0) + (Number(fifty) || 0) + (Number(twenty) || 0) + (Number(ten) || 0) + (Number(five) || 0) + (Number(two) || 0) + (Number(one) || 0);
//   setTotalAmount(total1);
