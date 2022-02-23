// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  let defaultArr = contacts.slice(0, 5);
  const [contactArr, setContactArr] = React.useState(defaultArr);
  const [ascending, setAscending] = React.useState(true);

  const SortByName = () => {
    let contactArrCopy = [...contactArr];
    if (ascending) {
      contactArrCopy.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      contactArrCopy.sort((a, b) => b.name.localeCompare(a.name));
    }
    setContactArr(contactArrCopy);
    setAscending(!ascending);
  };

  const GenerateRandom = () => {
    let randomIndex = Math.floor(Math.random() * contacts.length);
    let newValue = true;

    contactArr.forEach((contact) => {
      if (contact.name === contacts[randomIndex].name) {
        console.log(contact.name);
        newValue = false;
        console.log(newValue);
      }
    });

    if (!newValue) {
      GenerateRandom();
    } else {
      setContactArr(contactArr.concat(contacts[randomIndex]));
    }
  };
  const IterateContacts = () => {
    return contactArr.map((contact) => {
      return (
        <tr>
          <th>
            <img src={contact.pictureUrl} alt="not found" />
          </th>
          <th>{contact.name}</th>
          <th>{contact.popularity}</th>
          <th>{contact.wonEmmy ? "🏆" : ""}</th>
          <th>{contact.wonOscar ? "🏆" : ""}</th>
          <th>
            <button></button>
          </th>
        </tr>
      );
    });
  };
  return (
    <div className="App">
      <button
        onClick={() => {
          GenerateRandom();
        }}
      >
        Add random contact
      </button>
      <button
        onClick={() => {
          SortByName();
        }}
      >
        Sort alphabetically {ascending ? "ascending" : "descending"}
      </button>
      <table>
        <tr>
          <th>Photo</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Actions</th>
        </tr>
        <IterateContacts />
      </table>
    </div>
  );
}

export default App;
