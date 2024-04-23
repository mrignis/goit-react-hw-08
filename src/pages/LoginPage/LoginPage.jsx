import { Helmet } from "react-helmet";
import { LoginForm } from "../../components/Form/LoginForm";

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
}
