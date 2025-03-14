import Navbar from "../layout/Navbar";
import RegisterForm from "../layout/RegisterForm";

const Register = ({ setPage }) => {
  return (
    <div>
      <Navbar setPage={setPage} />
      <RegisterForm />
    </div>
  );
};

export default Register;
