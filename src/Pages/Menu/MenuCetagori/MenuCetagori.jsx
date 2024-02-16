
import { Link } from 'react-router-dom';
import Cover from '../../Shared/Cover/Cover';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const MenuCetagori = ({ items, image, title, para, hight }) => {
    return (
        <div className='flex flex-col gap-10 mt-10'>
            {title && <Cover image={image} title={title} para={para} hight={hight}></Cover>}
            <div className="grid md:grid-cols-2 gap-10">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='text-center'>
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline bg-slate-300 border-0 border-b-4 uppercase">Order your favourite food</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCetagori;