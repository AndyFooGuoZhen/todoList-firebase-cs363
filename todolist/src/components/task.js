import { Input , IconButton, HStack, VStack, Text} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaTrash, FaEdit, FaPlus} from "react-icons/fa";
import { db } from './firebaseConfig';
import { collection, deleteDoc, doc, getDocs, setDoc , addDoc, updateDoc} from "firebase/firestore";

function Task({taskList, setTaskList, taskCollectionRef, getData}) {

    async function deleteTask(id){
        const newTasks = taskList.filter((task)=>{
            return task.id !== id;
        })
        setTaskList(newTasks);
        
        const taskDoc = doc(db,"tasks", id);
        await deleteDoc(taskDoc);
        
    }

   
    async function updateTask(id, taskName){
    
        let indexToReplace = taskList.findIndex(task => task.id === id);
        let newUpdateArray = [...taskList];
        newUpdateArray[indexToReplace]= {id,taskName};
        setTaskList(newUpdateArray);

        const taskDoc = doc(db,"tasks", id);
        await updateDoc(taskDoc, {taskName});
    }
   

  return (
    <> 
    {taskList.map((taskList)=>(<HStack w="100%" key={taskList.id}>
        <Input  borderRadius={"50"} padding="2rem" value={taskList.taskName} display="inline"
         backdropBlur={"10px"} backgroundColor="rgba(255,255,255,0.06)" onChange={(event)=>{updateTask(taskList.id, event.target.value)}}/>
        <IconButton icon={<FaTrash/>} onClick={()=>deleteTask(taskList.id)}></IconButton>
    </HStack>
    ))}
    
     </>

  )
}

export default Task