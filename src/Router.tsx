import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

interface IRouterProps{
}

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Coins  />
        </Route>
        <Route path="/crypto-tracker">
          <Coins  />
        </Route>
        <Route path="/:coinId">
          <Coin  />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;