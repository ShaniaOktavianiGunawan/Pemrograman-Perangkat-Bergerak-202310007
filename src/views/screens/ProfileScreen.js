import React, { useState } from 'react'
import { SafeAreaView, ScrollView, View , StyleSheet, Image, Text} from "react-native";
import Avatar from "../../assets/Naruto.png";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function ProfileScreen() {
    const firstName = "Shania";
    const middleName = "Oktaviani";
    let lastName = "Gunawan";
    
    var degree = ' S.Kom';
    lastName = lastName + degree;
    
    const fullname= firstName + ' ' + middleName + ' '  + lastName;
    
    const studentid = 202310007;
    const gender = "F";
    const jurusan = "S1 Teknologi Informasi";
    
    var semester = 4;
    let gpa = 3.6;
    
    var educations = [
        {level: "IBI", school:"Kesatuan", kota:"Bogor"},
        ];
    
    const objectProfile = {
        studentid     : studentid,
        fullname      : fullname,
        gender        : gender,
        semester      : semester,
        gpa           : gpa,
        jurusan       : jurusan,
        educations    : educations
    };
    
    let genderName = '-';
        if(objectProfile.gender == 'M'){
        genderName = 'Male';
        }else if(objectProfile.gender == 'F'){
        genderName = 'Female';
        }else{
        genderName = 'Unknow';
        }
    
    /*USE HOOK*/
    const [objProfile, setObjProfile] = useState(objectProfile);
        
    const handlerSemester = (value)=>{
    setObjProfile({...objProfile, semester:value});
    }
    /*END USE HOOK*/

    return(
        <SafeAreaView>
            <ScrollView>
                <View style={styles.box1}>
                    <View style={styles.userInfoSection}>
                        <View style={styles.head}>
                            <Image source={Avatar} style={{ 
                                height: 100, 
                                width: 100, 
                                borderRadius: 50, 
                                borderColor: "#152529", 
                                borderWidth: 2}} 
                            />
            
                            <View>
                                <Text style={styles.title}>{objProfile.fullname}</Text>
                                <Text style={styles.caption}>{objProfile.studentid}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.userInfoSection}>
                        <View style={styles.row}>
                            <Icon name="map" color="#fff" size={20}/>
                            <Text style={{color:"#fff", marginLeft: 20}}>{objectProfile.educations.map((v,index)=>(
                                                <Text key={index} > 
                                                    {v.level} {v.school} {v.kota}
                                                </Text>
                                            ))}
                            </Text>
                        </View>

                        <View style={styles.row}>
                            <Icon name="gender-male-female" color="#fff" size={20}/>
                            <Text style={{color:"#fff", marginLeft: 20}}>{( objectProfile.gender == 'M' ) ? 'Pria':'Wanita' }</Text>
                        </View>

                        <View style={styles.row}>
                            <Icon name="book" color="#fff" size={20}/>
                            <Text style={{color:"#fff", marginLeft: 20}}>{objProfile.jurusan}</Text>
                        </View>

                        <View style={styles.row}>
                            <Icon name="chart-donut" color="#fff" size={20}/>
                            <Text style={{color:"#fff", marginLeft: 20}}>Semester {objectProfile.semester}</Text>
                        </View>

                        <View style={styles.row}>
                        <Icon name="star" color="#fff" size={20}/>
                            <Text style={{color:"#fff", marginLeft: 20}}>GPA {objectProfile.gpa}</Text>
                        </View>

                        <View style={styles.row}>
                            <Icon name="phone" color="#fff" size={20}/>
                            <Text style={{color:"#fff", marginLeft: 20}}>+62 859-2145-2921</Text>
                        </View>
                        
                        <View style={styles.row}>
                            <Icon name="email" color="#fff" size={20}/>
                            <Text style={{color:"#fff", marginLeft: 20}}>202310007@student.ibik.ac.id</Text>
                        </View>
                    </View>


                    <View style={styles.infoBoxWrapper}>
                        <View style={styles.infoBox}>
                            <Text style={{fontSize: 16, color: "#152529", fontWeight:"bold", marginBottom: 5}}>Credit Now</Text>
                            <Text style={{color: "#152529"}}>84</Text>
                        </View>
                        <View style={styles.infoBox}>
                            <Text style={{fontSize: 16, color: "#152529", fontWeight:"bold", marginBottom: 5}}>Total Credits</Text>
                            <Text style={{color: "#152529"}}>144</Text>
                        </View>
                    </View>


                    <View>
                        <Text style={{
                            fontSize: 22, 
                            fontWeight: "bold", 
                            paddingTop: 20, 
                            textAlign: "center", 
                            color: "#fff",
                            paddingBottom: 20
                            }}>My Tasks
                        </Text>

                        <View style={styles.task}>
                            <View>
                                <Icon name="clipboard-list-outline" color="#152529" size={40} style={styles.icons}/>
                            </View>
                            <View>
                                <Text style={{fontSize: 18, fontWeight: "bold", color: "#fff"}}>To Do</Text>
                                <Text style={{color: "#fff"}}>5 tasks now. 1 started</Text>
                            </View>
                        </View>
                        <View style={styles.task}>
                            <View>
                                <Icon name="progress-clock" color="#152529" size={40} style={styles.icons}/>
                            </View>
                            <View>
                                <Text style={{fontSize: 18, fontWeight: "bold", color: "#fff"}}>Progress</Text>
                                <Text style={{color: "#fff"}}>1 task now. 1 started</Text>
                            </View>
                        </View>
                        <View style={styles.task}>
                            <View>
                                <Icon name="check-circle-outline" color="#152529" size={40} style={styles.icons}/>
                            </View>
                            <View>
                                <Text style={{fontSize: 18, fontWeight: "bold", color: "#fff"}}>Done</Text>
                                <Text style={{color: "#fff"}}>18 tasks now. 13 started</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.box2}>
                        <Text style={{
                            fontSize: 22, 
                            fontWeight: "bold", 
                            paddingTop: 30, 
                            textAlign: "center",
                            paddingBottom: 20
                            }}>Achievement
                        </Text>
                        
                        <ScrollView 
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            >
                            <View style={styles.card}>
                                <View style={styles.outerbar}>
                                    <View style={{height: 20,
                                                    width: '60%',
                                                    borderRadius: 20,
                                                    backgroundColor: "white",
                                                    position: 'absolute'}}
                                                />
                                    <Text style={{position: "absolute", marginLeft: 10, fontWeight:'bold'}}>60%</Text>
                                </View>
                                <Text style={styles.namamatkul}>Certificate</Text>
                                <Text style={styles.progressmatkul}>12 Done, 8 On Progress</Text>
                            </View>
                      
                            <View style={styles.card}>
                                <View style={styles.outerbar}>
                                    <View style={{height: 20,
                                                    width: '50%',
                                                    borderRadius: 20,
                                                    backgroundColor: "white",
                                                    position: 'absolute'}}
                                                />
                                    <Text style={{position: "absolute", marginLeft: 10, fontWeight:'bold'}}>50%</Text>
                                </View>
                                <Text style={styles.namamatkul}>Organization</Text>
                                <Text style={styles.progressmatkul}>24 Done, 24 On Progress</Text>
                            </View>

                            <View style={styles.card}>
                                <View style={styles.outerbar}>
                                    <View style={{height: 20,
                                                    width: '80%',
                                                    borderRadius: 20,
                                                    backgroundColor: "white",
                                                    position: 'absolute'}}
                                                />
                                    <Text style={{position: "absolute", marginLeft: 10, fontWeight:'bold'}}>80%</Text>
                                </View>
                                <Text style={styles.namamatkul}>Basic Committe</Text>
                                <Text style={styles.progressmatkul}>80 Done, 20 On Progress</Text>
                            </View>

                            <View style={styles.card}>
                                <View style={styles.outerbar}>
                                    <View style={{height: 20,
                                                    width: '60%',
                                                    borderRadius: 20,
                                                    backgroundColor: "white",
                                                    position: 'absolute'}}
                                                />
                                    <Text style={{position: "absolute", marginLeft: 10, fontWeight:'bold'}}>60%</Text>
                                </View>
                                <Text style={styles.namamatkul}>Competition</Text>
                                <Text style={styles.progressmatkul}>12 Done, 8 On Progress</Text>
                            </View>
                      
                            <View style={styles.card}>
                                <View style={styles.outerbar}>
                                    <View style={{height: 20,
                                                    width: '50%',
                                                    borderRadius: 20,
                                                    backgroundColor: "white",
                                                    position: 'absolute'}}
                                                />
                                    <Text style={{position: "absolute", marginLeft: 10, fontWeight:'bold'}}>50%</Text>
                                </View>
                                <Text style={styles.namamatkul}>Apprenticeship</Text>
                                <Text style={styles.progressmatkul}>24 Done, 24 On Progress</Text>
                            </View>

                            <View style={styles.card}>
                                <View style={styles.outerbar}>
                                    <View style={{height: 20,
                                                    width: '80%',
                                                    borderRadius: 20,
                                                    backgroundColor: "white",
                                                    position: 'absolute'}}
                                                />
                                    <Text style={{position: "absolute", marginLeft: 10, fontWeight:'bold'}}>80%</Text>
                                </View>
                                <Text style={styles.namamatkul}>CSP</Text>
                                <Text style={styles.progressmatkul}>80 Done, 20 On Progress</Text>
                            </View>
                        </ScrollView>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

