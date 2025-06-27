body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  color: #333;
}

.header {
  background-color: #2e7d32;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

.nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 1rem;
  position: relative;
  margin-top: 1rem;
}

.carousel {
  display: flex;
  overflow: hidden;
  width: 300px;
  justify-content: center;
  align-items: center;
}

.carousel-item {
  min-width: 300px;
  padding: 1rem;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.6);
  margin: 0 1rem;
  border-radius: 10px;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.carousel-item:not(.active) {
  opacity: 0.5;
}

.carousel-btn {
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

#service-content {
  padding: 2rem;
  transition: opacity 0.3s ease;
  min-height: 200px;
}

footer {
  text-align: center;
  background-color: #ccc;
  padding: 1rem;
  margin-top: 2rem;
}
