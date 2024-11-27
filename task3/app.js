

axios.get("https://restcountries.com/v3.1/name/azerbaijan")
    .then(response=>{
        const country=response.data[0]

            document.getElementById('name').textContent = country.name.common;
            document.getElementById('capital').textContent = country.capital[0];
            document.getElementById('area').textContent = country.area + " km²";
            document.getElementById('coat').innerHTML = `<img src="${country.coatOfArms.png}" style="width: 20%;";>`
            document.getElementById('image').src = country.flags.png;
    })

    .catch(error => console.log('Error fetching data:', error));