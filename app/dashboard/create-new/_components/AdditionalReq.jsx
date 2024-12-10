import React from 'react'
import { Textarea } from "@/components/ui/textarea"

const AdditionalReq = ({additionalRequirementInput}) => {
  return (
    <div className='mt-5'>
        <label>Enter Additonal Requirments (Optional)</label>
        <Textarea className='mt-2' onChange={(e) => additionalRequirementInput(e.target.value)}/>
    </div>
  )
}

export default AdditionalReq