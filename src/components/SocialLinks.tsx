import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialLinks = () => {

    return (
        <div className='flex items-center justify-start'>
            <div className='rounded-full bg-gray-100 shadow-lg shadow-gray-400 m-3 p-3 cursor-pointer hover:scale-110 ease-in duration-100'>
                <FaLinkedin />
            </div>
            <div className='rounded-full bg-gray-100 shadow-lg shadow-gray-400 m-3 p-3 cursor-pointer hover:scale-110 ease-in duration-100'>
                <FaGithub />
            </div>
            <div className='rounded-full bg-gray-100 shadow-lg shadow-gray-400 m-3 p-3 cursor-pointer hover:scale-110 ease-in duration-100'>
                <AiOutlineMail />
            </div>
        </div>
    );
}

export default SocialLinks