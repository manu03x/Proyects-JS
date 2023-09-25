const url = 'http://localhost:4000/clientes';

export const newClient = async (client) => {

    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(client),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        window.location.href = 'index.html';
    } catch (error) {
        console.log(error)
    }
}

export const getClients = async () => {
    try {
        const res = await fetch(url);
        const clients = await res.json();
        return clients;
    } catch (error) {
        console.log(error);
    }
}

export const deleteClient = async id => {
    try {
        const request = `${url}/${id}`
        await fetch(request, {
            method: 'DELETE'
        });
    } catch (error) {
        console.log(error);
    }
}

export const getClient = async id => {
    try {
        const request = await fetch(`${url}/${id}`);
        const res = await request.json();

        return res;
    } catch (error) {
        console.log(error);
    }
}

export const updateClient = async client => {
    try {
        await fetch(`${url}/${client.id}`, {
            method: 'PUT',
            body: JSON.stringify(client),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }

}