import { createClient } from '@supabase/supabase-js';
import { QueryClient, useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const queryClient = new QueryClient();

/**
 * Types
 * 
 * Table: users
 * Columns:
 * - id: uuid
 * - username: text
 * - email: text
 * - created_at: timestamp
 * 
 * Table: posts
 * Columns:
 * - id: uuid
 * - user_id: uuid
 * - title: text
 * - content: text
 * - created_at: timestamp
 * 
 * Table: comments
 * Columns:
 * - id: uuid
 * - post_id: uuid
 * - user_id: uuid
 * - content: text
 * - created_at: timestamp
 */

// Hooks for users table
export const useUsers = () => useQuery('users', async () => {
  const { data, error } = await supabase.from('users').select('*');
  if (error) throw new Error(error.message);
  return data;
});

export const useUser = (id) => useQuery(['user', id], async () => {
  const { data, error } = await supabase.from('users').select('*').eq('id', id).single();
  if (error) throw new Error(error.message);
  return data;
});

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation(async (user) => {
    const { data, error } = await supabase.from('users').insert(user);
    if (error) throw new Error(error.message);
    return data;
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
    }
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation(async ({ id, updates }) => {
    const { data, error } = await supabase.from('users').update(updates).eq('id', id);
    if (error) throw new Error(error.message);
    return data;
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
    }
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation(async (id) => {
    const { data, error } = await supabase.from('users').delete().eq('id', id);
    if (error) throw new Error(error.message);
    return data;
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
    }
  });
};

// Hooks for posts table
export const usePosts = () => useQuery('posts', async () => {
  const { data, error } = await supabase.from('posts').select('*');
  if (error) throw new Error(error.message);
  return data;
});

export const usePost = (id) => useQuery(['post', id], async () => {
  const { data, error } = await supabase.from('posts').select('*').eq('id', id).single();
  if (error) throw new Error(error.message);
  return data;
});

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation(async (post) => {
    const { data, error } = await supabase.from('posts').insert(post);
    if (error) throw new Error(error.message);
    return data;
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    }
  });
};

export const useUpdatePost = () => {
  const queryClient = useQueryClient();
  return useMutation(async ({ id, updates }) => {
    const { data, error } = await supabase.from('posts').update(updates).eq('id', id);
    if (error) throw new Error(error.message);
    return data;
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    }
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation(async (id) => {
    const { data, error } = await supabase.from('posts').delete().eq('id', id);
    if (error) throw new Error(error.message);
    return data;
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    }
  });
};

// Hooks for comments table
export const useComments = () => useQuery('comments', async () => {
  const { data, error } = await supabase.from('comments').select('*');
  if (error) throw new Error(error.message);
  return data;
});

export const useComment = (id) => useQuery(['comment', id], async () => {
  const { data, error } = await supabase.from('comments').select('*').eq('id', id).single();
  if (error) throw new Error(error.message);
  return data;
});

export const useCreateComment = () => {
  const queryClient = useQueryClient();
  return useMutation(async (comment) => {
    const { data, error } = await supabase.from('comments').insert(comment);
    if (error) throw new Error(error.message);
    return data;
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('comments');
    }
  });
};

export const useUpdateComment = () => {
  const queryClient = useQueryClient();
  return useMutation(async ({ id, updates }) => {
    const { data, error } = await supabase.from('comments').update(updates).eq('id', id);
    if (error) throw new Error(error.message);
    return data;
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('comments');
    }
  });
};

export const useDeleteComment = () => {
  const queryClient = useQueryClient();
  return useMutation(async (id) => {
    const { data, error } = await supabase.from('comments').delete().eq('id', id);
    if (error) throw new Error(error.message);
    return data;
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('comments');
    }
  });
};

export { supabase, queryClient };