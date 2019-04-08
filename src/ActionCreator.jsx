//people dropping off a form

 export const createPolicy  = (name,amount) =>{
  return {
    //This object is the action we refer to thisas a form in our analogy
    type:'CREATE_POLICY',
    payload:{
      name,amount
    }
  };
}

export const deletePolicy  = (name) =>{
  return {
    //This object is the action we refer to thisas a form in our analogy
    type:'DELETE_POLICY',
    payload:{
      name
    }
  };
}

export const createClaim  = (name,amountToCollect) =>{
  return {
    //This object is the action we refer to thisas a form in our analogy
    type:'CREATE_CLAIM',
    payload:{
      name,amountToCollect
    }
  };
}