import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const UsersContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const UsersProvider = (props) => {
    const [users, setUsers] = useState([])

    const getUsers = () => {
        return fetch("http://localhost:8088/Users")
            .then(res => res.json())
            .then(setUsers)
    }

    const addUsers = users => {
      return fetch("http://localhost:8088/users", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(users)
      })
          .then(getUsers)
  }

  


   

    /*
        Load all Users when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getUsers()
    }, [])

    // useEffect(() => {
    //     console.log("****  Users APPLICATION STATE CHANGED  ****")
        
    // }, [Users])

    return (
        <UsersContext.Provider value={{
            users, addUsers
        }}>
            {props.children}
        </UsersContext.Provider>
    )
}