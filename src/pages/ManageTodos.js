import { lazy, useState, useEffect } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { loadTodoListStart, loadPersonStart, loadCategoriesStart } from '../redux/action'

const OverViewTable = lazy(() => import('../components/Overview'));
const TodoForm = lazy(() => import('../components/TodoForm'));

function MangeTodos() {
    const [state, setState] = useState({
        todoId: 0
    })

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTodoListStart());
        dispatch(loadPersonStart());
        dispatch(loadCategoriesStart());
    }, [])

    const setTodoIdandAction = (id = 0) => {
        setState({
            ...state,
            todoId: id
        })
    }

    const { todoId } = state;

    return <ReactBootstrap.Container>
            <ReactBootstrap.Button className="bg-success m-2" onClick={e => setTodoIdandAction(0)}>CREATE NEW TODO</ReactBootstrap.Button>
        <ReactBootstrap.Col className='d-flex mx-2 mb-5'>
            <ReactBootstrap.Col className='col-md-8'>
                <OverViewTable
                    setTodoIdandAction={setTodoIdandAction}
                />
            </ReactBootstrap.Col>
            <ReactBootstrap.Col className='col-md-4'>
                <TodoForm
                    todoId={todoId}
                />
            </ReactBootstrap.Col>
        </ReactBootstrap.Col>
    </ReactBootstrap.Container>
}

export default MangeTodos;