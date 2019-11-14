import React from 'react'
import { connect } from 'react-redux'

class PremiumDisplay extends React.Component {

    render() {
        
        return (
            <div>
                <div>
                    <span>{this.props.premium} </span>
                    <super>.29</super>
                    <div className="top-margin-15">per month</div>
                </div><br />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state.premium
}
export default connect(mapStateToProps)(PremiumDisplay)