import FormDesc from "../common/formDesc";
import TextInput from "../common/TextInput";
import PasswordInput from "../common/PasswordInput";
import LineAtau from "../common/LineAtau";
import GoogleButton from "../common/googleButton";

const FormInput = () => {
  return (
    <div className="container  bg-white w-50 text-center">
      <FormDesc
        judul="Masuk Ke Akun"
        deskripsi="Yuk, lanjutin belajarmu di videobelajar."
      />
      <div>
        <TextInput label={"Email"} />
        <PasswordInput label={"Kata Sandi"} />
        <p className="text-end text-muted">Lupa Password?</p>
        <div className="d-flex flex-column bd-highlight mb-3 gap-2">
          <button
            type="button"
            className="btn btn-primary btn-lg btn-block bg-success w-100 ">
            Masuk
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-block bg-primary w-100 ">
            Daftar
          </button>
          <LineAtau />
          <GoogleButton />
        </div>
      </div>
    </div>
  );
};

export default FormInput;
