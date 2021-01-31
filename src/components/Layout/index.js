import s from './style.module.css';

const Layout = ({ id, title, urlBg, colorBg, colorTitle, children }) => {
    const layoutStyle = {
        backgroundImage: urlBg && `url(${urlBg})`,
        backgroundColor: colorBg && colorBg,
    }
    const titleStyle = {
        backgroundColor: colorTitle && colorTitle,
    }
    return (
        <section className={s.root} id={id} style={layoutStyle}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title} style={titleStyle}>
                        <h3>{title}</h3>
                        <span className={s.separator} />
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