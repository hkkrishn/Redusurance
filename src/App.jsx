import React, { Component } from 'react';
import 'semantic-ui-react';
import {createClaim,createPolicy,deletePolicy } from './ActionCreator';
import {claimsHistory,policies,accounting} from './Reducers';
import { createStore,combineReducers } from 'redux';
import { create } from 'domain';

const ourDepartments = combineReducers({
  accounting:accounting,
  claimsHistory:claimsHistory,
  policies:policies
})
const store = createStore(ourDepartments);


//create the store
store.dispatch(createPolicy('Hari',1000))
store.dispatch(createPolicy('Meeka',1000))
store.dispatch(createPolicy('Boo',1000))

store.dispatch(createClaim('Meeka',420))
//get data

console.log(store.getState())



class App extends Component {
  render() {
    return (
      <div>
          <h1 className = "ui header">
            Insurance Company!
          </h1>
      </div>
    );
  }
}

export default App;
