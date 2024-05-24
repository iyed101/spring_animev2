import { NavLink } from 'react-router-dom';
import logo from './img/face.png'

const SideBare=()=>{
    return(
        <div style={{width: 326, height: 768, position: 'relative'}}>
  <div style={{width: 326, height: 768, left: 0, top: 0, position: 'absolute', background: 'black', borderTopLeftRadius: 20, borderTopRightRadius: 20}} />
  <div style={{width: 100, height: 100, left: 36, top: 26, position: 'absolute', background: '#FFEA00', borderRadius: 95}} />
  <img style={{width: 100, height: 100, left: 36, top: 26, position: 'absolute'}} src={logo} />
  <div style={{width: 137, height: 36, left: 153, top: 58, position: 'absolute', color: '#FFEA00', fontSize: 24, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word'}}>TuniAnime</div>
  <NavLink to='/principal'><div style={{width: 137, height: 23, left: 104, top: 187, position: 'absolute', color: '#FFEA00', fontSize: 16, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word'}}>Principale</div></NavLink>
  <NavLink  to='/anime'><div style={{width: 133, height: 27, left: 104, top: 240, position: 'absolute', color: '#FFEA00', fontSize: 16, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word'}}>Anime</div></NavLink>
  <NavLink to='/film'><div style={{width: 179, height: 27, left: 104, top: 297, position: 'absolute', color: '#FFEA00', fontSize: 16, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word'}}>Film</div></NavLink>
  <NavLink to='/ona'><div style={{width: 179, height: 27, left: 104, top: 354, position: 'absolute', color: '#FFEA00', fontSize: 16, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word'}}>ONA</div></NavLink>
  <NavLink to='/ova'><div style={{width: 179, height: 27, left: 104, top: 411, position: 'absolute', color: '#FFEA00', fontSize: 16, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word'}}>OVA </div></NavLink>
  <NavLink to='/manga'><div style={{width: 179, height: 27, left: 104, top: 468, position: 'absolute', color: '#FFEA00', fontSize: 16, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word'}}>Manga</div></NavLink>
  <NavLink to='/list'><div style={{width: 179, height: 27, left: 104, top: 525, position: 'absolute', color: '#FFEA00', fontSize: 16, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word'}}>List</div></NavLink>
  {/* <div style={{width: 201, height: 44, left: 45, top: 176, position: 'absolute', background: 'rgba(255, 234, 0, 0.14)', borderRadius: 31}} /> */}
  <div style={{width: 236, height: 0.30, left: 45, top: 454, position: 'absolute', background: '#FFEA00'}} />
  <div style={{width: 236, height: 0.30, left: 45, top: 511, position: 'absolute', background: '#FFEA00'}} />
  <div style={{width: 236, height: 0.30, left: 47, top: 397, position: 'absolute', background: '#FFEA00'}} />
  <div style={{width: 236, height: 0.30, left: 47, top: 340, position: 'absolute', background: '#FFEA00'}} />
  <div style={{width: 236, height: 0.30, left: 47, top: 283, position: 'absolute', background: '#FFEA00'}} />
  <div style={{width: 236, height: 0.30, left: 47, top: 226, position: 'absolute', background: '#FFEA00'}} />
</div>
    )}

export default SideBare;