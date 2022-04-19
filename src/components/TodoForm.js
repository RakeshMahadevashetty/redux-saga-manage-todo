import { useState, useEffect, useMemo } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getTodoStart, postTodoStart, updateTodoStart } from '../redux/action';

const initialState = {
    title: '',
    description: '',
    category: 0,
    assignTo: 0,
    startDate: '',
    endDate: ''
}

const TodoForm = (props) => {
    const [state, setState] = useState({ ...initialState });

    const { persons, categories, individualTodo } = useSelector(state => state.data);

    const dispatch = useDispatch();

    const { title, description, category, assignTo, startDate, endDate } = state;

    const { todoId } = props;

    const onChangeAction = (e) => {
        const { name, value } = e.target;

        setState({
            ...state,
            [name]: value
        })
    }

    useEffect(() => {
        todoId > 0 ? dispatch(getTodoStart(todoId)) : clearForm();
    }, [])

    useEffect(() => {
        todoId > 0 ? dispatch(getTodoStart(todoId)) : clearForm();
    }, [todoId])

    useEffect(() => {
        Object.keys(individualTodo).length > 0 ? setState(individualTodo) : clearForm();
    }, [individualTodo])

    const submitForm = () => {
        if (title && description && category && assignTo && startDate && endDate) {
            todoId < 1 ? dispatch(postTodoStart({ ...state })) : dispatch(updateTodoStart({ ...state }))
        }
    }

    const clearForm = () => {
        setState({ ...initialState, id: 0 })
    }

    const mandatoryField = <span className='text-danger'>*</span>

    return <ReactBootstrap.Container>
        <ReactBootstrap.Form className='card bg-info p-2'>
            <ReactBootstrap.FormGroup className='mb-2'>
                <ReactBootstrap.FormLabel>Title{mandatoryField}</ReactBootstrap.FormLabel>
                <ReactBootstrap.FormControl type='text' name='title' value={title} onChange={onChangeAction} />
            </ReactBootstrap.FormGroup>
            <ReactBootstrap.FormGroup className='mb-2'>
                <ReactBootstrap.FormLabel>Description{mandatoryField}</ReactBootstrap.FormLabel>
                <ReactBootstrap.FormControl as='textarea' rows={3} name='description' value={description} onChange={onChangeAction} />
            </ReactBootstrap.FormGroup>
            <ReactBootstrap.FormGroup className='mb-2'>
                <ReactBootstrap.FormLabel>Category{mandatoryField}</ReactBootstrap.FormLabel>
                <select className='col-md-12' name="category" id="category" value={category} onChange={onChangeAction}>
                    <option value='' key={0} onChange={onChangeAction}>Select...</option>
                    {Object.keys(categories).length > 0 && Object.keys(categories).map(key => <option key={key} value={key}>
                        {categories[key]}
                    </option>)}
                </select>
            </ReactBootstrap.FormGroup>
            <ReactBootstrap.FormGroup className='mb-2'>
                <ReactBootstrap.FormLabel>Assign To{mandatoryField}</ReactBootstrap.FormLabel>
                <select className='col-md-12' name="assignTo" id="assignTo" value={assignTo} onChange={onChangeAction}>
                    <option value='' name="assignTo" key={0} onChange={onChangeAction}>Select...</option>
                    {Object.keys(persons).length > 0 && Object.keys(persons).map(key => <option key={key} value={key}>
                        {persons[key]}
                    </option>)}
                </select>
            </ReactBootstrap.FormGroup>
            <ReactBootstrap.FormGroup className='mb-2'>
                <ReactBootstrap.FormLabel>Start Date{mandatoryField}</ReactBootstrap.FormLabel>
                <ReactBootstrap.FormControl type='date' name='startDate' value={startDate} onChange={onChangeAction} />
            </ReactBootstrap.FormGroup>
            <ReactBootstrap.FormGroup className='mb-2'>
                <ReactBootstrap.FormLabel>End Date{mandatoryField}</ReactBootstrap.FormLabel>
                <ReactBootstrap.FormControl type='date' name='endDate' value={endDate} onChange={onChangeAction} />
            </ReactBootstrap.FormGroup>
            <ReactBootstrap.FormGroup className='mt-2 d-flex justify-content-end'>
                <ReactBootstrap.ButtonGroup>
                    <ReactBootstrap.Button className="m-2" onClick={clearForm}>Cancel</ReactBootstrap.Button>
                    <ReactBootstrap.Button className="m-2" onClick={submitForm}>Submit</ReactBootstrap.Button>
                </ReactBootstrap.ButtonGroup>
            </ReactBootstrap.FormGroup>
        </ReactBootstrap.Form>
    </ReactBootstrap.Container>
}

export default TodoForm;