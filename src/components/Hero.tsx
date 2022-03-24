import { claas } from 'claas'
import { useEffect, useState } from 'react'
import { shuffle } from 'lodash'

const Hero = () => {
  const colors = useColors()
  return (
    <div className="h-screen relative">
      <div className="grid grid-cols-8 h-5 absolute top-0 w-full">
        {colors.map(color => (
          <div
            className="h-full w-full duration-1000"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      <Watermark />

      <div className="absolute z-10 top-0 h-full grid grid-cols-8">
        <TitleContainer>
          <h1 className="font-serif text-light-just text-7xl md:text-[128px]">
            I Just, Develop
          </h1>
        </TitleContainer>

        <Links>
          <Link>whoami</Link>
          <Link>projects</Link>
          <Link>non-tech me</Link>
          <Link>contacts</Link>
        </Links>
      </div>
    </div>
  )
}

export default Hero

const _colors = [
  '#1b1b1b',
  '#dddddd',
  '#1b1b1b',
  '#dddddd',
  '#111111',
  '#1b1b1b',
  '#dddddd',
  '#111111',
]

const useColors = () => {
  const [colors, setColors] = useState(_colors)
  useEffect(() => {
    const loop = setInterval(() => {
      setColors(shuffle(_colors))
    }, 2000)

    return () => {
      clearInterval(loop)
    }
  }, [])

  return colors
}

const TitleContainer = claas.div`
    col-start-1 sm:col-start-2 md:col-start-2
    col-span-8 sm:col-span-6 md:col-span-4 
    grid content-center tracking-wide
    p-4 
`

const Links = claas.div`
     text-light-just 
    flex justify-center items-end gap-y-10

    flex-col col-start-2 col-span-6 md:col-span-1 md:col-start-7 justify-center
`

const Link = claas.button`
    text-xl font-serif duration-300 
    hover:bg-light-just hover:text-dark-bit hover:pl-7
    hover:relative 
    hover:before:bg-light-just hover:before:absolute
    hover:before:w-2 hover:before:h-full hover:before:-left-5
`

const Watermark = () => (
  <svg
    className="w-full absolute top-1/2 -translate-y-1/2"
    viewBox="0 0 1630 235"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M44.7 0.399981L179.7 235H173.4L38.4 0.399981H44.7ZM32.4 0.399981L167.4 235H160.8L26.1 0.399981H32.4ZM19.8 0.399981L154.8 235H148.5L13.8 0.399981H19.8ZM159.9 178.9L165.3 188.2V0.399981H170.7V197.5L176.1 206.8V0.399981H181.5V216.4L186.9 225.4V0.399981H192.3V235H185.7L50.7 0.399981H56.7L143.7 151V0.399981H149.1V160.3L154.5 169.3V0.399981H159.9V178.9ZM11.7 19L6.3 9.39999V235H0.9V0.399981H6.6L142.5 235H135.9L49.5 84.7V235H44.1V75.4L38.7 66.1V235H33.3V56.8L27.9 47.2V235H22.5V37.6L17.1 28.3V235H11.7V19ZM266.745 0.399981V235H261.345V0.399981H266.745ZM277.545 0.399981V235H272.145V0.399981H277.545ZM288.345 0.399981V235H282.945V0.399981H288.345ZM299.145 0.399981V235H293.745V0.399981H299.145ZM255.945 0.399981V235H250.545V0.399981H255.945ZM362.327 0.399981V235H356.927V0.399981H362.327ZM394.727 0.399981V235H389.327V0.399981H394.727ZM383.927 0.399981V235H378.527V0.399981H383.927ZM373.127 0.399981V235H367.727V0.399981H373.127ZM405.527 130.9V136.3H470.627V141.7H405.527V186.4H493.127V191.8H405.527V197.2H493.127V202.6H405.527V208H493.127V213.4H405.527V218.8H493.127V224.2H405.527V229.6H493.127V235H400.127V0.399981H493.127V5.79998H405.527V11.2H493.127V16.6H405.527V22H493.127V27.4H405.527V32.8H493.127V38.2H405.527V43.6H493.127V48.7H405.527V93.1H470.627V98.5H405.527V103.9H470.627V109.3H405.527V114.7H470.627V120.1H405.527V125.5H470.627V130.9H405.527ZM731.236 235L799.036 78.7L797.536 69.1L725.836 235H719.836L796.036 59.5L794.236 49.3L714.136 235H707.836L792.436 38.8L790.936 29.8L701.536 235H695.836L789.436 19.3L787.636 9.69999L690.136 235H684.136L619.936 83.8L594.436 235H589.336L615.736 74.5L612.136 64.9L583.336 235H578.536L608.236 56.5L604.336 46.9L572.836 235H567.436L600.436 37.3L596.536 28L561.736 235H556.636L592.636 19.3L588.436 9.69999L550.936 235H545.536L584.836 0.399981H590.536L687.136 228.7L690.136 222.4L596.236 0.399981H601.936L692.836 215.2L695.836 208.6L608.236 0.399981H614.536L698.836 201.4L702.136 194.2L619.636 0.399981H625.636L704.836 187.3L707.836 180.7L631.336 0.399981H637.036L710.536 174.1L786.136 0.399981H791.536L830.836 235H825.436L800.836 88.6L737.236 235H731.236ZM802.636 0.399981L841.636 235H836.536L797.236 0.399981H802.636ZM813.436 0.399981L852.736 235H847.336L808.036 0.399981H813.436ZM824.236 0.399981L863.536 235H858.136L819.136 0.399981H824.236ZM835.336 0.399981L874.636 235H869.236L829.936 0.399981H835.336ZM1002.97 171.7L1000.57 177.1H1086.67L1084.57 171.7H1002.97ZM1006.87 160.9L1004.77 166.3H1082.47L1080.67 160.9H1006.87ZM1074.37 144.7L1043.77 67L1013.47 144.7H1074.37ZM1011.37 150.1L1009.27 155.5H1078.27L1076.47 150.1H1011.37ZM1091.17 187.6L1089.07 182.5H998.773L996.673 187.6H1091.17ZM994.573 193L978.073 235H972.373L1064.17 0.399981H1070.17L1161.67 235H1155.67L1066.87 7.6L1064.17 14.8L1149.67 235H1143.97L1061.17 22.6L1058.47 29.8L1138.57 235H1132.57L1055.47 37L1052.77 44.5L1127.17 235H1121.17L1049.77 51.7L1047.07 59.8L1115.17 235H1109.47L1093.27 193H994.573ZM1058.17 0.399981L966.373 235H960.373L1052.47 0.399981H1058.17ZM1046.77 0.399981L954.973 235H948.973L1041.07 0.399981H1046.77ZM1035.37 0.399981L943.573 235H937.573L1029.07 0.399981H1035.37ZM1023.07 0.399981L931.873 235H925.873L1017.37 0.399981H1023.07ZM1257.47 0.399981L1392.47 235H1386.17L1251.17 0.399981H1257.47ZM1245.17 0.399981L1380.17 235H1373.57L1238.87 0.399981H1245.17ZM1232.57 0.399981L1367.57 235H1361.27L1226.57 0.399981H1232.57ZM1372.67 178.9L1378.07 188.2V0.399981H1383.47V197.5L1388.87 206.8V0.399981H1394.27V216.4L1399.67 225.4V0.399981H1405.07V235H1398.47L1263.47 0.399981H1269.47L1356.47 151V0.399981H1361.87V160.3L1367.27 169.3V0.399981H1372.67V178.9ZM1224.47 19L1219.07 9.39999V235H1213.67V0.399981H1219.37L1355.27 235H1348.67L1262.27 84.7V235H1256.87V75.4L1251.47 66.1V235H1246.07V56.8L1240.67 47.2V235H1235.27V37.6L1229.87 28.3V235H1224.47V19ZM1511.92 224.2V229.6C1542.82 229 1569.22 217.9 1591.12 196.3C1613.02 174.7 1623.82 148.6 1623.82 117.7C1623.82 86.8 1613.02 60.7 1591.12 39.1C1569.22 17.5 1542.82 6.39999 1511.92 5.79998V11.2C1541.62 11.8 1566.82 22.3 1587.52 42.7C1608.22 63.1 1618.42 88 1618.42 117.7C1618.42 147.4 1608.22 172.3 1587.52 192.7C1566.82 213.1 1541.62 223.6 1511.92 224.2ZM1511.92 213.4V218.8C1540.12 218.2 1564.12 208.3 1583.62 188.8C1603.12 169.3 1613.02 145.6 1613.02 117.7C1613.02 89.8 1603.12 66.1 1583.62 46.6C1564.12 27.1 1540.12 17.2 1511.92 16.6V22C1538.62 22.6 1561.42 32.2 1579.72 50.5C1598.32 68.8 1607.62 91 1607.62 117.7C1607.62 144.1 1598.32 166.6 1579.72 184.9C1561.12 203.2 1538.62 212.8 1511.92 213.4ZM1511.92 202.6V208C1537.12 207.4 1558.42 198.4 1575.82 181.3C1593.52 163.9 1602.22 142.6 1602.22 117.7C1602.22 92.8 1593.52 71.5 1575.82 54.4C1558.42 37 1537.12 28 1511.92 27.4V32.8C1535.62 33.4 1555.72 41.8 1572.22 58C1588.72 74.2 1596.82 94 1596.82 117.7C1596.82 141.1 1588.42 160.9 1571.92 177.4C1555.42 193.6 1535.62 202 1511.92 202.6ZM1511.92 191.8V197.2C1534.12 196.6 1553.02 188.8 1568.32 173.5C1583.62 158.2 1591.42 139.6 1591.42 117.7C1591.42 95.8 1583.62 77.2 1568.32 61.9C1553.02 46.6 1534.12 38.8 1511.92 38.2V43.6C1532.92 44.2 1550.62 51.7 1564.72 65.8C1579.12 79.9 1586.32 97 1586.32 117.7C1586.32 138.4 1579.12 155.8 1564.72 169.9C1550.32 184 1532.62 191.2 1511.92 191.8ZM1511.92 48.7V186.4C1531.12 185.8 1547.32 178.9 1560.82 166C1574.32 152.8 1580.92 136.6 1580.92 117.7C1580.92 98.8 1574.32 82.6 1560.82 69.7C1547.32 56.5 1531.12 49.6 1511.92 48.7ZM1506.52 235V0.399981H1511.92C1544.62 0.399981 1572.52 11.8 1595.02 34.6C1617.82 57.1 1629.22 85 1629.22 117.7C1629.22 150.4 1617.82 178.3 1594.72 201.1C1571.92 223.6 1544.32 235 1511.92 235H1506.52ZM1479.52 0.399981V235H1474.12V0.399981H1479.52ZM1490.32 0.399981V235H1484.92V0.399981H1490.32ZM1501.12 0.399981V235H1495.72V0.399981H1501.12ZM1468.72 0.399981V235H1463.32V0.399981H1468.72Z"
      fill="url(#paint0_linear_2_4)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_2_4"
        x1="-36.5"
        y1="248"
        x2="1612.5"
        y2="248"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0159681" stop-color="#1B1B1B" />
        <stop offset="1" stop-color="#1B1B1B" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>
)
