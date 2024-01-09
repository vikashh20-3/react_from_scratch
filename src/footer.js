const Footer = () => {
    const date = new Date();
    return (
        <footer>
            <p>
                Copyright &Bcopy; {date.getFullYear()}
            </p>
        </footer>
    )
}
export default Footer;