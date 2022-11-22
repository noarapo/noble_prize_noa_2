export default function Card({ title, subtitle, name ,sum, year ,list}) {
    if (!list) {
        list = []
    }
    return (
        <div className="card" onClick={() => {handler(link)}}>
            <div className="row">
            <div className="content">
                <h2>Category: {title}</h2>
                <h2>ID: {subtitle}</h2>
                <h2>Sum: {sum}</h2>
                <h2>Year: {year}</h2>
                <h2>Name: {name}</h2>
                </div>
                
            </div>
        </div>
    )
}