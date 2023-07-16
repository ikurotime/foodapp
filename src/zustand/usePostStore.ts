import { getRecipeDataAndComments } from '@/utils';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface PostState {
  comments: Awaited<ReturnType<typeof getRecipeDataAndComments>>[] | [];
  setComments: (
    comments: Awaited<ReturnType<typeof getRecipeDataAndComments>>[]
  ) => void;
}

const usePostStore = create<PostState>()(
  devtools(
    persist(
      (set) => ({
        comments: [],
        setComments: (
          comments: Awaited<ReturnType<typeof getRecipeDataAndComments>>[]
        ) => set({ comments }),
      }),
      {
        name: 'bear-storage',
      }
    )
  )
);

export default usePostStore;
