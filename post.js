const recipes = [];

function showPage(page) {
    const content = document.getElementById('content');
    if (page === 'home') {
        content.innerHTML = `
            <h2>Welcome to Food Sharing</h2>
            <p>Share your favorite food with others!</p>
            <div id="recipe-list">
                ${recipes.map((recipe, index) => `
                    <div class="recipe-item" id="recipe-${index}">
                        <img src="${recipe.image}" alt="${recipe.title}">
                        <h2>${recipe.title}</h2>
                        <p>${recipe.description}</p>
                        <p><strong>Location:</strong> ${recipe.location}</p>
                        <p><strong>Price:</strong> $${recipe.price}</p>
                        <button onclick="removeRecipe(${index})">Delete</button>
                    </div>
                `).join('')}
            </div>
        `;
    } else if (page === 'submit') {
        content.innerHTML = `
            <h2>Submit Your Food</h2>
            <form id="recipe-form">
                <div class="form-group">
                    <label for="title">Food Title</label>
                    <input type="text" id="title" name="title" required>
                </div>
                <div class="form-group">
                    <label for="image">Image File</label>
                    <input type="file" id="image" name="image" accept="image/*" required>
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea id="description" name="description" rows="4" required></textarea>
                </div>
                <div class="form-group">
                    <label for="location">Location</label>
                    <input type="text" id="location" name="location" required>
                </div>
                <div class="form-group">
                    <label for="price">Price</label>
                    <input type="number" id="price" name="price" step="0.01" required>
                </div>
                <button type="button" class="button" onclick="addRecipe()">Submit</button>
            </form>
        `;
    }
}

function addRecipe() {
    const title = document.getElementById('title').value;
    const imageFile = document.getElementById('image').files[0];
    const description = document.getElementById('description').value;
    const location = document.getElementById('location').value;
    const price = document.getElementById('price').value;

    if (title && imageFile && description && location && price) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const image = event.target.result;
            recipes.push({ title, image, description, location, price });
            showPage('home');
        };
        reader.readAsDataURL(imageFile);
    }
}

function removeRecipe(index) {
    recipes.splice(index, 1);
    showPage('home');
}

// Initialize the page with the home view
showPage('home');

// function showPage(page) {
//   const content = document.getElementById('content');
//   if (page === 'home') {
//       content.innerHTML = `
//           <h2>Welcome to Food Sharing</h2>
//           <p>Share your favorite Food with others!</p>
//           <div id="recipe-list">
//               ${recipes.map(recipe => `
//                   <div class="recipe-item">
//                       <img src="${recipe.image}" alt="${recipe.title}">
//                       <h2>${recipe.title}</h2>
//                       <p>${recipe.description}</p>
//                   </div>
//               `).join('')}
//           </div>
//       `;
//   } else if (page === 'submit') {
//       content.innerHTML = `
//           <h2>Submit Your Food</h2>
//           <form id="recipe-form">
//               <div class="form-group">
//                   <label for="title">Food Title</label>
//                   <input type="text" id="title" name="title" required>
//               </div>
//               <div class="form-group">
//                   <label for="image">Image URL</label>
//                   <input type="text" id="image" name="image" required>
//               </div>
//               <div class="form-group">
//                   <label for="description" color="black">Description</label>
//                   <textarea id="description" name="description" rows="4" required></textarea>
//               </div>
//               <button type="button" class="button" onclick="addRecipe()">Submit</button>
//           </form>
//       `;
//   }
// }

// function addRecipe() {
//   const title = document.getElementById('title').value;
//   const image = document.getElementById('image').value;
//   const description = document.getElementById('description').value;

//   if (title && image && description) {
//       recipes.push({ title, image, description });
//       showPage('home');
//   }
// }

// // Initialize the page with the home view
// showPage('home');


