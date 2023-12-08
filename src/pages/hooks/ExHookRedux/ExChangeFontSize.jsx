import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeFontSizeAction } from '../../../redux/Reducers/ChangeFSReducer';

const ExChangeFontSize = () => {
    const {fSize} = useSelector ((state) => state.changeFSReducer);
    const dispatch = useDispatch();
    const handleChangeFontSize = (size) =>{
        const action = changeFontSizeAction(size)
        dispatch(action)
    }

    return (
    <div className=''>
        <h3>Change Font Size</h3>
        <p style={{fontSize:fSize}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, tempora. Provident esse totam sit consequuntur necessitatibus tempore eveniet ad? Quos.</p>
        
        <button className='btn btn-primary mx-3' onClick={handleChangeFontSize(1)}> + </button>
        <button className='btn btn-success' onClick={handleChangeFontSize(-1)}> - </button>

    </div>
  )
}

export default ExChangeFontSize