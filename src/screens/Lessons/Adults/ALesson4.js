import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator,
    ScrollView,
    Dimensions
} from 'react-native';

// import CustomHTML from '../../../components/CustomHTML';
import RenderHTML, { HTMLContentModel, customHTMLElementModels, HTMLElementModel, defaultHTMLElementModels } from 'react-native-render-html'

// import Lesson1 from '../../../Data/AdultLessons/ALesson4.json'
import { DATA } from '../../../data/Lessons/LessonList';
// import RenderHTML, { HTMLContentModel, defaultHTMLElementModels } from 'react-native-render-html'

// import htmlContent from '../../../data/Lessons/AdultLessons/ALesson4';
import styles from '../../../components/styles';
import CustomActivityIndicator from '../../../components/CustomActivityIndicator';
import { Divider } from 'react-native-elements';
import { ScreenWidth } from 'react-native-elements/dist/helpers';
// const customHTMLElementModels = {
//     img: defaultHTMLElementModels.img.extend({
//         contentModel: HTMLElementModel.mixed
//     })
// }
export default function Lesson4View({ navigation }) {

    // const customHTMLElementModels = {

    //     textarea: defaultHTMLElementModels.textarea.extend({
    //         contentModel: HTMLContentModel.textual

    //     })
    // };
    const source = { html: htmlContent }
    const window = Dimensions.get('window').width
    const height = Dimensions.get('window').height
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        // onload(loading)=setLoading(false)
        const unsubscribe = navigation.addListener('focus', () => {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 30);
        });

        return unsubscribe;
    }, [navigation]);


    if (loading) {
        return (
            <CustomActivityIndicator />
        )
    }

    const customHTMLElementModels = {
        // img: defaultHTMLElementModels.img.extend({
        //     contentModel: HTMLElementModel.block
        // }),
        img2: defaultHTMLElementModels.img.extend({
            contentModel: HTMLContentModel.block
        }),
        img3: defaultHTMLElementModels.img.extend({
            contentModel: HTMLContentModel.mixed
        })
    }
    const imgs = [img1, img2, img3]
    const img1 = require('../../../../assets/img/lesson4/Picture1.jpeg')
    const img2 = require('../../../../assets/img/lesson4/Picture2.jpeg')
    const img3 = require('../../../../assets/img/lesson4/Picture3.jpeg')
    const img4 = require('../../../../assets/img/lesson4/Picture4.jpeg')
    const img5 = require('../../../../assets/img/lesson4/Picture5.jpeg')
    const img6 = require('../../../../assets/img/lesson4/Picture6.jpeg')
    const img7 = require('../../../../assets/img/lesson4/Picture7.jpeg')
    const img8 = require('../../../../assets/img/lesson4/Picture8.jpeg')
    const img9 = require('../../../../assets/img/lesson4/Picture9.jpeg')
    const img10 = require('../../../../assets/img/lesson4/Picture10.jpeg')
    const img11 = require('../../../../assets/img/lesson4/Picture11.jpeg')
    const img12 = require('../../../../assets/img/lesson4/Picture12.jpeg')
    const img13 = require('../../../../assets/img/lesson4/Picture13.jpeg')
    const img14 = require('../../../../assets/img/lesson4/Picture14.jpeg')
    const img15 = require('../../../../assets/img/lesson4/Picture15.jpeg')
    const img16 = require('../../../../assets/img/lesson4/Picture16.jpeg')
    const img17 = require('../../../../assets/img/lesson4/Picture17.jpeg')
    const img18 = require('../../../../assets/img/lesson4/Picture18.jpeg')
    const img19 = require('../../../../assets/img/lesson4/Picture19.jpeg')
    const img20 = require('../../../../assets/img/lesson4/Picture20.jpeg')
    const windowWidth = Dimensions.get('window').width * 0.9
    const windowHeight = Dimensions.get('window').width * 0.9
    return (<React.Fragment>

        <ScrollView>
            <View style={styles.container}>

                <View style={styles.postContent}>
                    <Text style={styles.postTitle}>
                        {DATA[3].title}
                    </Text>
                    {/* <Text style={styles.postSubTitle}>
              {Lesson1.subTitle}
            </Text> */}
                    <Text style={styles.date}>
                        {DATA[3].author}
                    </Text>
                    {/* <Text>{Lesson1.content}</Text> */}

                    <RenderHTML
                        customHTMLElementModels={customHTMLElementModels}
                        renderers={{
                            img: (attribs) => {
                                const imagePath = attribs.source;
                                // console.log(imagePath);
                                return (
                                    // <Image
                                    //     key={attribs.source}
                                    //     style={styles.imageContainer}
                                    //     source={img1}
                                    // />,
                                    [
                                        <Image
                                            key={1}
                                            style={{ resizeMode: 'contain', width: windowWidth, marginVertical: '-40%' }}

                                            source={img1}
                                        />,

                                        <Image
                                            key={2}
                                            style={{ resizeMode: 'contain', width: windowWidth, marginVertical: '-40%' }}
                                            source={img2}
                                        />,

                                        <Image
                                            key={3}
                                            style={{ resizeMode: 'contain', width: windowWidth, marginVertical: '-40%' }}
                                            source={img3}
                                        />,

                                        <Image
                                            key={4}
                                            style={{ resizeMode: 'contain', width: windowWidth, marginVertical: '-40%' }}
                                            source={img4}
                                        />,

                                        <Image
                                            key={5}
                                            style={{ resizeMode: 'contain', width: windowWidth, marginVertical: '-40%' }}
                                            source={img5}
                                        />,




                                    ]
                                );
                            },
                            img2: (attribs) => {
                                const imagePath = attribs.source;
                                // console.log(imagePath);
                                return ([
                                    <Image
                                        key={6}
                                        style={{ resizeMode: 'contain', width: windowWidth, marginVertical: '-40%' }}

                                        source={img6}
                                    />,

                                    <Image
                                        key={7}
                                        style={{ resizeMode: 'contain', width: windowWidth, marginVertical: '-40%' }}
                                        source={img7}
                                    />,

                                    <Image
                                        key={8}
                                        style={{ resizeMode: 'contain', width: windowWidth, marginVertical: '-40%' }}

                                        source={img8}
                                    />,

                                    <Image
                                        key={9}
                                        style={{ resizeMode: 'contain', width: windowWidth, marginVertical: '-40%' }}
                                        source={img9}
                                    />,

                                    <Image
                                        key={10}
                                        style={{ resizeMode: 'contain', width: windowWidth, marginVertical: '-40%' }}

                                        source={img10}
                                    />,

                                    <Image
                                        key={11}
                                        style={{ resizeMode: 'contain', width: windowWidth, marginVertical: '-40%' }}
                                        source={img11}
                                    />,

                                    <Image
                                        key={12}
                                        style={{ resizeMode: 'contain', width: windowWidth, marginVertical: '-40%' }}

                                        source={img12}
                                    />,

                                    <Image
                                        key={13}
                                        style={{ resizeMode: 'contain', width: windowWidth, marginVertical: '-40%' }}
                                        source={img13}
                                    />,

                                    <Image
                                        key={14}
                                        style={{ resizeMode: 'contain', width: windowWidth, marginVertical: '-40%' }}

                                        source={img14}
                                    />,

                                    <Image
                                        key={15}
                                        style={{ resizeMode: 'contain', width: windowWidth, marginVertical: '-40%' }}
                                        source={img15}
                                    />,

                                    <Image
                                        key={16}
                                        style={{ resizeMode: 'contain', width: windowWidth, marginVertical: '-40%' }}

                                        source={img16}
                                    />,

                                    <Image
                                        key={17}
                                        style={{ resizeMode: 'contain', width: windowWidth, marginVertical: '-40%' }}
                                        source={img17}
                                    />,

                                    <Image
                                        key={18}
                                        style={{ resizeMode: 'contain', width: windowWidth, marginVertical: '-40%' }}

                                        source={img18}
                                    />,

                                    <Image
                                        key={19}
                                        style={{ resizeMode: 'contain', width: windowWidth, marginVertical: '-40%' }}
                                        source={img19}
                                    />
                                ])
                            },
                            img3: (attribs) => {
                                const imagePath = attribs.source;
                                // console.log(imagePath);
                                return (<Image
                                    key={1}
                                    style={{ resizeMode: 'contain', width: windowWidth, marginVertical: '-35%' }}

                                    source={img20}
                                />
                                )
                            }
                        }}
                        contentWidth={window}
                        source={source} />
                </View>
            </View>
        </ScrollView>
    </React.Fragment>
    );
}

