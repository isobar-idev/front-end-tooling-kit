import React from 'react';
import {Route} from 'react-router';

// Require App Modules
import {setUrlState} from './creators';
import Wrapper from './layouts/wrapper';
import Products from './components/products/component';

let App = React.createClass({
  componentWillReceiveProps: function(props){
    let path = props.location.pathname + props.location.search;
    setUrlState(props.params, props.location.query, path);
  },
  render: function() {
    return (
      <Wrapper>
        {this.props.children}
      </Wrapper>
    );
  }
});

export let routes = (
  <Route component={App} path="/">
    <Route component={Products} path="products(/:categoryId)"/>
  </Route>
);