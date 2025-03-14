import Navbar from "../layout/Navbar";
import FormInput from "../layout/Loginform";

const Login = ({ setPage }) => {
  return (
    <div>
      <Navbar setPage={setPage} />
      <FormInput />
    </div>
  );
};

export default Login;
