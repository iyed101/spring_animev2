import user from './img/user.png'
const User=()=>{
    const token = localStorage.getItem('token');
    console.log(token);
    return(
        <div style={{ width: 214, height: 50, left: 1199, top: 26, position: 'absolute' }}>
                    <div style={{ left: 81, top: 6, position: 'absolute', color: '#FFEA00', fontSize: 25, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word' }}>username</div>
                    <img style={{ width: 50, height: 50, left: 0, top: 0, position: 'absolute' }} src={user} alt="user avatar" />
                </div>
    )
}
export default User;