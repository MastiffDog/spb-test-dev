import React from 'react';
import {bindActionCreators} from "redux";
import actions from "../redux/actions/orders";
import connect from "react-redux/es/connect/connect";
import { Container, Row, Col, Button } from 'react-bootstrap';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

componentDidMount() {
  this.props.actions.getOrders();
console.log('props:',this.props.orders);
console.log('this.props:',this.props.ordersLoading);
    }


    render() {
      if (!this.props.ordersLoadedSuccessful) {
         return <h1 className="start">Подождите, информация загружается...</h1>
      }


      if (this.props.ordersLoadedSuccessful) {
        return (
             <div>
               <Container>
                   <Row>
                       <Col xs={4}>
                        <div className = 'leftProductList'>
                            {this.props.orders.map((obj,i) => {
                                  return <div key={i} className="leftOrders">
                                           <Row>
                                            <Col xs={1}>
                                              <div className={obj.Status}> </div>
                                            </Col>
                                            <Col xs={3}>
                                                <Button variant="light" onClick={()=>this.props.actions.getOrder(obj.id)}>Order#{obj.id}</Button>
                                            </Col>
                                            <Col xs={5}>
                                               <div className="leftBtns">Date: {obj.Date}</div>
                                            </Col>
                                            <Col xs={3}>
                                                <div className="leftBtns">{obj.Time}</div>
                                            </Col>
                                           </Row>
                                        </div>
                            })}
                        </div>
                        <div className = 'ProductStatus'>
                            <Row>
                                <Col xs={4}>
                                    <div className='completed'> </div>
                                </Col>
                                <Col xs={8}> <div className='greenText'> Complete </div></Col>
                            </Row>


                            <Row>
                                 <Col xs={4}>
                                    <div className='in_progress'> </div>
                                 </Col>
                                 <Col xs={8}> <div className='pinkText'> in progress </div></Col>
                            </Row>

                        </div>
                       </Col>

                       <Col xs={8}>
                           <Row>
                               <Col>
                                   <div className='order'>{(this.props.product) ?
                                       <div>
                                         <Row>
                                             <Col xs={2}>
                                                 <div className="rightText">Number:</div>
                                             </Col>
                                             <Col>
                                                 <div>Order# {this.props.currentOrder.id}</div>
                                             </Col>
                                         </Row>

                                           <Row>
                                               <Col xs={2}>
                                                   <div className="rightText">Date:</div>
                                               </Col>
                                               <Col>
                                                   <div>{this.props.currentOrder.Date} {this.props.currentOrder.Time}</div>
                                               </Col>
                                           </Row>

                                           <Row>
                                               <Col xs={2}>
                                                   <div className="rightText">Status:</div>
                                               </Col>
                                               <Col xs={1}>
                                                   <div className={this.props.currentOrder.Status}></div>
                                               </Col>
                                               <Col>
                                                   <div>{this.props.currentOrder.Status}</div>
                                               </Col>
                                           </Row>

                                           <Row>
                                               <Col xs={2}>
                                                   <div className="rightText">Total:</div>
                                               </Col>
                                               <Col>{this.props.total}</Col>
                                           </Row>
                                       </div> :
                                       <p className="rightText"> Click on Order to get the information</p>}</div>
                               </Col>
                           </Row>

                           <Row>
                               <Col>
                                   <div className='orderDetails'>{(this.props.product) ?
                                       <div>
                                       <Row>
                                           <Col xs={4}>
                                               <div className="rightText">Product name:</div>
                                           </Col>
                                           <Col xs={2}>
                                               Qty:
                                           </Col>
                                           <Col xs={2}>
                                               Price:
                                           </Col>
                                           <Col>
                                               Total:
                                           </Col>
                                       </Row>
                                           {this.props.selectedProductList.map((obj,i) => {
                                               return (
                                                   <Row key={i}>
                                                       <Col xs={4}>
                                                         <div className="rightText">Product# {obj.id}</div>
                                                       </Col>
                                                       <Col xs={2}>
                                                         <div>{obj.Qty}</div>
                                                       </Col>
                                                       <Col xs={2}>
                                                          <div>{obj.Price}</div>
                                                       </Col>
                                                       <Col>
                                                           <div>{obj.sum}</div>
                                                       </Col>
                                                   </Row>
                                               )
                                           })}
                                       </div> :
                                       <p className="rightText"> Click on Order to get the information</p>}</div>
                               </Col>
                           </Row>

                       </Col>
                   </Row>
               </Container>
             </div>
        );
    }
}}

const mapStateToProps = state => ({...state.order});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

const Main = connect (mapStateToProps, mapDispatchToProps)(MainPage);

export default Main;
