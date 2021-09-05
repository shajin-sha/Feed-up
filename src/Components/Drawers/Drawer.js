import {useState} from 'react';
import './Drawers.css';
import MyDrawer from 'react-drag-drawer'

export default function Drawer() {
    const [OpenDrawer,setOpenDrawer]=useState(true)

    const toggle = (()=>{
        setOpenDrawer(!OpenDrawer)
    })



    return (

        <MyDrawer

            open={OpenDrawer}
            modalElementClass={"OpenDrawer"}
            onRequestClose={()=> setOpenDrawer(false)}
            onDrag={() => setOpenDrawer(false)}

         >

             <div>heyyy</div>

        </MyDrawer>
    )
}
