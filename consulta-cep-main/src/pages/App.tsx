import { useEffect, useState } from "react";
import { InputCEP } from "../components/InputCEP";
import { AddressesList } from "../components/AddressesList";
import { Address } from "../@types/CepTypes";

function App() {
  const [savedCepData, setSavedCepData] = useState<Address[]>([]);

  const getSavedCepData = () => {
    const savedData = localStorage.getItem("savedCepData");
    return savedData ? JSON.parse(savedData) : [];
  };

  const handleSave = (cepData: any) => {
    setSavedCepData(cepData);
  };

  useEffect(() => {
    const savedData = getSavedCepData();
    setSavedCepData(savedData);
  }, []);

  return (
    <div className="flex flex-col items-center justify-start h-[100svh]  p-4 bg-[#F0F4F8] center">
      <div className="flex-col">
        <h1 className="text-2xl text-center mb-6 text-[#2E3A59]">
          Consulta CEP
        </h1>
        <p className="text-center mb-4 text-[#6C757D]">
          Digite o CEP que deseja encontrar
        </p>
        <InputCEP onSave={handleSave} />
      </div>

      <div className="mt-6 w-[95dvw] ">
        <h2 className="text-2xl mb-2 text-center font-bold text-[#2E3A59]">
          Endereços Salvos:
        </h2>

        <AddressesList savedCepData={savedCepData} />
      </div>
    </div>
  );
}

export default App;
