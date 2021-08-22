import React, { useState, useContext } from 'react';
import useErrors from '../../hooks/useErrors';

import Button from '@material-ui/core/Button';
import Textfield from '@material-ui/core/Textfield';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ValidationsSubmit from '../../contexts/ValidationsSubmit';

function DadosPessoais({ onSubmit }) {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [newsletter, setNewsletter] = useState(true);
    const validations = useContext(ValidationsSubmit);
    const [errors, validateFields, isEnabledToSend] = useErrors(validations);

    return(
        <form onSubmit={event => { 
                event.preventDefault();
                if(isEnabledToSend()) {
                    onSubmit( { name, lastName, cpf, promocoes, newsletter } );
                }
            } 
        }>
            <Textfield 
                value={name}
                onChange={event => setName(event.target.value)}
                id="name" 
                label="Nome" 
                variant="outlined" 
                margin="normal" 
                fullWidth
            />
            <Textfield 
                value={lastName}
                onChange={event => setLastName(event.target.value)}
                id="lastName" 
                label="Sobrenome" 
                variant="outlined" 
                margin="normal" 
                fullWidth
            />
            <Textfield 
                value={cpf}
                onChange={event => setCpf(event.target.value)}
                onBlur={validateFields}
                error={!errors.cpf.validate}
                helperText={errors.cpf.message}
                name="cpf"
                id="cpf" 
                label="CPF" 
                variant="outlined" 
                margin="normal" 
                fullWidth
            />
            <FormControlLabel label="Promoções" control={
                    <Switch 
                        checked={promocoes}
                        onChange={event => {
                                setPromocoes(event.target.checked);
                            }
                        }
                        name="promocoes"
                        color="primary"
                    />
                }
            /> 
            <FormControlLabel label="Newsletter" control={
                    <Switch 
                        checked={newsletter}
                        onChange={event => {
                                setNewsletter(event.target.checked);
                            }
                        }
                        name="newsletter"
                        color="primary"
                    />
                } 
            />    
            <Button 
                type="submit" 
                variant="contained" 
                color="primary"
            >
                Cadastrar
            </Button>
        </form>
    );
}

export default DadosPessoais;