import React, { Component } from 'react';
import PaymentService from '../services/PaymentService';

class Payment extends Component {
    constructor(props) {
        super(props);

        this.state ={
            payment:[]
        }
    }
    componentDidMount(){
        PaymentService.getPayment().then((res) =>{
            this.setState({payment: res.data})
        });
    }

    render() { 
        return (
            <div className='container all_forms'>
                <h2 className='text-center fw-bold'>PAYMENT LIST</h2>
                <div className='row'>
                    <div>
                        <table className='table table-stripped table-bordered table-hover'>
                            <thead>
                                <tr>
                                    <th>Payment ID</th>
                                    <th>Amount</th>
                                    <th>Paid Date</th>
                                    <th>Payment Method</th>
                                    <th>Refference No.</th>
                                    <th>Student ID</th>
                                    <th>Course ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.payment.map(
                                        payment =>
                                        <tr key = {payment.paymentid}>
                                            <td>{payment.paymentid}</td>
                                            <td>{payment.amount}</td>
                                            <td>{payment.paydate}</td>
                                            <td>{payment.payment_method}</td>
                                            <td>{payment.refno}</td>
                                            <td>{payment.sid}</td>
                                            <td>{payment.cid}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
         );
    }
}
 
export default Payment;