import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState,useEffect } from 'react';
import AddItem from './AddItem';
import ItemSearch from './ItemSearch';
import apiRequest from './apiRequest';



function App() {
  
  const API_URL ='http://localhost:3500/items';
  
  const [items,setItems] = useState  ([]);
  const [newItem , setNewItem] = useState('')
  const [fetchError , setFetchError] = useState(null);
  const [isLoading,setIsLoading] = useState(true)

  useEffect(() =>{

    const fetchItems = async () =>{
      try {
        const response = await fetch(API_URL);
        if(!response.ok)throw Error("Data Not Received");
        const listItems = await response.json();
        setItems(listItems)
        setFetchError()

      } catch (error) {
         setFetchError(error.message);
        // console.log(error.stack);
        }   
        finally{
          setIsLoading(false);
        }
    }

    setTimeout(() =>{
      (async () => await fetchItems()) ()
    },2000)  
  },[]);

   

  // add............


  const addItem = async (item) => {
    const id = items.length ? items[items.length -1 ].id+1 : 1;
    // const id = items.length ? items[items.length  ]: 1;
    const addNewItem = {id, checked:false,item}
    const ListItems = [...items,addNewItem]
    setItems(ListItems)
    // localStorage.setItem("todo_list",JSON.stringify(ListItems))

    const postOption = {
      method: "POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(addNewItem)
    }
    const result = await apiRequest(API_URL, postOption )
    if(result) setFetchError(result)
  }



    // update................

  const handleCheckBox = async (id) => {
      const listItems = items.map((item) =>
       item.id===id ? {...item, checked:!item.checked} : item)
       setItems(listItems) 
      // localStorage.setItem("todo_list",JSON.stringify(listItems))


      const myItem = listItems.filter((item) => item.id === id)

      const updateOption = {
        method: "PATCH",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({checked:myItem[0]})
      }

      const reqUrl = `${API_URL}/${id}`
      const result = await apiRequest(reqUrl, updateOption )
      if(result) setFetchError(result)
      


  }


  // delete..................

  
  const handleDelete = async (id) =>{
      const listItems = items.filter((item) => item.id!==id)
      setItems(listItems)
      // localStorage.setItem("todo_list",JSON.stringify(listItems))

      const deleteOption = {
        method: 'DELETE'
      }

      const reqUrl = `${API_URL}/${id}`
      const result = await apiRequest(reqUrl,deleteOption)
      if(result) setFetchError(result)

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!newItem)return console.log("hi");;
    addItem(newItem)
    console.log(newItem);
    // setNewItem('  ')
  }

  const [search, setSearch] = useState("")





  return (
   <div>
      <Header /> 

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <ItemSearch
        search={search}
        setSearch={setSearch}
      />    
      <main>
      {isLoading && <p>Item's Loading...</p>}
      {fetchError && <p>{`Error: ${fetchError}`}</p>}
      {!isLoading && !fetchError && <Content 
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheckBox={handleCheckBox}
        handleDelete={handleDelete}
      />}
      </main>
      <Footer 
        leng={items.length}
      />
   </div>
  );
}

export default App;
