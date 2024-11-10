import {json} from '@sveltejs/kit'
import {supabase} from "$lib/supabaseClient.js";

export async function POST({request}) {
  const data = await request.json();
  const {content} = data;
  const { error } = await supabase
      .from('diaries')
      .insert({content})
  if (error) {
    return json({success: false});
  }
  return json({success: true});
}

export async function PATCH({request}) {
  const data = await request.json();
  const {id, content} = data;
  const { error } = await supabase
      .from('diaries')
      .update({content})
      .eq('id', id)
  if (error) {
    return json({success: false});
  }
  return json({success: true});
}

export async function DELETE({request}) {
  const {id} = await request.json();
  const { error } = await supabase
      .from('diaries')
      .delete()
      .eq('id', id)
  if (error) {
    return json({success: false});
  }
  return json({success: true});
}
