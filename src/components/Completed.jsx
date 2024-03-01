import { useDispatch, useSelector } from 'react-redux'
import comp from '../images/comp.png'
import mon1 from '../images/monkey1.png'


const Completed = () => {

const{completed} = useSelector(state => state.Events);

const handleClick = () => {
    window.location.reload();
}

    return(
       <div className={`absolute transform translate-y-[100px] z-50 ${!completed?'hidden':''}`} onClick={handleClick} >
          <div className="relative w-[300px]">
          <img src={comp} alt='comp' className='absolute transform translate-x-0 translate-y-0'/>
          <img src={mon1} alt='mon1' className='absolute w-[170px] transform translate-x-[70px] translate-y-[180px]'/>
          </div>
       </div>
    )
}

export default Completed;