const usuarioLogado = () => {
    const token = localStorage.getItem('JWT');
    return token != null ? true : false
}

export { usuarioLogado }