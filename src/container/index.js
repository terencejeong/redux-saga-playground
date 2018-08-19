import { connect } from 'react-redux'
import App from '../components/App'
import { fetchStarWarsRequest, confirmFetchRequest, fetchStarWarsPlanetRequest } from '../actions'

const mapStateToProps = ({starWars}) => ({starWars})

const bindActionsToDispatch = dispatch => (
    {
        fetchStarWarsRequest: () => dispatch(fetchStarWarsRequest()),
        confirmFetchRequest: () => dispatch(confirmFetchRequest()),
        fetchStarWarsPlanetsRequest: () => dispatch(fetchStarWarsPlanetRequest())
    }
)

const AppContainer = connect(mapStateToProps, bindActionsToDispatch)(App)

export default AppContainer
