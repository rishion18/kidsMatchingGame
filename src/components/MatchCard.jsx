import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setMatchAlert, setMatched, setParent } from "../store/eventReducer.js";

const MatchCard = ({val , front , back }) => {

const[isFlipped , setFlip] = useState(true)

const dispatch = useDispatch();

const{matched , parent , matchAlert} = useSelector(state => state.Events);

const handleFlip = () => {
    if(val === parent){

        setFlip(!isFlipped);
        setTimeout(() => {
            dispatch(setMatchAlert(true))
            dispatch(setMatched(val));
            dispatch(setParent(null));
        } , 1000);
    }else if(parent === null){
        alert('select a pink card first');
    }else{
        alert('retry')
    }
}

useEffect(() => {
    setFlip(false)
    setTimeout(() => {
        setFlip(true)
    } , 6000)
  }, []);

  const [alertText, setAlertText] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const showAlertWithText = (text) => {
    setAlertText(text);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };



    return(
        <div className='relative w-[130px] h-auto' onClick={handleFlip}>
            <div className={`absolute w-full h-full ${isFlipped ? 'block' : 'hidden'}`}>
                <img src={front} alt='front' className={matched.includes(val) ? 'hidden pointer-events-none' : ''}/>
            </div>
            <div className={`absolute w-full h-full ${!isFlipped ? 'block' : 'hidden'}`}>
                <img src={back} alt='back' className={matched.includes(val) ? 'hidden pointer-events-none' : ''} />
            </div>
        </div>
    )
}

export default MatchCard;