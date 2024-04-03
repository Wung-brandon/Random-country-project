import './Header.components.css'


const date = new Date()
const fullDate = date.toLocaleDateString()



console.log(date)

function Header(props){
    
   
    return(
        <div className={`header ${props.isDark ? "dark" : ""}`}>
            <div className='head'>
            <h1>Welcome to 30 days of react</h1>
            <p>Getting started with react</p>
            <p>Javascript library</p>
            <p>Wung Brandon</p>
            <p>{fullDate}</p>
            

            </div>
            {/* <hr /> */}

        
        </div>

    )
}


export default Header