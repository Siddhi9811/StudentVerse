// Sample Data for Items (Normally this would come from a backend)
let items = [];

// Function to handle item submission
function addItem(event) {
    event.preventDefault();

    const name = document.getElementById('item-name').value;
    const price = document.getElementById('item-price').value;
    const category = document.getElementById('item-category').value;
    const description = document.getElementById('item-description').value;
    const image = document.getElementById('item-image').files[0];

    const item = {
        id: Date.now(),
        name,
        price,
        category,
        description,
        image: URL.createObjectURL(image) // Creating a URL for the image preview
    };

    // Add the item to the items array
    items.push(item);

    // Clear the form
    document.getElementById('add-item-form').reset();

    // Display all items
    displayItems();
}

// Function to display all items
function displayItems() {
    const itemsContainer = document.getElementById('items-container');
    itemsContainer.innerHTML = ''; // Clear existing items

    items.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('item-card');
        itemCard.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.category}</p>
            <p>$${item.price}</p>
            <p>${item.description}</p>
        `;
        itemsContainer.appendChild(itemCard);
    });
}

// Function to filter items based on search query
function filterItems() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const filteredItems = items.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.category.toLowerCase().includes(query)
    );
    
    displayFilteredItems(filteredItems);
}

// Function to display filtered items
function displayFilteredItems(filteredItems) {
    const itemsContainer = document.getElementById('items-container');
    itemsContainer.innerHTML = ''; // Clear existing items

    filteredItems.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('item-card');
        itemCard.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.category}</p>
            <p>$${item.price}</p>
            <p>${item.description}</p>
        `;
        itemsContainer.appendChild(itemCard);
    });
}
<script>
    // Function to handle the upload form submission
    document.getElementById('uploadForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        const title = document.getElementById('documentTitle').value;
        const subject = document.getElementById('subject').value;
        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0]; // Get the file object

        // Create a document object
        const document = {
            title: title,
            subject: subject,
            fileName: file.name,
            fileUrl: URL.createObjectURL(file) // Store the file URL for local use
        };

        // Retrieve the current documents from localStorage or initialize it
        const documents = JSON.parse(localStorage.getItem('documents')) || [];

        // Add the new document to the array
        documents.push(document);

        // Save the updated array back to localStorage
        localStorage.setItem('documents', JSON.stringify(documents));

        // Clear the form
        document.getElementById('uploadForm').reset();

        // Redirect to the list page
        window.location.href = 'list.html';
    });
</script>
