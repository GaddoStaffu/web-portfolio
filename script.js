const gallery = document.getElementById("artwork-gallery");
const totalImages = 20;

for (let i = 1; i <= totalImages; i++) {
  const img = document.createElement("img");
  img.src = `public/Artwork/artwork${i}.png`;
  img.alt = `Artwork ${i}`;
  img.onerror = () => img.remove();
  gallery.appendChild(img);
}
