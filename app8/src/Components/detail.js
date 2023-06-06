import '../style.css'



const  Detail =({flat}) => {
   
    return(
        <div key={flat.id}>
            <div>detail</div>
            <div className="horizontal_slider">
              <div className="slider_container">
                <div className="item"><div><h2>Living Room</h2><img  src={flat.living} alt=" pix"/></div></div>
                <div className="item"><div><h2> Room</h2><img  src={flat.room} alt=" pix"/></div></div>
                <div className="item"><div><h2>Dining</h2><img  src={flat.dining} alt="pix"/></div></div>
              </div>
            </div>
            <div className="info">{flat.descr}</div>
            

        </div>
    )
}
export default Detail;