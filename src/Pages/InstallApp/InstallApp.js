import {useEffect,useState} from 'react'
import "./InstallApp.css"

export default function InstallApp() {
    const [deferredPrompt,setdeferredPrompt]=useState(null)
    useEffect(()=>{
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault()
        setdeferredPrompt(e)
    });



    },[])
    return (
        <div className="InstallPage" > 
            
            <img className="InstallPageimg" src="https://powerpeopleplatform.com/wp-content/uploads/2020/12/PowerPeople_Liam03.png" alt="" />
            <img  className="InstallPageimg2" src="https://powerpeopleplatform.com/wp-content/uploads/2020/12/PowerPeople_Melissa03-1.png" alt="" />


            <h1 className="installation" >Installation</h1>
            <p className="Feed_appInstallation" >Feed up</p>
            
       <button className="installBtn" onClick={()=>{

           console.log("hey")

            if(deferredPrompt !== null){
                deferredPrompt.prompt();
                const { outcome } = deferredPrompt.userChoice;
                if (outcome === 'accepted') {
                    deferredPrompt = null;
                }
            }

        }} >install</button>






        </div>
    )
}
