import React, { useState, useContext } from 'react';
import Textfield  from '@material-ui/core/Textfield'
import Button from '@material-ui/core/Button';
import ValidationsSubmit from '../../contexts/ValidationsSubmit';
import useErrors from '../../hooks/useErrors';

function DadosUsuario({ onSubmit }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const validations = useContext(ValidationsSubmit);
    const [errors, validateFields, isEnabledToSend] = useErrors(validations);

    return(
        <form onSubmit={event => {
                event.preventDefault();
                if(isEnabledToSend()) {
                    onSubmit({email, password});
                }
            }
        }>
            <Textfield
                value={email}
                onChange={event => setEmail(event.target.value)}
                id="email"
                label="email"
                type="email"
                variant="outlined"
                margin="normal"
                required
                fullWidth
             />
             <Textfield
                value={password}
                onChange={event => setPassword(event.target.value)}
                onBlur={validateFields}
                error={!errors.password.validate}
                helperText={errors.password.message}
                name="password"
                id="password"
                label="senha"
                type="password"
                variant="outlined"
                margin="normal"
                required
                fullWidth
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

export default DadosUsuario;