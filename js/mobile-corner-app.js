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
                    <button onclick="details('${mobile.slug}')" class="btn btn-outline-success">Explore</button> <i class="text-success fa-solid fa-location-arrow arrow-icon"></i>
                </div>
            </div>
        
        
        `
        parentDiv.appendChild(div)

    })
};

const details = info => {
    const url = `https://openapi.programming-hero.com/api/phone/${info}`
    console.log(url)
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
        <div class="card mb-3">
            <div class="card-body">
                <div>
                    <h2 class="text-center info-title">${info.brand}</h2> 
                    <h3 class="text-center info-title">${info.name}</h3>
                </div>
                <div class="info-image">
                    <img src="${info.image}" class="card-img-top img-fluid" alt="...">
                </div>
                <div class="text-center pt-3">
                    <h3 class="py-4"> <span class="fst-italic">${info.name}</span> <i class="text-success fa-solid fa-circle-chevron-down"></i> Full Specifications</h3> 
                </div>
                <div class="table">
                    <table class="table table-bordered">
                        <tbody>
                            <tr>    
                                <td>First Release</td>
                                <td>${info.releaseDate}</td>                   
                            </tr>
                    
                            <tr class="bg-light">                       
                                <td scope="row">Main Feature</td>
                                <td colspan="2"></td>                       
                            </tr>
                    
                            <tr>
                                <th>Storage</th>
                                <td>${info.mainFeatures.storage}</td>                
                            </tr>
                    
                            <tr>
                                <th>Display Size</th>
                                <td>${info.mainFeatures.displaySize}</td>                
                            </tr>
                    
                            <tr>
                                <th>Chipset</th>
                                <td>${info.mainFeatures.chipSet}</td>                
                            </tr>
                    
                            <tr>
                                <th>Memory</th>
                                <td>${info.mainFeatures.memory}</td>                
                            </tr>
                            <tr class="bg-light">
                                <th scope="row">Sensor</th>
                                <td colspan="2"></td>                
                            </tr>
                    
                            <tr>
                                <th>Sensor</th>
                                <td>${info.mainFeatures.sensors}</td>                
                            </tr>
                    
                            <tr class="bg-light">
                                <th scope="row">Connectivity (others)</th>
                                <td colspan="2"></td>                
                            </tr>
                    
                            <tr>
                                <th>WLAN</th>
                                <td>${info.others.WLAN}</td>                
                            </tr>
                    
                            <tr>
                                <th>Bluetooth</th>
                                <td>${info.others.Bluetooth}</td>                
                            </tr>
                    
                            <tr>
                                <th>GPS</th>
                                <td>${info.others.GPS}</td>                
                            </tr>
                    
                            <tr>
                                <th>NFC</th>
                                <td>${info.others.NFC}</td>                
                            </tr>
                    
                            <tr>
                                <th>Radio</th>
                                <td>${info.others.Radio}</td>                
                            </tr>
                            <tr>
                                <th>USB</th>
                                <td>${info.others.USB}</td>                
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `
    detailsDiv.appendChild(div);
    table.appendChild(div)
}