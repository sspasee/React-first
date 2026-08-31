import { useEffect, useState,useCallback} from "react";
import Button from "./Button/Button";
import Modal from "./Model/Modal";

export default function EffectSection(){
    // function openModel() {}
    const [ modal, setModal] = useState(false)
    const [ loading, setLoading] = useState(false)
    const [ users, setUsers] = useState([])
    // function openModal() {
    //     setModal(true)
    // }

    const fetchUsers = useCallback( async () => {
      setLoading(true)
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      const users = await response.json()
      setUsers(users)
      setLoading(false)
    },[])

    
    useEffect(() => {
      FetchUsers()
    }, [])

    return (
        <section>
        <h3>
            Effects
        </h3>
        <Button onClick={() => setModal(true)}>Открыть информацию </Button>
        <Modal open={modal}>
            <h3>Hello from Model</h3>
            <p>
                Промис (Promise в JavaScript) — 
                это специальный объект, который представляет результат асинхронной операции, которая завершится в будущем.
                Представьте его как «обещание» доставить данные из магазина: заказ оформлен, но товар будет позже.
            </p>
            <Button onClick={() => {setModal(prev => {setModal(!prev)})}}>Close modal</Button>
        </Modal>

        { loading && <p>Loading...</p>}
        { !loading && <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>}
        </section>
    )
}