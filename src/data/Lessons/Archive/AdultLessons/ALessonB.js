// import React, { useState, useEffect } from 'react';
// import {
//     StyleSheet,
//     Text,
//     View,
//     Image,
//     ActivityIndicator,
//     ScrollView,
//     Dimensions
// } from 'react-native';

// import CustomHTML from '../../../components/CustomHTML';
// // import Lesson1 from '../../../Data/YouthLessons/YLesson4.json'
// // import Lesson1 from '../../../Data/AdultLessons/ALesson4.json'
// // import htmlContent from '../../../Data/YouthLessons/YLesson4';
// // import htmlContent from '../../../Data/AdultLessons/ALesson4';
// import styles from '../../../components/styles';
// import { DATA } from '../../../Data/LessonList';

// export default function Lesson1View({ navigation }) {


//     const source = { html: htmlContent }
//     const window = Dimensions.get('window').width
//     const height = Dimensions.get('window').height
//     const [loading, setLoading] = useState(true)
//     useEffect(() => {
//         const unsubscribe = navigation.addListener('focus', () => {
//             setLoading(true);
//             setTimeout(() => {
//                 setLoading(false);
//             }, 3000);
//         });

//         return unsubscribe;
//     }, [navigation]);


//     if (loading) {

//         return (
//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                 <ActivityIndicator color={'blue'} size="large" />
//             </View>
//         )
//     }
//     return (
//         <React.Fragment>

//             <ScrollView>
//                 <View style={styles.container}>

//                     <View style={styles.postContent}>
//                         <Text style={styles.postTitle}>
//                             {DATA[3].title}
//                         </Text>
//                         {/* <Text style={styles.postSubTitle}>
//               {Lesson1.subTitle}
//             </Text> */}
//                         <Text style={styles.date}>
//                             {DATA[3].author}
//                         </Text>
//                         {/* <Text>{Lesson1.content}</Text> */}

