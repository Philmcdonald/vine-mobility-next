"use client"


import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  List,
} from '@chakra-ui/react'
import { Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react'
import { AiFillPlusCircle } from 'react-icons/ai'

const Site = () => {
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
            Site Host terms
          </Box>
          <AiFillPlusCircle color="#8fc03f" size={20} />
        </AccordionButton>
        <AccordionPanel pb={4} fontSize={'15px'}>
          <Box p={{ base: 2, xl: 8 }}>
            <Heading as="h1" size="xl" mb={4}>
              VINECHARGE CSMS TERMS AND CONDITIONS
            </Heading>
            <Text fontSize="sm" mb={8}>
              Last Updated: April 26, 2025
            </Text>

            <Heading as="h2" size="lg" mb={4}>
              1. INTRODUCTION
            </Heading>
            <Text mb={6}>
              Welcome to VineCharge. These Terms and Conditions ("Terms") govern
              your use of the VineCharge Charging Station Management System
              ("CSMS"), associated software, website, and related services
              (collectively, the "VineCharge Network Services") operated by Vine
              Mobility and Technologies Ltd ("Vine Mobility", "we", "us", or
              "our"), a company registered under the laws of the Federal
              Republic of Nigeria.
            </Text>
            <Text mb={6}>
              By accessing or using the VineCharge Network Services, you ("Site
              Host", "you", or "your") agree to be bound by these Terms. If you
              do not agree to these Terms, please do not access or use the
              VineCharge Network Services.
            </Text>

            <Heading as="h2" size="lg" mb={4}>
              2. DEFINITIONS
            </Heading>
            <UnorderedList spacing={3} mb={6} styleType="disc">
              <ListItem>
                <Text as="span" fontWeight="bold">
                  "Charging Station Management System" or "CSMS"
                </Text>{' '}
                means the software platform provided by Vine Mobility that
                enables Site Hosts to manage, monitor, and operate Electric
                Vehicle Charging Stations.
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  "Dashboard"
                </Text>{' '}
                means the web-based interface through which Site Hosts can
                access and manage the VineCharge Network Services.
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  "Electric Vehicle" or "EV"
                </Text>{' '}
                means an electric vehicle.
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  "Electric Vehicle Charging Station" or "EVCS"
                </Text>{' '}
                means an electric vehicle charging station.
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  "EVCS Location"
                </Text>{' '}
                means a physical location where one or more EVCS is installed.
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  "EVCS Usage Fees"
                </Text>{' '}
                means the fees charged to End Users for using an EVCS.
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  "End User"
                </Text>{' '}
                means an individual who uses the VineVolt mobile application to
                locate, access, and pay for charging sessions at an EVCS.
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  "Network Services"
                </Text>{' '}
                means the services provided by Vine Mobility to enable the
                management, operation, and monetization of EVCS.
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  "Order Form"
                </Text>{' '}
                means the document specifying the products or services to be
                provided to Site Host, including any applicable fees, as agreed
                upon by the parties.
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  "Site Host"
                </Text>{' '}
                means an entity that owns, operates, or otherwise controls an
                EVCS at a particular EVCS Location.
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  "Site Host Data"
                </Text>{' '}
                means all data collected from Site Host's EVCS and submitted to
                Vine Mobility through the VineCharge Network Services.
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  "Support Services"
                </Text>{' '}
                means the technical support services provided by Vine Mobility
                to Site Host.
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  "Supplementary Terms and Conditions"
                </Text>{' '}
                means any additional terms and conditions that may apply to
                specific products or services.
              </ListItem>
            </UnorderedList>

            <Heading as="h2" size="lg" mb={4}>
              3. VINECHARGE NETWORK SERVICES
            </Heading>

            <Heading as="h3" size="md" mb={2}>
              3.1 Service Description
            </Heading>
            <Text mb={4}>
              The VineCharge Network Services provide Site Hosts with a
              comprehensive platform to manage, monitor, and monetize their
              EVCS. The VineCharge CSMS offers features including, but not
              limited to:
            </Text>
            <UnorderedList spacing={3} mb={6} styleType="disc">
              <ListItem>Real-time monitoring and control of EVCS</ListItem>
              <ListItem>User authentication and payment processing</ListItem>
              <ListItem>Energy and session management</ListItem>
              <ListItem>Reporting and analytics</ListItem>
              <ListItem>Remote diagnostics and troubleshooting</ListItem>
              <ListItem>
                Integration with the VineVolt mobile application
              </ListItem>
            </UnorderedList>

            <Heading as="h3" size="md" mb={2}>
              3.2 Access and License
            </Heading>
            <Text mb={6}>
              Subject to these Terms, Vine Mobility grants Site Host a limited,
              non-exclusive, non-transferable, non-sublicensable license to
              access and use the VineCharge Network Services solely for the
              purpose of managing, operating, and monetizing Site Host's EVCS.
            </Text>

            <Heading as="h3" size="md" mb={2}>
              3.3 Service Availability
            </Heading>
            <Text mb={4}>
              Vine Mobility will use commercially reasonable efforts to make the
              VineCharge Network Services available 24 hours a day, 7 days a
              week, except for:
            </Text>
            <UnorderedList spacing={3} mb={6} styleType="disc">
              <ListItem>
                Planned downtime (of which Vine Mobility will provide advance
                notice)
              </ListItem>
              <ListItem>Emergency maintenance</ListItem>
              <ListItem>Force Majeure events</ListItem>
              <ListItem>Internet service provider failures or delays</ListItem>
            </UnorderedList>

            <Heading as="h2" size="lg" mb={4}>
              4. SITE HOST OBLIGATIONS
            </Heading>

            <Heading as="h3" size="md" mb={2}>
              4.1 Account Registration
            </Heading>
            <Text mb={4}>
              To access the VineCharge Network Services, Site Host must create
              an account by providing accurate and complete information. Site
              Host is responsible for maintaining the confidentiality of account
              credentials and for all activities that occur under Site Host's
              account.
            </Text>

            <Heading as="h3" size="md" mb={2}>
              4.2 Compliance with Laws
            </Heading>
            <Text mb={6}>
              Site Host shall comply with all applicable laws, regulations, and
              industry standards in connection with its use of the VineCharge
              Network Services and operation of its EVCS.
            </Text>

            <Heading as="h3" size="md" mb={2}>
              4.3 EVCS Installation and Maintenance
            </Heading>
            <UnorderedList spacing={3} mb={6} styleType="disc">
              <ListItem>The proper installation of its EVCS</ListItem>
              <ListItem>
                Ensuring its EVCS complies with all applicable laws,
                regulations, and industry standards
              </ListItem>
              <ListItem> Regular maintenance and repair of its EVCS</ListItem>
              <ListItem>
                Ensuring adequate internet connectivity for its EVCS
              </ListItem>
              <ListItem>The physical security of its EVCS</ListItem>
            </UnorderedList>

            <Heading as="h3" size="md" mb={2}>
              4.4 End User Support
            </Heading>
            <Text mb={6}>
              Site Host is responsible for providing on-site support to End
              Users regarding the operation of its EVCS. Vine Mobility will
              provide remote support for technical issues related to the
              VineCharge Network Services.
            </Text>

            <Heading as="h3" size="md" mb={2}>
              4.5 Prohibited Activities
            </Heading>
            <Text mb={4}>Site Host shall not:</Text>
            <UnorderedList spacing={3} mb={6} styleType="disc">
              <ListItem>
                Use the VineCharge Network Services for any unlawful purpose
              </ListItem>
              <ListItem>
                Attempt to gain unauthorized access to the VineCharge Network
                Services
              </ListItem>
              <ListItem>
                Interfere with or disrupt the integrity or performance of the
                VineCharge Network Services
              </ListItem>
              <ListItem>
                Reverse engineer, decompile, or disassemble any portion of the
                VineCharge Network Services
              </ListItem>
              <ListItem>
                Sell, resell, license, sublicense, distribute, rent, or lease
                the VineCharge Network Services
              </ListItem>
              <ListItem>
                Use the VineCharge Network Services to store or transmit
                malicious code
              </ListItem>
              <ListItem>
                Use the VineCharge Network Services to build a competitive
                product or service
              </ListItem>
            </UnorderedList>

            <Heading as="h2" size="lg" mb={4}>
              5. FEES AND PAYMENTS
            </Heading>

            <Heading as="h3" size="md" mb={2}>
              5.1 Service Fees
            </Heading>
            <Text mb={4}>
              Site Host shall pay the fees specified in the applicable Order
              Form for the VineCharge Network Services. Unless otherwise
              specified in the Order Form, all fees are quoted in Nigerian Naira
              (NGN).
            </Text>

            <Heading as="h3" size="md" mb={2}>
              5.2 Payment Terms
            </Heading>
            <Text mb={4}>
              All payments must be made in accordance with the payment terms set
              forth in the Order Form. Failure to make timely payments may
              result in the suspension or termination of services.
            </Text>

            <Heading as="h3" size="md" mb={2}>
              5.3 Payment Terms
            </Heading>
            <Text mb={4}>
              Unless otherwise specified in the Order Form, all fees are due
              within thirty (30) days of the invoice date. Late payments may
              result in the suspension of the VineCharge Network Services.
            </Text>

            <Heading as="h3" size="md" mb={2}>
              5.4 Taxes
            </Heading>
            <Text mb={4}>
              All fees are exclusive of taxes. Site Host is responsible for all
              taxes associated with its use of the VineCharge Network Services,
              except for taxes based on Vine Mobility&apos;s net income.
            </Text>

            <Heading as="h2" size="lg" mb={4}>
              6. PROPRIETARY RIGHTS
            </Heading>

            <Heading as="h3" size="md" mb={2}>
              6.1 Vine Mobility Intellectual Property
            </Heading>
            <Text mb={4}>
              All rights, title, and interest in and to the VineCharge Network
              Services, including all intellectual property rights, are owned by
              Vine Mobility or its licensors. Nothing in these Terms grants Site
              Host any rights to the VineCharge Network Services except for the
              limited license expressly set forth in Section 3.2.
            </Text>

            <Heading as="h3" size="md" mb={2}>
              6.2 Site Host Data
            </Heading>
            <Text mb={4}>
              Site Host owns all Site Host Data. Site Host grants Vine Mobility
              a non-exclusive, worldwide, royalty-free license to use,
              reproduce, modify, and distribute Site Host Data solely for the
              purpose of:
            </Text>
            <UnorderedList mb={4} pl={6}>
              <ListItem>
                Providing the VineCharge Network Services to Site Host
              </ListItem>
              <ListItem>
                Aggregating and anonymizing Site Host Data for analytical and
                research purposes
              </ListItem>
              <ListItem>Complying with legal obligations</ListItem>
            </UnorderedList>

            <Heading as="h3" size="md" mb={2}>
              6.3 Feedback
            </Heading>
            <Text mb={4}>
              If Site Host provides any suggestions, ideas, or feedback
              regarding the VineCharge Network Services, Vine Mobility may use
              such feedback without restriction and without obligation to Site
              Host.
            </Text>

            <Heading as="h2" size="lg" mb={4}>
              7. CONFIDENTIALITY
            </Heading>

            <Heading as="h3" size="md" mb={2}>
              7.1 Confidential Information
            </Heading>
            <Text mb={4}>
              "Confidential Information" means all non-public information
              disclosed by one party ("Disclosing Party") to the other party
              ("Receiving Party"), whether orally, in writing, or by other
              means, that is designated as confidential or that reasonably
              should be understood to be confidential given the nature of the
              information and the circumstances of disclosure.
            </Text>

            <Heading as="h3" size="md" mb={2}>
              7.2 Protection of Confidential Information
            </Heading>
            <Text mb={4}>The Receiving Party shall:</Text>
            <UnorderedList mb={4} pl={6}>
              <ListItem>
                Use the same degree of care to protect the Disclosing Party's
                Confidential Information as it uses to protect its own
                Confidential Information of similar nature, but in no event less
                than reasonable care
              </ListItem>
              <ListItem>
                Not use the Disclosing Party's Confidential Information for any
                purpose outside the scope of these Terms
              </ListItem>
              <ListItem>
                Not disclose the Disclosing Party's Confidential Information to
                any third party without the Disclosing Party's prior written
                consent
              </ListItem>
            </UnorderedList>

            <Heading as="h3" size="md" mb={2}>
              7.3 Exceptions
            </Heading>
            <Text mb={4}>
              The obligations in Section 7.2 do not apply to information that:
            </Text>
            <UnorderedList mb={4} pl={6}>
              <ListItem>
                Is or becomes publicly available without breach of these Terms
              </ListItem>
              <ListItem>
                Was known to the Receiving Party prior to its disclosure by the
                Disclosing Party
              </ListItem>
              <ListItem>
                Was independently developed by the Receiving Party without use
                of the Disclosing Party's Confidential Information
              </ListItem>
              <ListItem>
                Is received from a third party without restriction and without
                breach of any obligation of confidentiality
              </ListItem>
            </UnorderedList>

            <Heading as="h2" size="lg" mb={4}>
              8. DATA PROTECTION AND PRIVACY
            </Heading>

            <Heading as="h3" size="md" mb={2}>
              8.1 Data Protection Laws
            </Heading>
            <Text mb={4}>
              Each party shall comply with all applicable data protection laws,
              including the Nigeria Data Protection Regulation 2019 ("NDPR") and
              any subsequent amendments or replacements.
            </Text>

            <Heading as="h3" size="md" mb={2}>
              8.2 Data Processing
            </Heading>
            <Text mb={4}>
              To the extent that Vine Mobility processes any personal data on
              behalf of Site Host, the parties agree that:
            </Text>
            <UnorderedList mb={4} pl={6}>
              <ListItem>
                Site Host is the data controller and Vine Mobility is the data
                processor
              </ListItem>
              <ListItem>
                Vine Mobility shall process personal data only in accordance
                with Site Host's documented instructions
              </ListItem>
              <ListItem>
                Each party shall implement appropriate technical and
                organizational measures to protect personal data
              </ListItem>
            </UnorderedList>

            <Heading as="h3" size="md" mb={2}>
              8.3 Privacy Policy
            </Heading>
            <Text mb={4}>
              Vine Mobility's collection, use, and disclosure of personal data
              are governed by its Privacy Policy, which is incorporated into
              these Terms by reference.
            </Text>

            <Heading as="h2" size="lg" mb={4}>
              9. WARRANTIES AND DISCLAIMERS
            </Heading>

            <Heading as="h3" size="md" mb={2}>
              9.1 Mutual Warranties
            </Heading>
            <Text mb={4}>Each party represents and warrants that:</Text>
            <UnorderedList mb={4} pl={6}>
              <ListItem>
                It has the legal power and authority to enter into these Terms
              </ListItem>
              <ListItem>
                It has obtained all necessary consents and approvals to enter
                into and perform its obligations under these Terms
              </ListItem>
            </UnorderedList>

            <Heading as="h3" size="md" mb={2}>
              9.2 Vine Mobility Warranties
            </Heading>
            <Text mb={4}>Vine Mobility warrants that:</Text>
            <UnorderedList mb={4} pl={6}>
              <ListItem>
                The VineCharge Network Services will perform materially in
                accordance with the documentation
              </ListItem>
              <ListItem>
                It will provide the VineCharge Network Services in compliance
                with applicable laws
              </ListItem>
            </UnorderedList>

            <Heading as="h3" size="md" mb={2}>
              9.3 Disclaimers
            </Heading>
            <Text mb={4}>
              EXCEPT AS EXPRESSLY PROVIDED IN THESE TERMS, THE VINECHARGE
              NETWORK SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
              WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR
              OTHERWISE. VINE MOBILITY SPECIFICALLY DISCLAIMS ALL IMPLIED
              WARRANTIES, INCLUDING ANY WARRANTIES OF MERCHANTABILITY, FITNESS
              FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT, TO THE
              MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW.
            </Text>
            <Text mb={4}>
              VINE MOBILITY DOES NOT WARRANT THAT THE VINECHARGE NETWORK
              SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE FROM HARMFUL
              COMPONENTS, OR THAT THE DATA OR RESULTS PROVIDED THROUGH THE
              VINECHARGE NETWORK SERVICES WILL BE ACCURATE, RELIABLE, OR
              CURRENT.
            </Text>
            <Heading as="h2" size="lg" mb={4}>
              10. LIMITATION OF LIABILITY
            </Heading>

            <Heading as="h3" size="md" mb={2}>
              10.1 Exclusion of Certain Damages
            </Heading>
            <Text mb={4}>
              IN NO EVENT WILL EITHER PARTY BE LIABLE FOR ANY INDIRECT,
              CONSEQUENTIAL, SPECIAL, INCIDENTAL, PUNITIVE, OR EXEMPLARY
              DAMAGES, INCLUDING ANY DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE,
              OR DATA, EVEN IF SUCH PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF
              SUCH DAMAGES.
            </Text>

            <Heading as="h3" size="md" mb={2}>
              10.2 Limitation of Liability
            </Heading>
            <Text mb={4}>
              EXCEPT FOR SITE HOST'S PAYMENT OBLIGATIONS AND EITHER PARTY'S
              INDEMNIFICATION OBLIGATIONS, EACH PARTY'S AGGREGATE LIABILITY
              UNDER THESE TERMS WILL NOT EXCEED THE FEES PAID OR PAYABLE BY SITE
              HOST TO VINE MOBILITY DURING THE TWELVE (12) MONTHS IMMEDIATELY
              PRECEDING THE EVENT GIVING RISE TO THE LIABILITY.
            </Text>

            <Heading as="h3" size="md" mb={2}>
              10.3 Exceptions
            </Heading>
            <Text mb={4}>
              Nothing in these Terms excludes or limits either party's liability
              for:
            </Text>
            <UnorderedList mb={4} pl={6}>
              <ListItem>Fraud or fraudulent misrepresentation</ListItem>
              <ListItem>Death or personal injury caused by negligence</ListItem>
              <ListItem>
                Any other liability that cannot be excluded by law
              </ListItem>
            </UnorderedList>
            <Heading as="h2" size="lg" mb={4}>
              11. TERM AND TERMINATION
            </Heading>

            <Heading as="h3" size="md" mb={2}>
              11.1 Term
            </Heading>
            <Text mb={4}>
              These Terms commence on the date Site Host first accesses or uses
              the VineCharge Network Services and continue until terminated as
              provided in this Section 11.
            </Text>

            <Heading as="h3" size="md" mb={2}>
              11.2 Termination for Convenience
            </Heading>
            <Text mb={4}>
              Either party may terminate these Terms for convenience upon thirty
              (30) days' prior written notice to the other party.
            </Text>

            <Heading as="h3" size="md" mb={2}>
              11.3 Termination for Breach
            </Heading>
            <Text mb={4}>
              Either party may terminate these Terms immediately upon written
              notice if the other party:
            </Text>
            <UnorderedList mb={4} pl={6}>
              <ListItem>
                Materially breaches these Terms and fails to cure such breach
                within thirty (30) days after receipt of written notice
              </ListItem>
              <ListItem>
                Becomes insolvent, makes an assignment for the benefit of
                creditors, or becomes subject to bankruptcy or similar
                proceedings
              </ListItem>
            </UnorderedList>

            <Heading as="h3" size="md" mb={2}>
              11.4 Effect of Termination
            </Heading>
            <Text mb={4}>Upon termination of these Terms:</Text>
            <UnorderedList mb={4} pl={6}>
              <ListItem>
                All licenses granted under these Terms will immediately
                terminate
              </ListItem>
              <ListItem>
                Site Host shall cease all use of the VineCharge Network Services
              </ListItem>
              <ListItem>
                Site Host shall pay all outstanding fees due to Vine Mobility
              </ListItem>
              <ListItem>
                Vine Mobility shall provide Site Host with a copy of Site Host
                Data upon request, in a standard format, within thirty (30) days
                of termination
              </ListItem>
            </UnorderedList>

            <Heading as="h3" size="md" mb={2}>
              11.5 Survival
            </Heading>
            <Text mb={4}>
              The following sections will survive termination of these Terms: 5
              (Fees and Payment), 6 (Proprietary Rights), 7 (Confidentiality),
              9.3 (Disclaimers), 10 (Limitation of Liability), 11.4 (Effect of
              Termination), 11.5 (Survival), 12 (Indemnification), and 13
              (General Provisions).
            </Text>

            <Heading as="h2" size="lg" mb={4}>
              12. INDEMNIFICATION
            </Heading>

            <Heading as="h3" size="md" mb={2}>
              12.1 Indemnification by Vine Mobility
            </Heading>
            <Text mb={4}>
              Vine Mobility shall defend, indemnify, and hold harmless Site Host
              from and against any claims, damages, liabilities, costs, and
              expenses (including reasonable attorneys' fees) arising from or
              relating to any third-party claim alleging that the VineCharge
              Network Services infringe any intellectual property right of a
              third party.
            </Text>

            <Heading as="h3" size="md" mb={2}>
              12.2 Indemnification by Site Host
            </Heading>
            <Text mb={4}>
              Site Host shall defend, indemnify, and hold harmless Vine Mobility
              from and against any claims, damages, liabilities, costs, and
              expenses (including reasonable attorneys' fees) arising from or
              relating to:
            </Text>
            <UnorderedList mb={4} pl={6}>
              <ListItem>
                Site Host's use of the VineCharge Network Services in violation
                of these Terms
              </ListItem>
              <ListItem>Site Host Data</ListItem>
              <ListItem>Site Host's breach of applicable laws</ListItem>
              <ListItem>
                Site Host's EVCS installation, operation, or maintenance
              </ListItem>
            </UnorderedList>

            <Heading as="h3" size="md" mb={2}>
              12.3 Procedure
            </Heading>
            <Text mb={4}>
              The indemnifying party's obligations under this Section 12 are
              contingent upon the indemnified party: (a) promptly notifying the
              indemnifying party in writing of the claim; (b) giving the
              indemnifying party sole control of the defense and settlement of
              the claim; and (c) providing reasonable cooperation to the
              indemnifying party at the indemnifying party's expense.
            </Text>

            <Heading as="h2" size="lg" mb={4}>
              13. GENERAL PROVISIONS
            </Heading>

            <Heading as="h3" size="md" mb={2}>
              13.1 Modifications to Terms
            </Heading>
            <Text mb={4}>
              Vine Mobility may modify these Terms at any time by posting a
              revised version on the Dashboard or website, or by otherwise
              notifying Site Host in writing. The modified Terms will become
              effective upon posting or as stated in the notification. By
              continuing to use the VineCharge Network Services after the
              effective date of any modifications, Site Host agrees to be bound
              by the modified Terms. It is Site Host's responsibility to check
              the Dashboard and website regularly for modifications to these
              Terms.
            </Text>

            <Heading as="h3" size="md" mb={2}>
              13.2 Export Control
            </Heading>
            <Text mb={4}>
              Site Host shall comply with all applicable Nigerian export control
              laws and regulations in connection with its use of the VineCharge
              Network Services. Site Host shall not, directly or indirectly,
              export, re-export, or release the VineCharge Network Services to,
              or make the VineCharge Network Services accessible from, any
              jurisdiction or country to which export, re-export, or release is
              prohibited by law.
            </Text>

            <Heading as="h3" size="md" mb={2}>
              13.3 Force Majeure
            </Heading>
            <Text mb={4}>
              Neither party will be liable for delays caused by any event or
              circumstances beyond that party's reasonable control, including
              acts of God, acts of government, flood, fire, earthquakes, civil
              unrest, acts of terror, strikes or other labor problems (other
              than those involving that party's employees), Internet service
              failures or delays, or the unavailability or modification by third
              parties of telecommunications or hosting infrastructure or
              third-party websites ("Force Majeure"). This Section does not
              apply to Site Host's payment obligations.
            </Text>

            <Heading as="h3" size="md" mb={2}>
              13.4 Assignment
            </Heading>
            <Text mb={4}>
              Site Host may not assign or transfer these Terms or any rights or
              obligations under these Terms without Vine Mobility's prior
              written consent. Vine Mobility may transfer, assign, or
              subcontract any of its rights and obligations under these Terms
              without consent. Any attempt by Site Host to assign or transfer
              these Terms without Vine Mobility's consent will be void. Subject
              to the foregoing, these Terms will bind and inure to the benefit
              of the parties and their respective successors and permitted
              assigns.
            </Text>

            <Heading as="h3" size="md" mb={2}>
              13.5 Entire Agreement
            </Heading>
            <Text mb={4}>
              These Terms, together with any Order Forms and Supplementary Terms
              and Conditions, constitute the entire agreement between the
              parties regarding the subject matter hereof and supersede all
              prior or contemporaneous agreements, understandings, and
              communications, whether written or oral.
            </Text>

            <Heading as="h3" size="md" mb={2}>
              13.6 No Waiver
            </Heading>
            <Text mb={4}>
              The failure of either party to enforce any right or provision of
              these Terms will not constitute a waiver of future enforcement of
              that right or provision. The waiver of any right or provision will
              be effective only if in writing and signed by the party waiving
              such right or provision.
            </Text>

            <Heading as="h3" size="md" mb={2}>
              13.7 Severability
            </Heading>
            <Text mb={4}>
              If any provision of these Terms is held to be invalid or
              unenforceable, that provision will be limited or eliminated to the
              minimum extent necessary, and the remaining provisions of these
              Terms will remain in full force and effect.
            </Text>

            <Heading as="h3" size="md" mb={2}>
              13.8 Relationship of the Parties
            </Heading>
            <Text mb={4}>
              The parties are independent contractors. These Terms do not create
              a partnership, franchise, joint venture, agency, fiduciary, or
              employment relationship between the parties.
            </Text>

            <Heading as="h3" size="md" mb={2}>
              13.9 Notices
            </Heading>
            <Text mb={4}>
              All notices under these Terms must be in writing and will be
              deemed to have been duly given when received, if personally
              delivered; when receipt is electronically confirmed, if
              transmitted by email; the day after it is sent, if sent for next
              day delivery by recognized overnight delivery service; and upon
              receipt, if sent by certified or registered mail, return receipt
              requested.
            </Text>

            <Heading as="h3" size="md" mb={2}>
              13.10 No Third-Party Beneficiaries
            </Heading>
            <Text mb={4}>
              These Terms do not confer any rights or benefits on any third
              party.
            </Text>

            <Heading as="h3" size="md" mb={2}>
              13.11 Governing Law and Jurisdiction
            </Heading>
            <Text mb={4}>
              These Terms will be governed by and construed in accordance with
              the laws of the Federal Republic of Nigeria, without regard to its
              conflict of law provisions. Any legal action or proceeding arising
              under these Terms will be brought exclusively in the federal or
              state courts located in Lagos, Nigeria, and the parties hereby
              consent to the personal jurisdiction and venue therein.
            </Text>

            <Heading as="h3" size="md" mb={2}>
              13.12 Language
            </Heading>
            <Text mb={4}>
              It is the express wish of the parties that these Terms and all
              related documents be drawn up in English.
            </Text>

            <Heading as="h3" size="md" mb={2}>
              14. CONTACT INFORMATION
            </Heading>
            <Text mb={4}>
              If you have any questions about these Terms, please contact us at:
            </Text>
            <Text mb={2}>
              <strong>Vine Mobility and Technologies Ltd</strong>
              <br />
              [Your Physical Address]
              <br />
              Lagos, Nigeria
              <br />
              Email: [Your Email Address]
              <br />
              Phone: [Your Phone Number]
            </Text>
          </Box>

          <Box p={{ base: 2, xl: 8 }}>
            <Heading as="h1" size="xl" mb={4}>
              VineCharge Site Host Refund Policy
            </Heading>
            <Text fontSize="sm" mb={8}>
              <strong>Last Updated:</strong> April 26, 2025
            </Text>

            <Heading as="h3" size="md" mb={2}>
              1. Introduction
            </Heading>
            <Text mb={4}>
              Thank you for choosing Vine Mobility and Technologies Ltd.
              ("VineCharge", "we", "us" or "our"). This VineCharge Site Host
              Refund Policy ("Refund Policy") supplements our terms of service
              available on this page (the "Terms of Service") and outlines the
              circumstances under which VineCharge may issue a refund of EV
              Charging Station Usage Fees to End Users.
            </Text>

            <Heading as="h3" size="md" mb={2}>
              2. Terminology
            </Heading>
            <Text mb={4}>
              Capitalized terms used but not otherwise defined in this Refund
              Policy will have the meanings ascribed to them in the Terms of
              Service.
            </Text>

            <Heading as="h3" size="md" mb={2}>
              3. Scope of Refund Policy
            </Heading>

            <Heading as="h3" size="md" mb={2}>
              4. Scope of Refund Policy (Continued)
            </Heading>
            <Text mb={4}>
              This Refund Policy applies to EV Charging Station Usage Fees that
              are collected by VineCharge from End Users on behalf of Site Host,
              and are then processed by VineCharge or its Payment Processor.
              This Refund Policy does not apply when EV Charging Station Usage
              Fees are collected directly by Site Host or a Reseller. The goal
              of this Refund Policy is to help Site Host and End Users resolve
              issues efficiently when discrepancies arise during charging
              sessions. There is a separate Refund Policy for End Users.
            </Text>

            <Text mb={4}>
              Upon our receipt of an End User ticket requesting a refund, we
              will notify you of the ticket along with any supporting
              information and provide you with written notice of our decision to
              issue a refund.
            </Text>

            <Text mb={4}>
              If Site Host elects to offer discounts or promotions that are not
              set through the Network Services ("Out-of-Scope Refunds"), then
              Site Host is responsible for promptly responding to inquiries from
              End Users relating to such Out-of-Scope Refunds. If an End User
              submits a ticket to VineCharge with respect to an Out-of-Scope
              Refund, VineCharge will notify Site Host of the ticket and provide
              Site Host with supporting information. Site Host is solely
              responsible for responding to and resolving Out-of-Scope Refunds
              with End Users.
            </Text>

            <Heading as="h3" size="md" mb={2}>
              5. Out-of-Scope Refunds
            </Heading>
            <Text mb={4}>
              If the resolution of an Out-of-Scope Refund requires a refund of
              EV Charging Station Usage Fees to an End User and VineCharge
              collected the EV Charging Station Usage Fees on behalf of Site
              Host, then Site Host may submit a ticket to VineCharge requesting
              that VineCharge refund the End User ("Out-of-Scope Refund
              Ticket"). VineCharge will only be responsible for processing
              Out-of-Scope Refunds where Site Host has submitted the
              Out-of-Scope Refund Ticket to VineCharge within sixty (60) days of
              the date the User paid the EV Charging Station Usage Fees.
            </Text>

            <Text mb={4}>
              We reserve the right, at our sole discretion, to make the final
              decision on and issue refunds to End Users of EV Charging Station
              Usage Fees that we collect on your behalf. VineCharge is not
              obligated to provide you with detailed evidence validating an
              issued refund. In the event we issue a refund to an End User, the
              refunded amount will be deducted from the EV Charging Station
              Usage Fees that we collected on your behalf.
            </Text>

            <Heading as="h3" size="md" mb={2}>
              6. Site Host Obligations
            </Heading>
            <Text mb={4}>
              Site Host is responsible for ensuring that any EV Charging Station
              Usage Fees are accurately charged to End Users and for providing
              clear instructions for End Users to follow when using the EV
              Charging Station. Site Host agrees to promptly respond to any
              queries related to refund requests, including Out-of-Scope
              Refunds, and cooperate with VineCharge to resolve any issues as
              needed.
            </Text>

            <Heading as="h3" size="md" mb={2}>
              7. Site Host Requirements for End User Experience
            </Heading>

            <Text mb={4}>
              In order to ensure a good End User experience, Site Host will
              comply with the following requirements:
            </Text>

            <UnorderedList spacing={3} mb={4}>
              <ListItem>
                <Text as="strong">Designate a Point of Contact</Text>: Site Host
                will ensure that an appropriate point of contact for refund
                notifications is designated at all times on the banking
                information form accessible through the Dashboard.
              </ListItem>
              <ListItem>
                <Text as="strong">Timely Response</Text>: Within 48 Business
                Hours of receipt of notice from VineCharge, Site Host will
                resolve any issues or discrepancies related to EV Charging
                Station Usage Fees, including replacing or repairing any EV
                Charging Station where the EV Charging Station is the cause of
                the issue or discrepancy. "Business Hours" means the hours
                between 9:00 a.m. and 5:00 p.m. on weekdays, excluding public
                holidays in Nigeria, during which businesses are commonly open
                and operational.
              </ListItem>
              <ListItem>
                <Text as="strong">Operational Standards</Text>: Site Host will
                monitor and maintain operational standards at charging stations,
                including installing all firmware updates and performing all
                necessary maintenance to ensure optimal charging station
                functionality and performance.
              </ListItem>
            </UnorderedList>

            <Heading as="h3" size="md" mb={2}>
              8. Site Host Requirements (Cont'd)
            </Heading>

            <Text mb={4}>
              Additional requirements for Site Host to ensure smooth operations
              and End User satisfaction include:
            </Text>

            <UnorderedList spacing={3} mb={4}>
              <ListItem>
                <Text as="strong">Financial Accountability</Text>: Site Host
                will be solely responsible for all EV Charging Station Usage
                Fees refunded to End Users in accordance with this Refund
                Policy. VineCharge will deduct all refunds issued to End Users
                pursuant to this Refund Policy from the EV Charging Station
                Usage Fees that we collect on your behalf.
              </ListItem>
              <ListItem>
                <Text as="strong">Compliance with Nigerian Laws</Text>: Site
                Host will ensure compliance with all applicable Nigerian laws
                and regulations, including but not limited to the Nigerian
                Consumer Protection Act, the Federal Competition and Consumer
                Protection Act (FCCPA), and the Nigerian Data Protection
                Regulation (NDPR).
              </ListItem>
            </UnorderedList>

            <Text mb={4}>
              Site Host acknowledges and agrees that failure to comply with the
              foregoing will constitute a material breach of the Terms of
              Service, giving rise to VineCharge's termination right under the
              Terms of Service.
            </Text>

            <Heading as="h3" size="md" mb={2}>
              9. Eligibility for Refunds
            </Heading>

            <Text mb={4}>
              Generally, it is VineCharge's policy that all EV Charging Station
              Usage Fees paid by End Users are non-refundable. However,
              VineCharge will consider refund requests from End Users in the
              following circumstances:
            </Text>

            <UnorderedList spacing={3} mb={4}>
              <ListItem>
                <Text as="strong">
                  EV Charging Station Malfunction or Site Host Data or End User
                  Data Error
                </Text>
                : VineCharge may issue a refund of EV Charging Station Usage
                Fees to an End User where VineCharge has validated a discrepancy
                between the actual charging session provided to the End User and
                the charging session recorded or billed through the Network
                Services.
              </ListItem>
            </UnorderedList>
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default Site
