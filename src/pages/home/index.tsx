import { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { WindowsLogo } from "phosphor-react";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-800">
      <p className="text-style-regular-5xl text-red-500">Teste</p>
      <Button title="teste" size="small" colorVariant="secondary" />
      <Input
        colorVariant="secondary"
        iconDirection="right"
        icon={<WindowsLogo size={32} />}
      />{" "}
    </div>
  );
}

export default Home;
