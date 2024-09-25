import Sequelize  from "sequelize";

const db = new Sequelize("empresa_adopcion","adopcion","adopcion",{
    dialect: "mysql",
    host: "localhost"
});

export {db}