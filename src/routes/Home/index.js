import Header from "../../components/Header";
import Layout from "../../components/Layout";
import firstImg from '../../assets/bg1.jpg';


const HomePage = () => {
    return (
        <>
            <Header
                title="Pokemon Games"
                desc="This is a simple triple triad card game"
            />
            <Layout id="rules"
                    title="Rules"
                    urlBg={firstImg}
            >
                <p>
                    In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
                    Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.
                </p>
            </Layout>
        </>);
}

export default HomePage;