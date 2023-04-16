import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-800">
      <p className="text-style-regular-5xl text-red-500">Teste</p>
    </div>
  );
}

export default Home;
