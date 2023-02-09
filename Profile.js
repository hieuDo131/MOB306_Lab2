import {
  Button,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Pressable,
  Image,
} from 'react-native'
import { useState } from 'react'

export default function App(props) {
  const route = props.route

  const data = [
    {
      id: 1,
      name: 'Đỗ Xuân Hiếu',
      price: '20',
      sdt: '0973967774',
      email: 'hieudxph21411@fpt.edu.vn',
      diachi: 'Chương Mỹ, Hà Nội',
    },
  ]
  const [ProductList, setproductlist] = useState(data)
  const [isShowAdd, setShowAdd] = useState(false)
  const [namevalue, setnamevalue] = useState('')
  const [editId, setEditId] = useState(0)
  const [pricevalue, setpricevalue] = useState(0)
  const [emailvalue, setemailvalue] = useState('')
  const [sdtvalue, setsdtvalue] = useState('')
  const [diachivalue, setdiachivalue] = useState('')

  const handleClose = () => {
    setnamevalue(''),
      setpricevalue(0),
      setemailvalue(''),
      setdiachivalue(''),
      setsdtvalue('')
    setEditId(0)
    setShowAdd(false)
  }

  const handleAdd = () => {
    // neu co edit id thi la dang sua va can cap nhat phan tu
    if (editId) {
      const newEditproductlist = [...ProductList]
      for (let i = 0; i < newEditproductlist.length; i++) {
        if (newEditproductlist[i].id == editId) {
          newEditproductlist[i].name = namevalue
          newEditproductlist[i].price = pricevalue
          newEditproductlist[i].diachi = diachivalue
          newEditproductlist[i].sdt = sdtvalue
          newEditproductlist[i].email = emailvalue
        }
      }
      setproductlist(newEditproductlist)
      return handleClose()
    }

    // khi bam luu se goi ham nay

    const newItem = {
      id:
        ProductList.length == 0
          ? 1
          : ProductList[ProductList.length - 1].id + 1,
      name: namevalue,
      price: pricevalue,
      diachi: diachivalue,
      sdt: sdtvalue,
      email: emailvalue,
    }
    // them phan tu moi vao mang sau do cap nhat lai danh sach
    // ... se lay ra toan bo phan tu cua mang sau do ghep voi phan tu moi
    const newproductlist = [...ProductList, newItem]
    //3 cap nhat danh sach moi de hien thi
    setproductlist(newproductlist)
    //b4 cap nhap input ve gia tri mac dinh va dong modul
    setnamevalue('')
    setpricevalue(0)
    setShowAdd(false)
    return handleClose()
  }

  const handDelete = (deleteid) => {
    const newproductlist = ProductList.filter((item) => item.id !== deleteid)
    setproductlist(newproductlist)
  }

  // ham sua se chay khi bam nut sua o o phan tu
  const handleEdit = (editId) => {
    //1 hien thi modal len
    setShowAdd(true)
    //2. truyen gia tri can sua vao text input
    const editItem = ProductList.find((item) => item.id == editId)
    setnamevalue(editItem.name)
    setpricevalue(editItem.price)
    setEditId(editItem.id)
    setsdtvalue(editItem.sdt)
    setemailvalue(editItem.email)
    setdiachivalue(editItem.diachi)
  }

  return (
    <View style={styles.container}>
      <Image 
      // source={require('./assets./avt') } 
      style={{ 
      width: 200,
      height: 200,
      borderRadius: 200 / 2
}}/>

      <Modal visible={isShowAdd} animationType="slider">
        <View>
          <TextInput
            placeholder="Tên: "
            value={namevalue}
            onChangeText={(text) => setnamevalue(text)}
          ></TextInput>
          <TextInput
            placeholder="Tuổi: "
            keyboardType="numeric"
            value={pricevalue}
            onChangeText={(text) => setpricevalue(text)}
          ></TextInput>
          <TextInput
            placeholder="Địa chỉ: "
            value={diachivalue}
            onChangeText={(text) => setdiachivalue(text)}
          ></TextInput>
          <TextInput
            placeholder="SĐT:"
            value={sdtvalue}
            onChangeText={(text) => setsdtvalue(text)}
          ></TextInput>
          <TextInput
            placeholder="Email: "
            value={emailvalue}
            onChangeText={(text) => setemailvalue(text)}
          ></TextInput>
          <View style={styles.subContainer}>
            <Button title="Hủy" onPress={() => handleClose(false)} />
            <Button title="Lưu" onPress={() => handleAdd()} />
          </View>
        </View>
      </Modal>
      {/* <ProductList></ProductList> */}
      <FlatList
        data={ProductList}
        renderItem={({ item }) => (
          <View>
            <Pressable onPress={() => handleEdit(item.id)}>
              <Text>📝</Text>
            </Pressable>

            <Text>ID: {item.id}</Text>
            <Text>Tên: {item.name}</Text>
            <Text>Tuổi: {item.price}</Text>
            <Text>Địa chỉ: {item.diachi}</Text>
            <Text>SĐT: {item.sdt}</Text>
            <Text>Email: {item.email}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    // flex: none,
    // backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'green',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 18,
  },
  input: {
    borderWidth: 0.6,
    margin: 5,
    height: 25,
    width: 300,
  },
})

// import { StatusBar } from 'expo-status-bar'
// import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native'
// import { useState } from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'

// export default function App(props) {
//   const route = props.route

// //   const Stack = createNativeStackNavigator()

//   return (
//     <View style={styles.container}>
//       <Image style={styles.image} />
//       <View style={styles.subContainer}>
//         <Text>Tên: </Text>
//         <Text>Tuổi: </Text>
//         <Text>Địa chỉ: </Text>
//         <Text>SĐT: </Text>
//         <Text>EMail: </Text>

//         <Button title="Sửa" />
//       </View>

//       keyExtractor={(item) => item.id}
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },

//   subContainer: {},
//   text: {
//     color: 'red',
//     fontStyle: 'italic',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   image: {
//     width: 200,
//     height: 200,
//   },
// })
