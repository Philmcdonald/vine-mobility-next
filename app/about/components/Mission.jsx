import { Box } from '@chakra-ui/react'
import CustomText from '@/app/components/CustomText'
import SubHeading from '@/app/components/SubHeading'
import Wrapper from '@/app/components/Wrapper'

const Mission = () => {
  return (
    <Box bg={'#fff'} justifyContent={'center'} h={'fit-content'}>
      <Wrapper>
        <SubHeading>Our mission</SubHeading>
        <CustomText my={{ base: '15px', xl: '30px' }} maxW={'900px'}>
          Africa’s mobility future is electric and at Vine Mobility, we’re
          building the software backbone to power that future. Transportation
          accounts for a significant share of global emissions, and in Africa,
          growing urbanization means mobility demand is rising fast. We believe
          the shift to electric vehicles (EVs) represents more than just a new
          way to move, it&apos;s a new way to think about energy,
          infrastructure, and sustainability.
        </CustomText>
        <CustomText maxW={'900px'}>
          Vine Mobility’s mission is to make EV charging simple, smart, and
          scalable. Our platform helps businesses, property managers, and fleet
          operators deploy and manage EV charging stations without needing to be
          tech experts. From QR-enabled user access to real-time monitoring and
          flexible pricing, we handle the complexity so you can focus on growth.
        </CustomText>
        <CustomText my="30px" maxW={'900px'}>
          We don’t build chargers, we build the systems that make chargers work
          better. That means tools for uptime, usage tracking, revenue
          generation, and smart energy management tailored to the unique
          challenges of African cities from power reliability to grid
          limitations.
        </CustomText>
        <CustomText maxW={'900px'}>
          The switch to EVs is one of the most transformative shifts of our
          generation. At Vine Mobility, we’re not waiting for it to happen,
          we’re building the software to drive it.
        </CustomText>
      </Wrapper>
    </Box>
  )
}

export default Mission
