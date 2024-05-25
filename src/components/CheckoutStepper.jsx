import React, { useEffect, useRef, useState } from 'react'

const CheckoutStepper = ({stepConfig=[]}) => {
    const [currentStep,setCurrentStep] = useState(1)
    const [isComplete,setIsComplete] = useState(false)
    const [margin,setMargin] = useState({
        marginLeft:0,
        marginRight:0

    })
const stepRef = useRef([])

if(!stepConfig.length){
    return <></>

}
const handleNext = ()=>{
    setCurrentStep((prevStep)=>{
        if(prevStep === stepConfig.length){
            setIsComplete(true)
            return prevStep
        }else{
            return prevStep +1

        }

    })

}

const calculateProgressBarWidth = ()=>{

    return ((currentStep-1)/ (stepConfig.length-1))*100
}
const  ActiveComponent = stepConfig[currentStep-1].Component

useEffect(() => {
  
      setMargin({
        marginLeft: stepRef.current[0].offsetWidth / 2,
        marginRight: stepRef.current[stepConfig.length - 1].offsetWidth / 2
      });
   
  }, [stepConfig.length,stepRef]);

  return (
    <>
   
    <div className='stepper'>
{
    stepConfig.map((step,index)=>{
        return (
            <div 
            
            key={index}
            ref={(el)=>(stepRef.current[index]=el)}
            className={`step ${currentStep>index+1 || isComplete?"complete":""} ${currentStep === index+1 ? "active":""} `}>
                <div className='step-number'>
                    
                    {
                        currentStep > index+1 || isComplete ? (
                            <span>&#10003;</span>
                        ):(
                            <span>{index+1}</span>
                        )
                    }</div>
                <div className='step-name'>{step.name}</div>
              
            </div>
        )
    })
} 
<div className="progress-bar"
   style={{
    width: `calc(100% - ${margin.marginLeft + margin.marginRight}px)`,
    marginLeft: margin.marginLeft,
    marginRight: margin.marginRight
  }}
>
    <div className="progress"
    style={{width:`${calculateProgressBarWidth()}%`}}
    >

    </div>

</div>
    </div>
    <ActiveComponent/>
    {
        !isComplete && (
    <button className='btn'
    onClick={handleNext}
    >{ currentStep===stepConfig.length?"Finish":"Next"}
    </button>)
}
    </>
  )
}

export default CheckoutStepper
