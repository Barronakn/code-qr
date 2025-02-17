import { useState } from "react";
import QRCode from "react-qr-code";

const App = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <section
      className="flex flex-col justify-center items-center gap-4 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
      style={{ height: "auto", margin: "0 auto", maxWidth: 175, width: "100%" }}
    >
      <div>
        <h1 className="text-xl text-center">Génerer votre code QR</h1>
      </div>

      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={inputValue}
        viewBox={`0 0 256 256`}
      />

      <div>
        <input
          className="border-2 rounded-2xl py-1 px-4 text-lg"
          type="text"
          name="text"
          id="text"
          onChange={handleChange}
          placeholder="Entrez votre text ici..."
        />
      </div>
    </section>
  );
};

export default App;
