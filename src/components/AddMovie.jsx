import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css"

const AddMovie = () => {
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    title: '',
    director: '',
    genre: '',
    releaseYear: '',
    synopsis: '',
    posterUrl: '',
  });

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Movie added:', movie);
    navigate('/'); 
  };

  return (
    <div className="add-movie-container">
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={movie.title} onChange={handleChange} required />

        <label>Director:</label>
        <input type="text" name="director" value={movie.director} onChange={handleChange} required />

        <label>Genre:</label>
        <select name="genre" value={movie.genre} onChange={handleChange} required>
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>

        <label>Release Year:</label>
        <input type="number" name="releaseYear" value={movie.releaseYear} onChange={handleChange} required />

        <label>Synopsis:</label>
        <textarea name="synopsis" value={movie.synopsis} onChange={handleChange} required />

        <label>Poster Image URL:</label>
        <input type="url" name="posterUrl" value={movie.posterUrl} onChange={handleChange} required />

        <div className="form-buttons">
          <button type="submit">Add Movie</button>
          <button type="button" onClick={() => navigate('/')}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;