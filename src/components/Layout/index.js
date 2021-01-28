import s from './style.module.css';

const Layout = ({ id, title, descr, urlBg, colorBg }) => {
    return (
        <section className={s.root} id={id} style={{backgroundImage: urlBg, backgroundColor: colorBg}}>
            <div className={s.wrapper}>
                <article>
                    <div className={title}>
                        <h3>{ title && <h1>{title}</h1> }</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={s.desc.full}>
                        <p>{ descr && <p>{descr}</p> }</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;