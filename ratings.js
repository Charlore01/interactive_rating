document.addEventListener('DOMContentLoaded', function() {
    const ratingButtons = document.querySelectorAll('.rating-stars > button');
    const submitButton = document.querySelector('.container > button');
    const container = document.querySelector('.container');
    const moder = document.querySelector('.moder');
    let selectedRating = null;

    ratingButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Set the clicked button background color to white
            this.style.backgroundColor = '#fff';
            this.style.color = '#000';

            // Register the selected rating
            selectedRating = this.querySelector('p').innerText;
        });
    });

    submitButton.addEventListener('click', function() {
        if (selectedRating) {
            console.log(`Rating submitted: ${selectedRating}`);
            // Update the selected rating text in the .moder section
            const selectionText = moder.querySelector('.selection-text > p');
            selectionText.textContent = `You selected ${selectedRating} out of 5`;

            // Hide the container and show the moder section
            container.style.display = 'none';
            moder.style.display = 'block';
        } else {
            console.log('No rating selected');
            alert('No rating selected');
        }
        

        // Reset the rating buttons to default state
        ratingButtons.forEach(button => {
            button.style.backgroundColor = '#282f39';
            button.style.color = '#ffffffc4';
        });

        // Reset the selected rating
        selectedRating = null;
    });
});

