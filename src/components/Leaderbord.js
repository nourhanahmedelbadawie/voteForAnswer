import React ,{useContext} from "react";
import { store } from "../redux/store";

import  CardScoreView from './CardScoreView'

function Leaderbord() {

   
    const countAnswer_Question=(user)=>{
 return Object.keys(user.answers).length + user.questions.length
        }
        const { state, dispatch } = useContext(store);

let users=state.allPersons
users.forEach (el=>{
el.score=countAnswer_Question(el)
})

users.sort(function(a, b) {
    return b.score - a.score
})
console.log(users)

return (
    <div>
{
    users.map((el,i)=>{
        return (
            <section key={i}>
                <CardScoreView person={el}  />
            </section>
        )
    })
}
    </div>
)




}
export default Leaderbord