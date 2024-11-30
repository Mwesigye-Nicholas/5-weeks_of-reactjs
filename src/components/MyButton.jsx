//* Creating and nesting components plus exporting default
//* JSX (JavaScript XML which is a Js extension) is the syntax in the return statement.
//*   allows you write JavaScript in html
//*   a component cannot return multiple jsx wrap them into a <div>...</div> or <>...</>
//* Adding styles use style={{property: "style"}}
function Header() {
  return (
    <p style={{ color: "green", fontSize: "1.5rem" }}>
      This is a button component
    </p>
  );
}

const MyButton = () => {
  function handleClick() {
    alert("Clicked me");
  }
  return (
    <button onClick={handleClick}>
      <Header />
    </button>
  );
};
export default MyButton;
