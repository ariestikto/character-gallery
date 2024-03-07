import characterData from "../data/characterData.json";
import Character from "./Character";
const CharacterGallery = () => {
    // Body
    return (
        <>
            <p>Update 1</p>
            <p>Update 2</p>
            <p>Deployed using GH action pipeline</p>
            <p>With failing test</p>
            {characterData.map(
                (data) => <Character
                    key={data._id}
                    name={data.name}
                    imgUrl={data.imgUrl}
                    birth={data.birth}
                    death={data.death}
                    race={data.race}
                    realm={data.realm}
                    spouse={data.spouse}
                />
            )}
        </>
    );
};

export default CharacterGallery;