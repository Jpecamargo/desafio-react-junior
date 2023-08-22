import { login } from "./utils";
import "./index.css";
import { useState } from "react";

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
// todo[x] - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
// todo[x] - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
// todo[x] - Desabilite o botão de Login equanto você está executando o login.
// todo[x] - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
// todo[x] - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const handleLogin = () => {
    setErrorMessage("");
    setIsloading(true);

    login({ email: email, password: password })
      .then((res) => {
        alert("Login efetuado com sucesso!");
      })
      .catch((err) => {
        setErrorMessage(err.message);
      })
      .finally(() => {
        setIsloading(false);
      });
  };

  return (
    <div className="wrapper">
      <div className="login-form">
        <h1>Login Form 🐞</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        {errorMessage && <div className="errorMessage">{errorMessage}</div>}
        <div className="row">
          <label htmlFor={"email"}>Email</label>
          <input
            id={"email"}
            type={"email"}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="row">
          <label htmlFor={"password"}>Password</label>
          <input
            id={"password"}
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="button">
          <button
            onClick={handleLogin}
            disabled={
              email === ""
                ? true
                : password.length < 6
                ? true
                : isLoading
                ? true
                : false
            }
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
