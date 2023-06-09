const knex = require("../database/knex/index")

class UserRepository {

  async create({ name, email, cryptedPassword }) {
   return await knex("users").insert({ name, email, password: cryptedPassword })
  }

  async getByEmail(email) {
    return await knex("users").where({ email }).first()
  }

  async getById(userId = 6) {
    return await knex("users").where({ id: userId }).first()
  }

  async update(user, userId) {
    await knex("users").where({ id: userId }).update(user)
  }
}

module.exports = UserRepository