import supabase from "../config/supabaseClient";

export const getAllCategories = async () => {
    const response = await supabase
        .from('categories')
        .select()

    return response;
};

export const getSingleCategory = async (id: any) => {
    const response = await supabase
      .from('categories')
      .select('*, products(*)')
      .eq('slug', id)

    return response;
};



