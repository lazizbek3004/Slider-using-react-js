import './Hero.css'

export const Hero = ({heroCount, setHeroCount, info}) => {
  function theNext(){
    if(heroCount == 2){
      setHeroCount(0)
    }else{
      setHeroCount(heroCount + 1)
    }
  }
  return ( 
  

  <>
    <div className='container'>
      <div className='info-part'>

      </div>
      <ul className='dots'>
        <li onClick={() => setHeroCount(0)} className={heroCount== 0? "dot orange" : "dot"}></li>
        <li onClick={() => setHeroCount(1)} className={heroCount == 1? "dot orange" : "dot"}></li>
        <li onClick={() => setHeroCount(2)} className={heroCount== 2? "dot orange" : "dot"}></li>
      </ul>
      <div className='next' onClick={theNext}>
        <span>&#8594;</span>
      </div>
    </div>
  </>
  )
}
