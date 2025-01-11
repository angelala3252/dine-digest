import { Link } from 'react-router-dom';
import '../shared.css';

const DessertsHome = () => {
    return (
        <>
            <main>
                <div className="incontainer">
                    <h1>Hi ;Dian, are you ready to see your 2024 dessert stats?</h1>
                    <Link>Let's go!</Link>
                </div>
            </main>
        </>
    )
};

export default DessertsHome;