import React,  {Component} from 'react';
import {Alert,Button, Col, Row, Panel,ListGroup,ListGroupItem} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import FaTrash from 'react-icons/lib/fa/trash'

class Cart extends Component {
  constructor(props){
    super(props);
    console.log(JSON.parse(localStorage.getItem('myData')));
    this.state = {
      cart: JSON.parse(localStorage.getItem('myData')),
      stateUpdate: false,
      total: 0
    };
    
  }
  componentWillReceiveProps(nextProps){ 
      const items = nextProps.order;
      this.setState({
       cart: items,
       stateUpdate:true
      });
    
  }
    showAlert() {
        alert("order deleted");
        this.props.emptyCart();  
      }
      addOrders(event) {
        event.preventDefault()
        this.setState({orderPlace: true})
        this.props.emptyCart()
      }

      handleAlertDismiss() {
        this.setState({
            orderPlace: false
        })
      }
      showSuccess() {
        if (this.state.orderPlace) {
            return (
                <Alert bsStyle={'success'} onDismiss={this.handleAlertDismiss.bind(this)}>Order Placed!</Alert>
            )
        }
      }
	render(){
    //console.log(this.state.cart);
		return(
			<Panel>
                  <Panel.Heading>
                      <div className="order-item">
                          <h5 className="h">Your Cart</h5>
                          <Button className="qbutton" onClick={() => this.showAlert()}><FaTrash /></Button>
                      </div>
                  </Panel.Heading>
                  <Panel>
                  {this.showSuccess()}
                  <BootstrapTable data={this.state.cart} keyField="name">
                            <TableHeaderColumn dataField='name'
                                               dataSort={true}
                            >Name</TableHeaderColumn>
                  </BootstrapTable>
                  </Panel>
                  <Button onClick={this.addOrders.bind(this)} bsStyle="success">Checkout</Button>     
      </Panel>
		)
	}
}

export default Cart;