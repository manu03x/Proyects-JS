function startApp() {

    const selectCategories = document.querySelector('#categorias');
    const result = document.querySelector('#resultado')
    const modal = new bootstrap.Modal('#modal', {})
    const favoritesDiv = document.querySelector('.favoritos')

    if (favoritesDiv) {
        getFavorites()
    }

    if(selectCategories){
        selectCategories.addEventListener('change', categorySelection)
        getCategories()
    }


    function getCategories() {
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
        fetch(url)
            .then(response => response.json())
            .then(json => showCategories(json.categories))
    }

    function showCategories(categories = []) {
        categories.forEach(category => {
            const { strCategory } = category;
            selectCategories.innerHTML += `<option value="${strCategory}">${strCategory}</option>`;
        })
    }

    function categorySelection(e) {
        const category = e.target.value;
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`

        fetch(url)
            .then(response => response.json())
            .then(json => showMeals(json.meals))
    }

    function showMeals(meals = []) {
        cleanHtml(result);

        const heading = document.createElement('H2')
        heading.classList.add('text-black', 'text-center', 'my-5')
        heading.textContent = meals.length ? 'Meals' : 'No meals available for this category'

        result.appendChild(heading);

        meals.forEach( meal => {
            
            const {idMeal , strMeal, strMealThumb} = meal;

            const mealContainer = document.createElement('DIV');
            mealContainer.classList.add('col-md-4');
    
            const mealCard = document.createElement('DIV');
            mealCard.classList.add('card', 'mb-4');
    
            const mealImage = document.createElement('IMG');
            mealImage.classList.add('card-img-top');
            mealImage.alt = `Image of ${strMeal ?? meal.title} meal`;
            mealImage.src = strMealThumb ?? meal.img;


            const mealBodyCard = document.createElement('DIV');
            mealBodyCard.classList.add('card-body');

            const mealHeading = document.createElement('H3');
            mealHeading.classList.add('card-title' , 'mb-3');
            mealHeading.textContent = strMeal ?? meal.title;

            const mealButton = document.createElement('BUTTON');
            mealButton.classList.add('btn', 'btn-danger', 'w-100');
            mealButton.textContent = 'View meal';
            // mealButton.dataset.bsTarget = '#modal';
            // mealButton.dataset.bsToggle = 'modal';

            mealButton.onclick = () => {
                selectMeal(idMeal ?? meal.id);
            }

            mealBodyCard.appendChild(mealHeading);
            mealBodyCard.appendChild(mealButton);
            mealCard.appendChild(mealImage);
            mealCard.appendChild(mealBodyCard);
            mealContainer.appendChild(mealCard);

            result.appendChild(mealContainer);
        })
    }
    function selectMeal(id) {
        const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

        fetch(url)
            .then(response => response.json())
            .then(json => showMeal(json.meals[0]))
    }

    function showMeal(meal) {

        const {idMeal, strMeal, strInstructions, strMealThumb, strIngredient} = meal;

        const modalTitle = document.querySelector('.modal .modal-title');
        const modalBody = document.querySelector('.modal .modal-body');

        modalTitle.textContent = strMeal;
        modalBody.innerHTML = `
            <img class="img-fluid" src="${strMealThumb}" alt=" ${strMeal} meal"/>
            <h3 class="my-3">Instructions</h3>
            <p>${strInstructions}</p>
            <h3 class="my-3">Ingredients & Measure</h3>
        `;
        const list= document.createElement('UL');
        list.classList.add('list-group');
        // Show ingredients
        for (let i = 1; i <= 20 ; i++) {
            if(meal[`strIngredient${i}`]) {
                const ingredient = meal[`strIngredient${i}`];
                const measure = meal[`strMeasure${i}`];

                const ingredientLi = document.createElement('LI');
                ingredientLi.classList.add('list-group-item');
                ingredientLi.textContent = `${ingredient} ${measure}`;

                list.appendChild(ingredientLi);
            }
        }

        modalBody.appendChild(list);


        const modalFooter = document.querySelector('.modal-footer');
        cleanHtml(modalFooter);

        //Buttons

        const favoriteButton = document.createElement('BUTTON');
        favoriteButton.classList.add('btn', 'btn-danger', 'col');
        favoriteButton.textContent = isMealInStorage(idMeal) ? 'Delete from favorites' : 'Add To Favorites';

        // LocalStorage
        favoriteButton.onclick = () => {

            if(isMealInStorage(idMeal)) {
                deleteFavorite(idMeal)
                showToast('Meal Deleted')
                favoriteButton.textContent = 'Add To Favorites'
                return;
            }

            addFavorite({
                id: idMeal,
                title: strMeal,
                img: strMealThumb
            })
            showToast('Added to Favorites')
            favoriteButton.textContent = 'Delete from favorites'
        }

        const closeButton = document.createElement('BUTTON');
        closeButton.classList.add('btn', 'btn-secondary', 'col');
        closeButton.textContent = 'Close';
        closeButton.onclick = () => {
            modal.hide();
        }

        modalFooter.appendChild(favoriteButton);
        modalFooter.appendChild(closeButton);
        modal.show();
    }

    // This function use Local Storage in order to save a meal

    function addFavorite(meal) {
        const favorites = JSON.parse(localStorage.getItem('favorites')) ?? [];

        localStorage.setItem('favorites', JSON.stringify([...favorites, meal]));
    }

    function deleteFavorite(id) {
        const favorites = JSON.parse(localStorage.getItem('favorites')) ?? [];
        const newFavs = favorites.filter(favorite => favorite.id !== id);

        localStorage.setItem('favorites', JSON.stringify(newFavs));
    }

    function isMealInStorage(id) {
        const favorites = JSON.parse(localStorage.getItem('favorites')) ?? [];
        return favorites.some(favorite => favorite.id === id);
    }

    function showToast(message) {
        const toastDiv = document.querySelector('#toast')
        const toastBody = document.querySelector('.toast-body')

        const toast = new bootstrap.Toast(toastDiv)

        toastBody.textContent = message;
        toast.show()
    }

    function getFavorites() {
        const favorites = JSON.parse(localStorage.getItem('favorites')) ?? []

        if (favorites.length) {
            showMeals(favorites)

            return;
        }

        const noFavorites = document.createElement('P')
        noFavorites.textContent = "You haven't saved any favorites yet"
        noFavorites.classList.add('fs-4', 'text-center', 'font-bold', 'mt-5');
        result.appendChild(noFavorites);
    }
    function cleanHtml(element) {
        while(element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }
}

document.addEventListener('DOMContentLoaded', startApp);


