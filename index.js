var recipes = {};

var updateObjectWithKeyAndValue = function(object,key,value){
  var newObject = object;
  newObject[key] = value;
  return newObject;
}

var destructivelyUpdateObjectWithKeyAndValue = function(object,key,valuev){
  
  object[key] = value;
  return object;
}

