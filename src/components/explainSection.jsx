import WayTT from './WayTT'
import { ways } from './data'

export default function ExplainSection(){
    return (
      <section>
        <h3>Нужно гриндить до 20 сентебря</h3>
 
          <ul> {/* каждый элемент массива выводиться отдельно  */}
           {ways.map((way)=>(
          <WayTT key={way.id} {...way}/>   ))}
  
        </ul>
        </section>
           )
       }