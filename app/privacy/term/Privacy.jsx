"use client"


import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react'
import { Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react'
import { AiFillPlusCircle } from 'react-icons/ai'

const Privacy = () => {
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
            Privacy and terms
          </Box>
          <AiFillPlusCircle color="#8fc03f" size={20} />
        </AccordionButton>
        <AccordionPanel pb={4} fontSize={'15px'}>
          <Box p={{ base: 2, xl: 8 }}>
            <Heading as="h1" size="xl" mb={6}>
              PRIVACY POLICY
            </Heading>
            <Text mb={4} fontStyle="italic">
              Last Updated: April 26, 2025
            </Text>

            <Heading as="h2" size="lg" mb={4}>
              INTRODUCTION
            </Heading>
            <Text mb={6}>
              Vine Mobility and Technologies Ltd ("we," "our," or "the Company")
              respects your privacy and is committed to protecting your personal
              data. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you use our VineCharge and
              VineVolt applications and related services (collectively, the
              "Services").
            </Text>
            <Text mb={6}>
              Please read this Privacy Policy carefully. By accessing or using
              our Services, you acknowledge that you have read, understood, and
              agree to be bound by all the terms of this Privacy Policy.
            </Text>

            <Heading as="h2" size="lg" mb={4}>
              DEFINITIONS
            </Heading>
            <UnorderedList spacing={3} mb={8}>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  "Account"
                </Text>{' '}
                means a unique account created for You to access our Services.
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  "Application"
                </Text>{' '}
                refers to VineCharge and/or VineVolt, the software programs
                provided by Vine Mobility and Technologies Ltd.
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  "Company"
                </Text>{' '}
                (referred to as either "the Company", "We", "Us" or "Our" in
                this Agreement) refers to Vine Mobility and Technologies Ltd.
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  "Country"
                </Text>{' '}
                refers to Nigeria.
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  "Device"
                </Text>{' '}
                means any device that can access the Service such as a computer,
                a cellphone, or a digital tablet.
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  "Personal Data"
                </Text>{' '}
                means any information that relates to an identified or
                identifiable individual.
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  "Service"
                </Text>{' '}
                refers to the Application and our website.
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  "Service Provider"
                </Text>{' '}
                means any natural or legal person who processes data on behalf
                of the Company.
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  "Usage Data"
                </Text>{' '}
                refers to data collected automatically, either generated by the
                use of the Service or from the Service infrastructure itself.
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  "You"
                </Text>{' '}
                means the individual accessing or using the Service, or the
                company, or other legal entity on behalf of which such
                individual is accessing or using the Service, as applicable.
              </ListItem>
            </UnorderedList>

            <Heading as="h2" size="lg" mb={4}>
              INFORMATION WE COLLECT
            </Heading>
            <Heading as="h3" size="lg" mb={4}>
              Personal Data
            </Heading>
            <Text mb={6}>
              While using our Services, we may ask you to provide us with
              certain personally identifiable information that can be used to
              contact or identify you. This personal information may include,
              but is not limited to:
            </Text>

            <UnorderedList spacing={3} mb={6}>
              <ListItem>Email address</ListItem>
              <ListItem>First name and last name</ListItem>
              <ListItem>Phone number</ListItem>
              <ListItem>
                Address, State, Province, ZIP/Postal code, City
              </ListItem>
              <ListItem>
                Payment information (for purchases and billing)
              </ListItem>
            </UnorderedList>

            <Heading as="h3" size="lg" mb={4}>
              Usage Data
            </Heading>

            <Text mb={6}>
              Usage Data is collected automatically when using the Services.
              Usage Data may include information such as your Device's Internet
              Protocol address (e.g., IP address), browser type, browser
              version, the pages of our Services that you visit, the time and
              date of your visit, the time spent on those pages, unique device
              identifiers, and other diagnostic data. When you access the
              Services by or through a mobile device, we may collect certain
              information automatically, including, but not limited to, the type
              of mobile device you use, your mobile device unique ID, the IP
              address of your mobile device, your mobile operating system, the
              type of mobile Internet browser you use, unique device
              identifiers, and other diagnostic data. We may also collect
              information that your browser sends whenever you visit our
              Services or when you access the Services by or through a mobile
              device.
            </Text>

            <Heading as="h3" size="md" mb={3}>
              Location Information
            </Heading>
            <Text mb={6}>
              We collect real-time information about the location of your device
              to provide you with location-based services, such as finding the
              nearest charging station.
            </Text>

            <Heading as="h3" size="md" mb={3}>
              Information from Third-Party Social Media Services
            </Heading>
            <Text mb={6}>
              The Company allows you to create an account and log in to use the
              Services through the following Third-party Social Media Services:
            </Text>
            <UnorderedList spacing={3} mb={6}>
              <ListItem>Google</ListItem>
              <ListItem>Facebook</ListItem>
              <ListItem>Twitter</ListItem>
              <ListItem>Other supported platforms</ListItem>
            </UnorderedList>

            <Text mb={6}>
              If you decide to register through or otherwise grant us access to
              a Third-Party Social Media Service, we may collect Personal Data
              that is already associated with your account, such as your name,
              your email address, your activities, or your contact list
              associated with that account.
            </Text>

            <Heading as="h2" size="lg" mb={6}>
              Use of Your Personal Data
            </Heading>
            <Text mb={6}>
              The Company may use Personal Data for the following purposes:
            </Text>

            <UnorderedList spacing={4} mb={6}>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  To provide and maintain our Services:
                </Text>{' '}
                Including to monitor the usage of our Services.
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  To manage your Account:
                </Text>{' '}
                To manage your registration as a user of the Services.
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  For the performance of a contract:
                </Text>{' '}
                The development, compliance, and undertaking of the purchase
                contract for the products, items, or services you have purchased
                or of any other contract with us through the Services.
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  To contact you:
                </Text>{' '}
                To contact you by email, telephone calls, SMS, or other
                equivalent forms of electronic communication regarding updates
                or informative communications related to the functionalities,
                products, or contracted services, including security updates.
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  To provide you with news, special offers, and general
                  information:
                </Text>{' '}
                About other goods, services, and events which we offer that are
                similar to those that you have already purchased or enquired
                about, unless you have opted not to receive such information.
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  To manage your requests:
                </Text>{' '}
                To attend and manage your requests to us.
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  For business transfers:
                </Text>{' '}
                We may use your information to evaluate or conduct a merger,
                divestiture, restructuring, reorganization, dissolution, or
                other sale or transfer of some or all of our assets.
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  For other purposes:
                </Text>{' '}
                We may use your information for other purposes, such as data
                analysis, identifying usage trends, determining the
                effectiveness of our promotional campaigns, and to evaluate and
                improve our Services, products, marketing, and your experience.
              </ListItem>
            </UnorderedList>

            <Heading as="h2" size="lg" mb={6}>
              Retention of Your Personal Data
            </Heading>

            <Text mb={4}>
              The Company will retain your Personal Data only for as long as is
              necessary for the purposes set out in this Privacy Policy. We will
              retain and use your Personal Data to the extent necessary to
              comply with our legal obligations (for example, if we are required
              to retain your data to comply with applicable laws), resolve
              disputes, and enforce our legal agreements and policies.
            </Text>

            <Text mb={4}>
              The Company will also retain Usage Data for internal analysis
              purposes. Usage Data is generally retained for a shorter period of
              time, except when this data is used to strengthen the security or
              to improve the functionality of our Services, or we are legally
              obligated to retain this data for longer time periods.
            </Text>

            <Text mb={6}>
              Personal user data is retained indefinitely but will be deleted
              within 60 days of account termination or account deletion. Users
              can delete their account from within the app.
            </Text>

            <Heading as="h2" size="lg" mb={6}>
              Transfer of Your Personal Data
            </Heading>

            <Text mb={4}>
              Your information, including Personal Data, is processed at the
              Company's operating offices and in any other places where the
              parties involved in the processing are located. This means that
              this information may be transferred to—and maintained on—computers
              located outside of your state, province, country, or other
              governmental jurisdiction where the data protection laws may
              differ from those of your jurisdiction.
            </Text>

            <Text mb={4}>
              Your consent to this Privacy Policy followed by your submission of
              such information represents your agreement to that transfer.
            </Text>

            <Text mb={6}>
              The Company will take all steps reasonably necessary to ensure
              that your data is treated securely and in accordance with this
              Privacy Policy and no transfer of your Personal Data will take
              place to an organization or a country unless there are adequate
              controls in place, including the security of your data and other
              personal information.
            </Text>

            <Heading as="h2" size="lg" mb={6}>
              Disclosure of Your Personal Data
            </Heading>

            <Heading as="h3" size="md" mb={4}>
              Business Transactions
            </Heading>

            <Text mb={4}>
              If the Company is involved in a merger, acquisition, or asset
              sale, your Personal Data may be transferred. We will provide
              notice before your Personal Data is transferred and becomes
              subject to a different Privacy Policy.
            </Text>

            <Heading as="h3" size="md" mb={4}>
              Law Enforcement
            </Heading>

            <Text mb={6}>
              Under certain circumstances, the Company may be required to
              disclose your Personal Data if required to do so by law or in
              response to valid requests by public authorities (e.g., a court or
              a government agency).
            </Text>

            <Heading as="h3" size="md" mb={4}>
              Other Legal Requirements
            </Heading>

            <Text mb={4}>
              The Company may disclose your Personal Data in the good faith
              belief that such action is necessary to:
            </Text>

            <UnorderedList mb={6} pl={5} spacing={3}>
              <ListItem>Comply with a legal obligation</ListItem>
              <ListItem>
                Protect and defend the rights or property of the Company
              </ListItem>
              <ListItem>
                Prevent or investigate possible wrongdoing in connection with
                the Services
              </ListItem>
              <ListItem>
                Protect the personal safety of users of the Services or the
                public
              </ListItem>
              <ListItem>Protect against legal liability</ListItem>
            </UnorderedList>

            <Heading as="h2" size="lg" mb={6}>
              Security of Your Personal Data
            </Heading>

            <Text mb={6}>
              The security of your Personal Data is important to us, but
              remember that no method of transmission over the Internet or
              method of electronic storage is 100% secure. While we strive to
              use commercially acceptable means to protect your Personal Data,
              we cannot guarantee its absolute security.
            </Text>

            <Heading as="h2" size="lg" mb={6}>
              Children's Privacy
            </Heading>

            <Text mb={4}>
              Our Services are not directed to anyone under the age of 18. We do
              not knowingly collect personally identifiable information from
              anyone under the age of 18. If you are a parent or guardian and
              you are aware that your child has provided us with Personal Data,
              please contact us.
            </Text>

            <Text mb={6}>
              If we become aware that we have collected Personal Data from
              anyone under the age of 18 without verification of parental
              consent, we will take steps to remove that information from our
              servers.
            </Text>

            <Heading as="h2" size="lg" mb={6}>
              Links to Other Websites
            </Heading>

            <Text mb={6}>
              Our Services may contain links to other websites that are not
              operated by us. If you click on a third-party link, you will be
              directed to that third party's site. We strongly advise you to
              review the Privacy Policy of every site you visit.
            </Text>

            <Text mb={6}>
              We have no control over and assume no responsibility for the
              content, privacy policies, or practices of any third-party sites
              or services.
            </Text>

            <Heading as="h2" size="lg" mb={6}>
              Changes to This Privacy Policy
            </Heading>

            <Text mb={6}>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
            </Text>

            <Text mb={6}>
              We will let you know via email and/or a prominent notice on our
              Services, prior to the change becoming effective and update the
              "Last updated" date at the top of this Privacy Policy.
            </Text>

            <Text mb={6}>
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </Text>

            <Heading as="h2" size="lg" mb={6}>
              Contact Us
            </Heading>

            <Text mb={4}>
              If you have any questions about this Privacy Policy, you can
              contact us:
            </Text>

            <UnorderedList mb={6} pl={5} spacing={3}>
              <ListItem>
                By email:{' '}
                <a href="mailto:support@vinemobility.com">
                  support@vinemobility.com
                </a>
              </ListItem>
              <ListItem>
                By visiting this page on our website:{' '}
                <a
                  href="https://www.vinemobility.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.vinemobility.com/contact
                </a>
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

export default Privacy
