/*
 * @LastEditors: John
 * @Date: 2024-01-19 11:31:12
 * @LastEditTime: 2024-01-19 11:31:25
 * @Author: John
 */
import { create } from "zustand";

export interface BearState {
  bears: number;
  increase: (by: number) => void;
}

const useBearStore = create<BearState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}));

export default useBearStore;
