import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../utils/database';

class User extends Model {}

const ContactModel = User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'First name can not be null'
            }
        }
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Last name can not be null'
            }
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg: 'Email is not valid'
            },

        }
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    email_verified_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    active: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    activation_code: {
        type: DataTypes.UUID,
        allowNull: false
    },
    reset_password_token: {
        type: DataTypes.UUID,
        allowNull: true
    },
    reset_password_token_sent_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    sequelize,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    modelName: 'users'
});

export default ContactModel;