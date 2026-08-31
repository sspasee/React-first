 import Button from "./Button/Button"
 import { useState } from "react"
 import { differences } from "./data"
export default function Section(){
const [ contentType, setContentType ]= useState(null)

function handleClick(type){
  setContentType(type)
  console.log(contentType)

}
    return(
      <section>
          <h3>Чем мы отличаемся от других</h3>
      <Button isActive={contentType === 'discipline'} onClick={() => handleClick('discipline')}>Дисциплина</Button>
      <Button isActive={contentType === 'focus'} onClick={() => handleClick('focus')}>Фокус</Button>
      <Button isActive={contentType === 'grind'} onClick={() => handleClick('grind')}>Гринд</Button>

      { contentType && <p>{differences[contentType]}</p>}
      { !contentType && <div>Нажми на кнопку</div>}
      </section>
 )}