import { videoWithCollection } from "@/app/common/types/video";
import agent from "@/lib/agent";
import { create } from "zustand";

type VideoState = {
  isLoading: boolean;
  videos: videoWithCollection[];
  pagination_page: number;
  total_pages_count: number;
  ITEMS_PER_PAGE: number;
};

type VideoActions = {
  getVideos: (currentPage: number) => void;
  setVideos: (videos: videoWithCollection[]) => void;
  setPaginationPage: (page: number) => void;
  setTotalPages: (totalPagesCount: number) => void;
  setItemsPPage: (items: number) => void;
};

const useVideoStore = create<VideoState & VideoActions>((set, get) => ({
  isLoading: false,
  videos: [],
  pagination_page: 1,
  total_pages_count: 1,
  ITEMS_PER_PAGE: 2,

  setPaginationPage: (page) => set({ pagination_page: page }),
  setTotalPages: (pagesCount) => set({ total_pages_count: pagesCount }),
  setItemsPPage: (items) => set({ ITEMS_PER_PAGE: items }),

  getVideos: async (currentPage) => {
    const currentState = get();
    set({ isLoading: true });
    try {
      const response = await agent.videos.list(
        currentPage,
        currentState.ITEMS_PER_PAGE
      );
      response.forEach((video) => {
        currentState.videos.push(video);
      });

      set({
        videos: currentState.videos,
        pagination_page: currentState.pagination_page + 1,
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
      set({ isLoading: false });
    }
  },
  setVideos: (videos) => set({ videos: videos }),
}));

export default useVideoStore;