const htmlContent = `
<p>Edited by Pr Morris Mlambo</p>
<p><strong>Reading for this Lesson</strong>:-Haggai 1:5-7, Titus 1:3, 1 Corinthians 4:2, Matt. 25:29, Isaiah 43:1, Acts 17:26, Exod. 20:8-11, Psalm 24:1, Lev 27:30, Acts 17:26, Gen 1:28, Matt 25:29, Prov 8:12, Gen 8:12, Gen 2:1-3, 8, 15, 18</p>
<p><strong>Read and Discuss Memory Text</strong></p>
<p><strong>Key Text:- </strong>Now therefore thus saith the LORD of hosts; Consider your ways. Ye have sown much, and bring in little; ye eat, but ye have not enough; ye drink, but ye are not filled with drink; ye clothe you, but there is none warm, and he that earneth wages [to put it] into a bag with holes. Thus saith the LORD of hosts; Consider your ways (Haggai 1:5-7).</p>
<p><strong>Morning</strong></p>
<p><strong>Introduction</strong></p>

<ul>
<li>Haggai 1:5-7 speaks about humanity's predicament in today's world where almost everything seemingly makes no sense. For example:-&nbsp;</li>
</ul>
<ul>
<li>People work such a hard reward that hard work does not correspond to the energy and effort invested.</li>
</ul>
<ul>
<li>Foodstuffs are seemingly plenty around us, and people sometimes eat, but fulfilment and contentment are challenging.</li>
</ul>
<ul>
<li>Clothing and raiment are plenty in the markets, but the world population is naked?</li>
</ul>
<ul>
<li>People often get some reasonable income in their different capacities, but it seems the challenge comes with the fruitful utilisation of those resources. It seems the wind blows all away.</li>
</ul>
<ul>
<li><strong>WHY IS IT SEEMINGLY SO? DISCUSS</strong></li>
</ul>
<ul>
<li>Haggai 1:5-7, God answers humanity by reminding us to "Consider our ways." In other words, to introspect how we are doing things!</li>
</ul>
<ul>
<li>This lesson seeks to help humanity to consider the strategies, methods, and ways we are using in working, accumulation of wealth/ resources, and our utilisation of the same while we are "Looking for that blessed hope&hellip; (Titus 1:3).</li>
</ul>
<p><strong>Definition of Terms </strong></p>
<ul>
<li><strong>Stewardship</strong>: the rank or office of a manager concerning the owner</li>
<li><strong>TMI</strong><em>(Total Member Involvement)- </em>All church members involved</li>
<li><strong>Time- </strong>A duration of something or the lifespan of something</li>
<li><strong>Talents-</strong> The marked natural ability or skill</li>
<li><strong>Temple</strong><em>(body)- </em>The physical structure of a human or animal seen as one single unit</li>
<li><strong>Testimony</strong><em>(Truth) - </em>Faithfulness, fidelity, genuineness</li>
<li>T<strong>errain</strong><em>(environment)- </em>The surroundings of and influence on. The natural world around</li>
<li><strong>Treasure</strong><em>(tithe &amp; offerings)- </em>A collection of valuable things, accumulated wealth, stock of money, jewels, etc</li>
<li><strong>Self Reliance </strong>&ndash; The capacity to rely on one's capabilities and to manage one's affairs, i.e. independence</li>
<li><strong>Dimensions</strong>- aspects of a given thing or a construct whereby objects or individuals can be distinguished</li>
<li><strong>Purpose-</strong> A result that is desired or an intention. The reason for which something is done in a particular way</li>
<li><strong>Profit-</strong> The total income minus expenditures/ the benefit</li>
<li><strong>Prudence-</strong> The quality or state of wisdom in the way of caution, i.e., carefulness, economy, and frugality</li>
<li><strong>Objective-</strong> The stepping stones that guide you to achieving your goals</li>
<li><strong>Goal</strong>- The result that one intends to achieve</li>
<li><strong>Innovation- </strong>the act of producing or creating something new in customs, rites, etc</li>
</ul>
<p><strong>The Stewardship Mantra</strong></p>
<ul>
<li>Stewardship Ministries, in consultation with church counterparts, develops and implements a well-defined strategy for achieving Total Stewardship in each organisational unit that reflects changes in membership and inflation.</li>
</ul>
<ul>
<li>Stewardship comes in as one of the <strong>FOUR KEY PILLARS </strong>Of our Strategic Plan, which falls under The <strong>SPIRITUAL GROWTH PILLAR</strong><strong>.</strong></li>
</ul>
<ul>
<li>Tithes and offerings are the measures we can use to monitor our faithfulness.</li>
</ul>
<ul>
<li><strong>THE GOAL&lt;&gt; </strong>Every local Church to increase the percentage of givers, both tithes and offerings, by 5% annually.</li>
</ul>
<p><strong>THE "SPIRITUAL GROWTH" PILLAR</strong></p>
<p><strong>OBJECTIVE 1</strong></p>
<ul>
<li>To disciple individuals and families into Spirit-filled lives</li>
<li>Increase the practice of stewardship principles concerning time, talents/spiritual gifts, truth/ testimony, terrain/ environment, and treasure (tithes and offerings)</li>
<li>To revive the concept of worldwide mission and sacrifice for the mission as a way of life involving not only pastors but every church member, young and old, in the joy of witnessing for Christ and making disciples</li>
</ul>
<p><strong>OBJECTIVE 2</strong></p>
<ul>
<li>To increase accession, retention, reclamation, and participation of children, youth, and young adults.</li>
<li>All members and yet-to-be-baptised young people embrace and practice stewardship principles</li>
</ul>
<p>regarding time, spiritual gifts, tithes and offerings</p>
<p><strong>OBJECTIVE 3</strong></p>
<ul>
<li>To help youth and young adults place God first and exemplify a biblical worldview of managing resources.</li>
</ul>
<ul>
<li>Help Bible classes teach confidence in the Bible as divine revelation, trust in God, and commitment to His mission.</li>
</ul>
<ul>
<li>Anchoring our youth and members in Bible-based Adventist thinking and practice of wealth-creation and utilisation.</li>
</ul>
<p><strong>OBJECTIVE 4</strong></p>
<ul>
<li><strong>Innovation</strong>: To create an enabling environment for mission in constantly changing times.</li>
<li>Pastors, church members, and institutions can effectively fulfil their missionary mandate during crises.</li>
<li>All institutions can operate sustainably during crisis periods.</li>
</ul>
<p><strong>WHY THE EMPHASIS ON STEWARDSHIP &amp; SELF RELIANCE?</strong></p>
<ul>
<li>To multiply spiritual, physical, &amp; material resources creatively to maximize participation (TMI) in the divine commission of Jesus to carry the gospel to all the world.</li>
<li>We are enlisting &amp; empowering members in income generation and the multiplication of local resources.</li>
<li>Bringing about greater "ownership" of the mission of the Church.</li>
<li>Liberating resources and enabling the Church to redistribute funds for the mission.</li>
</ul>

<img/>
<p><strong>Afternoon</strong></p>
<li><img2></li>
<p><strong>Conclusion</strong></p>
<li><img3></li>
`