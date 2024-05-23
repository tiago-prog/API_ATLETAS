import db from "../../db/db.mjs"

export default  {
    async index(req, res) {
        const atletas = await db.select(
            'atleta_id',
            'username',
            'goal',
            'zones',
            'training'
        ).from('atletas_table')
        let _atletas = []

        for (let i = 0; i < atletas.length; i++) {
            if (atletas[i].zones) 
                atletas[i].zones = JSON.parse(atletas[i].zones)
            else (atletas[i].training) 
                atletas[i].training = JSON.parse(atletas[i].training)
        }
        
        
        console.log()
        res.send(atletas)
    },
    show(req, res) {
        const id = req.params;
        res.send({ ...id })
        console.log('Mostrar Atleta');
    },
    create(req, res) {
        const atleta = req.body;
        console.log('Criar Atleta');
        res.send({ message: "atleta.create.ok", ...atleta })
    },
    update(req, res) {
        const id = req.params;
        res.send({ ...id })
        console.log('Atualizar Atleta');

    },
    delete(req, res) {
        const id = req.params;
        res.send({ ...id })
        res.send({ message: "atleta.delete.ok" })
    }
}