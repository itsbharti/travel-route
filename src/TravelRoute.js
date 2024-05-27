import React from 'react';

function TravelRoute() {
  // Define the graph representing the cities and tickets
  const graph = {
    Kiev: ['Prague'],
    Prague: ['Zurich', 'Kiev'],
    Zurich: ['Prague', 'Amsterdam'],
    Amsterdam: ['Zurich', 'Barcelona'],
    Barcelona: ['Berlin', 'Amsterdam'],
    Berlin: ['Barcelona', 'Kiev']
  };

  // Function to perform depth-first search
  const dfs = (currentCity, visited, route) => {
    visited.add(currentCity);
    route.push(currentCity);

    const neighbors = graph[currentCity];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        dfs(neighbor, visited, route);
      }
    }
  };

  // Function to find the travel route
  const findRoute = () => {
    const startCity = 'Kiev';
    const visited = new Set();
    const route = [];

    dfs(startCity, visited, route);

    return route;
  };

  // Get the travel route
  const travelRoute = findRoute();

  // Display the travel route
  return (
    <div>
      <h2>Travel Route:</h2>
      <ul>
        {travelRoute.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
    </div>
  );
}

export default TravelRoute;
