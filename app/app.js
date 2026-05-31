// ===== CONFIGURACIÓN TMDB =====
const API_KEY = '14c15425ed275359fc0fc82fbbda1e62';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== CAROUSEL SCROLL =====
document.querySelectorAll('.scroll-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const container = btn.parentElement.querySelector('.row-posters');
        const scrollAmount = 220;
        
        if (btn.classList.contains('left')) {
            container.scrollLeft -= scrollAmount;
        } else {
            container.scrollLeft += scrollAmount;
        }
    });
});

// ===== FETCH MOVIES =====
async function fetchMovies(category, containerSelector) {
    try {
        const response = await fetch(
            `${BASE_URL}/movie/${category}?api_key=${API_KEY}&language=es-ES&page=1`
        );
        const data = await response.json();
        
        const container = document.querySelector(containerSelector);
        if (!container) return;
        
        container.innerHTML = data.results.map(movie => `
            <div class="movie-card" onclick="openMovie(${movie.id})">
                <img src="${IMG_URL}${movie.poster_path}" 
                     alt="${movie.title}"
                     onerror="this.src='placeholder.jpg'">
                <div class="card-overlay">
                    <div class="card-info">
                        <h3>${movie.title}</h3>
                        <div class="card-meta">
                            <span class="card-rating">
                                <i class="fas fa-star"></i> ${movie.vote_average.toFixed(1)}
                            </span>
                            <span class="card-duration">${movie.release_date?.split('-')[0] || 'N/A'}</span>
                        </div>
                        <span class="card-genre">Película</span>
                    </div>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}

// Cargar categorías al iniciar
document.addEventListener('DOMContentLoaded', () => {
    fetchMovies('now_playing', '#trending');
    fetchMovies('popular', '#popular');
    fetchMovies('top_rated', '#top-rated');
    fetchMovies('upcoming', '#upcoming');
});

// ===== SEARCH =====
const searchInput = document.querySelector('.search-box input');
if (searchInput) {
    searchInput.addEventListener('input', debounce(async (e) => {
        const query = e.target.value;
        if (query.length < 3) return;
        
        try {
            const response = await fetch(
                `${BASE_URL}/search/movie?api_key=${API_KEY}&language=es-ES&query=${encodeURIComponent(query)}`
            );
            const data = await response.json();
            
            // Mostrar resultados en una fila especial o modal
            const searchContainer = document.querySelector('#search-results');
            if (searchContainer) {
                searchContainer.innerHTML = data.results.map(movie => `
                    <div class="movie-card" onclick="openMovie(${movie.id})">
                        <img src="${IMG_URL}${movie.poster_path}" alt="${movie.title}">
                        <div class="card-overlay">
                            <div class="card-info">
                                <h3>${movie.title}</h3>
                                <span class="card-rating">
                                    <i class="fas fa-star"></i> ${movie.vote_average.toFixed(1)}
                                </span>
                            </div>
                        </div>
                    </div>
                `).join('');
            }
        } catch (error) {
            console.error('Error searching:', error);
        }
    }, 500));
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== OPEN MOVIE PAGE =====
function openMovie(movieId) {
    window.location.href = `/movie.html?id=${movieId}`;
}

// ===== FETCH MOVIE DETAILS (para movie.html) =====
async function fetchMovieDetails(movieId) {
    try {
        const response = await fetch(
            `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=es-ES`
        );
        const movie = await response.json();
        
        // Actualizar elementos de la página de película
        const title = document.querySelector('.movie-title');
        const poster = document.querySelector('.movie-poster');
        const overview = document.querySelector('.movie-overview');
        const rating = document.querySelector('.movie-rating');
        
        if (title) title.textContent = movie.title;
        if (poster) poster.src = `${IMG_URL}${movie.poster_path}`;
        if (overview) overview.textContent = movie.overview;
        if (rating) rating.innerHTML = `<i class="fas fa-star"></i> ${movie.vote_average.toFixed(1)}`;
        
    } catch (error) {
        console.error('Error fetching movie details:', error);
    }
}

// Si estamos en movie.html, cargar detalles
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');
if (movieId) {
    fetchMovieDetails(movieId);
}
