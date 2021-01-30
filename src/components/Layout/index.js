import s from './style.module.css';

const Layout = ({ id, title, urlBg, colorBg, children }) => {
    const layoutStyle = {
        backgroundImage: urlBg && `url(${urlBg})`,
        backgroundColor: colorBg && colorBg
    }
    return (
        <section className={s.root} id={id} style={layoutStyle}>
            <div className={s.wrapper}>
                <article>
                    <div className={title}>
                        <h3>{ title && <h1>{title}</h1> }</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={`${s.desc} ${s.full}`}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;