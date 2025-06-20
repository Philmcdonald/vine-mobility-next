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

const Driver = () => {
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
            Drivers Terms
          </Box>
          <AiFillPlusCircle color="#8fc03f" size={20} />
        </AccordionButton>
        <AccordionPanel pb={4} fontSize={'15px'}>
          <Heading as="h1" size="2xl" mb={4}>
            VINEVOLT TERMS OF SERVICE
          </Heading>
          <Text fontSize="sm" mb={8}>
            <strong>Last Updated:</strong> April 26, 2025
          </Text>

          {/* Section 1 */}
          <Box mb={10}>
            <Heading as="h2" size="lg" mb={4}>
              1. Introduction
            </Heading>
            <Text mb={4}>
              Welcome to VineVolt. These Terms of Service (&quot;Terms&quot;)
              govern your use of the VineVolt mobile application (&quot;VineVolt
              Application&quot;), website, and related services (collectively,
              the &quot;VineVolt Services&quot;) operated by Vine Mobility and
              Technologies Ltd (&quot;Vine Mobility&quot;, &quot;we&quot;,
              &quot;us&quot;, or &quot;our&quot;), a company registered under
              the laws of the Federal Republic of Nigeria.
            </Text>
            <Text>
              By accessing or using the VineVolt Services, you agree to be bound
              by these Terms and our Privacy Policy. If you do not agree to
              these Terms, please do not access or use the VineVolt Services.
            </Text>
          </Box>

          {/* Section 2 */}
          <Box mb={10}>
            <Heading as="h2" size="lg" mb={4}>
              2. Definitions
            </Heading>
            <UnorderedList spacing={3}>
              <ListItem>
                <strong>Account</strong>: The account created by a User to
                access and use the VineVolt Services.
              </ListItem>
              <ListItem>
                <strong>EV</strong>: Electric vehicle.
              </ListItem>
              <ListItem>
                <strong>EVCS</strong>: Electric vehicle charging station.
              </ListItem>
              <ListItem>
                <strong>EVCS Location</strong>: A physical location where one or
                more EVCS is installed.
              </ListItem>
              <ListItem>
                <strong>EVCS Usage Fees</strong>: The fees charged to Users for
                using an EVCS.
              </ListItem>
              <ListItem>
                <strong>Network Services</strong>: The network of EVCS operated
                through the VineVolt platform.
              </ListItem>
              <ListItem>
                <strong>Site Host</strong>: An entity that owns, operates, or
                otherwise controls an EVCS at a particular EVCS Location.
              </ListItem>
              <ListItem>
                <strong>User</strong>: Any individual who accesses or uses the
                VineVolt Services.
              </ListItem>
            </UnorderedList>
          </Box>

          {/* Section 3 */}
          <Box mb={10}>
            <Heading as="h2" size="lg" mb={4}>
              3. Construction
            </Heading>
            <Text>
              The terms &quot;include&quot; and &quot;including&quot; mean
              &quot;include without limitation&quot; and &quot;including without
              limitation.&quot; Section headings are for reference only and have
              no substantive effect. The terms &quot;consent&quot; or
              &quot;discretion&quot; mean the right of a party to withhold
              consent or exercise discretion at its sole discretion without
              obligation to act reasonably or explain its decision.
            </Text>
          </Box>

          {/* Section 4 */}
          <Box mb={10}>
            <Heading as="h2" size="lg" mb={4}>
              4. Eligibility
            </Heading>
            <Text>
              You must be at least 18 years old and capable of entering into a
              legally binding agreement to access or use the VineVolt Services.
            </Text>
          </Box>

          {/* Section 5 */}
          <Box mb={10}>
            <Heading as="h2" size="lg" mb={4}>
              5. VineVolt Services
            </Heading>
            <Text mb={4}>
              VineVolt enables Users to locate, access, and use EVCS across
              Nigeria. VineVolt does not own or operate the EVCS unless
              explicitly stated. Site Hosts operate the EVCS Locations.
            </Text>
            <Text>
              We reserve the right to modify, suspend, or discontinue any part
              of the VineVolt Services at any time.
            </Text>
          </Box>

          {/* Section 6 */}
          <Box mb={10}>
            <Heading as="h2" size="lg" mb={4}>
              6. User Accounts
            </Heading>
            <Text mb={4}>
              To use certain features, you must create an Account. You agree to
              provide accurate, complete, and up-to-date information. You are
              responsible for maintaining the confidentiality of your Account
              and password and for all activities under your Account.
            </Text>
            <Text>
              You must immediately notify us of any unauthorized use of your
              Account.
            </Text>
          </Box>

          {/* Section 7 */}
          <Box mb={10}>
            <Heading as="h2" size="lg" mb={4}>
              7. Payment
            </Heading>
            <Text mb={4}>
              Users are responsible for paying all EVCS Usage Fees. Payments are
              processed through third-party payment processors. VineVolt is not
              liable for any issues arising from the payment process.
            </Text>
            <Text>All fees are non-refundable unless otherwise stated.</Text>
          </Box>

          {/* Section 8 */}
          <Box mb={10}>
            <Heading as="h2" size="lg" mb={4}>
              8. User Conduct
            </Heading>
            <Text>
              You agree not to misuse the VineVolt Services. Prohibited
              activities include tampering with EVCS, unauthorized access, and
              violating applicable laws.
            </Text>
          </Box>

          {/* Section 9 */}
          <Box mb={10}>
            <Heading as="h2" size="lg" mb={4}>
              9. Intellectual Property
            </Heading>
            <Text>
              All content, trademarks, logos, and software used in the VineVolt
              Services are owned by Vine Mobility or its licensors and are
              protected under applicable laws.
            </Text>
          </Box>

          {/* Section 10 */}
          <Box mb={10}>
            <Heading as="h2" size="lg" mb={4}>
              10. Disclaimers
            </Heading>
            <Text>
              The VineVolt Services are provided &quot;as is&quot; without
              warranties of any kind. We do not guarantee uninterrupted or
              error-free operation of the VineVolt Services.
            </Text>
          </Box>

          {/* Section 11 */}
          <Box mb={10}>
            <Heading as="h2" size="lg" mb={4}>
              11. Limitation of Liability
            </Heading>
            <Text>
              To the fullest extent permitted by law, Vine Mobility shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages arising from or related to your use of the
              VineVolt Services.
            </Text>
          </Box>

          {/* Section 12 */}
          <Box mb={10}>
            <Heading as="h2" size="lg" mb={4}>
              12. Indemnification
            </Heading>
            <Text>
              You agree to indemnify and hold harmless Vine Mobility, its
              affiliates, and their respective officers, directors, employees,
              and agents from any claims, damages, obligations, losses,
              liabilities, costs, and expenses arising from your use of the
              VineVolt Services or violation of these Terms.
            </Text>
          </Box>

          {/* Section 13 */}
          <Box mb={10}>
            <Heading as="h2" size="lg" mb={4}>
              13. Changes to Terms
            </Heading>
            <Text>
              We reserve the right to modify these Terms at any time. Changes
              will be effective upon posting. Your continued use of the VineVolt
              Services after changes means you accept the new Terms.
            </Text>
          </Box>

          {/* Section 14 */}
          <Box mb={10}>
            <Heading as="h2" size="lg" mb={4}>
              14. Termination
            </Heading>
            <Text>
              We may suspend or terminate your access to the VineVolt Services
              at our sole discretion, without notice, for any reason, including
              violation of these Terms.
            </Text>
          </Box>

          {/* Section 15 */}
          <Box mb={10}>
            <Heading as="h2" size="lg" mb={4}>
              15. Governing Law
            </Heading>
            <Text>
              These Terms are governed by the laws of the Federal Republic of
              Nigeria. Any disputes arising out of or relating to these Terms
              shall be resolved by the courts of Nigeria.
            </Text>
          </Box>

          {/* Section 16 */}
          <Box mb={10}>
            <Heading as="h2" size="lg" mb={4}>
              16. Contact Us
            </Heading>
            <Text>
              For any questions regarding these Terms, please contact us at
              support@vinevolt.com.
            </Text>
          </Box>

          {/* Section 17 */}
          <Box mb={10}>
            <Heading as="h2" size="lg" mb={4}>
              17. Entire Agreement
            </Heading>
            <Text>
              These Terms constitute the entire agreement between you and Vine
              Mobility regarding the use of the VineVolt Services and supersede
              any prior agreements or understandings.
            </Text>
          </Box>

          <Box>
            <Heading as="h1" size="2xl" mb={4}>
              VINEVOLT REFUND POLICY
            </Heading>
            <Text fontSize="sm" mb={8}>
              <strong>Last Updated:</strong> April 26, 2025
            </Text>

            {/* Section 1 */}
            <Box mb={10}>
              <Heading as="h2" size="lg" mb={4}>
                1. Introduction
              </Heading>
              <Text>
                Thank you for choosing Vine Mobility and Technologies Ltd ("Vine
                Mobility", "we", "us", or "our"). This VineVolt User Refund
                Policy ("Refund Policy") supplements our Terms of Service and
                outlines the circumstances under which Vine Mobility may issue a
                refund of EVCS Usage Fees to Users.
              </Text>
            </Box>

            {/* Section 2 */}
            <Box mb={10}>
              <Heading as="h2" size="lg" mb={4}>
                2. Terminology
              </Heading>
              <Text>
                Capitalized terms used but not otherwise defined in this Refund
                Policy will have the meanings ascribed to them in the Terms of
                Service.
              </Text>
            </Box>

            {/* Section 3 */}
            <Box mb={10}>
              <Heading as="h2" size="lg" mb={4}>
                3. Scope of Refund Policy
              </Heading>
              <Text mb={4}>
                This Refund Policy applies to EVCS Usage Fees that are collected
                by Vine Mobility from Users on behalf of a Site Host that are
                then processed by Vine Mobility or its Payment Processor. This
                Refund Policy does not apply when EVCS Usage Fees are collected
                directly by a Site Host.
              </Text>
              <Text>
                We will provide you with written notice of our decision to issue
                a refund upon receipt of your request for a refund.
              </Text>
            </Box>

            {/* Section 4 */}
            <Box mb={10}>
              <Heading as="h2" size="lg" mb={4}>
                4. Eligibility
              </Heading>
              <Text mb={4}>
                Generally, it is Vine Mobility's policy that all EVCS Usage Fees
                paid by Users are non-refundable. However, Vine Mobility may,
                but is not required to, issue a refund to Users in its sole
                discretion.
              </Text>

              <Text mb={4}>
                The following are examples of where Vine Mobility may, but is
                not required to, issue a refund to Users:
              </Text>

              <Box pl={6} mb={6}>
                <Heading as="h3" size="md" mb={3}>
                  4.1 EVCS Malfunction or Site Host Data or User Data Error
                </Heading>
                <Text mb={4}>
                  Vine Mobility may issue a refund where we validate a
                  discrepancy between the actual charging session and the
                  recorded or billed session, including where an EVCS
                  malfunction causes an inaccurate fee. Vine Mobility relies on
                  charging logs to validate discrepancies without additional
                  investigation.
                </Text>

                <Heading as="h3" size="md" mb={3}>
                  4.2 Price Rules and Customer Experience
                </Heading>
                <Text mb={4}>
                  Vine Mobility does not issue refunds for misunderstandings
                  regarding pricing rates or rules. Users are responsible for
                  understanding pricing before charging.
                </Text>

                <Box pl={6}>
                  <Heading as="h4" size="sm" mb={2}>
                    4.2.1 Time Plugged-in Charge
                  </Heading>
                  <Text mb={4}>
                    If a User did not know they would be charged for time
                    plugged-in instead of kWh consumption, they may be eligible
                    for a one-time refund. Subsequent similar refund requests
                    will be rejected.
                  </Text>

                  <Heading as="h4" size="sm" mb={2}>
                    4.2.2 Idle Fees
                  </Heading>
                  <Text>
                    Idle fees will not generally be refunded unless significant
                    hardware or software issues caused them, or Vine Mobility
                    failed to properly notify the User (unless the User disabled
                    notifications).
                  </Text>
                </Box>
              </Box>
            </Box>

            {/* Section 5 */}
            <Box mb={10}>
              <Heading as="h2" size="lg" mb={4}>
                5. Refund Process
              </Heading>

              <Box pl={6} mb={6}>
                <Heading as="h3" size="md" mb={3}>
                  5.1 Request Submission
                </Heading>
                <Text mb={4}>
                  Refund requests must be submitted within 30 days of the
                  payment date through our website's contact form and must
                  include:
                </Text>
                <UnorderedList spacing={3}>
                  <ListItem>
                    The email address linked to the User's Account
                  </ListItem>
                  <ListItem>Detailed receipts or transaction proof</ListItem>
                  <ListItem>Screenshots of actual charges</ListItem>
                  <ListItem>
                    Additional evidence, such as vehicle app logs
                  </ListItem>
                </UnorderedList>
              </Box>

              <Box pl={6}>
                <Heading as="h3" size="md" mb={3}>
                  5.2 Credit
                </Heading>
                <Text>
                  Refunds will be credited back to the original payment method
                  used by the User.
                </Text>
              </Box>
            </Box>

            {/* Section 6 */}
            <Box mb={10}>
              <Heading as="h2" size="lg" mb={4}>
                6. Additional Terms
              </Heading>

              <Box pl={6} mb={6}>
                <Heading as="h3" size="md" mb={3}>
                  6.1 Site Host Refund Policies
                </Heading>
                <Text mb={4}>
                  This Refund Policy only applies to VineVolt Services and does
                  not alter any agreements Users have with Site Hosts.
                </Text>

                <Heading as="h3" size="md" mb={3}>
                  6.2 Pre-authorization Holds
                </Heading>
                <Text mb={4}>
                  Pre-authorization holds are automatically released; timing
                  depends on the User's financial institution.
                </Text>

                <Heading as="h3" size="md" mb={3}>
                  6.3 Financial Institution Fees
                </Heading>
                <Text>
                  Any extra fees from a User's financial institution (e.g.,
                  transaction or service fees) are not eligible for refund.
                </Text>
              </Box>
            </Box>

            {/* Section 7 */}
            <Box mb={10}>
              <Heading as="h2" size="lg" mb={4}>
                7. Modifications to Refund Policy
              </Heading>
              <Text>
                We may modify this Refund Policy at any time by posting a
                revised version on our website, in the VineVolt Application, or
                by other notification methods as stated in the Terms of Service.
              </Text>
            </Box>

            {/* Section 8 */}
            <Box mb={10}>
              <Heading as="h2" size="lg" mb={4}>
                8. Contact
              </Heading>
              <Text mb={2}>
                For any refund inquiries, Users may contact Vine Mobility at:
              </Text>
              <Text>
                Vine Mobility and Technologies Ltd
                <br />
                {/* [Your Physical Address] */}
                {/* <br /> */}
                Lagos, Nigeria
                <br />
                Email: philip@vine-mobility.com
                <br />
                Phone: +234 904 885 0446
              </Text>
            </Box>
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default Driver
