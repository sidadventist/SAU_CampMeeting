import React, { Component } from 'react'
import { StyleSheet, Dimensions, Image } from 'react-native'
import RenderHTML, { HTMLContentModel, defaultHTMLElementModels } from 'react-native-render-html'
import * as constants from './constants'
import { connect } from 'react-redux'

const imageList = {
    logo: require('../../assets/img/logo.png'),
    build: require('../../assets/img/build.png')
}

import { ScreenWidth } from 'react-native-elements/dist/helpers'
const window = Dimensions.get('window').width


const customHTMLElementModels = {
    img: defaultHTMLElementModels.img.extend({
        contentModel: HTMLContentModel.mixed
    }),
    textarea: defaultHTMLElementModels.textarea.extend({
        contentModel: HTMLContentModel.textual

    })
};

class CustomHTML extends Component {
    render() {
        const tagsStyles = {
            body: {
                whiteSpace: 'wrap',
                color: constants.COLORS.black
            },
            p: {
                flex: 1,
                overflow: 'scroll',
                width: window * .9,
                fontSize: this.props.fontSize,

            },
            em: {
                fontSize: this.props.fontSize,
            },
            li: {
                flex: 1,
                overflow: 'scroll',
                width: window * .8,
                fontSize: this.props.fontSize,
            },
            ul: {
                flex: 1,
                overflow: 'scroll',
                width: window * .9,
                marginTop: 0,
                fontSize: this.props.fontSize,

            },
            h1: {
                fontSize: this.props.fontSize * 2,
            },
            h2: {
                fontSize: this.props.fontSize * 1.5,
            },
            h3: {
                fontSize: this.props.fontSize * 1.17,
            },
            h4: {
                fontSize: this.props.fontSize * 1,
            },
            h5: {
                fontSize: this.props.fontSize * 0.83,
            },
            h6: {
                fontSize: this.props.fontSize * 0.67,
            },
        }

        return (
            <RenderHTML
                tagsStyles={tagsStyles}
                source={this.props.source}
                defaultTextProps={{ selectable: true, selectionColor: constants.COLORS.accent }}
                contentWidth={this.props.contentWidth}
                customHTMLElementModels={customHTMLElementModels}
                // renderersProps={renderersProps}
                renderers={{
                    img: (attribs) => {
                        const imagePath = attribs.source;
                        // console.log(imagePath)
                        return (
                            <Image
                                key={attribs.source}
                                style={{ height: 56, width: 57 }}
                                source={this.props.imgs} />
                        )
                    }
                }}
            >
                {this.props.children}
            </RenderHTML>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        fontSize: state
    }
}

export default connect(mapStateToProps)(CustomHTML);
// export default (CustomHTML);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: constants.COLORS.white
    }
})