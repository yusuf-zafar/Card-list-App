import Card from "./Card"



function CardList(props) {
    const profiles = props.profiles;
  return (
    <>
    {profiles.map((profile)=> <Card key={profile.id} {...profile}/>)}
    </>
  );
}

export default CardList