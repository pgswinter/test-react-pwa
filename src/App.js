import React, { Component, Suspense } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Switch } from "react-router-dom";
import routerConfig from "./configs/router";
import { dataSchema } from "./schema";
// import api from "./services/api";

import { reqData } from "./actions/dataActions";

import { OrderPageLoader, HomePageLoader } from "./loadable";

// import Header from "./components/Master/Header";
// import Footer from "./components/Master/Footer";

import "./styles/index.less";
import "./styles/fontawesome/css/all.css";
import "./styles/package/datepicker.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: {}
    };
  }

  componentDidMount() {
    this.props.reqData();
    // this.renderApi();
  }

  
  // asyncData = this.props.data.profile.name;
  // renderData = () => {
  //   return <h1>{this.asyncData}</h1>
  // }
  // renderApi = () => {
  //   api.TestImpl.get().then(data =>
  //     this.setState({ loading: false, data: data.data })
  //   );
  // };

  render() {
    const { data, dataLoading } = this.props;
    // const name = React.lazy(() => data.profile.name);
    let {
      profile: { name }
    } = dataSchema;
    if(dataLoading === false) {
      name = data.profile && data.profile.name;
    }

    // const { loading, data } = this.state;
    // let {
    //   profile: { name }
    // } = dataSchema;
    // if (loading) {
    //   console.log("loading...");
    // } else {
    //   name = data.data.profile.name;
    // }

    return (
      <React.Fragment>
        {/* <Suspense fallback={<h1>Loading name...</h1>}>
          {this.renderData()}
        </Suspense> */}
        {/* <Header /> */}
        <p>{name}</p>
        <hr />
        <div className="wrapper">
          <div className="container">
            <ul>
              <li>
                <Link to={routerConfig.order}>Order Page</Link>
              </li>
              <li>
                <Link to={routerConfig.home}>Home Page</Link>
              </li>
            </ul>
            <Switch>
              <Route
                path={routerConfig["home"]}
                exact
                render={props => <HomePageLoader {...props} />}
              />
              <Route
                path={routerConfig["order"]}
                exact
                render={props => <OrderPageLoader {...props} />}
              />
            </Switch>
          </div>
        </div>

        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  const {
    dataReducers: { data, loading }
  } = state;
  return {
    data,
    dataLoading: loading
  };
};

const mapDispatchToProps = dispatch => ({
  reqData: () => dispatch(reqData())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
