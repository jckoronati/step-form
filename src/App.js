import './App.css';
import FormularioCadastro from './components/FormularioDeCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';
import ValidationsSubmit from './contexts/ValidationsSubmit';
import { validateCpf, validatePassword } from "./models/cadastro";

function App() {
  return (
    <Container 
      component="article" 
      maxWidth="sm"
    > 
      <Typography 
        component="h1" 
        variant="h3" 
        align="center"
      >
        Formulário de Cadastro
      </Typography>
      <ValidationsSubmit.Provider 
        value={ 
          { cpf: validateCpf, password: validatePassword } 
        }
      >
        <FormularioCadastro 
          onSubmit={handleSubmit} 
        />
      </ValidationsSubmit.Provider>
    </Container>
  );
}

function handleSubmit(datas) {
  console.log(datas);
}

export default App;