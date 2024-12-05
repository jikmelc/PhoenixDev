const registrarPost = document.getElementById('submit-button');
const postTypeSelect = document.getElementById('post-type');

// Escuchar el clic del botón
registrarPost.addEventListener('click', () => {
  const postType = postTypeSelect.value; // Obtener el valor actual dinámicamente
  const privacy = document.getElementById('privacy').value;
  const text = document.getElementById('newItemText').value;
  const imageFile = document.getElementById('newItemImagesUrl').files[0];

  // Convertir imagen a base64 si se seleccionó
  const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      if (!file) {
        resolve(null);
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(',')[1]); // Solo la parte base64
      reader.onerror = error => reject(error);
    });
  };

  // Verificar el tipo de publicación
  if (postType === "simple") {
    convertImageToBase64(imageFile).then(base64Image => {
      const post = {
        date: new Date().toISOString(),
        image: base64Image,
        privacy: privacy,
        text: text,
        idUsuario: 1,
      };

      const url = `http://localhost:8080/api/posts`;
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
      });
    }).then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    }).then(data => {
      console.log('Guardado', data);
    }).catch(error => {
      console.error('Error:', error);
    });
  } else if (postType === "review") {
    const title = document.getElementById('newItemTitle').value;
    const place = document.getElementById('newItemPlace').value;
    const stars = document.querySelector('input[name="rating"]:checked')?.value;

    convertImageToBase64(imageFile).then(base64Image => {
      const review = {
        date: new Date().toISOString(),
        image: base64Image,
        place: place,
        privacy: privacy,
        stars: stars,
        text: text,
        title: title,
        idUsuario: 1,
      };

      const url = `http://localhost:8080/api/reviews`;
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
      });
    }).then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    }).then(data => {
      console.log('Guardado', data);
    }).catch(error => {
      console.error('Error:', error);
    });
  }
});
