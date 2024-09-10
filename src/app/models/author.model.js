import { sequelize } from "../../config/db.config.js";
import { DataTypes } from "sequelize";

const Author = sequelize.define("Author", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthDate: {
    type: DataTypes.DATEONLY,
  },
  nationality: {
    type: DataTypes.STRING,
  }
});

export default Author;
