import bgImg from '../images/background.png'
import back from '../images/back.png'
import progressBarDis from '../images/progressBarDis.png'
import bananaDis from '../images/bananaDis.png'
import cardPink from '../images/cardPink.png'
import cardBlue from '../images/cardBlue.png'
import cardApple from '../images/cardApple.png'
import blueApple from '../images/blueApple.png'
import blueGrape from '../images/blueGrape.png'
import blueCherry from '../images/blueCherry.png'
import blueBanana from '../images/blueBanana.png'
import blueOrange from '../images/blueOrange.png'
import bluePear from '../images/bluePear.png'
import cardGrape from '../images/cardGrape.png'
import cardCherry from '../images/cardCherry.png'
import cardBanana from '../images/cardBanana.png'
import cardPear from '../images/cardPear.png'
import cardOrange from '../images/cardOrange.png'



import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import FlipCard from './FlipCard'
import MatchCard from './MatchCard'

const ActivityScreen = () => {

const navigate = useNavigate();

// const[isFlipped,setFlip] = useState(false)

// const handleFlip = () => {
//     setFlip(!isFlipped)
// }
const[parent , setParent] = useState(null);

const [matched, setMatched] = useState(new Set());

    return(
        <div className="w-screen h-screen flex justify-center relative">
            <img 
                src={bgImg}
                alt="bg-img"
                className='w-auto h-full'
            />
            <img 
                src={back}
                onClick={() => {navigate('/instruction')}} 
                alt='next' 
                className='absolute w-[100px] h-auto left-1/2 transform -translate-x-[450px] translate-y-8 ' // Adjust the translate-y value as needed
            />
            <img 
                src={progressBarDis}
                alt='progressBarDis' 
                className='absolute w-[500px] h-auto left-1/2 transform -translate-x-[280px] translate-y-6 ' // Adjust the translate-y value as needed
            />
            <img 
                src={bananaDis}
                alt='bananaDis' 
                className='absolute w-[100px] h-auto transform translate-x-[200px] translate-y-[5px] ' // Adjust the translate-y value as needed
            />
            <div className='flex gap-5 absolute transform translate-y-[180px]'>
                <div className='grid grid-cols-3 h-[350px] gap-2'>
                   <FlipCard val={'pear'} front={cardPink} back={cardPear} parent={parent} setParent={setParent} matched={matched} setMatched={setMatched} />
                   <FlipCard val={'banana'} front={cardPink} back={cardBanana} parent={parent} setParent={setParent} matched={matched} setMatched={setMatched}/>
                   <FlipCard val={'apple'} front={cardPink} back={cardApple} parent={parent} setParent={setParent} matched={matched} setMatched={setMatched}/>
                   <FlipCard val={'orange'} front={cardPink} back={cardOrange} parent={parent} setParent={setParent} matched={matched} setMatched={setMatched}/>
                   <FlipCard val={'grape'} front={cardPink} back={cardGrape} parent={parent} setParent={setParent} matched={matched} setMatched={setMatched}/>
                   <FlipCard val={'cherry'} front={cardPink} back={cardCherry} parent={parent} setParent={setParent} matched={matched} setMatched={setMatched}/>
                </div>
               <div className='grid grid-cols-3 h-[350px] gap-2'>
                  <MatchCard val={'apple'} front={cardBlue} back={blueApple} parent={parent} setParent={setParent} matched={matched} setMatched={setMatched}/>
                  <MatchCard val={'orange'} front={cardBlue} back={blueOrange} parent={parent} setParent={setParent} matched={matched} setMatched={setMatched}/>
                  <MatchCard val={'grape'} front={cardBlue} back={blueGrape} parent={parent} setParent={setParent} matched={matched} setMatched={setMatched}/>
                  <MatchCard val={'cherry'} front={cardBlue} back={blueCherry} parent={parent} setParent={setParent} matched={matched} setMatched={setMatched}/>
                  <MatchCard val={'pear'} front={cardBlue} back={bluePear} parent={parent} setParent={setParent} matched={matched} setMatched={setMatched}/>
                  <MatchCard val={'banana'} front={cardBlue} back={blueBanana} parent={parent} setParent={setParent} matched={matched} setMatched={setMatched}/>
               </div>
            </div>
         </div>
    )
}

export default ActivityScreen;

{/* <div>
    <div className='group [perspective:1000px]'>
        <div className={`relative [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY()]':''}`} onClick={handleFlip}>
            <div className='absolute inset-0'>
                <img src={cardPink} alt='cardPink' className='w-[130px] ' />
            </div>
            <div className='absolute inset-0'>
                <img src={cardApple} alt='cardPink' className='w-[130px] ' />
            </div>
        </div>
    </div>
</div> */}
