import { Flex } from '@chakra-ui/react'
import Image from 'next/image'
import Rc1 from '../../../public/assets/Rc1.svg'

const ChargeImg = () => {
  return (
    <Flex bg={'#000'} py="50px" justify={'center'} h={'fit-content'}>
      <Image src={Rc1} height={350 }alt='' />
    </Flex>
  )
}

export default ChargeImg
