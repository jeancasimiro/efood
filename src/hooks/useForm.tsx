import { useState } from 'react'

export function useForm(steps: any[]) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isOrderComplete, setOrderComplete] = useState(false)

  function changeStep(i: number, e: { preventDefault: () => void }) {
    if (e) e.preventDefault()

    if (i < 0 || i >= steps.length) return

    setCurrentStep(i)
  }
  return {
    currentStep,
    currentComponent: steps[currentStep],
    changeStep,
    isLastStep: currentStep + 1 === steps.length ? true : false,
    isFirstStep: currentStep === 0 ? true : false,
    isSecondStep: currentStep === 1 ? true : false,
    isOrderComplete,
    setOrderComplete
  }
}
