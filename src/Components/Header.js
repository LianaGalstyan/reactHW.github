import Nav from "./Nav"


function Header (props) {
    return (
        <div className='header-section'>
            <div className="img-section">
                <img src={props.icon1} className="icon"/>
                <img src={props.icon2} className="logo"/>
            </div>
            <Nav /> 
            <img src={props.group} className="group"/>
        </div>
    )
}

export default Header;