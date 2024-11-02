import React from 'react'

interface SubmitBtnProps {
    text: string;

}

export default function SubmitBtn({text}: SubmitBtnProps) {
  return (
    <button
    className='mt-2 rounded-lg bg-teal-500 py-4 text-lg text-black disabled:bg-teal-600/3 lg:by-7 lg:text-2xl'
    >{text}</button>
  )
}
