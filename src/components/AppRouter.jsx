import Archive from "../pages/Archive";
import Trash from "../pages/Trash"
import Remainder from "../pages/Remainder"
import Notelist from "../pages/Notelist"
import {Routes ,Route} from "react-router-dom"


export default function AppRouter(){
    return(
        <>
        <Routes>

<Route path="/" element={<Notelist/>}/>
<Route path="/trash" element={<Trash/>}/>
<Route path="/reminders"element={<Remainder/>}/>
<Route path="/archive" element={<Archive/>}/>
</Routes>
        </>
    )
}