import Formulario from "./components/form/FormularioCadastro";
import Header from "./components/Header/Header";
import ModalLogin from "./components/modalLogin/ModalLogin";
import NavBar from "./components/NavBar/NavBar";

export default function Home() {
  return (
    <div className="size-dvh-full   flex-col">
      <div className="flex">
      <NavBar />
      <Header />
      </div>
 
   <ModalLogin/>

    </div>
  );
}
