import React, {createContext, useReducer} from 'react';
import {getAllQuestions ,getAllUsers ,SaveQuestion ,SaveAnswer} from '../assets/helper/helpers'
import {_getUsers , _getQuestions , _saveQuestion ,_saveQuestionAnswer} from '../assets/data/data'


const initialState = {
  loginPerson:"",
question :getAllQuestions(_getQuestions()) ,
allPersons:getAllUsers(_getUsers())

};




const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'addquestion':
        console.log('===============addquestion Store==================')
        console.log(state.question)


        return   Object.assign({}, state, {
          question: state.question.concat(action.payload)
          
        })
        case 'answquestion':
     
     let newqueslist=     state.question.map(el=>{
     if( el.id===action.payload.id )  {
      if (action.payload.opt ==1 )
      {
      el.optionOne.votes.push(action.payload.author)
      return el
     }
    else if (action.payload.opt ==2)
     {

      el.optionTwo.votes.push(action.payload.author)
      return el
     }
    return el
     }
      else{
        return el
      }    
      })


      return   Object.assign({}, state, {
        question: newqueslist
        
      })
    

            case 'adduser':

              return Object.assign({}, state, {
                loginPerson: action.payload
                
              })

      default:
        return state;
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }






