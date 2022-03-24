const Skills = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
      <Skill
        title={['Rea', 'ctJS']}
        subtitle="I create websites with"
        backgroundColor="#DDDDDD"
        color="#1C1C1C"
      />
      <Skill
        title={['Dev', 'Ops']}
        subtitle="I ship code via"
        backgroundColor="#1B1B1B"
        color="#DDDDDD"
      />
      <Skill
        title={['Nod', 'eJS']}
        subtitle="I write APIs on"
        backgroundColor="transparent"
        color="white"
      />
      <Skill
        title={['Post', 'gres']}
        subtitle="My favorite db is"
        backgroundColor="#DDDDDD"
        color="#1B1B1B"
      />
      <Skill
        title={['UI/', 'UX']}
        subtitle="Do you like this..?"
        backgroundColor="transparent"
        color="white"
      />
      <Skill title={['Wh', "at's"]} backgroundColor="#DDDDDD" color="#1B1B1B" />
      <Skill
        title={['Next', 'Yet']}
        backgroundColor="#1B1B1B"
        color="#dddddd"
      />
      <Skill title={['', '...']} backgroundColor="transparent" color="white" />
    </div>
  )
}

type SkillProps = {
  title: [string, string]
  subtitle?: string
  color: string
  backgroundColor: string
}

const Skill = ({ color, backgroundColor, title, subtitle }: SkillProps) => {
  return (
    <div className="relative aspect-square" style={{ backgroundColor, color }}>
      <div className="absolute top-2 w-full h-full ">
        <h2 className="text-xl tracking-wider text-center">{subtitle}</h2>
      </div>
      <div className="grid place-content-center absolute top-0 w-full h-full">
        <h1 className="font-serif text-[100px] 2xl:text-[140px] grid leading-none">
          <span>{title[0]}</span>
          <span>{title[1]}</span>
        </h1>
      </div>
    </div>
  )
}

export default Skills
