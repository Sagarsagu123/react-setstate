import react from 'react'
const UserContext = react.createContext()
const UserProvider = UserContext.Provider   // this is the provider
const UserConsumer = UserContext.Consumer   // this is the consumer
export { UserConsumer, UserProvider }
