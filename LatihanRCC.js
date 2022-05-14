import React, { Component } from "react";
import { SafeAreaView, Text, View } from "react-native";

class LatihanRCC extends Component {
  // Inisialisasi Variable dan Function
  constructor(props) {
    super(props);
    this.TextTitle = this.TextTitle.bind(this);

    this.state = {
      hari: "Sabtu",
      Kelas: "Reguler TI-20 PA",
    };
    this.StudentData1 = this.StudentData1.bind(this);
    this.StudentData2 = this.StudentData2.bind(this);
  }

  // FUnction Bernama TextTitle
  TextTitle(param) {
    return <Text>{param.data}</Text>;
  }

  StudentData1(param1) {
    return (
      <View>
        <Text>Student ID : {param1.id}</Text>
        <Text>Student Name : {param1.name}</Text>
      </View>
    );
  }

  StudentData2(id, name) {
    return (
      <View>
        <Text>Student ID : {id}</Text>
        <Text>Student Name :{name}</Text>
      </View>
    );
  }

  render() {
    const TrimSchedule = () => {
      let waktu = "07.30.-10.00";
      return (
        <View>
          <Text>Hari :{this.state.hari}</Text>
          <Text>Waktu: {waktu}</Text>
          <Text>Kelas : {this.state.Kelas} </Text>
        </View>
      );
    };
    return (
      <SafeAreaView>
        <Text>LatihanRCC</Text>
        {/* Memanggil function TextTitle */}
        {this.TextTitle({ data: " Pemograman Perangkat Bergerak " })}
        {TrimSchedule()}
        {this.StudentData1({ id: 202310007, name: "Shania Oktaviani " })}
        {this.StudentData2(20230023, "Raiyana ")}
      </SafeAreaView>
    );
  }
}

export default LatihanRCC;
