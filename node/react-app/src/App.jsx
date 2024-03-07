import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const Add = () => {
  const [games, setGames] = useState([]);
  const [game, setGame] = useState({
    name: "",
    category: "",
    year: "",
    publisher: "",
  });
  const [editing, setEditing] = useState(false);

  const url = "http://localhost:4000/games";

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    const response = await axios.get(url);
    setGames(response.data);
    console.log(response.data);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (editing) {
      await axios.put(`${url}/${game.id}`, game);
    } else {
      await axios.post(url, game);
    }
    setGame({ name: "", category: "", year: "", publisher: "" });
    setEditing(false);
    fetchGames();
  };

  const handleDelete = async (id) => {
    await axios.delete(`${url}/${id}`);
    fetchGames();
  };

  const handleEdit = (game) => {
    setGame(game);
    setEditing(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={game.name}
          onChange={(e) => setGame({ ...game, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          value={game.category}
          onChange={(e) => setGame({ ...game, category: e.target.value })}
        />
        <input
          type="number"
          placeholder="Year"
          value={game.year}
          onChange={(e) => setGame({ ...game, year: e.target.value })}
        />
        <input
          type="text"
          placeholder="Publisher"
          value={game.publisher}
          onChange={(e) => setGame({ ...game, publisher: e.target.value })}
        />
        <button type="submit">{editing ? "Update" : "Add"} Game</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Year</th>
            <th>Publisher</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => (
            <tr key={game.id}>
              <td>{game.name}</td>
              <td>{game.category}</td>
              <td>{game.year}</td>
              <td>{game.publisher}</td>
              <td>
                <button onClick={() => handleEdit(game)}>Edit</button>
                <button onClick={() => handleDelete(game.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Add;
