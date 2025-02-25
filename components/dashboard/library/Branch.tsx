import Node from '@/components/dashboard/library/Node';
import { TreeProps } from '@/components/dashboard/library/types';
import React from 'react';

type BranchProps<T> = {
  item: TreeProps<T>['data'][number];
  level: number;
};

function Branch<T>({ item, level }: BranchProps<T>): React.JSX.Element {
  const [expanded, setExpanded] = React.useState(item.initiallyExpanded ?? false);
  const hasChild = item?.children?.length;

  const renderSubBranches = () => {
    if (hasChild) {
      const newLevel = level + 1;
      return item?.children?.map((el) => <Branch key={el.id} item={el} level={newLevel} />);
    }
  };

  const onExpand = () => {
    setExpanded((prev) => !prev);
  };

  return (
      <Node item={item} onExpand={onExpand} isExpanded={expanded} />
      {expanded && renderSubBranches()}
  );
}

export default Branch;
