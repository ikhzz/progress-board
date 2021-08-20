import client from '../config/config';

class Progress {
  read = async () => {
    const query = "SELECT * FROM progress"
    try {
      const res = await client.query(query)

      return res.rows
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  create = async (name: String, desc: String, type: string) => {
    const types = ["todo", "onprogress", "done"]
    if (!types.includes(type)) throw "progress type is not valid"

    const query = `INSERT INTO progress (name, description, type) VALUES ($1, $2, $3)`
    try {
      await client.query(query, [name, desc, type])
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  update = async (id: Number, name: String, desc: String) => {
    const query = `UPDATE progress SET name = $2, desc = $3 WHERE id = $1 `

    try {
      await client.query(query, [id, name, desc])
    } catch (error) {
      throw error
    }
  }

  delete = async (id: Number) => {
    const query = `DELETE FROM progress WHERE id = $1`
    try {
      await client.query(query, [id])
    } catch (error) {
      throw error
    }
  } 
}

export default new Progress();