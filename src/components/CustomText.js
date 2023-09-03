import React, { Component } from 'react'
import {
    Text, StyleSheet
} from 'react-native'
import { connect } from 'react-redux'


class CustomText extends Component {
    render() {
        return (
            <Text style={[{ fontSize: this.props.fontSize, color: this.props.color, fontWeight: this.props.fontWeight, padding: 10 }]}>{this.props.children}</Text>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        fontSize: state,
    }
}
export default connect(mapStateToProps)(CustomText);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff'
    }
})