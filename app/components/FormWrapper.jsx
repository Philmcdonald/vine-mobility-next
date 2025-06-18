"use client"

import dynamic from 'next/dynamic'
import React from 'react'

const Form = dynamic(() => import('./Form'), { ssr: false })

export default function FormWrapper(props) {
  return <Form {...props} />
}