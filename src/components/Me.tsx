import { motion, motionValue, useTransform } from 'framer-motion'

const Me = () => {
  const contentOffsetY = motionValue(0)

  const y = useTransform(contentOffsetY, [0, -100], [0, 50], {
    clamp: false,
  })

  console.log({
    y,
  })

  return (
    <div className="min-h-screen grid grid-cols-8">
      <div className="col-start-1 row-start-1 sm:col-start-2 col-span-8 sm:">
        <h1 className="font-serif text-[160px] text-white">Me</h1>
      </div>

      <div className="sm:row-start-1 col-span-8 md:col-span-4 col-start-1 md:col-start-4">
        <div className="bg-white font-sans py-20 px-3 md:px-32 flex flex-col gap-y-5">
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            semper massa dolor vitae libero, in libero elementum. Leo elit
            accumsan sem nisi sapien.
          </p>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit ipsum
            morbi id elit interdum dignissim feugiat pretium. Leo venenatis a
            aliquet libero diam, nec.
          </p>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            semper massa dolor vitae libero, in libero elementum. Leo elit
            accumsan sem nisi sapien.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Me
