const Card=()=>{
    return(
        <div>
            <table border={2} style={{width: 500, height: 800, left: 0, top: 0, borderRadius: 10}}>
                <tr>
                    <td><div style={{width: 149, height: 236,  position: 'absolute'}}>
        <div style={{width: 149, left: 0, top: 216, position: 'absolute', color: 'black', fontSize: 13, fontFamily: 'Poppins', fontWeight: '300', wordWrap: 'break-word'}}>Vinland Saga</div>
        <img style={{width: 140, height: 210, left: 0, top: -150, position: 'absolute', borderRadius: 10}} src="https://via.placeholder.com/140x210" />
      </div></td>
                    <td><div style={{width: 149, height: 236,  position: 'absolute'}}>
        <div style={{width: 149, left: 0, top: 216, position: 'absolute', color: 'black', fontSize: 13, fontFamily: 'Poppins', fontWeight: '300', wordWrap: 'break-word'}}>Vinland Saga</div>
        <img style={{width: 140, height: 210, left: 0, top: -150, position: 'absolute', borderRadius: 10}} src="https://via.placeholder.com/140x210" />
      </div></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr><tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            
      </div>

    )
}
export default Card;