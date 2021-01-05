import React, { useContext, useState } from "react";
import { store } from "./redux/store.js";
 import { BrowserRouter as Router, Route, Link, Switch ,Redirect } from 'react-router-dom'; 
import Signin from './components/signin'
import ErrorPage from './components/404'


import View from './components/View'


import "./App.scss";

function App() {
  const { state, dispatch } = useContext(store);
console.log(state.loginPerson)
  return (
    <div className="App" className="mt-2">
                <Router>
{/* 
      <button
        onClick={() =>
          dispatch({
            type: "ansquestion",
            payload: {f:"fffff",
          dd:11},
          })
        }
      >
        add
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "addquestion",
            payload:{f:"4ffgfghhgffdssc",
            dd:21111111111111111111},
            })
        }
      >
        min
      </button> */}





        
        <Switch> 
        <Route exact path="/" >

{ state.loginPerson ===""? (
    <Redirect to="/signin" />
  ) : (
    <Redirect to="/view" />

  )}
</Route>
        
        { state.loginPerson !=="" &&

        <Route exact path='/view' component={View} ></Route>
   


  }

          <Route exact path='/signin' component={Signin}></Route> 

          <Route path="/*"  component={ErrorPage} ></Route>
            
            

        </Switch> 

    
  


        </Router>


    </div>
  );
}

export default App;
