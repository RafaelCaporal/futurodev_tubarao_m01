import { useTheme } from "../contexts/ThemeContext";
import { Button } from "./Button";
import { Header } from "./Header";

export function Page() {
  const { theme } = useTheme();
  return (
    <div
      style={{
        height: "100vh",
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#333" : "#fff",
      }}
    >
      <Header />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil minus
        neque incidunt dolores nam molestias modi ducimus, ratione voluptatum.
        Libero explicabo, eaque consectetur sint dolores corporis? Asperiores
        ipsam sapiente tempore?
      </p>
      <Button />
      <h4>Lorem ipsum dolor sit amet conse</h4>
    </div>
  );
}
