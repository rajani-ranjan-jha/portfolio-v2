import React from 'react'
type SkillCard = {
  name: string;
  category: string;
  level: number;
  url?: string;
}
const SkillCard = ({SkillData}:{SkillData:SkillCard[]}) => {
  return (
    <div id='skills' className = 'w-full border-t-2 py-10 flex flex-col justify-center items-center'>
      <h1 className='text-center font-semibold text-3xl my-5'>My Skills</h1>
      <div className='w-full flex flex-wrap justify-between gap-5 border  p-10'>
        { SkillData.map((skill, index) => (
        <div key={index} className='p-10 min-w-80 text-2xl flex flex-col items-start justify-center border border-white/50 rounded-md gap-2'>
          <div className = 'gap-2 flex items-center'>
            <img className='w-10' src={`/assets/languages/${skill.name.toLowerCase().replaceAll(' ','')}.png`} alt={skill.name} />
            <h2 className='capitalize'>{skill.name}</h2>
          </div>
          <div className='h-2 bg-white w-full rounded-full'>
            <div className={`bg-red-500 h-full rounded-full animate-loading`} style={{width: `${skill.level}%` }} ></div>
          </div>
        </div>
      ))
      }
      </div>
    </div>
  )
}

export default SkillCard
