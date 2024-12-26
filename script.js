document.addEventListener('DOMContentLoaded', () => {
    const destinations = document.querySelectorAll('.destination');

    destinations.forEach(destination => {
        destination.addEventListener('click', () => {
            // Remove 'active' class from all destinations
            destinations.forEach(dest => dest.classList.remove('active'));

            // Add 'active' class to the clicked destination
            destination.classList.add('active');
        });
    });
});
