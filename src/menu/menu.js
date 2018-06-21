import React, {Component} from 'react';
import {Button, Col, Row} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Cart from './cart';


const API = 'http://starlord.hackerearth.com/beercraft';

class Menu extends Component {
	constructor(props){
		super(props);
		const prevOrder = JSON.parse(localStorage.getItem('myData'));
		let st = new Set();
		prevOrder.map((item) =>{
			st.add(item);
		})
		console.log(st);
		this.state = {
			menuData: [],
			cart: st
		}	
	}
	componentWillMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ 
      	menuData: data,
      	}));
  	}
  	handleRowClick(row, isSelected) {
  		if(isSelected){
         if (this.state.cart.has(row)) {
            this.setState(() => {
                this.state.cart.delete(row);
                localStorage.setItem('myData',JSON.stringify(Array.from(this.state.cart)));
                console.log(localStorage.getItem('myData'));
            });
            this.forceUpdate();
        }
        else {
            this.setState(() => {
                this.state.cart.add(row);
                localStorage.setItem('myData', JSON.stringify(Array.from(this.state.cart)));
                console.log(localStorage.getItem('myData'));
            })
            this.forceUpdate();
            
        }
       }else{
       		if (this.state.cart.has(row)) {
            this.setState(() => {
                this.state.cart.delete(row);
                localStorage.setItem('myData',JSON.stringify(Array.from(this.state.cart)));
                console.log(localStorage.getItem('myData'));
            })
            this.forceUpdate();
        }
        else {
            this.setState(() => {
                this.state.cart.add(row);
                localStorage.setItem('myData', JSON.stringify(Array.from(this.state.cart)));
                console.log(localStorage.getItem('myData'));
                //console.log(this.state.cart);
            })
            this.forceUpdate();
       }
   	}
}
  	
	render(){
		//console.log(this.state.menuData);
		return(
			<div className="container-fluid" >
				<div>

				<Row className="mainrow">
					
                    <Col md={9}>
						<BootstrapTable data={this.state.menuData}
								selectRow={{
                                            mode: 'radio',
                                            hideSelectColumn: true,
                                            bgColor: 'grey',
                                            clickToSelectAndEditCell: true,
                                            onSelect: this.handleRowClick.bind(this)
								}}
								search={true}
								pagination
								>
								<TableHeaderColumn 
								width='70' 
								dataField='abv'
								dataSort={true}
								searchable={false}
								>ABV</TableHeaderColumn>
								<TableHeaderColumn 
								width='65' 
								dataField='ibu'
								dataSort={true}
								searchable={false}
								>IBU</TableHeaderColumn>
						        <TableHeaderColumn
						         width='65'
						         dataField='id'
						         isKey={true}
						         dataSort={true}
								 searchable={false}
						         >ID</TableHeaderColumn>
        						<TableHeaderColumn dataSort={true} dataField='name'>Name</TableHeaderColumn>
								<TableHeaderColumn 
								 dataSort={true}
								 searchable={false}
								 width='325'
								 dataField='style'
								 filter={ { type: 'TextFilter'} }
								 >Style</TableHeaderColumn>
								<TableHeaderColumn
								 dataSort={true}
								 searchable={false}
								 width='115'
								 dataField='ounces'>Ounces</TableHeaderColumn>
						</BootstrapTable>
					</Col>
					<Col md={3}>
						<Cart order={Array.from(this.state.cart)} 
						emptyCart={() => this.setState({cart: new Set()})} />
					</Col>
				</Row>
				</div>
			</div>
		);
	}
}
export default Menu;