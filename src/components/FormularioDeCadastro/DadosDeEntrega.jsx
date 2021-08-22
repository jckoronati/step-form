import React, { useState } from 'react';
import Textfield from '@material-ui/core/Textfield';
import Button from '@material-ui/core/Button';

function DadosDeEntrega({ onSubmit }) {
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [number, setNumber] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");

    return(
        <form onSubmit={event => {
            event.preventDefault();
            onSubmit({ cep, endereco, number, estado, cidade });
        }}>
            <Textfield
                value={cep}
                onChange={event => setCep(event.target.value)}
                id="cep"
                label="CEP"
                type="number"
                variant="outlined"
                margin="normal"
            />
            <Textfield
                value={endereco}
                onChange={event => setEndereco(event.target.value)}
                id="endereco"
                label="Endereço"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <Textfield
                value={number}
                onChange={event => setNumber(event.target.value)}
                id="number"
                label="Numero"
                type="number"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <Textfield
                value={estado}
                onChange={event => setEstado(event.target.value)}
                id="estado"
                label="Estado"
                type="text"
                variant="outlined"
                margin="normal"
            />
            <Textfield
                value={cidade}
                onChange={event => setCidade(event.target.value)}
                id="cidade"
                label="Cidade"
                type="text"
                variant="outlined"
                margin="normal"
            />
            <Button 
                type="submit" 
                variant="contained" 
                color="primary"
                fullWidth
            >
                Cadastrar
            </Button>
        </form>
    );
}

export default DadosDeEntrega;