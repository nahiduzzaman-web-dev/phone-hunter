const allMobile = () => {

    const searchBox = document.getElementById('search-field');
    const searchValue = searchBox.value.toLowerCase();

    if (searchValue === '') {
        alert("Type your mobile name")
    }
    else {
        // All Mobile search fetch
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
        fetch(url)
            .then(res => res.json())
            .then(data => displayMobile(data.data))

        // before result remove
        document.getElementById('mobiles-container').textContent = '';
        document.getElementById('details-container').textContent = '';
    }



};

// Display result
const displayMobile = mobiles => {

    document.getElementById('search-field').value = '';
    const parentDiv = document.getElementById('mobiles-container');
    const max20MobileData = mobiles.slice(0, 20)
    max20MobileData.forEach(mobile => {

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML =
            `
            <div class="card h-100 shadow p-3 mb-5 bg-body rounded">
                <img src="${mobile.image ? mobile.image : 'Not Found'}" class="card-img-top img-fluid shadow-none p-3 bg-light rounded" alt="...">
                <div class="card-body">
                    <h6><span class="title-size">Brand Name:</span><span class="card-title-design"> ${mobile.brand ? mobile.brand : 'Not Found'}</span></h6>
                    <h6><span class="title-size">Phone Name:</span><span class="card-title-design"> ${mobile.phone_name ? mobile.phone_name : 'Not Found'}</span></h6>
                    <p class="card-text"></p>
                </div>
                <div class="card-footer d-flex justify-content-center">
                    <button onclick="details('${mobile.slug}')" class="btn btn-outline-success">Explore</button> <i class="text-success fa-solid fa-location-arrow arrow-icon"></i>
                </div>
            </div>
        
        
        `
        parentDiv.appendChild(div)

    })
};

const details = info => {
    document.getElementById('details-container').textContent = '';
    const url = `https://openapi.programming-hero.com/api/phone/${info}`
    fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data.data))
    document.getElementById('mobiles-container').textContent = '';
};

const setDetails = info => {
    const detailsDiv = document.getElementById('details-container');
    const table = document.getElementById('table');
    const div = document.createElement('div');
    // div.classList.add('col');
    div.innerHTML =
        `
        <div class="card mb-3 shadow-sm p-3 mb-5 bg-body rounded">
            <div class="card-body">
                <div>
                    <h2 class="text-center info-title">${info.brand ? info.brand : 'Not Found'}</h2> 
                    <h3 class="text-center info-title">${info.name ? info.name : 'Not Found'}</h3>
                </div>
                <div class="info-image">
                    <img src="${info.image ? info.image : 'Not Found'}" class="card-img-top img-fluid" alt="...">
                </div>
                <div class="text-center pt-3">
                    <h3 class="py-4"> <span class="fst-italic">${info.name ? info.name : 'Not Found'}</span> <i class="text-success fa-solid fa-circle-chevron-down"></i> Full Specifications</h3> 
                </div>
                
                <div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"></li>
                        <li class="list-group-item">
                            <p class="list-span"> 
                                <span class="fw-bold">First Release:</span>
                                <span>${info.releaseDate ? info.releaseDate : 'Not found'}</span>
                            </p>    
                        </li>
                        <li class="list-group-item">
                            <p class="list-span"> 
                                <span class="fw-bold">Storage:</span>
                                <span>${info.mainFeatures.storage ? info.mainFeatures.storage : 'Not Found'}</span>
                            </p>    
                        </li>
                        <li class="list-group-item">
                            <p class="list-span"> 
                                <span class="fw-bold">Display Size:</span>
                                <span>${info.mainFeatures.displaySize ? info.mainFeatures.displaySize : 'Not Found'}</span>
                            </p>    
                        </li>
                        <li class="list-group-item">
                            <p class="list-span"> 
                                <span class="fw-bold">Chipset:</span>
                                <span>${info.mainFeatures.chipSet ? info.mainFeatures.chipSet : 'Not Found'}</span>
                            </p>    
                        </li>
                        <li class="list-group-item">
                            <p class="list-span"> 
                                <span class="fw-bold">Memory:</span>
                                <span>${info.mainFeatures.memory ? info.mainFeatures.memory : 'Not Found'}</span>
                            </p>    
                        </li>
                        <li class="list-group-item">
                            <p class="list-span"> 
                                <span class="fw-bold">Sensor:</span>
                                <span>${info.mainFeatures.sensors ? info.mainFeatures.sensors : 'Not Found'}</span>
                            </p>    
                        </li>
                        <li class="list-group-item">
                            <p class="list-span"> 
                                <span class="fw-bold">WLAN:</span>
                                <span>${info.others.WLAN ? info.others.WLAN : 'Not Found'}</span>
                            </p>    
                        </li>
                        <li class="list-group-item">
                            <p class="list-span"> 
                                <span class="fw-bold">Bluetooth:</span>
                                <span>${info.others.Bluetooth ? info.others.Bluetooth : 'not found'}</span>
                            </p>    
                        </li>
                        <li class="list-group-item">
                            <p class="list-span"> 
                                <span class="fw-bold">GPS:</span>
                                <span>${info.others.GPS ? info.others.GPS : 'Not Found'}</span>
                            </p>    
                        </li>
                        <li class="list-group-item">
                            <p class="list-span"> 
                                <span class="fw-bold">NFC:</span>
                                <span>${info.others.NFC ? info.others.NFC : 'Not Found'}</span>
                            </p>    
                        </li>
                        <li class="list-group-item">
                            <p class="list-span"> 
                                <span class="fw-bold">Radio:</span>
                                <span>${info.others.Radio ? info.others.NFC : 'Not Found'}</span>
                            </p>    
                        </li>
                        <li class="list-group-item">
                            <p class="list-span"> 
                                <span class="fw-bold">USB:</span>
                                <span>${info.others.USB ? info.others.USB : 'Not Found'}</span>
                            </p>    
                        </li>
                
                    </ul>
                </div>
            </div>
            
        </div>

        

    `
    detailsDiv.appendChild(div);

};