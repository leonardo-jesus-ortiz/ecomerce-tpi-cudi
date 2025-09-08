import { Link } from "react-router-dom"
import { Lock } from "lucide-react"

const Dashboard = ({isAdmin = true}) => {
    return isAdmin && (
            <Link className="bg-emerald-700 hover:bg-emerald-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out">
            <Lock className="inline-block mr-1" size={18}/> 
            <span className="hiden sm:inline">dashboard</span>
            </Link>
    )
}

export default Dashboard