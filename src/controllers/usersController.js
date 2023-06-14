import UserRepository from "../models/usersModel.js";

export async function addClient(req, res) {
    UserRepository.create({
        nome: req.body.nome,
        cpf: req.body.cpf,
        email: req.body.email
    }).then((result) => res.json(result));
}

export default { addClient };
