
//Simulaçao de um banco de dados em memória
let users = [
    { id: 1, name: 'João', email: 'joao@gmail.com' },
    { id: 2, name: 'Antedegueon', email: 'antedeguemon@gmail.com' },
    { id: 3, name: 'Pedro', email: 'pedro@gmail.com' }
];

//Função para buscar todos os usuários
const findAll = () => {
    return users;
};

//Função para buscar um usuário por ID
const findById = (id) => {
    /* Pra cada item do meu array user, ele vai receber o id 
        vai fazer a comparação, vai percorrer todos os itens
        e quando o user.id for igual a id
        retorna o objeto */
    return users.find(user => user.id === id);
};

//função que adiciona um novo usuário
const create = (newUser) => { 
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    const userWithId = {id: newId, ...newUser}
    users.push(userWithId);

    return userWithId;
}

// Exporta as funções para que possam ser usadas em outras partes da aplicação (como nos controllers).
module.exports = {
    findAll,
    findById,
    create
};