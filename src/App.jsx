import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <div className="btnContainer fixed bottom-20 p-5 border-[2px] w-full bg-slate-400 flex justify-around">
        <Button btnValue="red"/>
        <Button btnValue="green" />
        <Button btnValue="blue" />
        <Button btnValue="orange" colorCode="#000"  />
        <Button btnValue="yellow" colorCode="#000" />
        <Button btnValue="lavender" colorCode="#000"  />
        <Button btnValue="white" colorCode="#000" />
        <Button btnValue="black" />
      </div>
    </>
  );
}

export default App;
