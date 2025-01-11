import { Link } from 'react-router-dom';
import '../shared.css';

const TopRestaurant = () => {
    return (
        <>
            <main>
                <div className="incontainer">
                    <h1>Your top restaurant was ...</h1>
                    <p>
                        This is actually extremely embarrassing for me but I 
                        don't think we repeated any restaurants this year. 
                        But this just means that we love exploring and trying 
                        new things! Here are some new restaurants we tried this
                        year:
                    </p>
                    <ul>
                        <li>PAI</li>
                        <li>Le Lert</li>
                        <li>Kimsoonrye soonsal chicken</li>
                        <li>Bao House</li>
                        <li>Her Chef</li>
                    </ul>
                    <div className='button'>
                        <Link to='/meal-recap'>Show me my recap!</Link>
                    </div>
                </div>
            </main>
        </>
    )
};

export default TopRestaurant;