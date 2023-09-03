import { StyleSheet } from "react-native";
import { COLORS, FONT, MARGIN, SIZES } from "./constants";


export default StyleSheet.create({

    container: {
        flex: 1,
    },
    touchable: {
        flex: 1,
        justifyContent: 'flex-start',
        alignContent: 'space-between',
    },
    listItem: {
        width: SIZES.width * 0.8,
        height: SIZES.height * 0.1,
        // height: '60%',
        alignSelf: 'center',
        justifyContent: 'flex-start',
        // alignItems: 'center',
        backgroundColor: COLORS.primary,
        padding: SIZES.base,
        borderRadius: MARGIN.post,
        marginVertical: MARGIN.small,
        marginHorizontal: MARGIN.small
    },
    viewLeft: {
        marginLeft: MARGIN.medium,
    },
    listTitle: {
        fontSize: FONT.large,
        // fontFamily: 'serif',
        textAlign: 'left',
        fontWeight: '100',
        color: COLORS.white
    },
    listSubTitle: {
        textAlign: 'left',
        fontSize: FONT.small,
        // fontWeight: 'bold',
        color: COLORS.background
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    bgMain: {
        backgroundColor: COLORS.primary,
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    homeBottom: {
        flex: 1,
        backgroundColor: COLORS.white,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding: 15,
        justifyContent: 'center',
    },
    homeBottombg: {
        backgroundColor: COLORS.primary,
        flex: 1,
        justifyContent: 'center',
    },
    textNext: {
        textAlign: 'center',
        textAlignVertical: 'center',
        flex: 1,
        fontWeight: 'bold',
        fontSize: FONT.large,
        color: COLORS.gray
    },
    welcomeText: {
        fontSize: FONT.small,
        color: COLORS.secondary
    },
    welcome: {
        fontSize: FONT.large,
        color: COLORS.white,
        marginTop: MARGIN.header
    },
    welcomeView: {
        flex: 1,
        padding: MARGIN.small
    },
    welcomeContainer: {
        flex: 1,
        padding: MARGIN.medium
    },
    tinyLogo: {
        width: MARGIN.logo,
        height: MARGIN.large,
        alignSelf: 'center',
        marginTop: MARGIN.medium
    },
    tinyLogo2: {
        width: SIZES.width,
        height: SIZES.width,
        alignSelf: 'center',
        marginTop: MARGIN.medium
    },
    tinyLogo3: {
        width: MARGIN.large,
        height: MARGIN.large,
        alignSelf: 'center',
        marginTop: MARGIN.medium
    },
    listContainer: {
        width: SIZES.width * 0.9,
        height: SIZES.height * 0.15,
        // height: '60%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        padding: SIZES.base,
        borderRadius: MARGIN.post,
        marginVertical: MARGIN.small,
        marginHorizontal: MARGIN.small,
        borderLeftWidth: 6,
        borderLeftColor: COLORS.primaryText,
        elevation: 20,
        shadowColor: COLORS.gray,
    },
    scrollview: { padding: 10 },
    postContent: {
        flex: 1,
        padding: 30,
    },
    postTitle: {
        fontSize: 26,
        fontWeight: '900',
        textTransform: 'uppercase',
        color: COLORS.primaryText,
    },
    date: {
        color: COLORS.tertiaryText,
        // marginTop: 2,
        textAlign: 'left',
        fontStyle: 'italic'
    },
    welcomeTheme: {
        fontSize: FONT.large,
        color: COLORS.white,
        fontWeight: '600',
        alignSelf: 'center',
        marginTop: MARGIN.header,
    },
    eventList: {
        marginTop: 20,
        flex: 1,
    },
    eventBox: {
        padding: 2,
        marginTop: 2,
        marginBottom: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    eventDate: {
        flexDirection: 'column',
    },
    eventContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        backgroundColor: COLORS.primary,
        padding: 10,
        width: '100%',
        borderRadius: 10,

    },
    description: {
        fontSize: 15,
        color: "#646464",
    },
    description2: {
        fontSize: 15,
        color: "#b6b6b6",
    },
    eventTime: {
        fontSize: 18,
        color: "#151515",
        // width: '96%',
        marginLeft: 10,
        marginBottom: 4
    },
    eventTime2: {
        fontSize: 18,
        color: "#e6e6e6",
        // width: '96%',
        marginLeft: 10,
        marginBottom: 4
    },
    userName: {
        // flex: 1,
        fontSize: 16,
        color: "#151515",
        fontWeight: 'bold',
        // width: '99%',
        marginLeft: 10,
        marginBottom: 4
    },
    cardContent: {
        marginLeft: 20,
        marginTop: 10,
    },
    image: {

    },

    card: {
        borderRadius: 20,
        shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,

        marginVertical: 10,
        marginHorizontal: 20,
        backgroundColor: COLORS.white,
        flexBasis: '46%',
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderLeftWidth: 6,
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        // backgroundColor: COLORS.primary,

    },
    hContainer: {
        backgroundColor: COLORS.primaryText,
        width: SIZES.width,


    },
    themeText: {
        fontSize: FONT.medium,
        textAlign: 'left',
        marginLeft: MARGIN.medium,
        // backgroundColor: COLORS.primary,
        fontWeight: '900',
        color: COLORS.white,

    },
    themeTitle: {
        fontSize: FONT.large,
        textAlign: 'center',
        marginTop: MARGIN.medium,
        // fontWeight: '900',

        // backgroundColor: COLORS.primary,
        color: COLORS.secondary

    },
    loginButton: {
        backgroundColor: COLORS.primary,
    },
    buttonText: {
        color: COLORS.secondary,
        fontSize: 20,
    },
    itemButton: {
        backgroundColor: COLORS.primary,
        height: SIZES.width * 0.1,
        width: SIZES.width * 0.1,
        borderColor: COLORS.black,
        borderRadius: SIZES.width * 0.03,
        alignItems: "center",
        justifyContent: "center",
        // flex: 1
    },
    itemQuantity: {
        color: COLORS.white,
        // marginHorizontal: 10,
        alignItems: "center",
        justifyContent: "center",
        // fontFamily: FONT.FONT_REGUL,
        fontSize: SIZES.width * 0.08,
    },
    itemName: {
        color: COLORS.black,
        paddingHorizontal: SIZES.width * 0.03,
        // fontFamily: Font.FONT_REGULAR,
        fontSize: 18,
    },

})