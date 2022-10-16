const router = require("express").Router();


function valuechick(oldValue, newValue){
// Used in updating data fileds, it chicks if req contain value of specific filed 
  if (!newValue){
    return oldValue;
  }else {return newValue;}
}
module.exports = valuechick;
