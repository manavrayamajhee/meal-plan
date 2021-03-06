import React,{ useState } from 'react';
import { ListItem, Avatar,Icon,LinearProgress  } from 'react-native-elements'
import { Button } from 'react-native-elements';
import {ActivityIndicator,View,Linking} from "react-native";
import NutritionCard from './NutritionCard';
export default function ListMeals({route,navigation}){
    const {mealplan,value} = route.params;
    const [isLoading,setIsloading] = useState(false);
    var today = new Date();
      var day = today.getDay();
      var daylist = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
      var tday = daylist[day];
      const [mealplan_now,setIsMealplan_now] = useState(mealplan.week[tday]);
    const [mealexpanded,setMealexpanded] = useState(true);
    const [workoutexpanded,setWorkoutexpanded] = useState(false);
    return(
        <View>
        {isLoading && <LinearProgress color={"#0000ff"}/>}
    <ListItem.Accordion
  content={
    <>
      <ListItem.Content>
        <ListItem.Title>Meal-plan for {tday} is...</ListItem.Title>
      </ListItem.Content>
    </>
  }
  isExpanded={mealexpanded}
  onPress={() => {
    setMealexpanded(!mealexpanded);
    setWorkoutexpanded(false);
  }}
>
  {mealplan_now.meals.map((item) => (
    <ListItem key={item.id}  bottomDivider>
      <ListItem.Content>
        <ListItem.Title style={{color: 'blue'}} onPress={() => Linking.openURL(item.sourceUrl)}>{item.title}</ListItem.Title>
        <ListItem.Subtitle>Cooking Time: {item.readyInMinutes} minutes</ListItem.Subtitle>
        <ListItem.Subtitle>Amount of Servings: {item.servings} servings</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  ))}
  <NutritionCard data={mealplan_now.nutrients}/>
  <Button raised buttonStyle={{borderRadius: 8,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#0000ff',
  margin: 5}}
    title="Reset Meals"
    onPress={ ()=>{
      setIsloading(true);
        fetch(`https://api.spoonacular.com/mealplanner/generate?timeFrame=week&apiKey=0e5f3b97a15746b4b5d2b2d5ac294240&targetCalories=${value}`)
        .then((response) => response.json())
        .then((json) => {
          setIsloading(false);
        setIsMealplan_now(json.week[tday]);
        })
        .catch((error) => console.error(error));
    }}
  />
</ListItem.Accordion>

<ListItem.Accordion
  content={
    <>
      <ListItem.Content>
        <ListItem.Title>Workout</ListItem.Title>
      </ListItem.Content>
    </>
  }
  isExpanded={workoutexpanded}
  onPress={() => {
    setWorkoutexpanded(!workoutexpanded);
    setMealexpanded(false);
  }}
>
    <ListItem key={1}  bottomDivider>
      <ListItem.Content>
        <ListItem.Title style={{color: 'blue'}} onPress={()=>{
          setIsloading(true);
                fetch(`https://wger.de/api/v2/exercise/?language=2&limit=200&muscles=1,5,13`)
                .then((response) => response.json())
                .then((json) => {
                  setIsloading(false);
                navigation.navigate('Workout',{title: 'Arms', workout:json});
                })
                .catch((error) => console.error(error));
            }}>Arms</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
    <ListItem key={2}  bottomDivider>
      <ListItem.Content>
        <ListItem.Title style={{color: 'blue'}} onPress={()=>{
          setIsloading(true);
                fetch(`https://wger.de/api/v2/exercise/?language=2&limit=200&muscles=7,8,10,11,15`)
                .then((response) => response.json())
                .then((json) => {
                  setIsloading(false);
                navigation.navigate('Workout',{title: 'Legs', workout:json});
                })
                .catch((error) => console.error(error));
            }}>Legs</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
    <ListItem key={3}  bottomDivider>
      <ListItem.Content>
        <ListItem.Title style={{color: 'blue'}} onPress={()=>{
                setIsloading(true);
                fetch(`https://wger.de/api/v2/exercise/?language=2&limit=200&muscles=4`)
                .then((response) => response.json())
                .then((json) => {
                setIsloading(false);
                navigation.navigate('Workout',{title: 'Chest', workout:json});
                })
                .catch((error) => console.error(error));
            }}>Chest</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
    <ListItem key={4}  bottomDivider>
      <ListItem.Content>
        <ListItem.Title style={{color: 'blue'}} onPress={()=>{
          setIsloading(true);
                fetch(`https://wger.de/api/v2/exercise/?language=2&limit=200&muscles=12`)
                .then((response) => response.json())
                .then((json) => {
                  setIsloading(false);
                navigation.navigate('Workout',{title: 'Back', workout:json});
                })
                .catch((error) => console.error(error));
            }}>Back</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
    <ListItem key={5}  bottomDivider>
      <ListItem.Content>
        <ListItem.Title style={{color: 'blue'}} onPress={()=>{
                setIsloading(true);
                fetch(`https://wger.de/api/v2/exercise/?language=2&limit=200&muscles=2,9`)
                .then((response) => response.json())
                .then((json) => {
                  setIsloading(false);
                navigation.navigate('Workout',{title: 'Shoulder', workout:json});
                })
                .catch((error) => console.error(error));
            }}>Shoulder</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
    <ListItem key={6}  bottomDivider>
      <ListItem.Content>
        <ListItem.Title style={{color: 'blue'}} onPress={()=>{
                setIsloading(true);
                fetch(`https://wger.de/api/v2/exercise/?language=2&limit=200&muscles=2,4,5,9`)
                .then((response) => response.json())
                .then((json) => {
                  setIsloading(false);
                navigation.navigate('Workout',{title: 'Tri/Chest/Shoulder', workout:json});
                })
                .catch((error) => console.error(error));
            }}>Tri/Chest/Shoulder</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
    <ListItem key={7}  bottomDivider>
      <ListItem.Content>
        <ListItem.Title style={{color: 'blue'}} onPress={()=>{
          setIsloading(true);
                fetch(`https://wger.de/api/v2/exercise/?language=2&limit=200&muscles=1,12,13`)
                .then((response) => response.json())
                .then((json) => {
                  setIsloading(false);
                navigation.navigate('Workout',{title: 'Back/Bi', workout:json});
                })
                .catch((error) => console.error(error));
            }}>Back/Bi</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
</ListItem.Accordion>
</View>
);
}
