import axios from 'axios';
import './pay.css'
import { useState} from 'react';

function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

const Pay = () => {


    const [amount,setAmount]  = useState("");
 

    async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

        let data;
        try{
       
           
            var body = {
                key:"rzp_test_pBr97twzdijv1J",
                secret:"OvOCDUDLguYCOOvlvaYqr2EF",
                amount: amount
                
            };
            console.log(body);
           await axios.post("https://payment-gateway-02.herokuapp.com/order",body,{
               headers:{'Access-Control-Allow-Origin': '*'}
           }
            ).then((response)=>{
                // console.log(response);
                data = response.data;
                
            })
        }catch(err){
            console.log(err)
        }

		const options = {
			key:  'rzp_test_pBr97twzdijv1J' ,
			amount: amount,
			order_id: data,
			name: 'Donation',
			description: 'Thank you for nothing. Please give us some money',
			image: 'https://www.carlogos.org/car-logos/tesla-logo-2000x2890.png',
			handler: function (response) {
                alert("Payment Successful! Thank You")
				console.log(response.razorpay_payment_id)
				console.log(response.razorpay_order_id)
				console.log(response.razorpay_signature)
			},
			prefill: {
				name:'Srijan Majumdar',
				email: 'srjnmajumdar8@gmail.com',
				contact: '9330427421'
			},
            timeout: 240,
            theme: {'color': '#6bc7eb', 'backdrop_color': '#bde4eb'}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}

    return ( 
        <div className="centre">
        <div className="image">
            <img src="https://www.carlogos.org/car-logos/tesla-logo-2000x2890.png" alt="" width="250" height="90%"  />
        </div>
        <div className="pay-desc">
            <div className="pay-title">
                Snehodiya
            </div>
            <div className="pay-dist">
            Distance: 9 Kms
            </div>
            <div className="pay-res">
            Residents: 100 people
            </div>
            <div className="pay-details">
            This is a description of the old age home. This would convince people to donate us a lot of money. Do you agree?
            </div>
            
            <div className="pay-amt">
            <input  type="text" id="name" name="lastname" placeholder="Donate for a cause" className="pay-input"  onChange={(e)=> {setAmount((e.target.value*100).toString()); }} ></input>
            </div>
            <div className="pay" onClick={displayRazorpay}>
                Pay with Razorpay
            </div>
        </div>
    </div>
     );
}
 
export default Pay;