import React from "react";
import { Address } from "../../@types/CepTypes";
import { AddressCard } from "../AddressCard";

type AddressesList = {
  savedCepData: Address[];
};

export const AddressesList: React.FC<AddressesList> = ({ savedCepData }) => {
  return (
    <>
      {savedCepData.length === 0 ? (
        <p className="text-center text-[#6C757D]">Nenhum endereço encontrado</p>
      ) : (
        <ul className="grid lg:grid-cols-3 md:grid-cols-2 justify-center gap-5 p-5 md:p-5 md:w-[95svw]  ">
          {savedCepData.map((item: Address, index: number) => (
            <AddressCard key={index} address={item} />
          ))}
        </ul>
      )}
    </>
  );
};
