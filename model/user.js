const { DataTypes, Model, Op } = require('sequelize');
const sequelize = require('../db/index');

class User extends Model {}

User.init(
    {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        modelName: 'User'
    }
);

// User.sync({ alter: true });

// User.create({
//     firstName: 'Yooo'
// });

async function getUsersAll() {
    const users = await User.findAll({
        // attributes: ['firstName']
        where: {
            id: {
                [Op.eq]: 2
            },
            // id: 2
            [Op.and]: []
        }
    });
    console.log(users);
}
// User.update(
//     { lastName: 'xxx' },
//     {
//         where: {
//             lastName: null
//         }
//     }
// );

getUsersAll();
