import { useDispatch, useSelector } from 'react-redux'
import alerttxt from '../images/alerttxt.png'
import next from '../images/next.png'
import { setComp, setMatchAlert } from '../store/eventReducer';

const AlertMatch = ({img1 , img2}) => {

const {matchAlert} = useSelector(state => state.Events);

const dispatch = useDispatch()
const{comp , matched} = useSelector(state => state.Events);

const handleNext = () => {
    dispatch(setMatchAlert(false))
    if(matched.length===6){
        dispatch(setComp(true))
    }
}

    return(
        <div className={`absolute transform translate-x-[80px] translate-y-[200px] z-20 ${!matchAlert ? 'hidden':''}`}>
           <div className="relative flex w-[500px]">
            <img src={img1} alt="img1" className="absolute transform translate-y-[20px] -rotate-12 shadow-lg shadow-white w-[150px] "/>
            <img src={img2} alt="img1" className="absolute transform translate-x-[155px] translate-y-[70px] rotate-12 shadow-lg shadow-white w-[150px]"/>
            <img src={alerttxt} alt='alerttxt' className='absolute w-[400px] transform translate-x-[150px] -translate-y-[20px]'/>
            <img src={next} onClick={handleNext} alt='next' className='absolute w-[200px] transform translate-x-[300px] translate-y-[320px]' />
           </div>
        </div>
    )
}
export default AlertMatch;