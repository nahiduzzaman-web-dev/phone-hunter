const allMobile = () => {

    const searchBox = document.getElementById('search-field');
    const searchValue = searchBox.value.toLowerCase();
    // All Mobile search fetch
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMobile(data.data))

    // before result remove
    const parentDiv = document.getElementById('mobiles-container').textContent = '';

};

// Display result
const displayMobile = mobiles => {

    const parentDiv = document.getElementById('mobiles-container');
    const max20MobileData = mobiles.slice(0, 20)
    max20MobileData.forEach(mobile => {

        console.log(mobile)

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML =
            `
            <div class="card h-100 shadow p-3 mb-5 bg-body rounded">
                <img src="${mobile.image}" class="card-img-top img-fluid shadow-none p-3 bg-light rounded" alt="...">
                <div class="card-body">
                    <h6><span class="title-size">Brand Name:</span><span class="card-title-design"> ${mobile.brand}</span></h6>
                    <h6><span class="title-size">Phone Name:</span><span class="card-title-design"> ${mobile.phone_name}</span></h6>
                    <p class="card-text"></p>
                </div>
                <div class="card-footer d-flex justify-content-center">
                    <button class="btn btn-outline-success">Explore</button> <i class="text-success fa-solid fa-location-arrow arrow-icon"></i>
                </div>
            </div>
        
        
        `
        parentDiv.appendChild(div)

    })
};