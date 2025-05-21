// data.js
// import desktop from '../assets/desktop.svg'
import desktop from "../../public/assets/desktop.svg"
import motor from '../../public/assets/motor.svg'
import yatch from '../../public/assets/yatch.svg'
import tablet from '../../public/assets/tablet.svg'

export const card = [
  {
    title: 'Solutions providers',
    content: [
      ' Whether you sell or install EV chargers, manage fleets, or run a charging network, Vine Mobility gives you the tools to scale with ease. Explore our ',
      { text: 'enterprise software', style: { color: '#8fc03f' } },
    ],
  },
  // {
  //   title: 'Site managers',
  //   content: [
  //     'If your sell or install EV Chargers, operate a charging network or manage a large fleet, learn about our ',
  //     { text: 'enterprise software', style: { color: 'blue' } },
  //     ' and ',
  //     { text: 'white-label solutions', style: { color: 'blue' } },
  //   ],
  // },
  {
    title: 'EV drivers',
    content: [
      'Download the VineVolts app to find chargers, scan to start a session, and pay seamlessly, all from your phone.',
    ],
  },
]

export const platform = [
  {
    src: desktop,
    title: 'Full Stack Solution',
    content:
      'We help solutions providers, network operators, and fleets pick the right hardware and maintain large-scale EV charging operations.',
  },
  {
    src: motor,
    title: 'Open & interoperable',
    content:
      "Vine Mobility has verified 15+ OCPP chargers from over a dozen  manufacturers. We're compatible with any OCPP hardware.",
  },
  {
    src: tablet,
    title: 'Contant Upgrades',
    content:
      'We release improvements every year to help you stay ahead of the rapidly evolving EV industry. Cloud-based means zero downtime.',
  },
  {
    src: yatch,
    title: ' Future-proofed',
    content:
      "Vine Mobility's cutting-edge microservices architecture makes our CSMS the most scalable solution on the market.",
  },
]

export const testimony = [
  {
    name: ' James A.',
    title: 'Head of Operations, PowerEdge EV Solutions',
    content: `From the first demo to full deployment, VineCharge impressed us with their deep understanding of the African market. Their seamless integration with Paystack made payment collection effortless for our users. We’re proud to partner with Vine Mobility as we scale our EV charging network`,
  },
  {
    name: 'Bonito Zhang',
    title: 'Director of Business Development, Gopro EV Solutions',
    content: `We were impressed by how smoothly Vine Mobility’s software integrated with our chargers. The flexibility, OCPP compliance, and attention to detail made the entire process fast and stress-free. Gopro is excited to officially partner with Vine Mobility to bring smart, scalable EV charging solutions to Africa."`,
  },
  {
    name: 'Max Z',
    title: 'International Sales Manager, Caraok EV Solutions',
    content: `We tested Vine Mobility’s software with our Caraok chargers and the experience was excellent. Their platform integrated flawlessly, delivering a stable and user-friendly management system. We are excited to partner with Vine Mobility to support the expansion of EV charging across Africa.`,
  },
]
