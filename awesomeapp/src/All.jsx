// index.js

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Card from './Cards';
// import Sdata from './Sdata';
// import './index.css';
// import App from './App'




// ReactDOM.render( <App/>, document.getElementById('root')
// )
// -----------------------------------------------------------------

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App'
// import './index.css';



// ReactDOM.render( <App/>, document.getElementById('root') )
//====================================================================================

//App.jsx

// import React from 'react';
// import Card from './Cards';
// import Netflix from './Netflix';
// import Sdata from './Sdata';
// import Amazon from './Amazon';


// const favSeries = 'netflix';

// const App = () => (
//   <>

//     <h1 className="heading_style">List of top 5 Netflix Series</h1>

//     {(favSeries == "netflix")? <Netflix/>:<Amazon/>}

//   </>
// );

// export default App;

// -------------------------------------------------
// import React from 'react'
// import SlotMac from './SlotMac'




// const App = () => {
//   return (
//     <>
//       <h1 className="heading_style">
//         <span style={{ fontWeight: "bold" }}>Slot machine game</span>
//       </h1>
//       <div className="slotmachine">

//         <SlotMac x='smile' y='smile' z='smile'/><hr/>
//         <SlotMac x='sile  ' y='smile  ' z='smile  '/><hr/>
//         <SlotMac x='apple' y='smile' z='apple'/><hr/>

//         <button>😄</button>
        
//       </div>
//     </>
//   );

// }

// export default App; 

// -----------------------------------------

//digital clock

// const App = () => {

//     let time = new Date().toLocaleTimeString();
  
//     const [ctime, setCtime] = useState(time)
  
//     const updateTime = () => {
//       time = new Date().toLocaleTimeString();
//       setCtime(time);
//     }
  
//     setInterval(updateTime, 1000)
  
//     return (
//       <>
//         <h1 className="heading">{ctime}</h1>
//       </>
//     )
  
  
// }
//Hooks and Events "a bit more detailed"

// const App = () => {

//     const purple = 'yellow';
//     const [bg, setBg] = useState(purple);
//     const [name, setName] = useState('Push Me')
  
//     const bgChnage = () => {
//       let newBg = 'aqua';
//       setBg(newBg);
//       setName('Ouch 😮');
//     }
//     const bgBack = () => {
//       setBg(purple);
//       setName('Aiyo 😠');
//     };
  
//     return (
//       <>
//         <div style={{ backgroundColor: bg }}>
//           <button onMouseOver={bgChnage} onMouseLeave={ bgBack } >{name}</button>
//         </div>
//       </>
  
//     );
//   }
//--------------------------------------------------

// login form with single useState for multiple form inputs

// import React, { useState } from 'react'
// import './index.css'

// const App = () => {

//   const [fullname, setFullName] = useState({
//     fname: '',
//     lname: '',
//     email: '',
//     phn: '',
//     gender: ''
//   });

//   const inputEvent = (event) => {

//     // const value = event.target.value;
//     // const name = event.target.name;

//     const { value, name } = event.target;

//     setFullName((preValue) => {


//       return {
//         ...preValue,
//         [name] : value
//       }

//         // if (name === "fName"){
//         //   return{
//         //     fname: value,
//         //     lname: preValue.lname,
//         //     email: preValue.email,
//         //     phn: preValue.phn
//         //   }
//         // }
//         // else if (name === "lName"){
//         //   return{
//         //     lname: value,
//         //     fname: preValue.fname,
//         //     email: preValue.email,
//         //     phn: preValue.phn
//         //   }
//         // } 
//         // else if (name === "eMail"){
//         //   return{
//         //     lname: preValue.lname,
//         //     fname: preValue.fname,
//         //     email: value,
//         //     phn: preValue.phn
//         //   }
//         // } else if (name === "phN"){
//         //   return{
//         //     lname: preValue.lname,
//         //     fname: preValue.fname,
//         //     email: preValue.email,
//         //     phn: value
//         //   }
//         // } 
//       });
//   }

