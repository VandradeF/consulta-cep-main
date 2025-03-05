import React from "react";
import { Address } from "../../@types/CepTypes";

type AddressCardProps = {
  address: Address;
};

export const AddressCard: React.FC<AddressCardProps> = ({ address }) => {
  return (
    <li className="border border-[#D3D3D3] p-3 rounded-2xl bg-gradient-to-br from-[#FFFFFF] to-[#F0F4F8] shadow-md min-md:min-w-[90%] lg:h-[200px] lg:w-full min-md:h-[full]  md:m-3 flex flex-col justify-center ">
      <div className="w-full grid grid-cols-1 text-start min-md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-2 md:gap-y-4">
        <p className="text-sm md:text-sm text-[#6C757D] mb-2 col-span-full">
          <strong className="text-[#0a183a]">Logradouro: </strong>
          {address.logradouro}
        </p>
        <p className="text-sm md:text-sm text-[#6C757D] mb-2">
          <strong className="text-[#0a183a]">Bairro: </strong> {address.bairro}
        </p>
        <p className="text-[#6C757D] mb-2 text-sm md:text-sm sm:ml-3">
          <strong className="text-[#0a183a]">Cidade: </strong>
          {address.localidade}
        </p>
        <p className="text-[#6C757D] mb-4 text-sm md:text-sm">
          <strong className="text-[#0a183a]">Estado: </strong> {address.uf}
        </p>
        <p className="text-[#6C757D] mb-4 text-sm md:text-sm sm:ml-3">
          <strong className="text-[#0a183a]">CEP: </strong> {address.cep}
        </p>
      </div>
    </li>
  );
};
