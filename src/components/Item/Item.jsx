import "./Item.css";

export const Item = ({ name, price, image, title, description, children }) => {
    return (
        <article className="card">
            <img src={image} alt={title} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>${price}</p>
            {}
            {children}        
        </article>
    );

};