import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiousSecure from "./UseAxiousSecure";


const UseAdmin = () => {
    const { user, loding } = UseAuth();
    const axiousSecure = UseAxiousSecure();
    const { data: isAdmin, isPending: isAdminLoding } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loding, //module 71-2
        queryFn: async () => {
            const res = await axiousSecure.get(`/users/admin/${user.email}`)
            console.log(res.data)
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoding];
};

export default UseAdmin;