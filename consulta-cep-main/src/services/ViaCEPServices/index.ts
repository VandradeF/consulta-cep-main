import axios from "axios";
const URL = "https://viacep.com.br/ws/";

export const ApiServices = axios.create({
  baseURL: URL,
});

export const ViaCepServices = {
  getCEP: async (cep: string) => {
    try {
      if (cep.length === 9) {
        const response = await ApiServices.get(`${cep}/json/`);
        return response.data;
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
