import { sequelize } from "../../config/db.config.js";
import { DataTypes } from "sequelize";

const Book = sequelize.define("Book", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
  },
  publishYear: {
    type: DataTypes.INTEGER,
  },
  authorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Authors',
      key: 'id',
    }
  }
});

export default Book;
