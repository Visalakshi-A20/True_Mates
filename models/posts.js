'use strict';
const { Model, DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
    class Post extends Model {
        static associate(models) {
        }
    }

    Post.init({
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        photoUrls: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        }
    }, {
        sequelize,
        modelName: 'Post',
        tableName: 'Posts',
        timestamps: true,
        underscored: false,
    });

    return Post;
};
