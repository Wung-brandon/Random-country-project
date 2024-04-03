
import './Footer.components.css'

const date = new Date().getFullYear()

function Footer(props){
    return(
        <div className={`footer ${props.isDark ? "dark" : ""}`}>Copyright {date}</div>
    )
}


export default Footer