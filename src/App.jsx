import MyButton from "./components/MyButton";
import ShowData from "./components/ShowData";
import ConditionalRender from "./components/ConditionalRender";
import RenderLists from "./components/RenderLists";
import UpdatingScreen from "./components/updatingScreen";
import SharingData from "./components/SharingData";
function App() {
  return (
    <>
      <div>
        <h2>My site for practising React</h2>
        <MyButton />
        <ShowData />
        <ConditionalRender />
        <RenderLists />
        <UpdatingScreen />
        <SharingData/>
      </div>
      ;
    </>
  );
}

export default App;
