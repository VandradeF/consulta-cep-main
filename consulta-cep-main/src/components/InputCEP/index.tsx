import { useQuery } from "@tanstack/react-query";
import React, { ChangeEvent, useState } from "react";
import { ViaCepServices } from "../../services/ViaCEPServices";
import { formatCEP } from "../../utils/formatCEP";
import { Query_Keys } from "../../utils/QueryKeys/queryKeys";
import { Address } from "../../@types/CepTypes";
import searchIcon from "../../assets/icons/searchIcon.png";
import { AddressTable } from "../AddressTable";

interface InputCEPProps {
  onSave: (cepData: any) => void;
}

export const InputCEP: React.FC<InputCEPProps> = ({ onSave }) => {
  const [cep, setCep] = useState("");
  const [cepToSearch, setCeptoSearch] = useState("");

  const handleChangeValue = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setCep(formatCEP(value));
  };

  const { data, isLoading, error } = useQuery<Address>({
    queryFn: () => ViaCepServices.getCEP(cepToSearch),
    queryKey: Query_Keys.GET_CEP(cepToSearch),
    enabled: cepToSearch.length === 9,
  });

  const handleSearchCep = () => setCeptoSearch(cep);

  const handleSaveData = () => {
    const savedData = localStorage.getItem("savedCepData");
    const parsedData = savedData ? JSON.parse(savedData) : [];
    const isAddressSaved = parsedData.some(
      (item: Address) => item.cep === data?.cep
    );

    if (data && !isAddressSaved) {
      parsedData.push(data);
      onSave(parsedData);
      localStorage.setItem("savedCepData", JSON.stringify(parsedData));
      alert("Endereço salvo com sucesso!");
    } else {
      alert("CEP já existente na lista de endereços");
    }
  };

  return (
    <div className="flex flex-col text-center items-center">
      <div className="flex items-center border-2 border-[#D3D3D3] rounded-md overflow-hidden w-fit self-center">
        <input
          className="h-10 p-2 w-[120px] border-none outline-none text-[#2E3A59] placeholder-[#6C757D]"
          placeholder="CEP..."
          value={cep}
          onChange={handleChangeValue}
          maxLength={9}
        />
        <button
          onClick={handleSearchCep}
          className="w-10 h-10 flex items-center justify-center hover:bg-[#357ABD] transition"
        >
          <img src={searchIcon} alt="Buscar" className="w-5 h-5" />
        </button>
      </div>

      {isLoading && <p className="text-[#6C757D] mt-4">Carregando...</p>}
      {error && <p className="text-[#FF6B6B] mt-4">Erro ao carregar dados</p>}

      {!data?.cep ? (
        data ? (
          <h1 className="text-[#FF6B6B] font-bold mt-4">CEP Inválido</h1>
        ) : (
          <></>
        )
      ) : (
        <AddressTable data={data} handleSaveData={handleSaveData} />
      )}
    </div>
  );
};
