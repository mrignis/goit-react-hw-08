import { RegisterForm } from "../../components/Form/RegisterFrom";
import { Helmet } from "react-helmet-async";

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}
