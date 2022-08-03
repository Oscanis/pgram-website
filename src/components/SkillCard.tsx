import React from 'react';

type Props = {
    cardText: string,
    children?: JSX.Element
};

const SkillCard: React.FC<Props> = ({cardText, children}) => {
  return (
    <div className='p-6 shadow-xl rounded-xl bg-gray-100 hover:scale-[1.02] ease-in duration-200'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <span className='w-full flex justify-center'>{children}</span>
            <h3>{cardText}</h3>
        </div>
    </div>
  )
}

export default SkillCard