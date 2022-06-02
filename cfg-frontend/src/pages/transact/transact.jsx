import './transact.css'
import axios from 'axios'

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

const Transact = () => {

    async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		// const data = await fetch('https://payment-gateway-02.herokuapp.com/order', { 
        //     method: 'POST',
        //     body:{
        //         'key':'rzp_test_0vyTqZvuheiSbO',
        //         'secret':'vLUQcwqZM64yX9qEhziHIzXG',
        //         'amount': '69'
        //     },
            
        //  }).then((t) =>
		// 	t.json()
		// )
        let data;
        try{
           await axios.post("https://payment-gateway-02.herokuapp.com/order",
            {
                key:"rzp_test_pBr97twzdijv1J",
                secret:"OvOCDUDLguYCOOvlvaYqr2EF",
                amount: 690
                
            }).then((response)=>{
                // console.log(response);
                data = response.data;
                
            })
        }catch(err){
            console.log(err)
        }

		const options = {
			key:  'rzp_test_pBr97twzdijv1J' ,
			amount: 690,
			order_id: data,
			name: 'Donation',
			description: 'Thank you for nothing. Please give us some money',
			image: 'https://www.carlogos.org/car-logos/tesla-logo-2000x2890.png',
			handler: function (response) {
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
    <div className='pay' onClick={displayRazorpay}>Pay</div>
     );
}
 
export default Transact;