//   const onSubmits = (e) => {
//     e.preventDefault();
//     alert('Form Submitted 😄')
//   }



//   return (
//     <>
//       <h1>Hello!! {fullname.fname} {fullname.lname}</h1>
//       <p>{fullname.email}</p><br />
//       <p>{fullname.phn}</p><br/>
//       <p>{fullname.gender}</p><br />

//       <form onSubmit={onSubmits}>
//         Enter your firstname
//           <input type='text'
//           placeholder='Enter your name'
//           name='fname'
//           value={fullname.fname}
//           onChange={inputEvent}
//         /> <br />
//         Enter your lastname
//           <input type='text'
//           placeholder='Enter your name'
//           onChange={inputEvent}
//           name='lname'
//           value={fullname.lname}
//         /><br />
//           Enter your email
//           <input type='email'
//           placeholder='Enter your name'
//           onChange={inputEvent}
//           name='email'
//           value={fullname.email}
//         /><br />
//           Enter your Phone Number
//           <input type='number'
//           placeholder='Enter your name'
//           onChange={inputEvent}
//           name='phn'
//           value={fullname.phn}
//         /><br />
//         Enter your Gender
//           <input type='text'
//           placeholder='Enter your gender'
//           onChange={inputEvent}
//           name='gender'
//           value={fullname.gender}/>
//         <button>Submit 👍</button>
//       </form>
//     </>
//   );
// }

// export default App;





//=====================================================================



// indexedDB.css


// *{
//     box-sizing: border-box;
//     padding: 0;
//     margin: 0;
//     background-color: azure;
// }

// .heading_style{
//     padding: 30px 0;
//     text-align: center;
//     font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
//     text-transform: uppercase;
//     font-size: 13px;
//     letter-spacing: 2px;
//     font-weight: 500;
//     color:burlywood;
//     background-color: cadetblue;
//     font-size: 1.5rem;
//     margin-bottom: 30px;
// }

// .cards {
//     width: 100%;
//     height: auto;
// }

// .card {
//     margin: 6%;
//     transition: all 0.4s cubic-bezier(0.1075, 0.885, 0, 1);
//     background-color: #fff;
//     width: 21.25%;
//     border-radius: 12px;
//     box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
//     float:left;
// }

// .card:hover {
//     box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
//     transform: scale(1.05, 1.05);
// }

// .card_img{
//     width: 100%;
//     height: 225%;
//     border-bottom-left-radius: 12px;
//     border-top-right-radius: 12px;
// }

// .card_info{
//     background-color: #fff;
//     border-bottom-left-radius: 12px;
//     border-top-right-radius: 12px;
//     padding: 16px 24px 24px 24px;
// }

// .card_category{
//     font-family: Verdana, Geneva, Tahoma, sans-serif;
//     text-transform: uppercase;
//     font-size: 13px;
//     letter-spacing: 2px;
//     font-weight: 500;
//     color: #868686;
//     background-color: #fff;
// }

// .card_title{
//     margin-top: 5px;
//     margin-bottom: 10px;
//     font-family: Georgia, 'Times New Roman', Times, serif;
//     background-color: #fff;
//     text-transform: capitalize;
// }

// button{
//     padding: 5px 8px;
//     font-family: monospace;
//     text-transform: uppercase;
//     font-size: 13px;
//     letter-spacing: 2px;
//     font-weight: 500;
//     color: #868686;
//     background-color: #fff;
//     outline: none;
//     border: 1px solid black;
//     cursor: pointer;
// }



// @media (max-width: 768px){
//     .card{
//         float: none;
//         margin: 5%;
//         width: 90%;
//     }
// }
// --------------------------------------------------------
// *{
//     box-sizing: border-box;
//     padding: 0;
//     margin: 0;
//     background-color: rgb(211, 185, 154);
//     font-family: monospace;
// }

// div{
//     width: 100%;
//     height: 100vh;
//     background: indianred;
//     display:flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
// }

