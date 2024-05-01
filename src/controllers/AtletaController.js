export default  {
    index(req, res) {
        res.send('All Atletas')
        console.log('Todos os Atletas');
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