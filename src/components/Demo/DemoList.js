import React, { useMemo } from 'react';
import classes from './DemoList.module.cc';

const DemoList = (props) => {
    // this is destructiong to insure that only items not whole object project
    //will be added as dependency
  const { items } = props;

  const sortedList = useMemo(() => {
    console.log('Items sorted');
    return items.sort((a, b) => a - b);
  }, [items]); 
  console.log('DemoList RUNNING');

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default React.memo(DemoList);