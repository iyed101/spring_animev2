import React, { useState } from 'react';
import SideBare from './SideBare';
import './add.css';
import User from './User';

const AddCat = () => {
    const [categorie, setCategorie] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        const categorieData = { nom: categorie };

        try {
            const response = await fetch('http://localhost:4000/categ/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(categorieData),
            });

            if (response.ok) {
                setSuccess('Catégorie ajoutée avec succès!');
                setCategorie('');
            } else {
                setError('Erreur lors de l\'ajout de la catégorie');
            }
        } catch (error) {
            setError('Erreur lors de l\'ajout de la catégorie');
            console.error('Error:', error);
        }
    };

    return (
        <div style={{ width: 1473, height: 768, position: 'relative', background: '#333333' }}>
            <div style={{ width: 1473, height: 768, left: 0, top: 0, position: 'absolute' }}>
                <div style={{ width: 786, height: 101, left: 506, top: 297, position: 'absolute' }}>
                    <input
                        type="text"
                        className="input1"
                        placeholder="Catégorie..."
                        value={categorie}
                        onChange={(e) => setCategorie(e.target.value)}
                    />
                </div>
                <SideBare />
                <form onSubmit={handleSubmit}>
                    <input type="submit" value="Ajouter" className="button" />
                </form>
                {error && <div className="error">{error}</div>}
                {success && <div className="success">{success}</div>}
                <User></User>
            </div>
        </div>
    );
};

export default AddCat;
