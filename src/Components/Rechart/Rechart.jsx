import { LineChart, Line, XAxis, YAxis } from 'recharts';


const Rechart = () => {
    const studentData = [
        { id: 1, name: "Alice", mathMarks: 85, physicsMarks: 78, chemistryMarks: 90 },
        { id: 2, name: "Bob", mathMarks: 75, physicsMarks: 70, chemistryMarks: 85 },
        { id: 3, name: "Charlie", mathMarks: 90, physicsMarks: 88, chemistryMarks: 92 },
        { id: 4, name: "David", mathMarks: 80, physicsMarks: 82, chemistryMarks: 78 },
        { id: 5, name: "Emma", mathMarks: 95, physicsMarks: 90, chemistryMarks: 95 },
        { id: 6, name: "Frank", mathMarks: 70, physicsMarks: 65, chemistryMarks: 72 },
        { id: 7, name: "Grace", mathMarks: 88, physicsMarks: 85, chemistryMarks: 90 },
        { id: 8, name: "Henry", mathMarks: 82, physicsMarks: 78, chemistryMarks: 85 },
        { id: 9, name: "Isabel", mathMarks: 92, physicsMarks: 88, chemistryMarks: 92 },
        { id: 10, name: "Jack", mathMarks: 78, physicsMarks: 72, chemistryMarks: 80 }
      ];
      
    return (
        <div>
            <h3 className="text-3xl text text-center bg-slate-400">use rechart</h3>
           <div>
            
           <LineChart width={900} height={400} data={studentData}>
           <XAxis dataKey="name" ></XAxis>
           <YAxis></YAxis>
            <Line type="monotone" dataKey="mathMarks" stroke="#8884d8"></Line> 
            <Line type="monotone" dataKey="physicsMarks" stroke="#8884d8"></Line> 
            <Line type="monotone" dataKey="chemistryMarks" stroke="#8884d8"></Line> 
  </LineChart>
           </div>
           
        </div>
    );
};

export default Rechart;