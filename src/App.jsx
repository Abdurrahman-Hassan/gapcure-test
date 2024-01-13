import Header from "./components/Header";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";

function App() {
  const [issidebar, setIssidebar] = useState(false);

  return (
    <div className="overflow-x-hidden flex flex-col">
      <Header setsidebar={setIssidebar} sidebarvalue={issidebar} />

      <div className="flex flex-row">
        <Sidebar sidebarvalue={issidebar} />
        <Hero />
      </div>
    </div>
  );
}

export default App;
