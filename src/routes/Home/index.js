import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import firstImg from '../../assets/bg1.jpg';
import secondImg from '../../assets/bg3.jpg';
import PokemonCard from "../../components/PokemonCard";
import "../../App.css";
import pokemons from "../../pokemons.json";
import MenuHeader from "../../components/MenuHeader";

const HomePage = ({ onChangePage }) => {
    const handleClickButton = (page) => {
        console.log('####: <HomePage />')
        onChangePage && onChangePage(page);
    };
    return (
        <>
            <MenuHeader />
            <Header
                title="Pokemon Games"
                desc="This is a simple triple triad card game"
                onClickButton={handleClickButton}
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
            <Layout id="card"
                    title="Card"
                    colorTitle="#FEFEFE"
                    colorBg="#202736"
            >
                <div className="flex">
                    {
                        pokemons.map(item => <PokemonCard
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            type={item.type}
                            img={item.img}
                            values={item.values}
                        />)
                    }
                </div>
            </Layout>
            <Layout id="about"
                    title="Full Rules"
                    urlBg={secondImg}
            >
                <p>
                    To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.
                </p>
            </Layout>
            <Footer />
        </>);
}

export default HomePage;