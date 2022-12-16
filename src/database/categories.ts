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

export const getProductsByCategoryId = async (productId: number, categoryId: number) => {
    const response = await supabase
      .from('products')
      .select()
      .eq('categoryId', categoryId)
      .neq('id', productId)
      .limit(3)

    return response;
};



