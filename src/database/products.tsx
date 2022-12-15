import supabase from "../config/supabaseClient";

export const getFeaturedProducts = async () => {
  const response = await supabase
    .from('products')
    .select()
    .eq('isFeatured', true)

  return response;
};

export const getAllProducts = async () => {
  const response = await supabase
    .from('products')
    .select()

  return response;
};

export const getSingleProduct = async (id: any) => {
  const response = await supabase
    .from('products')
    .select()
    .eq('id', id)

  return response;
}
