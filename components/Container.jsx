import { Container } from '@chakra-ui/react';

export const CustomContainer = ({ children, ...props }) => {
  return (
    <Container width={{ base: '100%', md: '70vw' }} border={'1px'} maxWidth="100%" mx="auto" px={4} {...props}>
      {children}
    </Container>
  );
};
