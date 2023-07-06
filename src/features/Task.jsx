function Task({task, deleteTask}){
    return(
            <div style={{display:"flex", gap: 3, justifyContent:"center", alignItems:"center"}}>
            <h1>{task}</h1>
            <button onClick={deleteTask} style={{background:"transparent", width:50, height:30}}>Delete</button>
        </div>
    );
}
export default Task;
