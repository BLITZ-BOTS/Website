import { useUser } from "../../Auth/UserContext"
export default function Home() {

    const { user } = useUser(); 
    return (
        <>
            <div>
        {user ? (
          <span>Welcome, {user.email}</span>
        ) : (
          <span>Please log in</span>
        )}
      </div>
        </>
    )
}