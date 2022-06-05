import React,{Component}from "react"
import ReactDOM from 'react-dom'
// import {table} from 'react-bootstrap'
class Customer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            error:null,
            customer:[]
        };
    }
    componentDidMount(){
        const apiUrl='http://customerdeepak.com/customers';
    // console.log(apiUrl);
// fetch(apiUrl);
fetch(apiUrl,{ mode: "cors",})

        .then(res=>res.json())
        .then(
            (result)=>{
                this.setState({
                    customer:result
                })
            },
            (error)=>{
                this.setState({error})
            }
            )
         } 


  render(){
    const{error,customer}=this.state;
    if(error){
        return(
            <div>error:{error.message} </div>
            );
    } else {
        return(
        <div>
                <h2>Customer List</h2>
                <table>
                        <thead>
                        <tr>
                            <th>#ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                        </tr>
                        </thead>
                        {customer.map(customer => (
                      <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.address}</td>
                      </tr> 
                   ))}
                </table>
        </div>
        );
       }

     }
    }
export default Customer;