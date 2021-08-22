import React, { useState, useEffect } from 'react';
import DadosUsuario from './DadosUsuario';
import DadosPessoais from './DadosPessoais'
import DadosDeEntrega from './DadosDeEntrega';
import { Typography, Stepper, Step, StepLabel } from '@material-ui/core';

function FormularioCadastro({ onSubmit }) {
    const [etapa, setEtapa] = useState(0);
    const [collectionDatas, setCollectionDatas] = useState({});

    useEffect(() => {
        if(etapa === forms.length-1) {
            onSubmit(collectionDatas);
        }
    });

    const forms = [
        <DadosUsuario onSubmit={appendDatas} />,
        <DadosPessoais onSubmit={appendDatas} />,
        <DadosDeEntrega onSubmit={appendDatas} />,
        <Typography variant="h5">Obrigado por se cadastras!</Typography>
    ]

    function appendDatas(datas) {
        setCollectionDatas({...collectionDatas, ...datas});
        nextForm();
    }

    function nextForm() {
        setEtapa(etapa+1);
    }

    return(
        <>
            <Stepper activeStep={etapa}>
                <Step>
                    <StepLabel> 
                    Login                
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel> 
                    Cadastro
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel> 
                    Entrega
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel> 
                    Fim!
                    </StepLabel>
                </Step>
            </Stepper>
            { forms[etapa] }
        </>
    );
}

export default FormularioCadastro;