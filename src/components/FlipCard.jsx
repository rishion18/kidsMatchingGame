import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAlertImg1, setAlertImg2, setParent } from "../store/eventReducer.js";

const FlipCard = ({val , front , back}) => {
    const [isFlipped, setIsFlipped] = useState(true);

    const dispatch = useDispatch();

    const {parent , matched , matchAlert} = useSelector(state => state.Events);
   

    const handleFlip = () => {
       if(val !== parent && parent === null){
          setIsFlipped(!isFlipped);
          dispatch(setParent(val))
       }else if(val === parent){
           setIsFlipped(!isFlipped);
           dispatch(setParent(val))
        }else{
        alert(`select a blue card now to match ${parent} or click on it again to cancel selection and select a new card` );
       }
    };


    useEffect(() => {
        setIsFlipped(false)
        setTimeout(() => {
            setIsFlipped(true)
        } , 6000)
      }, []);


    return (
            <div className='relative w-[130px] h-auto' onClick={handleFlip}>
               <div className={`absolute w-full h-full ${isFlipped ? 'block' : 'hidden'}`}>
                    <img src={front} alt='front' className={matched.includes(val) ? 'hidden pointer-events-none' : ''} />
               </div>
               <div className={`absolute w-full h-full ${!isFlipped ? 'block' : 'hidden'}`}>
                    <img src={back} alt='back' className={`w-[130px] h-[165.5px] ${matched.includes(val) && matched.length!==0 ? 'hidden pointer-events-none' : ''}`} />
               </div>
            </div>
    );
};


export default FlipCard