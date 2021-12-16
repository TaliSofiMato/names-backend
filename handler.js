"use strict"; 

module.exports.getNames = async (event) => {
  let x = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(getNamesFromDatabase()),
  };
return x
};

const getNamesFromDatabase =() => {
  return [  
      'Roman','Natalia','Randy','Alina','Francisco'
]}