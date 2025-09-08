import './UserCard.css'
import Button from './Button'

function UserCard({user}) {
    return (
        <>
        <div className=" p-6 bg-blue-100 border border-gray-200 rounded-lg shadow-sm m-20 flex flex-col items-center">
            <img className=" w-24 h-24 rounded-full shadow-lg" src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png" alt="User image"/>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">{user.name}</h5>
            <p className=" mb-4 font-normal text-gray-700">{user.email}</p>
           <Button text="Go to profile"/>
        </div>
        </>
    )
}

export default UserCard;