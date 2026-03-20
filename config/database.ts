import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
 process.env.DATABASE_NAME, // tên database
 process.env.DATABASE_USERNAME, //Username đăng nhập
 process.env.DATABASE_PASSWORD, // mật khẩu
  {
    host: process.env.DATABASE_HOST, // link hosting
    dialect: 'mysql' // loại database
  }
);


sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

export default sequelize;