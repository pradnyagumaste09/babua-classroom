import Navbar from "@/components/Navbar";
import {courses} from "@/data/courses";

export default function CoursePage({params}){
  const course = courses.find(c => c.slug === params.slug);

  return(
    <>
      <Navbar/>
      <div style={{padding:"40px"}}>
        <h1 style={{fontSize:"35px"}}>{course.title}</h1>
        <p>{course.desc}</p>

        <h3 style={{marginTop:"20px"}}>Topics:</h3>
        <ul>
          {course.topics.map((t,i)=> <li key={i}>{t}</li>)}
        </ul>

        <div style={{
          marginTop:"20px", padding:"10px", border:"1px solid black",
          background:"#fff7c4"
        }}>
          <strong>NOTE:</strong> Everything is free, Babua-style.
        </div>
      </div>
    </>
  );
}
