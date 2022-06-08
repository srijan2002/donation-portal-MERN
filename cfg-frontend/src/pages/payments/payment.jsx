import './payments.css'
import axios from 'axios';
import { useState,useEffect } from 'react';
import {BsFillArrowUpRightSquareFill} from 'react-icons/bs'

const Payments = () => {
    const [list,setList] = useState([]);
    const [pay,setPay] = useState(null);
    const getPayments = async ()=>{
        const res = await axios.post('http://localhost:3001/payments',{
            email:"srjnmajumdar8@gmail.com"
        });
        setList(res.data);
     }
 
    useEffect(()=>{
        getPayments();
    },[])

    const setPayDetail = (index)=>{
          setPay(list[index]);
    }
    
    return ( 
        <div className='payment-body'>
          <div className="pay-list">
              <div className="title">Payment History</div>
            {
                list!==[] && list.map((item,index)=>(
                    <div className="pay-item" id={item._id}>
                 <div className="wrap">
                 <div className='card-name'>{item.receiver}</div>
                  <div className="card-desc">Status: <b>Captured</b></div>
                 </div>
                 <div className="icon">
                    <BsFillArrowUpRightSquareFill size={30} onClick={()=>{setPayDetail(index)}}/>
                 </div>
              </div>
                ))
            }
            {
                list===[] && <div className="title">No transactions</div>
            }
          </div>
          <div className="pay-detail">
          <div className="title">Details</div>
          { pay!==null &&<div className="detail-amt">Amount: <b>INR {pay['amount']}</b></div>}
         {  pay!==null &&<div className="detail-amt">Receiver: <b>{pay['receiver']}</b></div>}
          { pay!==null &&<div className="detail-amt">Payment Method: <b>{pay['method']}</b></div>}
          { pay!==null &&<div className="detail-amt">Payment ID: <b>{pay['payment_id']}</b></div>}
          <div className="thank">Thank You ❤️</div>
          </div>
        </div>
     );
}
 
export default Payments;