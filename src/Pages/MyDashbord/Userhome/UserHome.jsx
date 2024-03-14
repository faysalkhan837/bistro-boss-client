import UseAuth from "../../../Components/Hooks/UseAuth";


const UserHome = () => {
    const {user} = UseAuth();
    return (
        <div>
            <h1 className="text-3xl">
                <span>Hi, Wellcome </span>
                {user?.displayName ? user.displayName : "back"}
            </h1>
        </div>
    );
};

export default UserHome;