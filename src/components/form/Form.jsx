import List from "../list/List";
import { useState } from "react";
import './form.css'

function Form() {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [toDos, setToDos] = useState([])
    const onChangeT = (e) => setTitle(e.target.value)
    const onChangeB = (e) => setBody(e.target.value)
    const onRemove = id => {
        setToDos(toDos.filter(toDos => toDos.id !== id));
    };
    const onDone = (id) => {
        setToDos(toDos.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    done: !item.done,
                };
            } else {
                return { ...item };
            }
        }))
    }
    const onClick = (e) => {
        e.preventDefault();
        setToDos([
            ...toDos,
            {
                id: toDos.length + 1,
                text: title,
                body: body,
                done: false,
            }
        ])
        setTitle("");
        setBody("");
    }
    return (
        <div>
            <form action="">
                <input
                    type="text"
                    onChange={onChangeT}
                    value={title}
                    placeholder="Title"
                />
                <input
                    type="text"
                    onChange={onChangeB}
                    value={body}
                    placeholder="contents"
                />
                <button onClick={onClick}>submit</button>
            </form>
            <List toDos={toDos} onRemove={onRemove} onDone={onDone}></List>
        </div>
    )
}
export default Form