

import React, {useState, useCallback} from 'react';
import Button from './Button';
import CallAdvanced from './CallAdvanced';
import EffectTutrial from './EffectTutrial';
import LayoutTutrial from './LayoutTutrial';
import MemoryAdvanced from './MemoryAdvanced';
import ReducerTutrial from './ReducerTutrial';
import RefTutrial from './RefTutrial';
import StateTutrial from './StateTutrial';

function App() {
  
  const [count , setCount] = useState(0);

  function increment(){
    setCount(s => s + 1);
  }

  const incrementCallback = useCallback(increment, []);

  return (
    <div>
      count: {count}
      <Button onClick={incrementCallback}>
        Increment
      </Button>
      
    </div>
  )
}


class AppClass extends React.Component {
  state = {
    count: 0
  }

  increment = () => {
    this.setState({count: this.state.count + 1});
  }

  render(){
    return (
      <div>
        count: {this.state.count}
        <Button onClick={this.increment}>
          Increment
        </Button>
      </div>
    );
  }
}
 
// <StateTutrial />
//       <ReducerTutrial />
//      <EffectTutrial />
//      <RefTutrial />
//      <LayoutTutrial />
//      <MemoryAdvanced />
//      <CallAdvanced />


export default App;
