import { Box, Flex, Grid,} from '@chakra-ui/react'
import Image from 'next/image'
import brand1 from '../../../public/assets/abb-logo.svg'
import brand2 from '../../../public/assets/RAB-logo.svg'
import brand3 from '../../../public/assets/colliers-logo.svg'
import brand4 from '../../../public/assets/bentallgreenoak-logo.svg'
import brand5 from '../../../public/assets/espen-logo.svg'
import brand6 from '../../../public/assets/eaton-logo.svg'
import brand7 from '../../../public/assets/Polara-Logo.svg'
import brand8 from '../../../public/assets/Wallbox-logo.svg'
import Wrapper from '@/app/components/Wrapper'

const Sponsor = () => {
  return (
    <Wrapper
      py={{
        base: '45px',
        xl: '80px',
      }}
      mt={{ base: '', xl: '-50px' }}
    >
      <Grid
        gridTemplateColumns={{ xl: 'repeat(4, 1fr)' }}
        align={'center'}
        gap={{ base: '40px', xl: '50px' }}
        justify={'center'}
      >
        <Box>
          <Image src={brand1} height={30} />
        </Box>
        <Box>
          <Image src={brand2}  height={30}/>
        </Box>
        <Box>
          <Image src={brand3} height={30} />
        </Box>
        <Box>
          <Image src={brand4} height={30} />
        </Box>
        <Box>
          <Image src={brand5} height={30} />
        </Box>
        <Box>
          <Image src={brand6} height={30} />
        </Box>
        <Box>
          <Image src={brand7} height={30} />
        </Box>
        <Box>
          <Image src={brand8} height={30} />
        </Box>
      </Grid>
    </Wrapper>
  )
}

export default Sponsor
