import del from 'del'

const reset = () => del(app.path.clean)

export default reset
