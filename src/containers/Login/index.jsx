import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { api } from "../../services/api.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



import{ Container } from "./styles.js";
import Logo from "../../assets/logoDev.png";
import { Button } from "../../components/Button/index.jsx";
import { LeftContainer, RightContainer, Title, Form, InputContainer, Link} from "./styles.js";


export function Login() {

const navigate = useNavigate();
  const schema = yup.object( {
  email: yup.string().email("Digite um email válido").required("Email é obrigatório"),
  password: yup.string().min(6, "A senha deve ter pelo menos 6 cacacteres").required("Senha é obrigatória"),
} ).required(); 


  const { register, handleSubmit, formState: { errors } } = useForm( {
    resolver: yupResolver( schema ),
  } );

  const onSubmit = async (data) => {
   const { data: { token } } = await toast.promise(
    api.post("/sessions", {
      email: data.email,
      password: data.password,
    }),
    {
      pending: "Verificando credenciais...",
      success: {
        render() {
          setTimeout(() => {
            navigate("/");
          }, 2000);
          return "Login realizado com sucesso!";
        },
      },
      error: "Erro ao fazer login, verifique suas credenciais.",
    }
  );
  localStorage.setItem("token", token);
};

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="Logo" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem-vindo ao <span>Dev Burguer!</span> <br />Acesse sua <span>conta para continuar.</span>
         
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input type="email" placeholder="Digite seu email" {...register("email")} />
            <p>{errors?.email?.message}</p>
          </InputContainer>
           <InputContainer>
            <label>Senha</label>
            <input type="password" placeholder="Digite sua senha" {...register("password")} />
            <p>{errors?.password?.message}</p>
          </InputContainer>
          <Button type="submit">Entrar</Button>
          <p>
            Não possui conta? <span><Link to="/cadastro">Cadastre-se</Link></span>
          </p>
        </Form>
      </RightContainer>
    </Container>
  );
}


