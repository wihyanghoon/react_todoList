import './list.css'

function List({ toDos, onRemove, onDone }) {
    if (toDos !== undefined) {
        return (
            <ul className='list_card'>
                <h1>Working</h1>
                {toDos.map((item, i) => {
                    if (!item.done) {
                        return (
                            <li key={i}>
                                <h5>{item.text}</h5>
                                <p>{item.body}</p>
                                <div className='btn_area'>
                                    <button onClick={() => (onRemove(item.id))}>Delete</button><button onClick={() => onDone(item.id)}>Done</button>
                                </div>
                            </li>
                        )
                    } else {
                        return null;
                    }   
                })}
                
                <h1>Done</h1>
                {toDos.map((item, i) => {
                    if (item.done) {
                        return (
                            <li key={i}>
                                <h5>{item.text}</h5>
                                <p>{item.body}</p>
                                <div className='btn_area'>
                                    <button onClick={() => (onRemove(item.id))}>Delete</button><button onClick={() => onDone(item.id)}>Cancle</button>
                                </div>
                            </li>
                        )
                    } else {
                        return null;
                    }
                    
                })}
            </ul>
        )
    }
}
export default List