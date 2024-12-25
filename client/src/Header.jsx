import { useNavigate } from "react-router-dom"
export default function Header() {
const navigate = useNavigate()


    return (
        <header className="mb-12 flex justify-between pt-3 px-7 ">
            <h1 onClick={ ()=> navigate("/day") } className=" cursor-pointer font-bold text-3xl font-cursive" >KomPanion </h1>

            <div className="font-medium text-base " >
                <p>User</p>
                <p>Homepage</p>
            </div>

        </header>

    )
    
}