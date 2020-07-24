import React from 'react';
const { useState } = React;

const CardCreator: React.FC = (props) => {
    const initialFormData = Object.freeze({
        word: "",
        definition: ""
    });
    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit = (e) => {
        if (formData.word.length){
            props.addCard(formData);
            updateFormData({
                ...initialFormData
            })
        }
    };

    const modifySubmit = (e) => {
        props.modifyCard(formData);
        updateFormData({
            ...initialFormData
        })
    };

    const deleteSubmit = (e) => {
        props.deleteCard(formData.word);
        updateFormData({
            ...initialFormData
        })
    };

    return(
        <div className = "cardCreator">
            <div>
            <h2>Configure Flash Cards</h2>
            <form>
                <label>
                    Word: 
                    <input id="word" type="text" name="word" onChange={handleChange}/>
                    Definition:  
                    <input id="definition" type="text" name="definition" onChange={handleChange}/>
                </label>
                <input  className="btn" type="submit" value="Add Card" onClick={handleSubmit} />
                <input  className="btn" type="submit" value="Modify" onClick={modifySubmit} />
                <input  className="btn" type="submit" value="Remove Card" onClick={deleteSubmit} />
            </form>                
            </div>
        </div>
    )
    };

export default CardCreator;