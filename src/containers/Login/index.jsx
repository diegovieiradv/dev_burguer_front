import{ Container } from "./styles.js";
import Logo from "../../assets/logoDev.png";
import { Button } from "../../components/Button/index.jsx";
import { LeftContainer, RightContainer, Title, Form, InputContainer, } from "./styles.js";

export function Login() {
  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="Logo" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem-vindo ao <span>Dev Burguer!</span> <br />Acesse sua <span>conta para continuar.</span>
         
        </Title>
        <Form>
          <InputContainer>
            <label>Email</label>
            <input type="email" placeholder="Digite seu email" />
          </InputContainer>
           <InputContainer>
            <label>Senha</label>
            <input type="password" placeholder="Digite sua senha" />
          </InputContainer>
          <Button>Entrar</Button>
          <p>
            Não possui conta? <span><a>Cadastre-se</a></span>
          </p>
        </Form>
      </RightContainer>
    </Container>
  );
}

