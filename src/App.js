import React, { useState, useCallback , useMemo} from 'react';
import Button from './components/Ui/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
import DemoList from './components/Demo/DemoList';
import './App.css';
/*
-react dom render only what is updated it compare between last snapshot and new snapshot
- where we have some thing updated so the whole componet will reevaluated and even if a componet
reexcuted without updating reevaluated it and its children because at last it is a function 
and excuted the child function in it
*/
/*
there is something to tell a certain compnent no to excute utill to compare btween last and new 
update if there changes then reexecute  it with react demo for example demoOutPut we dont 
have any changes but for every update for app component it will reexecute the demo with react
demo it will compare if there is no changes ther is no reexecute and for the function or 
in general non primitive data it will reexecuted because this memo function compare btween 
current value and updated value this comparison for non primitive data will always give false
so it will reexecuted because it saves it in another place in memory in heap
- we have sloution for this usecallback hook in shor it saves a function in a place in internal
memory and not updated then memo can compare it needs dependencies like useEffect
- if you used closure you need to it as dependency to usecallback
*/
/*
-fo state react saves the initializing value as default and it will not reinitalizing it agin
uless a child componet removed totally from dom the reattached so it will be reinitalized again
- react makes schedule for updating szate so you need function to update previous and ne state
for ensuring that no interfecing happemed between two schedules
- if we have two updates in one block function without promise si it will be one schedule
one process one reevaluats 
*/

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);


  console.log('APP RUNNING');

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };
//you need here usememo to store this array and never changed in memory
  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
       <DemoOutput show={showParagraph} />
      <DemoList title={listTitle} items={listItems} />
      <Button >Change List Title</Button>
    </div>
  );
}
