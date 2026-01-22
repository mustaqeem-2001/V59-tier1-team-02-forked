function Roles({selectedRole,}) {

    const handleChange = (e) => {
        const path = e.target.value;
        if (path) {
            window.location.href=path 
        }
    };

    return (
        <select value= {selectedRole} onchange= {handleChange}>
            <option value="">Get Started</option>
            <option value= "/questions/scrum-master">SCRUM Master</option>
            <option value= "/questions/product-owner">Product Owner</option>
            <option Value= "/questions/ui-ux">UX/UI Designer</option>
            <option Value= "/questions/web-developer"> Web Developer</option>
            <option Value = "/questions/python-Developer">Python Developer</option>
        </select>
    )
};

export default Roles