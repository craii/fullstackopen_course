import { useState, useEffect } from 'react'
import axios from 'axios'
import Numbers from './components/Numbers'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import phoneService from './service/phone'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      phone: '040-1234567',
      id: 0}
  ]);
  const [filteredPersons, setFilterPerson] = useState([]);
  const [index, setIndex] = useState(1);
  const [newName, setNewName] = useState('Type a name');
  const [newNum, setNewNum] = useState('Enter phone number');
  const [fText, setFtext] = useState('search');
  const [message, setMessage] = useState(null);
  const [isShow, setShow] = useState(false);
  const [notificationClass, setClass] = useState('error')


  // the key number was replaced by phone instead, check db.json for detail
  const effectHook = () => {
    phoneService.getNumber().then(
      (initPhones) => {
        setPersons(initPhones);
        setIndex(initPhones.length + 1);
      }
    );
  };
  useEffect(effectHook,[]);


  const addContact = (event) => {
    event.preventDefault();
  };


  const onNameChangeHandler = (event) => {
    const targetText = event.target.value;
    console.log(targetText);
    setNewName(targetText);
  };


  // onCompositionEnd={onCompositionEndHandler}
  // for Chinese , that's a necessity and will be better, thank google
  const onCompositionEndHandler = (event) => {
    const targetText = event.target.value;
    console.log("composition has ended", targetText);
    setNewName(targetText);
    for (const person of persons){
      if (person.name === targetText){
        alert(person.name + 'is already added to phonebook!')
      };
    };
  };


  const onNumberChangeHandler = (event) => {
    const targetNumber = event.target.value;
    setNewNum(targetNumber);
    console.log(targetNumber);
  };


  const onClickHandler = () => {
    
    const newPerson = {
      name: newName,
      phone: newNum,
      id: index,
    };
    setIndex(index + 1);

    const contact = persons.find(c => c.name.toUpperCase() === newPerson.name.toUpperCase());
    console.log("find contact:", contact)
    
    // phoneService.addNumber(newPerson).then(
    //   (Persons) =>{
    //     setPersons(persons.concat(Persons));}
    // );
    // setNewName('Type a name');
    // setNewNum('Enter phone number');
    // console.log("当前通讯录", persons);


    if (contact === undefined){
      phoneService.addNumber(newPerson).then(
        (Persons) =>{
          setPersons(persons.concat(Persons));}
      );
      setNewName('Type a name');
      setNewNum('Enter phone number');
      setMessage(`added ${newPerson.name}`);
      setClass('info');
      setTimeout(()=>setMessage(null), 3000);
      console.log("当前通讯录", persons);
    }else{

      const winMsg = window.confirm(contact.name + ' is already added to phonebook! \n replace the old number with a new one?') 

      if (winMsg) {
          const changedContact = {...contact, phone: newPerson.phone};
          phoneService.updateNumber(contact.id, changedContact).then(
            (response) =>{
              setPersons(persons.map(con => con.id !==contact.id ? con : response));
              setMessage(`${newPerson.name}'s phone number has been changed`);
              setClass('info');
              setTimeout(()=>setMessage(null), 3000);
            }
          ).catch(
            ()=>{
            setMessage(`infomaiton of ${newPerson.name} has been removed form server`);
            setClass('error');
            setTimeout(()=>setMessage(null), 3000);}
          );
         };
    };
  };


  const onFilterChangeHandler = (event) => {
    const text = event.target.value;
    setFtext(text);
    const personFilter = persons.filter(person => person.name.toUpperCase().indexOf(text.toUpperCase()) >= 0);
    console.log('text', text, text.toUpperCase());
    setFilterPerson(personFilter);
  };

  const onDeleteHandler = (personObj) => {
    const name = personObj.name;
    const iD = personObj.id;
    const msg = window.confirm(`do you really want to DELETE ${name} ?`);
    if (msg){
      phoneService.delNumber(iD).then(
        (response) => {
          console.log(response)
          console.log(response.data)
        }
      );

      window.location.reload(true);
      setMessage(`deleted ${name}`);
      setClass('info');
      setTimeout(()=>setMessage(null), 4000);
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} isShow={isShow} className={notificationClass}/>
      <Filter value={fText} onChange={onFilterChangeHandler}/>
      <h2>Add a new </h2>
      <PersonForm addContact={addContact}
                  newName={newName}
                  onNameChangeHandler={onNameChangeHandler}
                  onCompositionEndHandler={onCompositionEndHandler}
                  newNum={newNum}
                  onNumberChangeHandler={onNumberChangeHandler}
                  onClickHandler={onClickHandler}
                  />
      <h2>Numbers</h2>
      <Numbers person={persons} filteredPersons={filteredPersons} onDelete={onDeleteHandler}/>
    </div>
  )
}

export default App;

  // const onClickHandler = () => {
  //   const newPersons = persons.concat({
  //     name: newName,
  //     phone: newNum,
  //     id: index,
  //   });
  //   setIndex(index + 1);
  //   setPersons(newPersons);
  //   setNewName('Type a name');
  //   setNewNum('Enter phone number');
  //   console.log("当前通讯录", persons);
  // };
