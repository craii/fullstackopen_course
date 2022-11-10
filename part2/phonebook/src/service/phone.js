import React from "react"
import axios from "axios"
const apiBase = 'http://localhost:3001/persons'


const getNumber = () =>{
  const requests = axios.get(apiBase);
  return requests.then(response => response.data);

};

const addNumber = (newNumberObject) =>{
  const requests = axios.post(apiBase, newNumberObject);
  return requests.then(response => response.data);
};

const delNumber = (iD) =>{
  const requests = axios.delete(apiBase +`/${iD}`);
  return requests.then(response => response.data);
}; 

const updateNumber = (iD, newContact) =>{
  const requests = axios.put(apiBase +`/${iD}`, newContact);
  return requests.then(response => response.data);
};


const phoneService = {
                      getNumber: getNumber,
                      addNumber: addNumber,
                      delNumber: delNumber,
                      updateNumber: updateNumber,
                     };

export default phoneService;