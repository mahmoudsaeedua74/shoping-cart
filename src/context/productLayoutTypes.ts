export interface ProductLayoutContextType {
  layoutGrid: boolean;
  layoutSlice: boolean;
  show: string;
  setLayoutGrid: () => void;
  setLayoutSlice: () => void;
  setShow: (value: string) => void;
  setSortByName: (value: string) => void;
  sortByName: string;
}
