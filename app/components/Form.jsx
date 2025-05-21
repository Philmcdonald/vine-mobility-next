import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Text,
  Textarea,
} from '@chakra-ui/react'
import { CustomButton } from './CustomButton'

// eslint-disable-next-line react/prop-types
const Label = ({ text }) => {
  return (
    <FormLabel htmlFor="first-name" color="#95979b" fontSize="10px">
      {text}
    </FormLabel>
  )
}

const FormInput = () => {
  return (
    <Input
      id="first-name"
      placeholder=""
      borderRadius="xl"
      border="1px solid #ccc"
      py={{ base: '20px', xl: '25px' }}
    />
  )
}

const ReusableForm = () => {
  return (
    <Box
      bg={'#fff'}
      p={{ base: '20px', xl: '40px' }}
      pt={{ base: '40px' }}
      borderRadius={'10px'}
      border={'1px solid #eee'}
      boxShadow={'lg'}
      flex={1}
      w={{ base: '100%', xl: '95%' }}
    >
      <Grid
        gap={{ base: '15px', xl: '20px' }}
        gridTemplateColumns={{ xl: '1fr 1fr' }}
      >
        <FormControl>
          <Label text=" FIRST NAME*" />
          <FormInput />
        </FormControl>

        <FormControl>
          <Label text=" LAST NAME*" />
          <FormInput />
        </FormControl>
      </Grid>

      <FormControl my={{ base: '20px', xl: '25px' }}>
        <Label text=" BUSINESS EMAIL*" />
        <Text fontSize={'10px'} mb={'10px'}>
          If you do not have a business email, but have a sales inquiry, you can
          email sales@vine-mobility.com
        </Text>
        <FormInput placeholder="example@email.com" />
      </FormControl>

      <Grid
        gap={{ base: '15px', xl: '20px' }}
        gridTemplateColumns={{ xl: '1fr 1fr' }}
      >
        <FormControl>
          <Label text=" PHONE NUMBER*" />
          <FormInput />
        </FormControl>

        <FormControl>
          <Label text=" COMPANY NAME*" />
          <FormInput />
        </FormControl>
      </Grid>

      <FormControl my={{ base: '20px', xl: '25px' }}>
        <Label text="How can we help you?*" />
        <Textarea />
      </FormControl>

      <Flex my={'30px'}>
        <CustomButton
          btnText={'submit'}
          color={'#fff'}
          // bg={'#8fc03f'}
          bg={'#000'}
          w={{ xl: '30%' }}
          mx={'auto'}
        />
      </Flex>
    </Box>
  )
}

export default ReusableForm
