import React from 'react'
import { Text, List, FlatList, ListItem } from 'react-native'
// import Audi
const list = [{name: "Test"}, {name: "Test1"}]

// function Item({ name }) {
// return (
//     <ListItem>{name}</ListItem>
// );
// }


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={({ item }) => <Item title={item.title} />}
//         keyExtractor={item => item.id}
//       />
//     </SafeAreaView>
//   );
// }

// const SummaryList = (props) => {
//     return (
//         // <List>
//             <FlatList
//                 data={list}
//                 renderItem={({ item }) => (<ListItem title={item.name} key={item.name}/>)}
//                 keyExtractor={item => item.name}
//             />
//         // </List>
//     )
// }

// export default SummaryList;