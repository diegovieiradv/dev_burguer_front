import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { api } from "../../services/api.js";
import { toast } from "react-toastify";
import { Link as ReactLink } from "react-router-dom";

import{ Container } from "./styles.js";
import Logo from "../../assets/logoDev.png";
import { Button } from "../../components/Button/index.jsx";
import { LeftContainer, RightContainer, Title, Form, InputContainer, Link} from "./styles.js";



export function Register() {

  const schema = yup.object( {
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().email("Digite um email válido").required("Email é obrigatório"),
    password: yup.string().min(6, "A senha deve ter pelo menos 6 cacacteres").required("Senha é obrigatória"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'As senhas devem corresponder').required('Confirmação de senha é obrigatória'),

} ).required(); 


  const { register, handleSubmit, formState: { errors } } = useForm( {
    resolver: yupResolver( schema ),
  } );

  const onSubmit = async( data ) => {

    try {   const { status } = await api.post( "/users", {
      name: data.name,
      email: data.email,
      password: data.password
    },{
      validateStatus: () => true 
    }
  );
if (status === 201 || status === 200) {
    toast.success("Conta criada com sucesso!");
} else if (status === 409) {
    toast.error("Email já cadastrado. Tente outro.");
} else {
   throw new Error();
}
    } catch (error) {
      toast.error("Erro ao criar conta. Tente novamente.");
      console.error( "Erro ao criar conta:", error );
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="Logo" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem-vindo ao <span>Dev Burguer!</span> <br />Crie sua <span>Conta.</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
           <InputContainer>
            <label>Nome</label>
            <input type="text" placeholder="Digite seu nome" {...register("name")} />
            <p>{errors?.name?.message}</p>
          </InputContainer>
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
          <InputContainer>
            <label>Confirmar senha</label>
            <input type="password" placeholder="Digite sua senha" {...register("confirmPassword")} />
            <p>{errors?.confirmPassword?.message}</p>
          </InputContainer>
          <Button type="submit">Criar conta</Button>
          <p>
            Já possui conta ? <span><Link to="/login">Clique aqui.</Link></span>
          </p>
        </Form>
      </RightContainer>
    </Container>
  );
}