// form{
//     width: 100%;
//     height: 100vh;
//     background: indianred;
//     display:flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
// }

// h1{
//     color: wheat;
//     background: transparent;
//     text-shadow: 0 2px 2px black;
//     margin-top: 75px;
// }

// input{
//     width: 50%;
//     padding: 10px 20px;
//     border: none;
//     outline: none;
//     margin: 20px 0;
//     text-align: center;
// }

// button{
//     text-transform: uppercase;
//     padding: 0 20px;
//     background: #9b59b6;
//     color: blanchedalmond;
//     border: 2px solid whitesmoke;
//     outline: none;
//     border-radius: 5px;
//     cursor: pointer;
// }


//:;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
//todo list project
// import React, {useState} from 'react'
// import ToDoLists from './ToDoLists'

// const App = () => {

//   const [inputList, setInputList] = useState()

//   const [items, setItems] = useState([])



//   const itemEvent = (e) => {
//     setInputList(e.target.value);
//   }

//   const onSubmits = () =>{
//     setItems((oldItems) => {
//       return [...oldItems, inputList];
//     })

//     setInputList("");
//   }

//   const deleteItems = (id) => {
//     setItems((oldItems)=>{
//       return oldItems.filter((arrElem, index)=>{
//         return index !== id;
//       })
//     })
// }
  

//   return(
//   <>
//     <div className="main_div">
//       <div className="center_div">
//         <br/>
//           <h1>ToDo List</h1>
//           <br/>
//           <input type='text' 
//           placeholder='Add an item' 
//           onChange = {itemEvent} 
//           value = {inputList}
//           /> 
//           <button onClick={onSubmits}> + </button>
//           <ol>
//             {items.map((itemVal, index) => {
//               return <ToDoLists 
//               key={index} 
//               id={index}
//               text = {itemVal}
//               onSelect = {deleteItems}
//               />;
//             })}
//           </ol>
//       </div>
//     </div>
//   </>

// )}

// export default App;

//index.css
/* * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Times New Roman', Times, serif;
}


.main_div{
    width: 100%;
    height: 100vh;
    background: rgb(145, 137, 209);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.center_div{
    width: 45%;
    height: 80vh;
    background-color: rgb(238, 216, 187);
    box-shadow: 5px 5px 25px 3px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
}

h1{
    color: whitesmoke;
    background: transparent;
    background-color: rgb(225, 112, 240);
    padding: 6px 0 2px 0;
    margin-bottom: 10px;
    box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
}

input{
    text-align: center;
    height: 30px;
    top: 10px;
    border: none;
    background: transparent;
    font-size: 20px;
    font-weight: 500;
    width: 60%;
    border-bottom: 2px solid purple;
    outline: none;
}

button {
    min-height: 40px;
    width: 40px;
    border-radius: 360px;
    border-color: transparent;
    background-color: violet;
    color: wheat;
    font-size: 40px;
    border: none;
    outline: none;
    margin-left: 10px;
    box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
}
 button:hover{
     background-color: rgb(45, 105, 105);
}


ol{
    margin-top: 30px;
}

ol li{
    padding-left: 0px;
    text-align: left;
    font-size: 20px;
    font-weight: 500;
    min-height: 40px;
    display: flex;
    align-items: center;
    color: black;
    text-transform: capitalize;
}

.todo_style{
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.todo_style .fa-times {
    width: 20px;
    height: 20px;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: yellowgreen;
    border-radius: 50%;
    margin: 0 15px 0 35px;
    color: blanchedalmond;
    box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
}

.todo_style .fa-times:hover{
    background-color: crimson;
}

.todo_style .fa-times:hover .list_style {
    color: crimson;
}

@media (max-width :768px){
    .center_div{
        width: 55%;
    }

    .todo_style .fa-times{
        margin: 0 10px 0 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button{
        margin-left: 5px;
        min-height: 40px;
        width: 40px;
        color: #fff;
        font-size: 30px;
    }
} */

