import {CheckCircledIcon} from '@radix-ui/react-icons'
import PropTypes from 'prop-types'
import React from 'react'


const FormSuccess = ({message}) => {

    if(!message) return null
  return (
    <>
    <div className='bg-emerald-400/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald'>
        <CheckCircledIcon className='w-4 h-4' />
        {message}
    </div>

    </>
  )
}

FormSuccess.propTypes = {
    message: PropTypes.string
}

export default FormSuccess