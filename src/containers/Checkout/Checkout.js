import React, { Component } from 'react';
import ContactData from './ContactData/ContactData';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  render() {
    let summary = <Redirect to='/' />;
    if (this.props.ings) {
      summary = (
        <div>
          <CheckoutSummary
            ingredients={this.props.ings}
            checkoutContinued={this.checkoutContinuedHandler}
            checkoutCancelled={this.checkoutCancelledHandler}
          />
          <Route
            path={this.props.match.path + '/contact-data'}
            component={ContactData}
          />
        </div>
      );
    }
    return summary;
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
  };
};

export default connect(mapStateToProps)(Checkout);
