import s from './style.module.css';

const Layout = ({ id, title, desc, urlBg, colorBg }) => {
    const layoutStyle = {
        backgroundImage: urlBg && `url(${urlBg})`,
        backgroundColor: colorBg && colorBg
    }
    console.log(layoutStyle);
    return (
        <section className={s.root} id={id} style={layoutStyle}>
            <div className={s.wrapper}>
                <article>
                    <div className={title}>
                        <h3>{ title && <h1>{title}</h1> }</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={s.desc.full}>
                        <p>{ desc && <p>{desc}</p> }</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;