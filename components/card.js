export default function Card({ title, subtitle, list, link, handler }) {
    if (!list) {
        list = []
    }
    return (
        <div className="card" onClick={() => {handler(link)}}>
            <div className="card_data">
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                
            </div>
        </div>
    )
}