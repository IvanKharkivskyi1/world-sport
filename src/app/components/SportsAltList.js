// components/SportsList.js
'use client';

import { useEffect, useState } from 'react';
import { request } from 'graphql-request';

const SportsList = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const query = `
        query {
          countries {
            code
            name
            emoji
          }
        }
      `;
      
      try {
        const data = await request('https://countries.trevorblades.com/', query);
        setCountries(data.countries);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Countries List</h2>
      <ul>
        {countries.map((country) => (
          <li key={country.code}>
            {country.name} {country.emoji}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SportsList;
