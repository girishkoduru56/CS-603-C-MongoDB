const uri = "mongodb+srv://venkatagirishkoduru:KN1mcVXQW7j71rYH@cluster0.qchduy6.mongodb.net/";

async function createDocument() {
    const data = document.getElementById('createData').value.split('=');
    const document = {};
    document[data[0]] = data[1];

    const response = await fetch(uri + '/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(document)
    });
    const result = await response.json();
    alert(`Document inserted with id: ${result.inserted_id}`);
}

async function readDocuments() {
    const data = document.getElementById('readFilter').value.split('=');
    const filter = {};
    filter[data[0]] = data[1];

    const response = await fetch(uri + '/read', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(filter)
    });
    const result = await response.json();
    document.getElementById('readResult').innerText = JSON.stringify(result, null, 2);
}

async function updateDocuments() {
    const filterData = document.getElementById('updateFilter').value.split('=');
    const updateData = document.getElementById('updateData').value.split('=');
    const filter = {};
    const update = {};
    filter[filterData[0]] = filterData[1];
    update[updateData[0]] = updateData[1];

    const response = await fetch(uri + '/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filter: filter, update: update })
    });
    const result = await response.json();
    alert(`Documents matched: ${result.matched_count}, Documents modified: ${result.modified_count}`);
}

async function deleteDocuments() {
    const data = document.getElementById('deleteFilter').value.split('=');
    const filter = {};
    filter[data[0]] = data[1];

    const response = await fetch(uri + '/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(filter)
    });
    const result = await response.json();
    alert(`Documents deleted: ${result.deleted_count}`);
}

async function displayAllDocuments() {
    const response = await fetch(uri + '/display_all');
    const result = await response.json();
    document.getElementById('displayAllResult').innerText = JSON.stringify(result, null, 2);
}
