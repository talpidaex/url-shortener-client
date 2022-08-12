import "./App.css";
import {  useState } from "react";

function App() {
  const [url, setUrl] = useState(null);
  const [shortenUrl,setShortenUrl] = useState(null)
  
  const handleSubmit = (e) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ longUrl: url })
  };
    fetch("/api/url/shorten",requestOptions)
      .then((response) => response.json())
      .then((data) => setShortenUrl(data.shortUrl));
    e.preventDefault();
  };

  return (
    <div className="App">
      <div>
        <h1>API SHORT URL SERVICES</h1>
      </div>
      <form onSubmit={handleSubmit} className="center">
        <label>
          Full URL:
          <input
            className="w-100 mt-1"
            placeholder="long url"
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
        <input className="mt-1" type="submit" value="Submit" />
      </form>

      <div>
        <h2>Short URL Response</h2>
        <em className="green">{shortenUrl ?? 'Submit any url'}</em>
      </div>

    </div>

  );
}

export default App;
