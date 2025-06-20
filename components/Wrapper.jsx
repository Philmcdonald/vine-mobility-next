import { Container } from '@chakra-ui/react'

const Wrapper = ({ children, ...props }) => {
  return (
    <Container
      w={{ base: '95%', lg: '95%' }}
      maxW={{ xl: '1060px' }}
      mx="auto"
      py={{
        base: '50px',
        xl: '80px',
      }}
      {...props}
    >
      {children}
    </Container>
  )
}

export default Wrapper
