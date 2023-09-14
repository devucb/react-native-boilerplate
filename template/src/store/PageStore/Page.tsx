import {create} from 'zustand';
import {TPage} from './Page.type';

const Page = create<TPage>(set => ({
  currentPage: '',
  setCurrentPage: (_page: string) => set({currentPage: _page}),
}));
export default Page;