//                         <Text>INTRODUCTION: What is the Mark of the Beast?</Text>
//                         <Text>A tattooed number, a computer chip under the skin, or something subtler? It&rsquo;s one of the most misinterpreted prophecies in the entire Bible&mdash;yet it is vitally important to understand it. In studying the mark of the beast, we must address some sensitive issues, naming names and being specific. This is not a popular thing to do, but we must be firm because God loves His people and wants them to know the truth. This message is not from us; it comes from Jesus. It must also be underscored that this message is not against an individual, but an institution, not against a soul, but a system, not against a person, but a power. We stand here not with a butcher&rsquo;s knife, but a doctor&rsquo;s knife. A butcher cuts to kill, while a doctor cuts to heal. And with eternal death facing those who receive the mark, it would be wrong to not help Jesus deliver this message. In this study the Bible will be our textbook&mdash;sola scriptura. The Bible is the Norma Normans Non Normata (the norm of norms, that cannot be normed). It&rsquo;s the first principle. When it speaks there is no high court appeal. If the Bible says it, it settles it. So please read Revelation 13:1&ndash;8, 16&ndash;18, and 14:9&ndash;12, and pray for the Holy Spirit to grant you an honest and understanding heart before embarking on this study adventure.</Text>
//                         <Text>A Brief Background</Text>
//                         <Text>It must be underscored that there is a terrible conflict in progress between God and the devil. It has raged through the centuries since Lucifer, heaven&rsquo;s most powerful angel rebelled against God. With the angels who joined him, he attempted to seize control of the universe. God and the loyal angels had no choice but to eject Lucifer and his angels from heaven. Lucifer, who became known as Satan, was infuriated. His determination to control the universe has only grown since. Amazingly, he has won the support of the majority of earth&rsquo;s people in his rebellion. The Lord also asks for people&rsquo;s loyalty and support, but He leaves all free to choose. Soon every person on earth will have aligned with either Satan or God. The final battle between Satan and God is just ahead, and it is described in the book of Revelation. This prophetic book points out that God has an emblem, a mark, that will identify His people. Satan also has an emblem, a mark, that will identify those who support him. As usual, Satan will work through an earthly power&mdash;symbolized in Revelation by a beast&mdash;to impose his mark. This lesson will reveal the beast&rsquo;s mark, which every lost person of the end time will receive. Unless you know what his mark is, how will you avoid receiving it?</Text>
//                         <Text>
//                             <Span>In order to know what the mark of the beast is, we must first identify the beast. How does the Bible describe it?</Span>
//                         </Text>
//                         <Text>Answer:</Text>
//                         <Text>
//                             <Span>It rises from the sea (verse 1).</Span>
//                         </Text>
//                         <Text>
//                             <Span>It is the composite of the four beasts in Daniel chapter 7 (verse 2).</Span>
//                         </Text>
//                         <Text>
//                             <Span>The dragon gives it power and authority (verse 2).</Span>
//                         </Text>
//                         <Text>
//                             <Span>It receives a deadly wound (verse 3).</Span>
//                         </Text>
//                         <Text>
//                             <Span>Its deadly wound is healed (verse 3).</Span>
//                         </Text>
//                         <Text>
//                             <Span>It is a strong political power (verses 3, 7).</Span>
//                         </Text>
//                         <Text>
//                             <Span>It is a strong religious power (verses 3, 8).</Span>
//                         </Text>
//                         <Text>
//                             <Span>It is guilty of blasphemy (verses 1, 5, 6).</Span>
//                         </Text>
//                         <Text>
//                             <Span>It wars with and overcomes the saints (verse 7).</Span>
//                         </Text>
//                         <Text>
//                             <Span>It rules for 42 months (verse 5).</Span>
//                         </Text>
//                         <Text>
//                             <Span>It has a mysterious number&mdash;666 (verse 18).</Span>
//                         </Text>
//                         <Text>
//                             <Span>It would rise from the sea (Revelation 13:1).</Span>
//                         </Text>
//                         <Text>The sea (or water) in prophecy refers to people or a populated area (Revelation 17:15). So the beast&mdash;antichrist&mdash;would arise amid the established nations of the then known world. The papacy arose in Western Europe, so it fits this point.</Text>
//                         <Text>A Word of Explanation</Text>
//                         <Text>In harmony with God&rsquo;s command to honor all people (1 Peter 2:17), we pause here to recognize the papacy for her many good deeds and activities. Her hospitals, orphanages, care for the poor, homes for unwed mothers, and care for the aged are appreciated universally. She can honestly be lauded for many things. But, like all other organizations, she has also made serious errors. God pinpoints some of these errors in Revelation. The Lord, who blesses and comforts, must sometimes chasten and correct. Please ask His Spirit to speak to you as you continue with this lesson.</Text>
//                         <Text>
//                             <Span>It would be a composite of the four beasts of Daniel chapter 7 (Revelation 13:2).</Span>
//                         </Text>
//                         <Text>Study the comparison below to see how it all fits together:</Text>
//                         <table>
//                             <tbody>
//                                 <tr>
//                                     <td width="159">&nbsp;</td>
//                                     <td width="289">
//                                         <Text><u>Daniel chapter 7</u></Text>
//                                     </td>
//                                     <td width="303">
//                                         <Text><u>Revelation chapter 13</u></Text>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td width="159">
//                                         <Text>Babylon</Text>
//                                     </td>
//                                     <td width="289">
//                                         <Text>Lion-like beast (vs. 4)</Text>
//                                     </td>
//                                     <td width="303">
//                                         <Text>"Mouth of a lion" (vs. 2)</Text>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td width="159">
//                                         <Text>Medo-Persia</Text>
//                                     </td>
//                                     <td width="289">
//                                         <Text>Bearlike beast (vs. 5)</Text>
//                                     </td>
//                                     <td width="303">
//                                         <Text>"Feet of a bear" (vs. 2)</Text>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td width="159">
//                                         <Text>Greece</Text>
//                                     </td>
//                                     <td width="289">
//                                         <Text>Leopard-like beast (vs. 6)</Text>
//                                     </td>
//                                     <td width="303">
//                                         <Text>"Like unto a leopard" (vs. 2)</Text>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td width="159">
//                                         <Text>Rome</Text>
//                                     </td>
//                                     <td width="289">
//                                         <Text>Ten-horned beast (vs. 7)</Text>
//                                     </td>
//                                     <td width="303">
//                                         <Text>"Having ... ten horns" (vs. 1)</Text>
//                                     </td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                         <Text>The four beasts of Daniel 7 are depicted as part of Antichrist, or the beast, because the papacy incorporated pagan beliefs and practices from all four empires. She clothed them in spiritual garments and spread them to the world as Christian teachings. Here is one of many supporting statements from history: "In a certain respect, she [the papacy] has copied her organization from that of the Roman Empire, has preserved and made fruitful the philosophical intuitions of Socrates, Plato, and Aristotle, borrowed from both Barbarians and the Byzantine Roman Empire, but always remains herself, thoroughly digesting all elements drawn from external sources." <strong>*Andre Retif, The Catholic Spirit, trans. by Dom Aldhelm Dean, Vol. 88 of The Twentieth Century Encyclopedia of Catholicism (New York, Hawthorne Books, 1959), p. 85.</strong> This point definitely fits the papacy.</Text>
//                         <Text>
//                             <Span>The beast must receive its power, seat (capital), and authority from the dragon (Revelation 13:2).</Span>
//                         </Text>
//                         <Text>To identify the dragon, we go to Revelation chapter 12, where God's end-time church is pictured as a pure woman. In prophecy, a pure woman represents God's true people or church (Jeremiah 6:2 Isaiah 51:16). The pure woman is portrayed as pregnant and about to deliver. The dragon crouches nearby, hoping to "devour" the baby at birth. However, when the baby is born He evades the dragon, fulfills His mission, and then ascends to heaven. Obviously the baby is Jesus, whom Herod tried to destroy by killing all the babies in Bethlehem (Matthew 2:16). So the dragon represents pagan Rome, of which Herod was a king. The power behind Herod's plot was, of course, the devil (Revelation 12:7-9). Satan acts through various governments to accomplish his ugly work in this case, pagan Rome.</Text>
//                         <Text>We will quote just two supportive references from history, though there are many: (1) "The Roman Church ... pushed itself into the place of the Roman World-Empire, of which it is the actual continuation. ...The Pope ... is Caesar's successor." *<strong>Adolf Harnack, What is Christianity? trans. by Thomas Bailey Saunders (New York: Putnam, 2nd ed., rev., 1901), p. 270.</strong></Text>
//                         <Text>&nbsp;"The mighty Catholic Church was little more than the Roman Empire baptized. Rome was transformed as well as converted. The very capital of the old Empire became the capital of the Christian Empire. The office of Pontifex Maximus was continued in that of Pope." *<strong>Alexander Clarence Flick, The Rise of the Mediaeval Church (reprint: New York, Burt Franklin, 1959), pp. 148, 149.</strong> So this point also fits the papacy. She received her capital city and power from pagan Rome.</Text>
//                         <Text>
//                             <Span>It would receive a deadly wound (Revelation 13:3).</Span>
//                         </Text>
//                         <Text>The deadly wound was inflicted when Napoleon's general, Alexander Berthier, entered Rome and took Pope Pius VI captive in February of 1798. Napoleon decreed that at the death of the pope, the papacy would be discontinued. The pope died in France in August of 1799. "Half Europe thought ... that without the Pope the Papacy was dead." *<strong>Joseph Rickaby, "The Modern Papacy," Lectures on the History of Religion, Lecture 24, (London: Catholic Truth Society, 1910), p. 1. </strong>So this point also fits the papacy.</Text>
//                         <Text>
//                             <Span>The deadly wound would be healed, and the entire world would give homage to the beast (Revelation 13:3).</Span>
//                         </Text>
//                         <Text>Since it&rsquo;s healing, the strength of the papacy has grown. Today she is one of the most powerful religious-political organizations in the world.</Text>
//                         <Text>ABOUT THE POPE:</Text>
//                         <Text>He is the most well known person in our world. People of the world see him as a strong moral leader. Thousands of Catholics and non-Catholics throng to him when he visits other countries. In 2015, he spoke before a joint session of the U.S. Congress for the first time in history.</Text>
//                         <Text>ABOUT THE PAPACY:</Text>
//                         <Text>An American ambassador has said the Vatican is unmatched as a &ldquo;listening post.&rdquo; *<strong>Malachi Martin, The Keys of This Blood (New York, Simon &amp; Schuster, 1990), </strong>p.114<strong>.</strong> Papal structure is already prepared for worldwide control.</Text>
//                         <Text>Clearly, the wound is healing and the eyes of the nations are upon the Vatican, fitting the prophecy of the Bible.</Text>
//                         <Text>
//                             <Span>It would become a strong political power (Revelation 13:3, 7).</Span>
//                         </Text>
//                         <Text>See item E above.</Text>
//                         <Text>
//                             <Span>It would become a very powerful religious organization (Revelation 13:3, 8).</Span>
//                         </Text>
//                         <Text>See item E above.</Text>
//                         <Text>
//                             <Span>It would be guilty of blasphemy (Revelation 13:5, 6).</Span>
//                         </Text>
//                         <Text>The papacy is guilty of blasphemy because her priests claim to forgive sins and her popes claim to be Christ.</Text>
//                         <Text>
//                             <Span>It would war with and persecute the saints (Revelation 13:7).</Span>
//                         </Text>
//                         <Text>The papacy did persecute and destroy millions of saints during the Dark Ages. The noontide of the papacy was the midnight of the world.</Text>
//                         <Text>
//                             <Span>It would reign for 42 months (Revelation 13:5).</Span>
//                         </Text>
//                         <Text>The papacy reigned for 42 prophetic months, which equals 1,260 years, from A.D. 538-1798.</Text>
//                         <Text>
//                             <Span>It would have the mysterious number 666 (Revelation 13:18).</Span>
//                         </Text>
//                         <ul>
//                             <Span>This verse says, &ldquo;It is the number of a man,&rdquo; and Revelation 15:2 refers to &ldquo;the number of his name.&rdquo; It must be noted that the most prominent number in Revelation is seven. There are seven churches, seven trumpets, and so on. Seven is also the number of God&rsquo;s Sabbath, the seventh day of the week. So seven is a number that honors God. The number 666 is a &ldquo;human&rdquo; number (R.S.V.). The underlying Greek can be translated fairly as &lsquo;the number of a man&rsquo; or as &lsquo;the number of man [mankind].&rsquo; The sixth day Friday, is the day when man was created. 666 with its triple sixes, points to man focused inward on him/herself. Six is legitimate when it leads to seven; it represents man on the first evening of his existence entering into the celebration of God&rsquo;s creative power. The glory of the creature is right when it leads to the glory of God. This does not mean however that anything associated with 6 is bad. Each of the four living creatures in Revelation 4:8 has 6 wings&mdash;this attests that 6 is associated with something perfect and heavenly. The Genesis creation narrative declares the 6 days of creation to be &ldquo;very good&rdquo; (Genesis 1:31). 666, however represents the refusal of man to proceed to 777, to give glory to God as creator and redeemer. 6 that do not lead to 7 represents imperfection, incompleteness, deception, and blasphemy, and in 666 these characteristics are tripled and raised to a heightened degree. It means intensified rebellion and total independence from God. 6 symbolize a falling short of the divine ideal symbolized in the number 7. The 777 system has a physical mark which is the divine Sabbath. The 666 system has a physical mark which is the human Sabbath.</Span>
//                             <Span>The papal title Vicarius Filii Dei (Vicar/representative of the Son of God on earth) has been used since the Reformation to culculate the number 666. But there are several questions that should make us cautious. First, it is not clear that this title is an official one. Second, there is no clear indication in Revelations 13 that the number is based on the numerical value of the letters of a name. The number of a man, can also be translated as a number of humanity; that is humans separated from God. Third, those who insist on counting the numerical value of the letters confront the problem of deciding which language will be used, because the text does not identify any language, the selection of a particular one will somewhat be arbitrary. The passage was written in Greek and the title at hand is written in Latin.</Span>
//                             <Span>A closer examination of the Greek text of Revelation 13:18 speaks more of the number of a man rather than a human number, and also in the same text there is an injunction to &ldquo;culculate the number of the beast.&rdquo; The title Vicarius Filii Dei contains virtually the same meaning as that of the Greek word &lsquo;anti-christ&rsquo; (antichristos)&mdash;which does not mean against Christ but in place of Christ or in substitution of Christ. The aim of the anti-christ is to substitute whatever God in Christ has decreed. This is the endtime antichrist</Span>
//                             <Span>&ldquo;And the ten horns which thou sawest are ten kings, which have received no kingdom as yet; but receive power as kings one hour with the beast these have one mind, and shall give their power and strength unto the beast.&rdquo; Revelation 17: 12, 13.</Span>
//                             <Span>&ldquo;10 kings.&rdquo;</Span>
//                             <Span>10 in the Bible is a universal number.</Span>
//                             <Span>It denotes completeness.</Span>
//                             <Span>The entire world leadership will seek to come together and be of one mind and one purpose.</Span>
//                             <Span>EG a football team with different individuals but with one purpose.</Span>
//                             <Span>For an hour&ndash; 1 day= 1year.</Span>
//                             <Span>Matthew 26:40.</Span>
//                             <Span>One hour= a short time.</Span>
//                             <Span>The Holy See/the Papacy will rule for a short time in the NEW WORLD ORDER&mdash;the uniting of global nations for integrated coordination.</Span>
//                             <Span>&ldquo;And he causeth all, both small and great, rich and poor, free and bond, to receive a mark in their right hand, or in their foreheads: And that no man might buy or sell, save he that has the mark, or the name of the beast, or the number of his name.&rdquo; Revelation 13: 16, 17.</Span>
//                             <Span>Economic sanctions will be mandated on those who will not comply.</Span>
//                             <Span>Ultimate penalty will be a death decree.</Span>
//                             <Span>Rev 13: 8 &ndash; Two groups.</Span>
//                             <Span>Great deception and the great exception.</Span>
//                         </ul>
//                         <Text>The beast with the &ldquo;mark&rdquo; is the papacy. No other power in history could possibly fit these 11 divine descriptive points. Now that we have positively identified the beast, we can discover her mark, or symbol of authority. But first we need to consider God&rsquo;s sign of authority.</Text>
//                         <Text start="2">
//                             <Span>What is God&rsquo;s mark, or symbol, of authority?</Span>
//                         </Text>
//                         <Text>&ldquo;I also gave them My Sabbaths, to be a sign between them and Me, that they might know that I am the Lord who sanctifies them&rdquo; (Ezekiel 20:12).</Text>
//                         <Text>&ldquo;It is a sign between Me and the children of Israel forever; for in six days the Lord made the heavens and the earth&rdquo; (Exodus 31:17).</Text>
//                         <Text>&ldquo;He received the sign of circumcision, a seal of the righteousness of the faith which he had while still uncircumcised, that he might be the father of all those who believe, though they are uncircumcised, that righteousness might be imputed to them also&rdquo; (Romans 4:11).</Text>
//                         <Text>Answer: In these texts, God is saying that He gave us His Sabbath as a sign of His power to create and His power to sanctify (convert and save) us. In the Bible, the words seal, sign, mark, and token are used interchangeably (Compare Genesis 17:11 with Romans 4:11 and Revelation 7:3 with Ezekiel 9:4).</Text>
//                         <Text>&nbsp;God&rsquo;s sign, the Sabbath, represents His holy power to rule as Creator and Savior. Revelation 7:1&ndash;3 says it will be written upon the foreheads (minds&mdash;Hebrews 10:16) of His people. It will signify that they are owned by Him and have His character. Hebrews 4:4&ndash;10 confirms this by saying that when we enter His rest (receive salvation), we should keep His seventh-day Sabbath holy as a symbol, or mark, of salvation. True Sabbath keeping signifies that a person has surrendered his life to Jesus Christ and is willing to follow wherever Jesus leads. Since the symbol, mark, of God&rsquo;s authority and power is His holy Sabbath day, it seems likely that the symbol, or mark, of God&rsquo;s challenger&mdash;the beast&mdash;might also involve a holy day. Let&rsquo;s see if it does.</Text>
//                         <Text start="3">
//                             <Span>What does the papacy say is her symbol, or mark, of authority?</Span>
//                         </Text>
//                         <Text>Answer: Notice the following section from a Catholic catechism:</Text>
//                         <Text>&ldquo;Question: Have you any other way of proving that the Church has power to institute festivals of precept?</Text>
//                         <Text>Answer: Had she not such power, she could not have done that in which all modern religionists agree with her&mdash;she could not have substituted the observance of Sunday the first day of the week, for the observance of Saturday the seventh day, a change for which there is no Scriptural authority.&rdquo; *<strong>Stephen Keenan, A Doctrinal Catechism [FRS No. 7.], (3rd American ed., rev.: New York, Edward Dunigan &amp; Bro., 1876), p. 174.</strong></Text>
//                         <Text>The papacy is here saying that it &ldquo;changed&rdquo; Sabbath to Sunday and that virtually all churches accepted the new holy day. Thus, the papacy claims that Sunday as a holy day is the mark, or symbol, of her power and authority.</Text>
//                         <Text start="4">
//                             <Span>Did God predict such an attempted change?</Span>
//                         </Text>
//                         <Text>Answer:&nbsp;Yes. In describing the antichrist in Daniel 7:25, God said it would &ldquo;intend to change times and law.&rdquo;</Text>
//                         <Text>
//                             <Span>How has the papacy tried to change God&rsquo;s law? In three ways: In her catechisms she has (1) omitted the second commandment against veneration of images, and (2) shortened the fourth (Sabbath) commandment from 94 words to just eight. The Sabbath commandment (Exodus 20:8&ndash;11) clearly specifies Sabbath as the seventh day of the week. As changed by the papacy in its catechism, the commandment reads, &ldquo;Remember that thou keep holy the Sabbath day.&rdquo; Written thus, it can refer to any day. And, finally, she (3) divided the tenth commandment into two commandments.</Span>
//                         </Text>
//                         <Text>
//                             <Span>How has the papacy attempted to change God&rsquo;s times? In two ways: (1) She attempted to change the time of the Sabbath from the seventh day to the first day. (2) She also attempted to change God&rsquo;s &ldquo;timing&rdquo; for the beginning and closing hours of the Sabbath. Instead of counting the Sabbath day from sundown Friday night to sundown Saturday night as God mandates (Leviticus 23:32), she adopted the pagan Roman custom of counting the day from midnight Saturday night to midnight Sunday night. God predicted these &ldquo;changes&rdquo; would be attempted by the beast, or antichrist.</Span>
//                         </Text>
//                         <Text>Notice the following section from a Catholic catechism:</Text>
//                         <Text>"Question: Which is the Sabbath day?</Text>
//                         <Text>Answer: Saturday is the Sabbath day.</Text>
//                         <Text>Question: Why do we observe Sunday instead of Saturday?</Text>
//                         <Text>Answer: We observe Sunday instead of Saturday because the Catholic Church transferred the solemnity from Saturday to Sunday." *<strong>Peter Geiermann, The Convert's Catechism of Catholic Doctrine (St. Louis, B. Herder Book Co., 1957 ed.), p. 50.</strong></Text>
//                         <Text>Here is another Catholic statement: "The Church is above the Bible and this transference of Sabbath observance from Saturday to Sunday is proof positive of that fact." *<strong>The Catholic Record (London, Ontario, Canada, Sept. 1, 1923).</strong></Text>
//                         <Text>The papacy is saying in these references that its successful change of Sabbath observance to Sunday worship is proof that its authority is greater, or "above," Scripture.</Text>
//                         <Text start="5">
//                             <Span>How could anyone in good conscience attempt to change God&rsquo;s holy day?</Span>
//                         </Text>
//                         <Text>Answer: We ask the papacy, &ldquo;Did you really change Sabbath to Sunday?&rdquo; She replies, &ldquo;Yes, we did. It is our symbol, or mark, of authority and power.&rdquo; We ask, &ldquo;How could you even think of doing that?&rdquo; While it&rsquo;s a pertinent question, the question the papacy officially asks Protestants is even more pertinent. Please read it carefully:</Text>
//                         <Text>&ldquo;You will tell me that Saturday was the Jewish Sabbath, but that the Christian Sabbath has been changed to Sunday. Changed! But by whom? Who has authority to change an express commandment of Almighty God? When God has spoken and said, Thou shalt keep holy the seventh day, who shall dare to say, Nay, thou mayest work and do all manner of worldly business on the seventh day; but thou shalt keep holy the first day in its stead? This is a most important question, which I know not how you can answer. You are a Protestant, and you profess to go by the Bible and the Bible only; and yet in so important a matter as the observance of one day in seven as a holy day, you go against the plain letter of the Bible, and put another day in the place of that day which the Bible has commanded. The command to keep holy the seventh day is one of the Ten Commandments; you believe that the other nine are still binding; who gave you authority to tamper with the fourth? If you are consistent with your own principles, if you really follow the Bible and the Bible only, you ought to be able to produce some portion of the New Testament in which this fourth commandment is expressly altered.&rdquo; *<strong>Library of Christian Doctrine: Why Don't You Keep Holy the Sabbath-Day? (London: Burns and Oates, Ltd.), pp. 3, 4.</strong></Text>
//                         <Text>Tragically, both Catholicism and Protestantism stand in error for rejecting God&rsquo;s Sabbath&mdash;His sign of identification.</Text>
//                         <Text start="6">
//                             <Span>What solemn warnings has God given regarding His law and His sign, or mark?</Span>
//                         </Text>
//                         <Text>Answer: A. God warns religious leaders against causing people to stumble by saying that some commandments do not matter (Malachi 2:7&ndash;9). For example, some ministers teach, &ldquo;It doesn&rsquo;t matter what day you keep holy.&rdquo;</Text>
//                         <Text>
//                             <Span>God warns people who want their ministers to preach smooth fables rather than the truth about His law (Isaiah 30:9, 10).</Span>
//                         </Text>
//                         <Text>
//                             <Span>God warns people about hardening their hearts against the truth of His law (Zechariah 7:12).</Span>
//                         </Text>
//                         <Text>
//                             <Span>God states that the upheaval, tragedy, problems, and woes of earth come because people refuse to follow His law&mdash;and have even tried to change it (Isaiah 24:4&ndash;6).</Span>
//                         </Text>
//                         <Text>
//                             <Span>God warns religious leaders who refuse to preach the prophecies of the end time (Isaiah 29:10, 11).</Span>
//                         </Text>
//                         <Text>
//                             <Span>God warns that leaders who teach there is really no difference between sacred things (such as God&rsquo;s holy Sabbath) and common things (such as Sunday) will face His indignation (Ezekiel 22:26, 31).</Span>
//                         </Text>
//                         <Text start="7">
//                             <Span>Revelation 13:16 says people will receive the mark of the beast in the forehead or in the hand. What does this mean?</Span>
//                         </Text>
//                         <Text>Answer: The forehead represents the mind (Hebrews 10:16). A person will be marked in the forehead by a decision to keep Sunday as a holy day. The hand is a symbol of work (Ecclesiastes 9:10). A person will be marked in the hand by working on God&rsquo;s holy Sabbath or by going along with Sunday laws for practical reasons (job, family, etc.). The sign, or mark, for either God or the beast will be invisible to people. You will, in essence, mark yourself by accepting either God&rsquo;s mark&mdash;the Sabbath&mdash;or the beast&rsquo;s mark&mdash;Sunday. Though invisible to men, God will know who has which mark (2 Timothy 2:19).</Text>
//                         <Text start="8">
//                             <Span>According to Isaiah 58:1, 13, 14, what decisive message does God deliver to His people in the last days?</Span>
//                         </Text>
//                         <Text>&ldquo;Cry aloud, spare not; lift up your voice like a trumpet; tell My people their transgression. ... If you turn away your foot from the Sabbath, from doing your pleasure on My holy day, and call the Sabbath a delight ... then you shall delight yourself in the Lord&rdquo; (Isaiah 58:1, 13, 14).</Text>
//                         <Text>Answer: He says to tell His people that they are sinning because they are trampling on His holy day, and He asks them to quit breaking the Sabbath so He can bless them. He wants His messenger to speak loudly so the people will hear. Notice that the third angel of Revelation 14:9&ndash;12, who brings the message about the mark of the beast, speaks with a loud voice also (verse 9). The message is too important to treat as ordinary. It&rsquo;s a life-or-death issue! Jesus says His sheep, or people, will follow Him when He calls them (John 10:16, 27).</Text>
//                         <Text start="9">
//                             <Span>Do people who worship on Sunday as a holy day have the mark of the beast now?</Span>
//                         </Text>
//                         <Text>Answer: Absolutely not! No one will have the mark of the beast until Sunday worship becomes an issue forced by law. At that time, those who decide to follow the false teachings of the beast and worship on Sunday&mdash;the beast&rsquo;s counterfeit holy day&mdash;will receive his mark. Those who follow Jesus and obey His truth will keep His Sabbath day holy and receive His mark. Those who expect to refuse the beast&rsquo;s mark in the future must step under Jesus&rsquo; Sabbath banner now. His power is available to those who obey Him (Acts 5:32). Without Him, we can do nothing (John 15:5). With Him, all things are possible (Mark 10:27).</Text>
//                         <Text start="10">
//                             <Span>According to the book of Revelation, who did John see in God&rsquo;s eternal kingdom?</Span>
//                         </Text>
//                         <Text>Answer: The answer is threefold and very clear:</Text>
//                         <Text>
//                             <Span>Those who have God&rsquo;s mark&mdash;sign (His Sabbath)&mdash;in their foreheads (Revelation 7:3, 4).</Span>
//                         </Text>
//                         <Text>
//                             <Span>Those who refused to identify with the beast or his image and who refused to have his mark or name in their foreheads (Revelation 15:2).</Span>
//                         </Text>
//                         <Text>
//                             <Span>The people who&mdash;today and for eternity&mdash;follow where Jesus leads, trusting Him fully in everything (Revelation 14:4).</Span>
//                         </Text>
//                         <Text start="11">
//                             <Span>What is Jesus saying to people today?</Span>
//                         </Text>
//                         <Text>&ldquo;He who follows Me shall not walk in darkness, but have the light of life&rdquo; (John 8:12).</Text>
//                         <Text>Answer:&nbsp;What a fantastic promise! If we follow Him, we will not end up in darkness but will, instead, have glorious truth. Further, following Him and keeping His Sabbath will put God&rsquo;s mark on our foreheads and protect us from the dreadful plagues (Psalm 91:10) that will fall upon the disobedient (Revelation 16). It also marks us as ready for translation at Jesus&rsquo; second coming. What blessed protection and assurance God has offered us!</Text>
//                         <Text><strong>Comments from Churches and Other Authorities About the Sabbath</strong></Text>
//                         <Text>Answer:</Text>
//                         <Text>Baptist: &ldquo;There was and is a commandment to keep holy the Sabbath day, but that Sabbath day was not Sunday. ... It will be said, however, and with some show of triumph, that the Sabbath was transferred from the seventh to the first day of the week. ... Where can the record of such a transaction be found? Not in the New Testament&mdash;absolutely not. There is no scriptural evidence of the change of the Sabbath institution from the seventh to the first day of the week.&rdquo; <strong>Dr. Edward T. Hiscox, author of The Baptist Manual, in a paper read before a New York ministers' conference held Nov. 13, 1893.</strong></Text>
//                         <Text>Catholic: &ldquo;You may read the Bible from Genesis to Revelation, and you will not find a single line authorizing the sanctification of Sunday. The Scriptures enforce the religious observance of Saturday, a day which [Catholics] never sanctify.&rdquo; <strong>James Cardinal Gibbons, The Faith of Our Fathers, 93rd edition, 1917, p. 58.</strong></Text>
//                         <Text>Church of Christ: &ldquo;Finally, we have the testimony of Christ on this subject. In Mark 2:27, he says: &lsquo;The Sabbath was made for man, and not man for the Sabbath.&rsquo; From this passage it is evident that the Sabbath was made not merely for the Israelites, as Paley and Hengstenberg would have us believe, but for man&nbsp;... that is, for the race. Hence we conclude that the Sabbath was sanctified from the beginning, and that it was given to Adam, even in Eden, as one of those primeval institutions that God ordained for the happiness of all men.&rdquo; <strong>Robert Milligan, Scheme of Redemption, (St. Louis, The Bethany Press, 1962), p. 165.</strong></Text>
//                         <Text>Congregationalist: &ldquo;The Christian Sabbath [Sunday] is not in the Scriptures, and was not by the primitive church called the Sabbath.&rdquo; <strong>Dwight's Theology, Vol. 4, p. 401.</strong></Text>
//                         <Text>Episcopal: &ldquo;Sunday (Dies Solis, of the Roman calendar, &lsquo;day of the sun,&rsquo; because dedicated to the sun), the first day of the week, was adopted by the early Christians as a day of worship. ... No regulations for its observance are laid down in the New Testament, nor, indeed, is its observance even enjoined.&rdquo; <strong>"Sunday," A Religious Encyclopedia, Vol. 3, (New York, Funk and Wagnalls, 1883) p. 2259.</strong></Text>
//                         <Text>Lutheran: &ldquo;The observance of the Lord&rsquo;s day [Sunday] is founded not on any command of God, but on the authority of the church.&rdquo; <strong>Augsburg Confession of Faith, quoted in Catholic Sabbath Manual, Part 2, Chapter 1, Section 10.</strong></Text>
//                         <Text>Methodist: &ldquo;Take the matter of Sunday. There are indications in the New Testament as to how the church came to keep the first day of the week as its day of worship, but there is no passage telling Christians to keep that day, or to transfer the Jewish Sabbath to that day.&rdquo; <strong>Harris Franklin Rall, Christian Advocate, July 2, 1942.</strong></Text>
//                         <Text>Moody Bible Institute: &ldquo;The Sabbath was binding in Eden, and it has been in force ever since. This fourth commandment begins with the word &lsquo;remember,&rsquo; showing that the Sabbath already existed when God wrote the law on the tables of stone at Sinai. How can men claim that this one commandment has been done away with when they will admit that the other nine are still binding?&rdquo; <strong>D. L. Moody, Weighed and Wanting, p. 47.</strong></Text>
//                         <Text>Presbyterian: &ldquo;Until, therefore, it can be shown that the whole moral law has been repealed, the Sabbath will stand.&nbsp;... The teaching of Christ confirms the perpetuity of the Sabbath.&rdquo; <strong>T. C. Blake, D.D., Theology Condensed, pp. 474, 475.</strong></Text>
//                         <Text>Pentecostal: &ldquo; &lsquo;Why do we worship on Sunday? Doesn&rsquo;t the Bible teach us that Saturday should be the Lord&rsquo;s Day?&rsquo;&nbsp;... Apparently we will have to seek the answer from some other source than the New Testament&rdquo; David A. Womack, "Is Sunday the Lord's Day?" <strong>The Pentecostal Evangel, Aug. 9, 1959, No. 2361, p. 3.</strong></Text>
//                         <Text>Encyclopedia: &ldquo;Sunday was a name given by the heathens to the first day of the week, because it was the day on which they worshipped the sun.&nbsp;... The seventh day was blessed and hallowed by God himself, and&nbsp;... he requires His creatures to keep it holy to Him. This commandment is of universal and perpetual obligation.&rdquo;<strong>Eadie's Biblical Cyclopedia, 1890 ed., p. 561.</strong></Text>
//                         <Text><strong>Conclusion</strong></Text>
//                         <Text>Taking the Bible as the Norma Normans non Normata or the first prince, and not just as a point of reference but the reference of all points, its crystal clear that the entire world leadership will come together and be of one mind and one purpose. What will neccesitate this new world order or one world will be the calamities that will be befalling the world: ruin of the environment, nuclear threat, collapsing economies, famine, pandemics and endemics, crime, and overpopulation. Just as the post flood humanity came together and they were galvanized by the calamity of the flood. They sort to build a tower&mdash;which they called a gate to heaven&mdash;but unfortunately God was not part of the project and it became the tower of Babel and ended in confusion. The same project will be resuscitated in these the last days and history will repeat itself. The Bible warns that this Babylon project will fall again. They will be trying to save the planet but without the Saviour of the planet.</Text>
//                         <Text>In this New Order the Beast (Papacy) will be on top of the pyramid. The world leaders will be like a football team, with different individuals but with one purpose. They may appear to be fighting, but they will be two sides of the same coin. When this happens the world will revert back to the Dark Ages. That sad history will repeat itself. History must not sink, but teach. The religious system will use the authority of the state to fulfil its objectives. This will culminate in the enforcement of a human Sabbath (666), as opposed to the divine Sabbath (777). The Papacy will legislate Sunday worship, as opposed to Sabbath worship. America in this new system will become the globocop (policeperson of the world). Those who will not comply to this global system will be put under harsh economic sanctions and the ultimate penalty will be a death decree.</Text>
//                         <Text>In this system the Word of God has made it clear that The Papacy (Antichrist) will not be fighting against Christ but will attempt to take the place of Christ or substitute Christ. The Papacy will not be a violent opposer of Christ but a subtle betrayer&mdash;just like Judas who did not violently oppose Christ but betrayed Him with a kiss. The antichrist is a deceptive power. When the crisis reaches its climax the bottom line will be: Who will you worship? There is much more religion than what meets the eye in the New World Order. The three frog-like forces of evil will gather its people on Armageddon, while on the other side the threefold angelic messages will gather God&rsquo;s people on Mount Zion. Battle lines will be drawn. This will be the final battle in the conflict of the ages&mdash;the Great controversy. It will be final desisive encounter, the Waterloo of sin. There will only be two sides&mdash;no dilly dallying, no shilly shallying, no, no man&rsquo;s land, no middle course. If you are not on God&rsquo;s side, you will be on the other side: &ldquo;All people living on earth will worship it, except those whose names were written before the creation of the world in the book of the living which belongs to the Lamb that was killed&rdquo; (Revelations 13:8). There will be the great deception, and the great exception to the great deception. Pray that you may be part of the Great exception and not the Great deception. In this final encounter it will be proved that right is might. The Papacy&rsquo;s assertion that might is right will tumble down the Jericho stlye.</Text>


//                     </View>
//                 </View>
//             </ScrollView>
//         </React.Fragment>
//     );
// }

