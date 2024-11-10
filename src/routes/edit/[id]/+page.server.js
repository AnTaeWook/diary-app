import {supabase} from '$lib/supabaseClient.js';

export async function load({ params }) {
  const {data} = await supabase
      .from('diaries')
      .select().eq('id', params.id)
  return {
    diary: data
  };
}
