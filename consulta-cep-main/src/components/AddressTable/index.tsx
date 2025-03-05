import React from "react";
import { Address } from "../../@types/CepTypes";

type AddressTableProps ={
    data: Address
    handleSaveData: () => void
}

export const AddressTable: React.FC<AddressTableProps> = ({ data, handleSaveData }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="hidden md:table w-full border-collapse border border-[#D3D3D3] mt-6 bg-[#F0F4F8]">
        <thead className="bg-[#D3D3D3]">
          <tr>
            <th className="border border-[#D3D3D3] px-4 py-2 text-[#2E3A59]">
              Logradouro
            </th>
            <th className="border border-[#D3D3D3] px-4 py-2 text-[#2E3A59]">
              Bairro
            </th>
            <th className="border border-[#D3D3D3] px-4 py-2 text-[#2E3A59]">
              Cidade
            </th>
            <th className="border border-[#D3D3D3] px-4 py-2 text-[#2E3A59]">
              Estado
            </th>
            <th className="border border-[#D3D3D3] px-4 py-2 text-[#2E3A59]">
              CEP
            </th>
            <th className="border border-[#D3D3D3] px-4 py-2 text-[#2E3A59]">
              Ações
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-[#D3D3D3] px-4 py-2 text-[#2E3A59]">
              {data?.logradouro}
            </td>
            <td className="border border-[#D3D3D3] px-4 py-2 text-[#2E3A59]">
              {data?.bairro}
            </td>
            <td className="border border-[#D3D3D3] px-4 py-2 text-[#2E3A59]">
              {data?.localidade}
            </td>
            <td className="border border-[#D3D3D3] px-4 py-2 text-[#2E3A59]">
              {data?.uf}
            </td>
            <td className="border border-[#D3D3D3] px-4 py-2 text-[#2E3A59]">
              {data?.cep}
            </td>
            <td className="border border-[#D3D3D3] px-4 py-2">
              <button
                onClick={handleSaveData}
                className="w-full bg-[#4A90E2] hover:bg-[#357ABD] text-white px-4 py-2 rounded-md transition duration-300 ease-in-out"
              >
                Salvar
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="md:hidden w-full border border-[#D3D3D3] mt-6 p-4 bg-white rounded-md text-start">
        <div className="mb-2 text-[#2E3A59]">
          <strong>Logradouro:</strong> {data?.logradouro}
        </div>
        <div className="mb-2 text-[#2E3A59]">
          <strong>Bairro:</strong> {data?.bairro}
        </div>
        <div className="mb-2 text-[#2E3A59]">
          <strong>Cidade:</strong> {data?.localidade}
        </div>
        <div className="mb-2 text-[#2E3A59]">
          <strong>Estado:</strong> {data?.uf}
        </div>
        <div className="mb-2 text-[#2E3A59]">
          <strong>CEP:</strong> {data?.cep}
        </div>
        <button
          onClick={handleSaveData}
          className="w-full bg-[#4A90E2] hover:bg-[#357ABD] text-white px-4 py-2 rounded-md transition duration-300 ease-in-out mt-2"
        >
          Salvar
        </button>
      </div>
    </div>
  );
};

 
