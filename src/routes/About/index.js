import Layout from "../../components/Layout";
import {useContext} from "react";
import {TestContext} from "../../context/testContext";
import {Button} from "react-bootstrap";

const AboutPage = () => {
    const themeContext = useContext(TestContext)
    console.log('####: themeContext', themeContext)
    const handleClick = () => {
        themeContext.onChangeTheme(themeContext.theme === 'light' ? 'dark' : 'light')
    }
    return (
        <>
            <Layout
                id={"about"}
                title={"About"}
            >
                <Button onClick={handleClick}>
                    Change Theme
                </Button>
            </Layout>
        </>
    )
}

export default AboutPage;