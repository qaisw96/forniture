import supabase from "../config/supabaseClient";

export const getAllClients = async () => {
  const response = await supabase
    .from('clients')
    .select()

  return response;
};
