import './main.components.css'



function CountryImg(props){
    return(
        <div>
            <img src={props.src} alt="images" className='img' />
            
        </div>
    )


}
export default CountryImg