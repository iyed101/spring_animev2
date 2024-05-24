import SideBare from "./SideBare";

const AddProd = () => {
    return (
        <div>
            <div style={{width: 1473, height: 768, position: 'relative'}}>
  <div style={{width: 1473, height: 768, left: 0, top: 0, position: 'absolute', background: '#333333'}}></div>
  <SideBare></SideBare>
  <div style={{width: 180, height: 74, left: 498, top: 139, position: 'absolute'}}>
    <input type="text" placeholder="Titre" style={{width: 180, height: 74, left: 0, top: 0, position: 'absolute', borderRadius: 15, border: '2px #FFEA00 solid',background: '#333333',color: '#FFEA00', fontSize: 20, fontFamily: 'Poppins', fontWeight: '400'}} />
  </div>
  <div style={{width: 306, height: 85, left: 1106, top: 638, position: 'absolute'}}>
    <input type="submit" value="Ajouter" style={{width: 306, height: 85, left: 0, top: 0, position: 'absolute', background: '#FFEA00', borderRadius: 22, color: 'black', fontSize: 40, fontFamily: 'Poppins', fontWeight: '700'}} />
  </div>
  <div style={{width: 180, height: 74, left: 748, top: 141, position: 'absolute'}}>
    <input type="text" placeholder="Studio" style={{width: 180, height: 74, left: 0, top: 0, position: 'absolute', borderRadius: 15, border: '2px #FFEA00 solid',background: '#333333',color: '#FFEA00', fontSize: 20, fontFamily: 'Poppins', fontWeight: '400'}} />
  </div>
  <div style={{width: 180, height: 74, left: 748, top: 254, position: 'absolute'}}>
    <input type="text" placeholder="Season" style={{width: 180, height: 74, left: 0, top: 0, position: 'absolute', borderRadius: 15, border: '2px #FFEA00 solid',background: '#333333',color: '#FFEA00', fontSize: 20, fontFamily: 'Poppins', fontWeight: '400'}} />
  </div>
  <div style={{width: 180, height: 74, left: 1000, top: 254, position: 'absolute'}}>
    <input type="number" min="0" max="20" placeholder="Tranch d'age" style={{width: 180, height: 74, left: 0, top: 0, position: 'absolute', borderRadius: 15, border: '2px #FFEA00 solid',background: '#333333',color: '#FFEA00', fontSize: 20, fontFamily: 'Poppins', fontWeight: '400'}} />
  </div>
  <div style={{width: 180, height: 74, left: 495, top: 384, position: 'absolute'}}>
    <input type="number" min="0" max="20" placeholder="Ep/Tom" style={{width: 180, height: 74, left: 0, top: 0, position: 'absolute', borderRadius: 15, border: '2px #FFEA00 solid',background: '#333333',color: '#FFEA00', fontSize: 20, fontFamily: 'Poppins', fontWeight: '400'}} />
  </div>
  <div style={{width: 180, height: 74, left: 748, top: 370, position: 'absolute'}}>
    <input type="date" min="0" max="20"  style={{width: 180, height: 74, left: 0, top: 15, position: 'absolute', borderRadius: 15, border: '2px #FFEA00 solid',background: '#333333',color: '#FFEA00', fontSize: 20, fontFamily: 'Poppins', fontWeight: '400'}} />
    <div style={{width: 113, height: 26, left: 3, top: -15, position: 'absolute', textAlign: 'center', color: '#FFEA00', fontSize: 20, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Date debut</div>
  </div>
  <div style={{width: 180, height: 74, left: 1000, top: 370, position: 'absolute'}}>
    <input type="date" min="0" max="20"  style={{width: 180, height: 74, left: 0, top: 15, position: 'absolute', borderRadius: 15, border: '2px #FFEA00 solid',background: '#333333',color: '#FFEA00', fontSize: 20, fontFamily: 'Poppins', fontWeight: '400'}} />
    <div style={{width: 113, height: 26, left: 3, top: -15, position: 'absolute', textAlign: 'center', color: '#FFEA00', fontSize: 20, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Date Fin</div>
  </div>
  <div style={{width: 180, height: 74, left: 495, top: 500, position: 'absolute'}}>
    <input type="file"  style={{width: 180, height: 74, left: 0, top: 15, position: 'absolute', borderRadius: 15, border: '2px #FFEA00 solid',background: '#333333',color: '#FFEA00', fontSize: 20, fontFamily: 'Poppins', fontWeight: '400'}} />
    <div style={{width: 113, height: 26, left: 3, top: -15, position: 'absolute', textAlign: 'center', color: '#FFEA00', fontSize: 20, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Photo</div>
  </div>
  <div style={{width: 180, height: 74, left: 998, top: 141, position: 'absolute'}}>
    <select style={{width: 180, height: 74, left: 0, top: 0, position: 'absolute', borderRadius: 15, border: '2px #FFEA00 solid',background: '#333333',color: '#FFEA00', fontSize: 15, fontFamily: 'Poppins', fontWeight: '400'}} >
    <option value="">Type</option>
    <option value="Serie">Serie</option>
    <option value="Manga">Manga</option>
    <option value="OVA">OVA</option>
    <option value="ONA">ONA</option>
    </select>
  </div>
  <div style={{width: 180, height: 74, left: 498, top: 258, position: 'absolute'}}>
    <select style={{width: 180, height: 74, left: 0, top: 0, position: 'absolute', borderRadius: 15, border: '2px #FFEA00 solid',background: '#333333',color: '#FFEA00', fontSize: 15, fontFamily: 'Poppins', fontWeight: '400'}}>
    <option value="">Catégorie</option>
    <option value="Serie">Horreur</option>
    <option value="Manga">Comedi</option>
    <option value="OVA">Drama</option>
    <option value="ONA">Action</option>
    </select>
  </div>
</div>
        </div>
    )
}

export default AddProd;