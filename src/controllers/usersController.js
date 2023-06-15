import UserRepository from "../models/usersModel.js";

export async function addClient(req, res) {
    try {
        const result = await UserRepository.create({
            name: req.body.name,
            cpf: req.body.cpf,
            email: req.body.email,
        });

        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export default { addClient };
