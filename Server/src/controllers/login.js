const users = require('../utils/users')

const login = (req, res) => {
    const { email, password } = req.query

    const foundUsers = users.find(user => user.email === email && user.password === password)

    return foundUsers
    ? res.status(200).json({ access: true })
    : res.status(404).json({ access: false })

}

module.exports = {
    login
}