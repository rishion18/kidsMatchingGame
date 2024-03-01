import { useEffect, useState } from "react";

const FlipCard = ({val , front , back , parent , setParent , matched}) => {
    const [isFlipped, setIsFlipped] = useState(true);

    const handleFlip = () => {
       if(val !== parent && parent === null){
          setIsFlipped(!isFlipped);
          setParent(val);
       }else if(val === parent){
           setIsFlipped(!isFlipped);
           setParent(null);
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
                    <img src={front} alt='front' className={matched.has(val) ? 'hidden pointer-events-none' : ''} />
               </div>
               <div className={`absolute w-full h-full ${!isFlipped ? 'block' : 'hidden'}`}>
                    <img src={back} alt='back' className={`w-[130px] h-[165.5px] ${matched.has(val) ? 'hidden pointer-events-none' : ''}`} />
               </div>
            </div>
    );
};


export default FlipCard