export default ProfileScreen;


const styles = StyleSheet.create({
    box1: {
        flex: 1, 
        backgroundColor : "#152529",  
        borderTopRightRadius: 80,
        borderTopLeftRadius: 80,
        paddingTop: 10
    },
    box2: {
        flex: 1, 
        backgroundColor : "#fff",  
        borderTopLeftRadius: 80,
        marginTop: 20,
        paddingBottom: 20
    },
    userInfoSection: {
        paddingHorizontal: 30,
        paddingBottom: 25,
        paddingTop: 10,
    },
    head: {
        alignItems:"center",
        marginTop: 15,
        justifyContent:'flex-start'
    },
    title: {
        fontSize: 20,
        color: "#fff",
        fontWeight: 'bold',
        marginTop:20,
        marginBottom: 5,
    },
    caption: {
        color: "#fff",
        textAlign: "center",
        fontSize: 16,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        flexDirection: 'row',
        height: 80,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#152529',
        borderWidth: 6,
        backgroundColor:'white',
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    task: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    icons: {
        backgroundColor:"white", 
        borderRadius: 25, 
        padding: 5, 
        marginRight: 20, 
        marginLeft: 20
    },
    card : {
        width: '40%',
        backgroundColor: '#152529',
        marginLeft: 10,
        height:150,
        width:200,
        elevation:2,
        borderTopLeftRadius: 25,
        borderBottomRightRadius: 25,
        paddingHorizontal: 20,
    },
    outerbar: {
        height: 20,
        backgroundColor: "grey",
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 40,
    },
    namamatkul: {
        paddingTop: 20, 
        color: "white", 
        fontWeight: 'bold', 
        fontSize: 18
    },
    progressmatkul : {
        paddingTop: 10, 
        color: "white", 
        fontSize: 12,
        opacity: 0.5,
    }
});