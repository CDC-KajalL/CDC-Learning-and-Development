import { useParams } from "react-router-dom";

function CardInfo({ data }) {
  const { name } = useParams();

  return (
    <>
      <section className="card-wrapper">
        <div className="card-container">
          {data
            .filter((item) => item.name === name)
            .map((item, index) => (
              <div className="card-info" key={index}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}

export default CardInfo;
