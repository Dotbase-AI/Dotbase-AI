
type DefaultDataProps<T> = {
  name: string;
  initiallyExpanded?: boolean;
  draggable?: boolean;
  onDrag?: (event: React.DragEvent) => void;
  children?: DefaultDataProps<T>[];
} & T;
export type TreeProps<T> = {
  data: (DefaultDataProps<T> & T)[];
};
