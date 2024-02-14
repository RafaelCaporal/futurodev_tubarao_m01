import { useEffect, useState } from "react";

function App() {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState("");
  const [lista, setLista] = useState<string[]>([]);

  useEffect(() => {
    console.log("likes mudou");
    if (likes > 10) {
      setLista((listaAnterior: string[]) =>
        listaAnterior.concat("Famosinho!")
      );
    }
  }, [likes]);

  function somaLikes() {
    setLikes((ultimoValor) => ultimoValor + 1);
  }

  function adicionarLista() {
    setLista((listaAnterior: string[]) => listaAnterior.concat(comments));
  }

  return (
    <div className="p-10">
      <div className="flex flex-col justify-evenly p-4 w-96 h-96 bg-slate-400 rounded-3xl">
        <div className="flex justify-between p-4">
          <div className="flex items-center space-x-2">
            <img
              src="https://media.licdn.com/dms/image/D4D03AQELvXszBeo6nQ/profile-displayphoto-shrink_200_200/0/1707337998314?e=1713398400&v=beta&t=g8HQIGc7s84y3Aig6AMLpUy3gzIt9_GO8WQjeeFKvAE"
              alt=""
              className="w-12 h-12 rounded-full"
            />
            <h1 className="text-xl">Rafael Caporal</h1>
          </div>

          <h2 className="text-lg">X</h2>
        </div>

        <div>
          <img
            src="https://rmtelefonia.com.br/wp-content/uploads/2021/04/Conheca-os-melhores-celulares-para-tirar-self-em-2021.jpg"
            alt=""
            className="w-full h-56 object-cover rounded-2xl"
          />
        </div>

        <div className="flex justify-between text-xl">
          <button className="cursor-pointer" onClick={somaLikes}>
            {likes < 10 ? (
              <span>❤️ {likes} curtidas</span>
            ) : (
              <span>❤️ Famosinho!</span>
            )}
          </button>
          <span>🚀 Compartilhar</span>
        </div>
      </div>
      <input
        type="text"
        onChange={(event) => setComments(event.target.value)}
      />
      {/* <button onClick={adicionarLista}>adicionar a lista</button>
      <span>{lista}</span> */}
    </div>
  );
}

export default App;
