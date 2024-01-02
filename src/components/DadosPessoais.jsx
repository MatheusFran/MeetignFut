import React, { createContext, useContext, useState } from "react";
import { InputContext } from "../context/Reuniao";
import { FaceRecognition } from "./FaceRecognition";
import remove from '../assets/remove.png'

const MyContext = createContext();

export const DadosPessoais = (props) => {
    const { inputValue, handleInputChange } = useContext(InputContext);
    const [selectedPeople, setSelectedPeople] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (value) => {
        setSelectedImage(value);
    };
    const images = [
        { value: "Victor Cruvinel", label: "Victor Cruvinel", src: "https://i.ibb.co/mzfXxp4/Captura-de-tela-2023-12-27-130707.png" },
        { value: "Natália Lima", label: "Natália Lima", src: "https://i.ibb.co/2cF7tCV/Captura-de-tela-2023-12-27-100423.png" },
        { value: "Gustavo Ferreira", label: "Gustavo Ferreira", src: "https://i.ibb.co/MDmMbPK/Captura-de-tela-2023-12-27-130724.png" },
        { value: "Diego Alves", label: "Diego Alves", src: "https://i.ibb.co/1Z2NP6N/Captura-de-tela-2023-12-27-130739.png" },
        { value: "image5", label: "Image 5", src: "https://i.ibb.co/mzfXxp4/Captura-de-tela-2023-12-27-130707.png" },
        { value: "image6", label: "Image 6", src: "https://i.ibb.co/2cF7tCV/Captura-de-tela-2023-12-27-100423.png" },
        { value: "image7", label: "Image 7", src: "https://i.ibb.co/MDmMbPK/Captura-de-tela-2023-12-27-130724.png" },
        { value: "image8", label: "Image 8", src: "https://i.ibb.co/1Z2NP6N/Captura-de-tela-2023-12-27-130739.png" },
    ];

    const handleRedirect = (option, e) => {
        inputValue.nome = e
        if (inputValue) {
            if (option === 1) {
                props.onButtonClick(1);
            } else if (option === 2) {
                props.onButtonClick(2);
            }
        }
    }

    const handleAddPerson = () => {
        if (inputValue.pessoas.trim() && !selectedPeople.includes(inputValue.pessoas)) {
            setSelectedPeople([...selectedPeople, inputValue.pessoas]);
            handleInputChange({ target: { value: "", name: "pessoas" } }, "pessoas");
        }
    };

    const handleRemovePerson = (person) => {
        const updatedPeople = selectedPeople.filter((p) => p !== person);
        setSelectedPeople(updatedPeople);
    };

    const [filteredImages, setFilteredImages] = useState(images);

    const handleSearchInputChange = (searchValue) => {
        const filtered = images.filter((image) =>
            image.label.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredImages(filtered);
    };

    return (
        <div className='area-perguntas'>
            <div>
                <h3>Informe os dados da reunião</h3>
                <div className="form-group">
                    <label htmlFor="nome">Quem está marcando a reunião ?</label>
                    <input
                        type="text"
                        placeholder="Pesquisar por nome..."
                        value={inputValue.nome}
                        onChange={(e) => {
                            handleInputChange(e, "nome");
                            handleSearchInputChange(e.target.value);
                        }}
                        className="input-nome-pesquisa"
                    />
                    <div className="image-select-container">
                        <div className="responsavel-area">
                            <div className="image-grid">
                                {filteredImages.map((image) => (
                                    <div
                                        key={image.value}
                                        className={`image-item ${selectedImage === image.value ? "selected" : ""}`}
                                        onClick={() => handleRedirect(2, image.value)}
                                    >
                                        <img src={image.src} alt={image.label} className="image" />
                                        <div className="image-label">{image.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="button-group">
                    <button className="btn" onClick={() => handleRedirect(1)}>Voltar</button>
                </div>
            </div>
        </div>
    );
};

export const useDadosPessoais = () => {
    return useContext(MyContext);
};
