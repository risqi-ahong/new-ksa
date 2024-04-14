// route
const routeHandlers = {
  "/ksa/": () => {
    const contentDiv = document.getElementById("content");
     document.title = 'KSA';
     
    contentDiv.innerHTML = `<h1> index </h1>`;
  },
  "/ksa/product": () => {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `<h1> product </h1>  `;
  },
};


// handle navigation
function handleNavigation() {
  const path = window.location.pathname;
  const handler = routeHandlers[path] || notFoundHandler;
  handler();
}

// Fungsi untuk menampilkan halaman 404 jika rute tidak ditemukan
function notFoundHandler() {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "<h1>Page Not Found</h1>";
}

// Tambahkan event listener untuk navigasi
window.addEventListener("popstate", handleNavigation);

// Render konten saat DOM dimuat
document.addEventListener("DOMContentLoaded", handleNavigation);

// Perbarui riwayat browser dan render konten ketika tautan navigasi diklik
document.addEventListener("click", function (event) {
  if (event.target.tagName === "A") {
    event.preventDefault();
    const href = event.target.getAttribute("href");
    history.pushState(null, null, href);
    handleNavigation();
  }
});
