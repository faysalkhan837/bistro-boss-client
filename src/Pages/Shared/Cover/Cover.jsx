import { Parallax } from 'react-parallax';

const Cover = ({ image, title, para, opacity, hight }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={image}
            bgImageAlt="the menu"
            strength={-200}
            style={{ height: `${hight}` }}
        >
            <div className="hero" style={{ height:`${hight}`}}>
            <div className="hero-overlay bg-opacity-60" style={{opacity:`${opacity}` || '.5'}}></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                    <p className="mb-5 uppercase">{para}</p>
                    
                </div>
            </div>
        </div>
            {/* <div className='flex translate-y-3/4 justify-center'>
                <div className="text-center bg-white p-16 w-3/4">
                    <h1 className="text-5xl">bistro boss</h1>
                    <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque fugit molestiae, cum doloremque minus inventore ducimus veritatis ea incidunt, suscipit corrupti voluptas ipsa! Delectus dolorum beatae placeat, quas iste voluptas?</p>
                </div>
            </div> */}
        </Parallax>

    );
};

export default Cover;