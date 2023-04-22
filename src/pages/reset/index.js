import React, { useState } from 'react'
import { useRouter } from 'next/router'

const ResetPassword = () => {
    const [text, setText] = useState('')
    const router = useRouter()
    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log(text)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input className='m-2 p-2 border-2 border-gray-200 rounded-lg' type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <input type="submit" value="Submit" className='px-6 py-2 bg-indigo-600 rounded-lg font-bold text-white' onClick={handleSubmit} />
        </form>
        {JSON.stringify(router, 2, null)}
    </div>
  )
}

export default ResetPassword