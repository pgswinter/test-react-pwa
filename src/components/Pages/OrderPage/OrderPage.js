import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class OrderPage extends PureComponent {

  state = {
    
  };

  componentDidMount = () => {
   
  }

  componentWillUnmount = () => {
  }

  render() {
    return (
      <div className="orderPage">
        Order Page
      </div>
    );
  }
}

// OrderPage.propTypes = {

// };

// const mapStateToProps = state => {
// };

// const mapDispatchToProps = dispatch => ({
// });

export default connect(
  // mapStateToProps,
  // mapDispatchToProps,
)(OrderPage);
