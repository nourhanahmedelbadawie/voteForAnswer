import {_getUsers , _getQuestions , _saveQuestion ,_saveQuestionAnswer} from '../data/data'


export function getAllQuestions(res){
    let questions=[]
        for (const el in res){
                questions.push(res[el])
      
      
              }

return questions
}

export function getAllUsers(res){ 
    let users=[]
  
  
          for (const el in res){
            users.push(res.[el])
  
  
          }
      
        return users


}
export function SaveQuestion(person, opt1, opt2){
 let res=   _saveQuestion( {
        author:person, optionOneText:opt1, optionTwoText:opt2
    })
    return res
}
export function SaveAnswer(person, qid ,answer){
    _saveQuestionAnswer( {
      
        authedUser:person, qid:qid, answer:answer
    })
}

