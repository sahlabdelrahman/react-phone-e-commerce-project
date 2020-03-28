import React, { Component, Fragment } from 'react';
import Title from '../Title';
import CartColums from './CartColums';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';
import CartList from './CartList';
import CartTotal from './CartTotal';
class Cart extends Component {
    render(){
        return(
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if(cart.length > 0){
                            return(
                                <Fragment>
                                    <Title name='your' title='cart' />
                                    <CartColums />
                                    <CartList value={value}/>
                                    <CartTotal value={value} history={this.props.history} />
                                </Fragment>
                            );
                        } else {
                            return <EmptyCart />;
                        }
                    }}
                </ProductConsumer>
            </section>
        );
    }
}

export default Cart ;