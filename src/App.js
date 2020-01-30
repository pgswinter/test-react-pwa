import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { Switch } from "react-router-dom";
import routerConfig from "./configs/router";
import { schemaTest } from "./schema";
import api from "./services/api";

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
    this.renderApi();
  }

  renderApi = () => {
    api.TestImpl.get().then(data =>
      this.setState({ loading: false, data: data.data })
    );
  };

  render() {
    const { loading, data } = this.state;
    let {
      profile: { name }
    } = schemaTest;
    if (loading) {
      console.log("loading...");
    } else {
      name = data.data.profile.name;
    }

    return (
      <React.Fragment>
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

export default App;
