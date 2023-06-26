function startApp() {

    const selectCategories = document.querySelector('#categorias');
    selectCategories.addEventListener('change', categorySelection)

    getCategories()


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

        meals.forEach( meal => {
            
            const {idMeal , strMeal, strMealThumb} = meal

            const mealContainer = document.createElement('DIV');
            mealContainer.classList.add('col-md-4')
    
            const mealCard = document.createElement('DIV');
            mealCard.classList.add('card', 'mb-4');
    
            const mealImage = document.createElement('IMG');
            mealImage.classList.add('card-img-top')
            mealImage.alt = `Image of ${strMeal} meal`
    
            console.log(mealCard)
        })

    }
}

document.addEventListener('DOMContentLoaded', startApp);


