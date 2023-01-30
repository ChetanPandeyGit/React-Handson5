import './App.css';
import Bidder1 from './High Order Component/Bidder1';
import Bidder2 from './High Order Component/Bidder2';
import ParentComp from './PureComponentExample/ParentComp';

function App() {
  return (
    <div className="App">
      <h1>PureComponent Example</h1>
      <ParentComp />
      <br/><br/><br/>
      <h1>Auction HOC Example</h1>
      <Bidder1 />
      <br/><br/>
      <Bidder2 />
    </div>
  );
}

export default App;
