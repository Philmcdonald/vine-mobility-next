import { Flex } from '@chakra-ui/react'
import Image from 'next/image'
import standAlone from '../../../public/assets/stanAlone.svg'

const StandAlone = () => {
  return (
    <Flex bg={'#000'} justifyContent={'center'} align={'center'} py="50px">
      <Image src={standAlone} height={350} alt='' />
    </Flex>
  )
}

export default StandAlone
