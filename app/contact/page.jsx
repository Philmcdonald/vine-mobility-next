import { Box } from "@chakra-ui/react";
import Form from "./components/Form";
// import { Helmet } from "react-helmet-async";
// import Mail from '../about/components/Mail'

const Contact = () => {
  return (
    <Box>
      {/* <Helmet>
        <title>Cotact | Vine Mobility</title>
        <meta
          name="Contact Us"
          content="Vine Mobility is transforming urban transport with smart solutions."
        />
      </Helmet> */}
      <Form />
      {/* <Mail /> */}
    </Box>
  );
};

export default Contact;
