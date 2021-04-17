import db from './firebase'
import { List, ListItem} from '@material-ui/core'


function Todo(props) {

    return (
        // <li>{props.text}</li>
        <List>
            <ListItem>
            <li className= "textStyle">{props.todo.todo}</li>
            </ListItem>
            <button className="buttonRemove" onClick ={event => db.collection('todos').doc(props.todo.id).delete()}>Remove Task</button>
        </List>
    )
}

export default Todo;

