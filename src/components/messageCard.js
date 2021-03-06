import avater1 from '../images/3551739.jpg';
import avater2 from '../images/gummy-work-from-home.png';
const defaultAvatars = [avater1, avater2]
const MessageCard = ({ messages = [] }) => 
    <div className='bg-white flex flex-col rounded-2xl mt-5 card p-5 mr-10 ' style={{ width: '30%' }}> 
        <div className='mb-5'>
            <h1 className='font-bold text-2xl'>Messages</h1>
        </div>
        <div className='flex flex-col h-auto'>
            {(messages.length === 0 ?
                <div className='h-64 text-center'>
                    <p className='mt-20 font-medium text-xl'>No new Messages</p>
                </div> :
                messages.map((message, i) =>
                    <div key={i} className='flex'>
                        <div className='pr-3 mb-6'>
                            <img src=
                                {
                                (message.senderProfileImage != null?
                                    message.senderProfileImage:
                                    defaultAvatars[ Math.floor(Math.random() * 2)]
                                    )
                                }
                                alt='user-avatar'
                                className='bg-transparent border-1 border-blue-300 rounded-full 
                                h-14 w-14 flex items-center justify-center ring-2 '></img>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold text-xl '>{message.name}</p>
                            <p className=''>{ message.messageHeader}</p>
                        </div>
                        
                    </div>
                    )
                ) 
            }
        </div>
       
    </div>

export default MessageCard;