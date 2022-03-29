import CompB from "./CompB";
import CompC from "./CompC";

function CompA() {
  let name = "Vikram";

  function handleClick() {
    name = name.toUpperCase();
    console.log(name);
  }
  return (
    <div>
      <h2>In Comp A</h2>
      <button onClick={handleClick}>Click</button>
      <CompC userName={name}></CompC>
      {/* <CompB userName={name} id="21"></CompB>
       */}
    </div>
  );
}

export default CompA;
