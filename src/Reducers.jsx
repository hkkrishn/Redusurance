//like Departments
import {createClaim,createPolicy,deletePolicy } from './ActionCreator';


export const claimsHistory = (oldListofClaims = [],action) =>{
  //two args are always passed in the exact same order
  //remember actions are like the form 
  if(action.type ==='CREATE_CLAIM'){
    //we care about this action (FORM)
    return [...oldListofClaims,action.payload];
  }

  //we dont care about this form
  return oldListofClaims;

};
//company initially has 100 dollars
export const accounting = (currentAssets = 100,action) =>{
  //two args are always passed in the exact same order
  //remember actions are like the form 
  if(action.type ==='CREATE_CLAIM'){
    //we care about this action (FORM)
    return currentAssets - action.payload.amountToCollect
  } else if (action.type === 'CREATE_POLICY'){
    return currentAssets + action.payload.amount
  }

  return currentAssets;
};

 export const policies = (listofPolicies = [],action) =>{
  if(action.type === 'CREATE_POLICY'){
    return [...listofPolicies,action.payload.name];
  } else if(action.type === 'DELETE_POLICY'){
    return listofPolicies.filter(name => name !== action.payload.name)
  }
   return  listofPolicies;
}