import { useAuth0 } from "@auth0/auth0-react"; 

export default function LogOutButton(){
    const {logout, isAuthenticated} = useAuth0();

    return(
        isAuthenticated && (
        <button className="auth-button" onClick={()=> logout({ logoutParams: { returnTo: window.location.origin } })}>
            Sign Out
        </button>
        )
    );
};