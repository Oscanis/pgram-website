import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialLinks = () => {

    return (
        <div className='flex items-center justify-start'>
            <a href='https://www.linkedin.com/in/peter-omar-makai-46456976/' target='_blank' rel="noreferrer">
                <div className='rounded-full bg-gray-100 shadow-lg shadow-gray-400 m-3 p-3 cursor-pointer hover:scale-110 ease-in duration-100'>
                    <FaLinkedin />
                </div>
            </a>
            <a href='https://github.com/Oscanis' target='_blank' rel="noreferrer">
                <div className='rounded-full bg-gray-100 shadow-lg shadow-gray-400 m-3 p-3 cursor-pointer hover:scale-110 ease-in duration-100'>
                    <FaGithub />
                </div>
            </a>
            <a href='mailto:peter@pgram.hu'>
                <div className='rounded-full bg-gray-100 shadow-lg shadow-gray-400 m-3 p-3 cursor-pointer hover:scale-110 ease-in duration-100'>
                    <AiOutlineMail />
                </div>
            </a>
        </div>
    );
}

export default SocialLinks