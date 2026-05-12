function App() {
  const appName = "ShopEase";
  const state = false;

  return (
    <>
      <p>Our App name is {appName}</p>
      {state ? "Active" : "Inactive"}
    </>
  );
}

export default App;
