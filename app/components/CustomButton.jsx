"use client"
import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'; 
import { IoIosArrowForward } from 'react-icons/io'

// import React from "react"

export const CustomButton = ({
  rightIcon,
  leftIcon,
  py,
  px,
  bg,
  color,
  hover,
  onClick,
  borderRadius,
  border,
  mr,
  w,
  btnText,
  fontSize,
  my,
  mt,
  type,
  ...props
}) => {
  const router= useRouter()

  const onClickHandler = () => {
    if (type === 'submit') {
      router.push('/')
    } else {
      router.push('/contact')
    }
  }
  return (
    <Button
      leftIcon={leftIcon}
      rightIcon={rightIcon || <IoIosArrowForward />}
      fontSize={fontSize || { base: '1rem', xl: '1.2rem' }}
      fontFamily={'Inter, sans-serif'}
      py={py || { base: '1rem', xl: '1.5rem' }}
      px={px || { base: '15px', xl: '20px' }}
      bg={bg || '#000'}
      color={color || '#fff'}
      _hover={{ hover }}
      onClick={onClickHandler}
      borderRadius={borderRadius || '50px'}
      border={border}
      mt={mt || { lg: '10px' }}
      mr={mr}
      my={my}
      w={w}
      outline={'none'}
      {...props}
    >
      {btnText}
    </Button>
  )
}
