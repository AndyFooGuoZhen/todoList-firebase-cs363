import { Box, HStack, Input, VStack , Text, Heading, IconButton} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { FaTrash, FaEdit, FaPlus} from "react-icons/fa";
import { useState } from "react";
import Task from './task';
import { db } from './firebaseConfig';
import { collection, deleteDoc, doc, getDocs, setDoc , addDoc} from "firebase/firestore";




function Todolist() {

  const [taskList, setTaskList] = useState([]);
  const [currentTask, setCurrentTask] = useState("");
  const taskCollectionRef = collection(db, "tasks");

    useEffect(()=>{
        const getTasks = async()=>{
            const data = await getDocs(taskCollectionRef);
            setTaskList(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
        }
        getTasks();
    },[])

    async function getData(){
      const data = await getDocs(taskCollectionRef);
      setTaskList(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
      console.log("hello");
  }

    async function addTask(taskName){
      await addDoc(taskCollectionRef, {taskName});
    }   


  return (
    <Box h={"100vh"}  maxW={"100%"}   justifyContent={"center"}>
       <Heading
        fontWeight="extrabold"
        size={"2xl"}
        bgGradient="linear(to-r,pink.500, pink.300 )"
        bgClip={"text"}
        mb={[0, "3rem !important"]}
        align="center"
        mt={"2rem"}
      >
        Todo List
      </Heading>
        <Box display={"flex"} justifyContent="center" mt="2rem" >
        <VStack w={"60%"}>
          <HStack w="100%">
          <Input borderRadius={"50"} padding="2rem" display="inline" onChange={(event)=>{setCurrentTask(event.target.value)}}/>
          <IconButton icon={<FaPlus/>} onClick={()=>addTask(currentTask)}></IconButton> 
          </HStack>
          <VStack  w="100%"  mt={[0, "3rem !important"]}>
            <Task taskList={taskList} setTaskList={setTaskList} taskCollectionRef= {taskCollectionRef} getData= {getData} />
          </VStack>
        </VStack>
        </Box>
    </Box>
  )
}

export default Todolist