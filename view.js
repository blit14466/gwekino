// Wait for the DOM to fully load
window.onload = function() {
    // Get the filter elements and ads list
    const ageInput = document.getElementById('age');
    const genderSelect = document.getElementById('gender');
    const locationInput = document.getElementById('location');
    const interestsInput = document.getElementById('interests');
    const languagesInput = document.getElementById('languages');
    const resetButton = document.querySelector("button");
    const adsList = document.querySelector('.ads-list');

    // Simulated list of ads (in a real scenario, this would be dynamically generated from the server)
    const adsData = [
        {
            name: 'Overcats',
            location: 'United States - Virginia',
            age: 17,
            gender: 'Male',
            description: '17 yo guy from Virginia kinda bored so message me and I\'ll prolly respond',
            countryFlag: 'US',
        },
        {
            name: 'Cankan',
            location: 'Spain',
            age: 17,
            gender: 'Female',
            description: 'Hi! I\'m Candela. I love listening to music (all kinds but rock has my heart) I also love talking about movies, history, science... mostly everything...',
            countryFlag: 'ES',
        },
        {
            name: '123 Lam',
            location: 'United Kingdom - England',
            age: 17,
            gender: 'Female',
            description: 'Honestly I\'m just bored so I don\'t really mind what we chat about. I listen to all kinds of music and rarely finish shows...',
            countryFlag: 'GB',
        },
        {
            name: 'TheEllat',
            location: 'United States - Illinois',
            age: 17,
            gender: 'Female',
            description: 'Single 18 year old girl, lonely and looking for someone who will love me for me...',
            countryFlag: 'US',
        },
        {
            name: 'oriAnaa',
            location: 'Canada',
            age: 17,
            gender: 'Female',
            description: 'I\'m currently in high school, I love English and reading, especially poetry...',
            countryFlag: 'CA',
        }
    ];

    // Function to filter ads based on the selected filters
    function filterAds() {
        let filteredAds = adsData;

        const ageFilter = ageInput.value.trim();
        if (ageFilter) {
            const ageRange = ageFilter.split('-').map(Number);
            filteredAds = filteredAds.filter(ad => ad.age >= ageRange[0] && ad.age <= ageRange[1]);
        }

        const genderFilter = genderSelect.value;
        if (genderFilter !== 'any') {
            filteredAds = filteredAds.filter(ad => ad.gender.toLowerCase() === genderFilter.toLowerCase());
        }

        const locationFilter = locationInput.value.trim().toLowerCase();
        if (locationFilter) {
            filteredAds = filteredAds.filter(ad => ad.location.toLowerCase().includes(locationFilter));
        }

        const interestsFilter = interestsInput.value.trim().toLowerCase();
        if (interestsFilter) {
            filteredAds = filteredAds.filter(ad => ad.description.toLowerCase().includes(interestsFilter));
        }

        const languagesFilter = languagesInput.value.trim().toLowerCase();
        if (languagesFilter) {
            filteredAds = filteredAds.filter(ad => ad.description.toLowerCase().includes(languagesFilter));
        }

        // Update the UI with the filtered ads
        updateAdsList(filteredAds);
    }

    // Function to reset all filters
    function resetFilters() {
        ageInput.value = '';
        genderSelect.value = 'any';
        locationInput.value = '';
        interestsInput.value = '';
        languagesInput.value = '';
        
        // Reset and display all ads
        updateAdsList(adsData);
    }

    // Function to update the ads list on the page
    function updateAdsList(ads) {
        adsList.innerHTML = '';  // Clear the existing ads

        if (ads.length === 0) {
            adsList.innerHTML = '<li>No ads match your filter criteria.</li>';
        } else {
            ads.forEach(ad => {
                const adItem = document.createElement('li');
                adItem.classList.add('ad-item');

                adItem.innerHTML = `
                    <div class="ad-name">${ad.name}</div>
                    <div class="ad-info">
                        Living in: <img src="https://www.countryflags.io/${ad.countryFlag}/flat/32.png" alt="${ad.countryFlag} Flag"> ${ad.location} | Age: ${ad.age} | Gender: ${ad.gender}
                    </div>
                    <div class="ad-description">${ad.description}</div>
                    <div class="ad-contact"><a href="#">Contact this person</a></div>
                `;
                adsList.appendChild(adItem);
            });
        }
    }

    // Add event listeners for filters
    ageInput.addEventListener('input', filterAds);
    genderSelect.addEventListener('change', filterAds);
    locationInput.addEventListener('input', filterAds);
    interestsInput.addEventListener('input', filterAds);
    languagesInput.addEventListener('input', filterAds);

    // Reset button listener
    resetButton.addEventListener('click', resetFilters);

    // Initialize with all ads displayed
    updateAdsList(adsData);
};