import Formulario from "./components/form/Formulario";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

export default function Home() {
  return (
    <div className="size-dvh-full   flex-col">
      <div className="flex">
      <NavBar />
      <Header />
      </div>
 
   <Formulario/>

    </div>
  );
}
