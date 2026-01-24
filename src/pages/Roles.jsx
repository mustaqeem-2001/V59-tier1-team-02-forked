import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

export default function Roles(selectedRole) {
    const handleChange = (e) => {
        const path = e.target.value;
        if (path) {
            window.location.href=path 
        }
    };

    return (
         
         
        
          
            <>
             
                <Header/>
            

        <select className ="roleslist" value= {selectedRole} onChange= {handleChange}>
            <option value="" disabled>Get Started</option>
            <option value= "/questions/scrum-master">SCRUM Master</option>
            <option value= "/questions/product-owner">Product Owner</option>
            <option value= "/questions/ui-ux">UX/UI Designer</option>
            <option value= "/questions/web-developer"> Web Developer</option>
            <option value = "/questions/python-Developer">Python Developer</option>
        </select>

        
    
            <Footer/>
        
        
        </>
        
        
       
    )
};
