const controller = {};

controller.list = (req, res) => {
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM casa', (err, casas) => {
            if (err){
                res.json(err);
            }
            res.render('casas', {
                data: casas
            });
        });
    });
};

controller.save = (req, res) => {
    const data= req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO casa set ?', [data], (err, marca) =>{
            console.log(marca);
            res.send('works');
        })
    })
};

module.exports = controller;

