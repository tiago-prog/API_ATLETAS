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

        for (let i = 0; i < atletas.length; i++) {
            if (atletas[i].zones) 
                atletas[i].zones = JSON.parse(atletas[i].zones)
            else (atletas[i].training) 
                atletas[i].training = JSON.parse(atletas[i].training)
        }
    
        
        res.send(atletas)
    },
    async show(req, res) {
        const { id } = req.params;
        try {
            const atleta = await db('atletas_table').where('atleta_id', id).select(
            'atleta_id',
            'username',
            'goal',
            'zones',
            'training')
            atleta[0].zones = JSON.parse(atleta[0].zones)
            atleta[0].training = JSON.parse(atleta[0].training)
            res.send(atleta)    
        } catch (error) {
            res.status(400).send({ message: "atleta.show.nok", id })
            console.error(error)
        }
    },
    async create(req, res) {
        const atleta = req.body;
        if(typeof atleta.username != "string" || typeof atleta.goal != "string") {
            res.status(400).send({ message: "atleta.create.nok" })
            return
        }
        try {
           const id = await db('atletas_table')
                .returning('atleta_id')
                .insert({
                    username: atleta.username,
                    goal: atleta.goal,
                    zones: JSON.stringify(atleta.zones),
                    training: JSON.stringify(atleta.training)
                })
            res.send({ message: "atleta.create.ok", ...id[0] })
        } catch (error) {
            res.send({ message: "atleta.create.nok" })
            console.error(error)
        }
    },
    async update(req, res) {
        const { id } = req.params
        const atleta = req.body
        try {
            await db('atletas_table')
                .where('atleta_id', id)
                .update({
                    username: atleta.username,
                    goal: atleta.goal,
                    zones: JSON.stringify(atleta.zones),
                    training: JSON.stringify(atleta.training)
                })
            res.status(200).send({ message: "atleta.update.ok", id })
        } catch (error) {
            res.status(400).send({ message: "atleta.update.nok", id })
            console.error(error)
        }

    },
    async delete(req, res) {
        const { id } = req.params;
        console.log(id)
        try {
            await db('atletas_table').where('atleta_id', id).del()
            res.status(200).send({ message: "atleta.delete.ok", id })
        } catch (error) {
            res.status(400).send({ message: "atleta.delete.nok", id })
            console.error(error)
        }
    }
} 