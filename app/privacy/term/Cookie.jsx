import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react'
import { Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react'
import { AiFillPlusCircle } from 'react-icons/ai'
import Link from 'next/link'

const Cookie = () => {
  return (
    <Accordion
      w={['100%', '100%', '100%', '100%']}
      m={'0px auto'}
      allowMultiple
    >
      <AccordionItem
        bg={'#f7f7f7f'}
        rounded={'lg'}
        p={'5px'}
        py={{ xl: '15px' }}
        mb={'25px'}
        border={'1.2px solid #D6D5D5'}
      >
        <AccordionButton>
          <Box
            as="span"
            flex="1"
            textAlign="left"
            color={'#000'}
            fontSize={{ xl: '20px' }}
            py={'10px'}
          >
            Cookie Policy
          </Box>
          <AiFillPlusCircle color="#8fc03f" size={20} />
        </AccordionButton>
        <AccordionPanel pb={4} fontSize={'15px'}>
          <Box p={{ base: 2, xl: 8 }}>
            <Heading as="h1" size="xl" mb={6}>
              COOKIE POLICY
            </Heading>
            <Text mb={6}>
              <i>Last Updated: April 26, 2025</i>
            </Text>
            <Heading as="h2" size="lg" mb={6}>
              INTRODUCTION
            </Heading>
            <Text mb={6}>
              This Cookie Policy explains what Cookies are and how Vine Mobility
              and Technologies Ltd ("we," "us," or "our") uses them. You should
              read this policy to understand what type of cookies we use, the
              information we collect using Cookies, and how that information is
              used.
            </Text>
            <Text mb={6}>
              Cookies do not typically contain any information that personally
              identifies a user, but personal information that we store about
              You may be linked to the information stored in and obtained from
              Cookies. For further information on how we use, store, and keep
              your personal data secure, see our Privacy Policy.
            </Text>
            <Text mb={6}>
              We do not store sensitive personal information, such as mailing
              addresses, account passwords, etc. in the Cookies we use.
            </Text>
            <Heading as="h2" size="lg" mb={6}>
              INTERPRETATION AND DEFINITIONS
            </Heading>
            <Heading as="h3" size="md" mb={4}>
              Interpretation
            </Heading>
            <Text mb={6}>
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or in plural.
            </Text>
            <Heading as="h3" size="md" mb={4}>
              Definitions
            </Heading>
            <Text mb={6}>For the purposes of this Cookie Policy:</Text>
            <UnorderedList spacing={3} mb={6}>
              <ListItem>
                <strong>"Company"</strong> (referred to as either "the Company,"
                "We," "Us," or "Our" in this Agreement) refers to Vine Mobility
                and Technologies Ltd, [Insert Nigerian Business Address].
              </ListItem>
              <ListItem>
                <strong>"Cookies"</strong> means small files that are placed on
                Your computer, mobile device, or any other device by a website,
                containing details of your browsing history on that website
                among its many uses.
              </ListItem>
              <ListItem>
                <strong>"Website"</strong> refers to the Company's website,
                accessible from [www.vinemobility.com].
              </ListItem>
              <ListItem>
                <strong>"Applications"</strong> refers to VineCharge and
                VineVolt, the software applications provided by the Company.
              </ListItem>
              <ListItem>
                <strong>"You"</strong> means the individual accessing or using
                the Website or Applications, or a company, or any legal entity
                on behalf of which such individual is accessing or using the
                Website or Applications, as applicable.
              </ListItem>
            </UnorderedList>
            <Heading as="h2" size="lg" mb={6}>
              THE USE OF COOKIES
            </Heading>
            <Heading as="h3" size="md" mb={4}>
              Type of Cookies We Use
            </Heading>
            <Text mb={6}>
              Cookies can be "Persistent" or "Session" Cookies. Persistent
              Cookies remain on your personal computer or mobile device when You
              go offline, while Session Cookies are deleted as soon as You close
              your web browser.
            </Text>
            <Text mb={6}>
              We use both Session and Persistent Cookies for the purposes set
              out below:
            </Text>
            <Heading as="h4" size="sm" mb={4}>
              Necessary / Essential Cookies
            </Heading>
            <UnorderedList spacing={3} mb={6}>
              <ListItem>
                <strong>Type:</strong> Session Cookies
              </ListItem>
              <ListItem>
                <strong>Administered by:</strong> Us
              </ListItem>
              <ListItem>
                <strong>Purpose:</strong> These Cookies are essential to provide
                You with services available through the Website and Applications
                and to enable You to use some of their features. They help to
                authenticate users and prevent fraudulent use of user accounts.
                Without these Cookies, the services that You have asked for
                cannot be provided, and We only use these Cookies to provide You
                with those services.
              </ListItem>
            </UnorderedList>
            <Heading as="h4" size="sm" mb={4}>
              Functionality Cookies
            </Heading>
            <UnorderedList spacing={3} mb={6}>
              <ListItem>
                <strong>Type:</strong> Persistent Cookies
              </ListItem>
              <ListItem>
                <strong>Administered by:</strong> Us
              </ListItem>
              <ListItem>
                <strong>Purpose:</strong> These Cookies allow us to remember
                choices You make when You use the Website and Applications, such
                as remembering your login details or language preference. The
                purpose of these Cookies is to provide You with a more
                personalized experience and to avoid You having to re-enter your
                preferences every time You use the Website or Applications.
              </ListItem>
            </UnorderedList>
            <Heading as="h4" size="sm" mb={4}>
              Analytics and Performance Cookies
            </Heading>
            <UnorderedList spacing={3} mb={6}>
              <ListItem>
                <strong>Type:</strong> Persistent Cookies
              </ListItem>
              <ListItem>
                <strong>Administered by:</strong> Us and Third Parties
              </ListItem>
              <ListItem>
                <strong>Purpose:</strong> These Cookies are used to collect
                information about traffic to our Website and Applications and
                how users use them. The information gathered does not identify
                any individual visitor. The information is aggregated and
                anonymous. It includes the number of visitors, the websites that
                referred them, the pages they visited, what time of day they
                visited, whether they have visited before, and other similar
                information. We use this information to help operate our Website
                and Applications more efficiently, to gather broad demographic
                information, and to monitor the level of activity on them.
              </ListItem>
            </UnorderedList>
            <Heading as="h4" size="sm" mb={4}>
              Your Choices Regarding Cookies
            </Heading>
            <Text mb={4}>
              If You prefer to avoid the use of Cookies on the Website and
              Applications, first You must disable the use of Cookies in your
              browser and then delete the Cookies saved in your browser
              associated with our Website and Applications. You may use this
              option for preventing the use of Cookies at any time.
            </Text>
            <Text mb={4}>
              If You do not accept Our Cookies, You may experience some
              inconvenience in your use of the Website and Applications, and
              some features may not function properly.
            </Text>
            <Text mb={4}>
              If You'd like to delete Cookies or instruct your web browser to
              delete or refuse Cookies, please visit the help pages of your web
              browser.
            </Text>
            <UnorderedList spacing={3} mb={6}>
              <ListItem>
                <Link
                  href="https://support.google.com/accounts/answer/32050"
                  
                >
                  For the Chrome web browser, please visit this page from Google
                </Link>
              </ListItem>
              <ListItem>
                <Link href="http://support.microsoft.com/kb/278835" >
                  For the Internet Explorer web browser, please visit this page
                  from Microsoft
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored"
                  
                >
                  For the Firefox web browser, please visit this page from
                  Mozilla
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                  
                >
                  For the Safari web browser, please visit this page from Apple
                </Link>
              </ListItem>
              <ListItem>
                For any other web browser, please visit your web browser's
                official web pages.
              </ListItem>
            </UnorderedList>
            <Heading as="h4" size="sm" mb={4}>
              Mobile Applications and Cookies
            </Heading>
            <Text mb={4}>
              Our Applications may use cookies, pixel tags, and other
              technologies to collect information about your use of the
              Applications. This information is used to improve the Applications
              and your experience, see which areas and features of the
              Applications are popular, count visits, and understand usage
              patterns. We may also use this information for analytics purposes,
              such as to better understand how users interact with our
              Applications.
            </Text>

            <Heading as="h4" size="sm" mb={4}>
              Updates to This Cookie Policy
            </Heading>
            <Text mb={4}>
              We may update our Cookie Policy from time to time. We will notify
              you of any changes by posting the new Cookie Policy on this page
              and updating the "Last Updated" date at the top of this Cookie
              Policy.
            </Text>
            <Text mb={4}>
              You are advised to review this Cookie Policy periodically for any
              changes. Changes to this Cookie Policy are effective when they are
              posted on this page.
            </Text>

            <Heading as="h4" size="sm" mb={4}>
              More Information About Cookies
            </Heading>
            <Text mb={4}>
              You can learn more about cookies at websites like
              <Link href="https://www.allaboutcookies.org/" >
                {' '}
                www.allaboutcookies.org
              </Link>{' '}
              or
              <Link href="https://www.cookiesandyou.com/">
                {' '}
                www.cookiesandyou.com
              </Link>
              .
            </Text>

            <Heading as="h4" size="sm" mb={4}>
              Contact Us
            </Heading>
            <Text mb={4}>
              If you have any questions about this Cookie Policy, you can
              contact us:
            </Text>
            <UnorderedList spacing={3}>
              <ListItem>
                Email:{' '}
                <Link href="mailto:support@vinemobility.com">
                  support@vinemobility.com
                </Link>
              </ListItem>
              <ListItem>
                By visiting this page on our website:{' '}
                <Link href="http://www.vinemobility.com/contact">
                  www.vinemobility.com/contact
                </Link>
              </ListItem>
              <ListItem>By phone: [Insert Nigerian phone number]</ListItem>
              <ListItem>By mail: [Insert Nigerian business address]</ListItem>
            </UnorderedList>
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default Cookie
