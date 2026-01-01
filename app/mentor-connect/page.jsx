import Navbar from "@/components/Navbar";

export default function MentorConnect(){
  return(
    <>
      <Navbar/>
      <div style={{padding:"40px"}}>
        <h1>Mentor Connect (Optional Paid) 💡</h1>
        <p>100₹ / session | Resume review | Interview prep</p><br/>

        <form style={{display:"flex", flexDirection:"column", gap:"10px", maxWidth:"300px"}}>
          <input placeholder="Name"/>
          <input placeholder="Email"/>
          <button style={{padding:"10px", background:"black", color:"white"}}>
            Submit Request →
          </button>
        </form>
      </div>
    </>
  );
}
