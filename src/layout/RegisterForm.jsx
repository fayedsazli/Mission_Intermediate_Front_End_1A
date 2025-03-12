import FormDesc from "../common/formDesc";
import TextInput from "../common/TextInput";
import PasswordInput from "../common/PasswordInput";
import LineAtau from "../common/LineAtau";
import GoogleButton from "../common/googleButton";
import PhoneInput from "../common/PhoneInput";

const RegisterForm = () => {
  return (
    <div className="container bg-white my-5 w-50 p-4">
      <FormDesc
        judul="Pendaftaran Akun"
        deskripsi="Yuk, daftarkan akunmu sekarang juga!"
      />
      <div>
        <TextInput label={"Nama Lengkap"} />
        <TextInput label={"Email"} />
        <PhoneInput label={"No Hp"} />
        <PasswordInput label={"Kata sandi"} />
        <PasswordInput label={"Konfirmasi Kata sandi"} />
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

export default RegisterForm;
