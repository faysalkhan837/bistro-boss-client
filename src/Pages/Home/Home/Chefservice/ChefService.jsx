import services from "../../../../assets/home/chef-service.jpg";
import './chef.css';

const ChefService = () => {
    return (
        <div className="p-16" style={{backgroundImage:`url(${services})`}}>
          <div className="text-center bg-white p-16">
            <h1 className="text-5xl">bistro boss</h1>
            <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque fugit molestiae, cum doloremque minus inventore ducimus veritatis ea incidunt, suscipit corrupti voluptas ipsa! Delectus dolorum beatae placeat, quas iste voluptas?</p>
          </div>
        </div>
    );
};

export default ChefService;