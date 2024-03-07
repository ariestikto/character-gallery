function Character({ name, imgUrl, birth, death, race, realm, spouse }) {
    // Body
    return (
        <>
            <h2>{name}</h2>
            <img src={imgUrl} alt={`Image of ${name}`} />
            <ul>
                <li>Date of Birth: {birth}</li>
                <li>Date of Death: {death}</li>
                <li>Race: {race}</li>
                <li>Realm: {realm}</li>
                <li>Spouse: {spouse}</li>
            </ul>
        </>
    );
}

export default Character;