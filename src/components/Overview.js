import { useDispatch, useSelector } from 'react-redux';
import * as ReactBootstrap from 'react-bootstrap';
import { deleteTodoStart } from '../redux/action';

const Oveview = (props) => {
    const dispatch = useDispatch();
    const { todoList, persons, categories } = useSelector(state => state.data);
    
    return <ReactBootstrap.Table responsive="true">
        <thead className='bg-danger border border-dark'>
            <tr>
                <th>Title</th>
                <th>Assigne To</th>
                <th>Type</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody className='bg-info border border-dark'>
            {Object.keys(todoList).length > 0 ? Object.values(todoList).map(todo => {
                let { id, title, assignTo, category, startDate, endDate } = todo;

                return <tr key={id}>
                    <td>{title}</td>
                    <td>{persons[assignTo]}</td>
                    <td>{categories[category]}</td>
                    <td>{startDate}</td>
                    <td>{endDate}</td>
                    <td className='flex'>
                        <span className='m-2' onClick={e => dispatch(deleteTodoStart(id))}><i class="fas fa-trash-alt"></i></span>
                        <span className='m-2' onClick={e => props.setTodoIdandAction(id)}><i class="far fa-edit"></i></span>
                    </td>
                </tr>
            }) : <tr className='text-center'><td colSpan="6">No data</td></tr>}

        </tbody>
    </ReactBootstrap.Table>
}

export default Oveview;